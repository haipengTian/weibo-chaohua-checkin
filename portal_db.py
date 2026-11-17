"""SQLite 是平台唯一的数据源。每次操作使用独立连接与显式事务。"""

import calendar
import contextlib
import datetime as dt
import json
import os
import re
import secrets
import shutil
import sqlite3
import time
import uuid
from pathlib import Path

from portal_security import hash_password, token_digest

SCHEMA = """
CREATE TABLE IF NOT EXISTS users (
 id TEXT PRIMARY KEY, username TEXT NOT NULL, name_key TEXT NOT NULL UNIQUE,
 password_hash TEXT NOT NULL, role TEXT NOT NULL CHECK(role IN ('admin','user')),
 created_at REAL NOT NULL);
CREATE TABLE IF NOT EXISTS sessions (
 token_hash TEXT PRIMARY KEY, user_id TEXT NOT NULL REFERENCES users(id), expires_at REAL NOT NULL);
CREATE TABLE IF NOT EXISTS plans (
 owner_id TEXT PRIMARY KEY REFERENCES users(id), enabled INTEGER NOT NULL DEFAULT 0,
 time TEXT NOT NULL DEFAULT '09:00', updated_at REAL NOT NULL);
CREATE TABLE IF NOT EXISTS accounts (
 id TEXT PRIMARY KEY, owner_id TEXT NOT NULL REFERENCES users(id), uid TEXT NOT NULL UNIQUE,
 nickname TEXT NOT NULL, cookies TEXT NOT NULL, login_status TEXT NOT NULL DEFAULT 'valid',
 created_at REAL NOT NULL, last_checked REAL NOT NULL DEFAULT 0,
 last_success_date TEXT NOT NULL DEFAULT '', credential_version INTEGER NOT NULL DEFAULT 1);
CREATE INDEX IF NOT EXISTS accounts_owner ON accounts(owner_id);
CREATE TABLE IF NOT EXISTS runs (
 id TEXT PRIMARY KEY, user_id TEXT NOT NULL REFERENCES users(id),
 account_id TEXT NOT NULL REFERENCES accounts(id), trigger TEXT NOT NULL,
 day TEXT NOT NULL, status TEXT NOT NULL, started_at REAL NOT NULL, finished_at REAL,
 total INTEGER NOT NULL DEFAULT 0, done_before INTEGER NOT NULL DEFAULT 0,
 success INTEGER NOT NULL DEFAULT 0, failed INTEGER NOT NULL DEFAULT 0,
 unknown INTEGER NOT NULL DEFAULT 0, message TEXT NOT NULL DEFAULT '等待执行');
CREATE UNIQUE INDEX IF NOT EXISTS runs_one_active ON runs(account_id)
 WHERE status IN ('queued','running');
CREATE INDEX IF NOT EXISTS runs_time ON runs(started_at DESC);
CREATE INDEX IF NOT EXISTS runs_owner_day ON runs(user_id,day);
CREATE INDEX IF NOT EXISTS runs_account_day ON runs(account_id,day);
CREATE TABLE IF NOT EXISTS logs (
 id INTEGER PRIMARY KEY AUTOINCREMENT, user_id TEXT REFERENCES users(id),
 account_id TEXT, kind TEXT NOT NULL, status TEXT NOT NULL, message TEXT NOT NULL, ts REAL NOT NULL);
CREATE INDEX IF NOT EXISTS logs_time ON logs(ts DESC);
CREATE TABLE IF NOT EXISTS rate_limits (key TEXT PRIMARY KEY, count INTEGER NOT NULL, expires REAL NOT NULL);
CREATE TABLE IF NOT EXISTS metadata (key TEXT PRIMARY KEY, value TEXT NOT NULL);
"""


class BindingConflict(ValueError):
    """UID 已有其他所有者。"""


def new_id():
    return uuid.uuid4().hex


def validate_username(name):
    if not isinstance(name, str) or not re.fullmatch(r"[\w.-]{3,32}", name, re.UNICODE):
        raise ValueError("用户名需为 3–32 位字母、数字、中文、下划线、点或短横线")
    return name


def validate_time(value):
    if not isinstance(value, str) or not re.fullmatch(
        r"(?:[01]\d|2[0-3]):[0-5]\d", value
    ):
        raise ValueError("签到时间应为 00:00–23:59")
    return value


class Database:
    def __init__(self, data_dir):
        directory = Path(data_dir)
        directory.mkdir(parents=True, exist_ok=True, mode=0o700)
        self.path = directory / "portal.sqlite3"
        with self.connect() as conn:
            conn.executescript(SCHEMA)
        if os.name != "nt":
            self.path.chmod(0o600)

    @contextlib.contextmanager
    def connect(self, *, write=False):
        conn = sqlite3.connect(self.path, timeout=15)
        conn.row_factory = sqlite3.Row
        conn.execute("PRAGMA foreign_keys=ON")
        try:
            if write:
                conn.execute("BEGIN IMMEDIATE")
            yield conn
            conn.commit()
        except BaseException:
            conn.rollback()
            raise
        finally:
            conn.close()

    def initialize(self, username, password):
        with self.connect() as conn:
            if conn.execute("SELECT 1 FROM users WHERE role='admin'").fetchone():
                return
        validate_username(username)
        if not password or not 12 <= len(password) <= 128:
            raise ValueError("首次启动需配置 PANEL_USER 与 12–128 位 PANEL_PASSWORD")
        self.create_user(username, password, role="admin")

    def create_user(self, username, password, *, role="user"):
        validate_username(username)
        user_id, now, encoded = new_id(), time.time(), hash_password(password)
        with self.connect(write=True) as conn:
            conn.execute(
                "INSERT INTO users VALUES (?,?,?,?,?,?)",
                (user_id, username, username.casefold(), encoded, role, now),
            )
            conn.execute(
                "INSERT INTO plans(owner_id,updated_at) VALUES (?,?)", (user_id, now)
            )
            self._log(conn, user_id, None, "auth", "success", "创建平台账号")
        return self.user(user_id)

    def user(self, user_id):
        with self.connect() as conn:
            row = conn.execute(
                "SELECT id,username,role,created_at FROM users WHERE id=?", (user_id,)
            ).fetchone()
            return dict(row) if row else None

    def user_by_name(self, name):
        with self.connect() as conn:
            row = conn.execute(
                "SELECT * FROM users WHERE name_key=?", (name.casefold(),)
            ).fetchone()
            return dict(row) if row else None

    def new_session(self, user_id):
        token = secrets.token_urlsafe(32)
        now = time.time()
        with self.connect(write=True) as conn:
            conn.execute("DELETE FROM sessions WHERE expires_at<=?", (now,))
            conn.execute(
                "INSERT INTO sessions VALUES (?,?,?)",
                (token_digest(token), user_id, now + 30 * 86400),
            )
        return token

    def session_user(self, token):
        if not token:
            return None
        with self.connect() as conn:
            row = conn.execute(
                "SELECT u.id,u.username,u.role,u.created_at FROM users u JOIN sessions s "
                "ON u.id=s.user_id WHERE s.token_hash=? AND s.expires_at>?",
                (token_digest(token), time.time()),
            ).fetchone()
            return dict(row) if row else None

    def revoke_session(self, token):
        with self.connect(write=True) as conn:
            conn.execute(
                "DELETE FROM sessions WHERE token_hash=?", (token_digest(token),)
            )

    def reset_password(self, username, password):
        user = self.user_by_name(username)
        if not user or not 12 <= len(password) <= 128:
            raise ValueError("用户不存在，或密码不是 12–128 位")
        encoded = hash_password(password)
        with self.connect(write=True) as conn:
            conn.execute(
                "UPDATE users SET password_hash=? WHERE id=?", (encoded, user["id"])
            )
            conn.execute("DELETE FROM sessions WHERE user_id=?", (user["id"],))
            self._log(
                conn, user["id"], None, "auth", "success", "离线重置密码并撤销所有会话"
            )

    def allow_attempt(self, key, limit, window=600):
        now = time.time()
        with self.connect(write=True) as conn:
            conn.execute("DELETE FROM rate_limits WHERE expires<=?", (now,))
            row = conn.execute(
                "SELECT count FROM rate_limits WHERE key=?", (key,)
            ).fetchone()
            if row and row[0] >= limit:
                return False
            conn.execute(
                "INSERT INTO rate_limits VALUES (?,1,?) ON CONFLICT(key) DO UPDATE SET count=count+1",
                (key, now + window),
            )
            return True

    def bind_account(self, owner_id, uid, nickname, cookies):
        uid = str(uid)
        if (
            not re.fullmatch(r"\d{1,32}", uid)
            or not isinstance(cookies, dict)
            or not cookies
        ):
            raise ValueError("微博未返回有效的 UID 或登录凭据，请重新扫码")
        now = time.time()
        with self.connect(write=True) as conn:
            row = conn.execute(
                "SELECT id,owner_id FROM accounts WHERE uid=?", (uid,)
            ).fetchone()
            if row and row["owner_id"] != owner_id:
                raise BindingConflict("该微博账号已被绑定")
            account_id = row["id"] if row else new_id()
            if row:
                conn.execute(
                    "UPDATE accounts SET cookies=?,nickname=?,login_status='valid',last_checked=?,"
                    "credential_version=credential_version+1 WHERE id=?",
                    (json.dumps(cookies), nickname[:80], now, account_id),
                )
            else:
                conn.execute(
                    "INSERT INTO accounts(id,owner_id,uid,nickname,cookies,created_at,last_checked) "
                    "VALUES (?,?,?,?,?,?,?)",
                    (
                        account_id,
                        owner_id,
                        uid,
                        nickname[:80],
                        json.dumps(cookies),
                        now,
                        now,
                    ),
                )
            self._log(
                conn,
                owner_id,
                account_id,
                "binding",
                "success",
                "更新微博登录" if row else "绑定微博账号",
            )
        return self.account(account_id)

    def account(self, account_id, owner_id=None):
        with self.connect() as conn:
            sql, params = "SELECT * FROM accounts WHERE id=?", [account_id]
            if owner_id is not None:
                sql += " AND owner_id=?"
                params.append(owner_id)
            row = conn.execute(sql, params).fetchone()
            if not row:
                return None
            result = dict(row)
            result["cookies"] = json.loads(result["cookies"])
            return result

    def accounts(self, owner_id=None):
        with self.connect() as conn:
            sql, params = "SELECT id FROM accounts", []
            if owner_id is not None:
                sql += " WHERE owner_id=?"
                params.append(owner_id)
            ids = [row[0] for row in conn.execute(sql + " ORDER BY created_at", params)]
        return [self.account(account_id) for account_id in ids]

    def public_accounts(self, owner_id):
        with self.connect() as conn:
            return [
                dict(row)
                for row in conn.execute(
                    "SELECT a.id,a.uid,a.nickname,a.login_status,a.created_at,a.last_checked,"
                    "max(a.last_success_date,coalesce((SELECT max(day) FROM runs "
                    "WHERE account_id=a.id AND status='success'),'')) AS last_success_date,"
                    "(SELECT status FROM runs WHERE account_id=a.id ORDER BY started_at DESC LIMIT 1) AS last_result,"
                    "EXISTS(SELECT 1 FROM runs WHERE account_id=a.id AND status IN ('queued','running')) AS busy "
                    "FROM accounts a WHERE a.owner_id=? ORDER BY a.created_at",
                    (owner_id,),
                )
            ]

    def save_login(self, acc, status, cookies=None):
        # A background request using old credentials must not overwrite a newer scan.
        with self.connect(write=True) as conn:
            if cookies is None:
                conn.execute(
                    "UPDATE accounts SET login_status=?,last_checked=? WHERE id=? AND credential_version=?",
                    (status, time.time(), acc["id"], acc["credential_version"]),
                )
            else:
                conn.execute(
                    "UPDATE accounts SET login_status=?,last_checked=?,cookies=? WHERE id=? AND credential_version=?",
                    (
                        status,
                        time.time(),
                        json.dumps(cookies),
                        acc["id"],
                        acc["credential_version"],
                    ),
                )

    def plan(self, owner_id):
        with self.connect() as conn:
            row = dict(
                conn.execute(
                    "SELECT * FROM plans WHERE owner_id=?", (owner_id,)
                ).fetchone()
            )
            row["enabled"] = bool(row["enabled"])
            row["timezone"] = "Asia/Shanghai"
            return row

    def set_plan(self, owner_id, enabled, clock):
        validate_time(clock)
        with self.connect(write=True) as conn:
            conn.execute(
                "UPDATE plans SET enabled=?,time=?,updated_at=? WHERE owner_id=?",
                (bool(enabled), clock, time.time(), owner_id),
            )
            self._log(
                conn,
                owner_id,
                None,
                "schedule",
                "success",
                "启用每日签到 " + clock if enabled else "暂停每日签到",
            )
        return self.plan(owner_id)

    @staticmethod
    def _log(conn, owner_id, account_id, kind, status, message):
        conn.execute(
            "INSERT INTO logs(user_id,account_id,kind,status,message,ts) VALUES (?,?,?,?,?,?)",
            (owner_id, account_id, kind, status, message, time.time()),
        )

    def log(self, owner_id, account_id, kind, status, message):
        with self.connect(write=True) as conn:
            self._log(conn, owner_id, account_id, kind, status, message)

    def run(self, run_id):
        with self.connect() as conn:
            row = conn.execute("SELECT * FROM runs WHERE id=?", (run_id,)).fetchone()
            return dict(row) if row else None

    @staticmethod
    def _filters(
        alias,
        *,
        user_id=None,
        account_id=None,
        status=None,
        since=None,
        until=None,
        username=None,
        uid=None,
        time_column="started_at",
    ):
        clauses, params = [], []
        for column, value in (
            ("user_id", user_id),
            ("account_id", account_id),
            ("status", status),
        ):
            if value:
                clauses.append(f"{alias}.{column}=?")
                params.append(value)
        if username:
            clauses.append(
                f"{alias}.user_id IN (SELECT id FROM users WHERE name_key=?)"
            )
            params.append(username.casefold())
        if uid:
            clauses.append(
                f"{alias}.account_id IN (SELECT id FROM accounts WHERE uid=?)"
            )
            params.append(uid)
        if since is not None:
            clauses.append(f"{alias}.{time_column}>=?")
            params.append(since)
        if until is not None:
            clauses.append(f"{alias}.{time_column}<?")
            params.append(until)
        return (" WHERE " + " AND ".join(clauses) if clauses else ""), params

    def records(self, *, logs=False, page=1, page_size=20, **filters):
        table, alias = ("logs", "l") if logs else ("runs", "r")
        where, params = self._filters(
            alias, time_column="ts" if logs else "started_at", **filters
        )
        with self.connect() as conn:
            total = conn.execute(
                f"SELECT count(*) FROM {table} {alias}" + where, params
            ).fetchone()[0]
            rows = conn.execute(
                f"SELECT {alias}.*,u.username,a.uid,a.nickname FROM {table} {alias} "
                f"LEFT JOIN users u ON u.id={alias}.user_id LEFT JOIN accounts a ON a.id={alias}.account_id"
                + where
                + f" ORDER BY {alias}.{'ts' if logs else 'started_at'} DESC,{alias}.id DESC LIMIT ? OFFSET ?",
                [*params, page_size, (page - 1) * page_size],
            ).fetchall()
        return {
            "items": [dict(r) for r in rows],
            "total": total,
            "page": page,
            "page_size": page_size,
        }

    def checkin_calendar(self, owner_id, account_id, month, *, today):
        first = month.replace(day=1)
        length = calendar.monthrange(first.year, first.month)[1]
        last = first.replace(day=length)
        with self.connect() as conn:
            rows = conn.execute(
                "SELECT day,count(*) AS attempts,max(status='success') AS complete,"
                "max(status IN ('queued','running')) AS active,max(status='partial') AS partial "
                "FROM runs WHERE user_id=? AND account_id=? AND day BETWEEN ? AND ? GROUP BY day",
                (owner_id, account_id, first.isoformat(), last.isoformat()),
            ).fetchall()
            # Distinct successful dates, including previous months, determine the current streak.
            successes = {
                row[0]
                for row in conn.execute(
                    "SELECT DISTINCT day FROM runs WHERE user_id=? AND account_id=? "
                    "AND status='success' AND day<=?",
                    (owner_id, account_id, today.isoformat()),
                )
            }
        daily = {row["day"]: row for row in rows}
        days = []
        for number in range(1, length + 1):
            day = first.replace(day=number).isoformat()
            row = daily.get(day)
            status = (
                "none"
                if row is None
                else "success"
                if row["complete"]
                else "active"
                if row["active"]
                else "partial"
                if row["partial"]
                else "failed"
            )
            days.append(
                {
                    "date": day,
                    "status": status,
                    "attempts": row["attempts"] if row else 0,
                }
            )
        cursor = today
        if cursor.isoformat() not in successes and cursor > dt.date.min:
            cursor -= dt.timedelta(days=1)
        streak = 0
        while cursor.isoformat() in successes:
            streak += 1
            if cursor == dt.date.min:
                break
            cursor -= dt.timedelta(days=1)
        return {
            "account_id": account_id,
            "month": first.strftime("%Y-%m"),
            "today": today.isoformat(),
            "days": days,
            "summary": {
                "success_days": sum(day["status"] == "success" for day in days),
                "streak": streak,
            },
        }

    def users(self, page=1, page_size=20, search=""):
        where, params = (
            (" WHERE instr(u.name_key,?)>0", [search.casefold()])
            if search
            else ("", [])
        )
        with self.connect() as conn:
            total = conn.execute(
                "SELECT count(*) FROM users u" + where, params
            ).fetchone()[0]
            rows = conn.execute(
                "SELECT u.id,u.username,u.role,u.created_at,p.enabled,p.time,"
                "(SELECT count(*) FROM accounts WHERE owner_id=u.id) AS accounts "
                "FROM users u JOIN plans p ON p.owner_id=u.id"
                + where
                + " ORDER BY u.created_at DESC LIMIT ? OFFSET ?",
                [*params, page_size, (page - 1) * page_size],
            ).fetchall()
        return {
            "items": [dict(r) for r in rows],
            "total": total,
            "page": page,
            "page_size": page_size,
        }

    def stats(self, **filters):
        where, params = self._filters("r", **filters)
        with self.connect() as conn:
            row = dict(
                conn.execute(
                    "SELECT count(*) AS runs,"
                    "coalesce(sum(status='success'),0) AS success,"
                    "coalesce(sum(status='partial'),0) AS partial,"
                    "coalesce(sum(status NOT IN ('queued','running','success','partial')),0) AS failed,"
                    "coalesce(sum(status IN ('queued','running')),0) AS active,"
                    "coalesce(sum(success),0) AS topics_signed,coalesce(sum(failed),0) AS topics_failed "
                    "FROM runs r" + where,
                    params,
                ).fetchone()
            )
            owner_clauses, args = [], []
            if filters.get("user_id"):
                owner_clauses.append("id=?")
                args.append(filters["user_id"])
            if filters.get("username"):
                owner_clauses.append("name_key=?")
                args.append(filters["username"].casefold())
            owners = "SELECT id FROM users" + (
                " WHERE " + " AND ".join(owner_clauses) if owner_clauses else ""
            )
            row["users"] = conn.execute(
                "SELECT count(*) FROM users WHERE id IN (" + owners + ")", args
            ).fetchone()[0]
            account_where = " WHERE owner_id IN (" + owners + ")"
            if filters.get("uid"):
                account_where += " AND uid=?"
                args.append(filters["uid"])
            if filters.get("account_id"):
                account_where += " AND id=?"
                args.append(filters["account_id"])
            counts = conn.execute(
                "SELECT count(*),coalesce(sum(login_status='expired'),0),"
                "coalesce(sum(login_status='error'),0) FROM accounts" + account_where,
                args,
            ).fetchone()
            row.update(accounts=counts[0], expired=counts[1], errors=counts[2])
        return row

    def anomalies(self, owner_id=None, *, page=1, page_size=20):
        with self.connect() as conn:
            sql = (
                "SELECT a.id,a.owner_id,a.uid,a.nickname,a.login_status,a.last_checked,u.username,"
                "r.status AS run_status,r.message,r.started_at FROM accounts a JOIN users u ON u.id=a.owner_id "
                "LEFT JOIN runs r ON r.id=(SELECT id FROM runs WHERE account_id=a.id ORDER BY started_at DESC LIMIT 1) "
                "WHERE (a.login_status IN ('expired','error') OR r.status NOT IN ('success','queued','running'))"
            )
            args = []
            if owner_id:
                sql += " AND a.owner_id=?"
                args.append(owner_id)
            total = conn.execute("SELECT count(*) FROM (" + sql + ")", args).fetchone()[
                0
            ]
            items = [
                dict(r)
                for r in conn.execute(
                    sql
                    + " ORDER BY coalesce(r.started_at,a.last_checked) DESC LIMIT ? OFFSET ?",
                    [*args, page_size, (page - 1) * page_size],
                )
            ]
            return {
                "items": items,
                "total": total,
                "page": page,
                "page_size": page_size,
            }

    def needs_migration(self):
        with self.connect() as conn:
            imported = conn.execute(
                "SELECT 1 FROM metadata WHERE key='legacy_imported'"
            ).fetchone()
        return (self.path.parent / "accounts.json").exists() and not imported

    def migrate_legacy(self, owner_name):
        owner = self.user_by_name(owner_name)
        if not owner or owner["role"] != "admin":
            raise ValueError("旧账号只能迁移给已存在的管理员")
        with self.connect() as conn:
            if conn.execute(
                "SELECT 1 FROM metadata WHERE key='legacy_imported'"
            ).fetchone():
                return {"already_imported": True}
        root = self.path.parent

        def read(name, default):
            path = root / name
            return (
                json.loads(path.read_text(encoding="utf-8"))
                if path.exists()
                else default
            )

        accounts = read("accounts.json", [])
        settings = read("settings.json", {})
        if not isinstance(accounts, list) or not isinstance(settings, dict):
            raise ValueError("旧 JSON 结构无效")
        seen, ids = set(), set()
        for acc in accounts:
            uid = str(acc.get("uid") or "")
            acc_id = acc.get("id")
            if (
                not re.fullmatch(r"\d{1,32}", uid)
                or uid in seen
                or not acc_id
                or acc_id in ids
            ):
                raise ValueError("旧账号缺少 UID/ID 或存在重复，请先核对原始数据")
            if not isinstance(acc.get("cookies"), dict) or not acc["cookies"]:
                raise ValueError("旧账号登录凭据为空")
            seen.add(uid)
            ids.add(acc_id)
        clock = validate_time(settings.get("checkin_time", "09:00"))
        backup = root / (
            "legacy-backup-"
            + dt.datetime.now().strftime("%Y%m%d-%H%M%S-")
            + secrets.token_hex(3)
        )
        backup.mkdir(mode=0o700)
        for name in (
            "accounts.json",
            "settings.json",
            "logs.json",
            "auth.json",
            "monitor.json",
        ):
            if (root / name).exists():
                shutil.copy2(root / name, backup / name)
                if os.name != "nt":
                    (backup / name).chmod(0o600)
        # No partially imported accounts/settings or migration marker can survive a failure.
        with self.connect(write=True) as conn:
            for acc in accounts:
                old_result = acc.get("last_result") or {}
                total = int(old_result.get("total") or 0)
                signed = int(old_result.get("done_before") or 0) + int(
                    old_result.get("success") or 0
                )
                complete = (
                    not old_result.get("failed") and total > 0 and signed >= total
                )
                conn.execute(
                    "INSERT INTO accounts(id,owner_id,uid,nickname,cookies,login_status,created_at,"
                    "last_checked,last_success_date) VALUES (?,?,?,?,?,?,?,?,?)",
                    (
                        acc["id"],
                        owner["id"],
                        str(acc["uid"]),
                        str(acc.get("nickname") or acc.get("remark") or "")[:80],
                        json.dumps(acc["cookies"]),
                        "expired" if acc.get("status") == "expired" else "unknown",
                        acc.get("added_at") or time.time(),
                        acc.get("last_alive") or 0,
                        acc.get("last_checkin_date", "") if complete else "",
                    ),
                )
            conn.execute(
                "UPDATE plans SET enabled=?,time=?,updated_at=? WHERE owner_id=?",
                (
                    bool(settings.get("enable_daily", True)),
                    clock,
                    time.time(),
                    owner["id"],
                ),
            )
            conn.execute(
                "INSERT INTO metadata VALUES ('legacy_imported',?)",
                (json.dumps({"owner": owner["id"], "count": len(accounts)}),),
            )
            self._log(
                conn,
                owner["id"],
                None,
                "migration",
                "success",
                f"迁移旧微博账号 {len(accounts)} 个；原始 JSON 已保留",
            )
        return {
            "accounts": len(accounts),
            "backup": str(backup),
            "already_imported": False,
        }
