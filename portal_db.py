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
CREATE TABLE IF NOT EXISTS login_expirations (
 account_id TEXT PRIMARY KEY REFERENCES accounts(id), id TEXT NOT NULL, detected_at REAL NOT NULL);
INSERT OR IGNORE INTO login_expirations(account_id,id,detected_at)
 SELECT id,lower(hex(randomblob(16))),last_checked FROM accounts WHERE login_status='expired';
CREATE TABLE IF NOT EXISTS topic_scans (
 account_id TEXT PRIMARY KEY REFERENCES accounts(id), credential_version INTEGER NOT NULL,
 scanned_at REAL NOT NULL DEFAULT 0, day TEXT NOT NULL DEFAULT '',
 complete INTEGER NOT NULL DEFAULT 0, status TEXT NOT NULL, topics TEXT NOT NULL DEFAULT '[]');
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
CREATE TABLE IF NOT EXISTS run_topics (
 run_id TEXT NOT NULL REFERENCES runs(id), position INTEGER NOT NULL,
 name TEXT NOT NULL, status TEXT NOT NULL, PRIMARY KEY(run_id,position));
CREATE TABLE IF NOT EXISTS topic_preferences (
 account_id TEXT PRIMARY KEY REFERENCES accounts(id), mode TEXT NOT NULL,
 topic_ids TEXT NOT NULL DEFAULT '[]', revision INTEGER NOT NULL DEFAULT 0);
CREATE TABLE IF NOT EXISTS run_scopes (
 run_id TEXT PRIMARY KEY REFERENCES runs(id), scope TEXT NOT NULL);
CREATE TABLE IF NOT EXISTS logs (
 id INTEGER PRIMARY KEY AUTOINCREMENT, user_id TEXT REFERENCES users(id),
 account_id TEXT, kind TEXT NOT NULL, status TEXT NOT NULL, message TEXT NOT NULL, ts REAL NOT NULL);
CREATE INDEX IF NOT EXISTS logs_time ON logs(ts DESC);
CREATE TABLE IF NOT EXISTS rate_limits (key TEXT PRIMARY KEY, count INTEGER NOT NULL, expires REAL NOT NULL);
CREATE TABLE IF NOT EXISTS metadata (key TEXT PRIMARY KEY, value TEXT NOT NULL);
"""


class BindingConflict(ValueError):
    """UID 已有其他所有者。"""


class RegistrationClosed(ValueError):
    """公开注册已关闭。"""


class AccountBusy(ValueError):
    """签到中的账号不能修改签到范围。"""


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

    def create_user(
        self,
        username,
        password,
        *,
        role="user",
        self_registration=False,
        created_by=None,
    ):
        validate_username(username)
        user_id, now, encoded = new_id(), time.time(), hash_password(password)
        with self.connect(write=True) as conn:
            if self_registration and not self._registration_enabled(conn):
                raise RegistrationClosed("注册已关闭，请联系管理员开通账号")
            conn.execute(
                "INSERT INTO users VALUES (?,?,?,?,?,?)",
                (user_id, username, username.casefold(), encoded, role, now),
            )
            conn.execute(
                "INSERT INTO plans(owner_id,updated_at) VALUES (?,?)", (user_id, now)
            )
            self._log(
                conn,
                created_by or user_id,
                None,
                "auth",
                "success",
                f"管理员创建平台用户：{username}" if created_by else "创建平台账号",
            )
        return self.user(user_id)

    @staticmethod
    def _registration_enabled(conn):
        row = conn.execute(
            "SELECT value FROM metadata WHERE key='registration_enabled'"
        ).fetchone()
        return row is None or row["value"] == "true"

    def system_settings(self):
        with self.connect() as conn:
            return {"registration_enabled": self._registration_enabled(conn)}

    def set_system_settings(self, registration_enabled, actor_id):
        with self.connect(write=True) as conn:
            conn.execute(
                "INSERT INTO metadata(key,value) VALUES ('registration_enabled',?) "
                "ON CONFLICT(key) DO UPDATE SET value=excluded.value",
                ("true" if registration_enabled else "false",),
            )
            self._log(
                conn,
                actor_id,
                None,
                "system",
                "success",
                "开启公开注册" if registration_enabled else "关闭公开注册",
            )
        return {"registration_enabled": registration_enabled}

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
            if row:
                conn.execute("DELETE FROM login_expirations WHERE account_id=?", (account_id,))
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
                    "WHERE account_id=a.id AND status='success' AND "
                    "coalesce((SELECT scope FROM run_scopes WHERE run_id=runs.id),'all')="
                    "coalesce((SELECT CASE WHEN mode='all' THEN 'all' ELSE topic_ids END FROM topic_preferences WHERE account_id=a.id),'all')),'')) AS last_success_date,"
                    "coalesce((SELECT mode='selected' AND topic_ids='[]' FROM topic_preferences WHERE account_id=a.id),0) AS topics_paused,"
                    "(SELECT status FROM runs WHERE account_id=a.id ORDER BY started_at DESC LIMIT 1) AS last_result,"
                    "EXISTS(SELECT 1 FROM runs WHERE account_id=a.id AND status IN ('queued','running')) AS busy "
                    "FROM accounts a WHERE a.owner_id=? ORDER BY a.created_at",
                    (owner_id,),
                )
            ]

    def topic_scan(self, account_id, today):
        with self.connect() as conn:
            row = conn.execute(
                "SELECT s.*,a.credential_version AS current_version FROM topic_scans s "
                "JOIN accounts a ON a.id=s.account_id WHERE s.account_id=?",
                (account_id,),
            ).fetchone()
        if not row:
            return {
                "items": [],
                "status": "unscanned",
                "scanned_at": 0,
                "complete": False,
                "fresh": False,
            }
        fresh = (
            row["day"] == today and row["credential_version"] == row["current_version"]
        )
        items = json.loads(row["topics"])
        if not fresh:
            items = [{**item, "status": "unknown"} for item in items]
        return {
            "items": items,
            "status": row["status"],
            "scanned_at": row["scanned_at"],
            "complete": bool(row["complete"]),
            "fresh": fresh,
        }

    @staticmethod
    def _topic_preferences(conn, account_id):
        row = conn.execute(
            "SELECT * FROM topic_preferences WHERE account_id=?", (account_id,)
        ).fetchone()
        return (
            {
                "mode": row["mode"],
                "topic_ids": json.loads(row["topic_ids"]),
                "revision": row["revision"],
            }
            if row
            else {"mode": "all", "topic_ids": [], "revision": 0}
        )

    @staticmethod
    def selection_scope(selection):
        return (
            "all"
            if selection["mode"] == "all"
            else json.dumps(sorted(set(selection["topic_ids"])))
        )

    def topic_preferences(self, account_id):
        with self.connect() as conn:
            return self._topic_preferences(conn, account_id)

    def set_topic_preferences(self, account_id, mode, topic_ids):
        ids = sorted(set(topic_ids)) if mode == "selected" else []
        with self.connect(write=True) as conn:
            if conn.execute(
                "SELECT 1 FROM runs WHERE account_id=? AND status IN ('queued','running')",
                (account_id,),
            ).fetchone():
                raise AccountBusy("该账号正在签到，请完成后再修改签到范围")
            previous = self._topic_preferences(conn, account_id)
            if previous["mode"] == mode and sorted(previous["topic_ids"]) == ids:
                return previous
            scan = conn.execute(
                "SELECT topics FROM topic_scans WHERE account_id=?", (account_id,)
            ).fetchone()
            known = {item.get("id") for item in json.loads(scan[0])} if scan else set()
            if not set(ids) <= known | set(previous["topic_ids"]):
                raise ValueError("部分超话不在已读取的关注列表中，请刷新后重试")
            revision = previous["revision"] + 1
            conn.execute(
                "INSERT INTO topic_preferences VALUES (?,?,?,?) ON CONFLICT(account_id) "
                "DO UPDATE SET mode=excluded.mode,topic_ids=excluded.topic_ids,revision=excluded.revision",
                (account_id, mode, json.dumps(ids), revision),
            )
            conn.execute(
                "UPDATE accounts SET last_success_date='' WHERE id=?", (account_id,)
            )
            owner = conn.execute(
                "SELECT owner_id FROM accounts WHERE id=?", (account_id,)
            ).fetchone()[0]
            self._log(
                conn,
                owner,
                account_id,
                "topic_settings",
                "success",
                "签到范围：全部关注超话"
                if mode == "all"
                else f"签到范围：指定 {len(ids)} 个超话",
            )
        return {"mode": mode, "topic_ids": ids, "revision": revision}

    def mark_topic_scan(self, acc, status):
        with self.connect(write=True) as conn:
            current = conn.execute(
                "SELECT credential_version FROM accounts WHERE id=?", (acc["id"],)
            ).fetchone()
            if not current or current[0] != acc["credential_version"]:
                return
            conn.execute(
                "INSERT INTO topic_scans(account_id,credential_version,status) VALUES (?,?,?) "
                "ON CONFLICT(account_id) DO UPDATE SET status=excluded.status",
                (acc["id"], acc["credential_version"], status),
            )

    def save_topic_scan(self, acc, topics, complete, day):
        with self.connect(write=True) as conn:
            current = conn.execute(
                "SELECT credential_version FROM accounts WHERE id=?", (acc["id"],)
            ).fetchone()
            if not current or current[0] != acc["credential_version"]:
                return
            conn.execute(
                "INSERT INTO topic_scans VALUES (?,?,?,?,?,?,?) ON CONFLICT(account_id) "
                "DO UPDATE SET credential_version=excluded.credential_version,scanned_at=excluded.scanned_at,"
                "day=excluded.day,complete=excluded.complete,status=excluded.status,topics=excluded.topics",
                (
                    acc["id"],
                    acc["credential_version"],
                    time.time(),
                    day,
                    bool(complete),
                    "success" if complete else "partial",
                    json.dumps(topics, ensure_ascii=False),
                ),
            )

    def save_run_topics(self, run_id, topics):
        with self.connect(write=True) as conn:
            conn.executemany(
                "INSERT INTO run_topics(run_id,position,name,status) VALUES (?,?,?,?)",
                [
                    (
                        run_id,
                        index,
                        item["name"],
                        "done_before" if item["status"] == "done" else item["status"],
                    )
                    for index, item in enumerate(topics)
                ],
            )

    def set_run_topic(self, run_id, position, status):
        with self.connect(write=True) as conn:
            conn.execute(
                "UPDATE run_topics SET status=? WHERE run_id=? AND position=?",
                (status, run_id, position),
            )

    def run_topics(self, run_id):
        with self.connect() as conn:
            return [
                dict(row)
                for row in conn.execute(
                    "SELECT name,status FROM run_topics WHERE run_id=? ORDER BY position",
                    (run_id,),
                )
            ]

    def save_login(self, acc, status, cookies=None):
        # A background request using old credentials must not overwrite a newer scan.
        now = time.time()
        columns, values = "login_status=?,last_checked=?", [status, now]
        if cookies is not None:
            columns += ",cookies=?"
            values.append(json.dumps(cookies))
        with self.connect(write=True) as conn:
            changed = conn.execute(
                f"UPDATE accounts SET {columns} WHERE id=? AND credential_version=?",
                (*values, acc["id"], acc["credential_version"]),
            ).rowcount
            if not changed:
                return
            if status == "expired":
                conn.execute(
                    "INSERT OR IGNORE INTO login_expirations VALUES (?,?,?)",
                    (acc["id"], new_id(), now),
                )
            elif status == "valid":
                conn.execute("DELETE FROM login_expirations WHERE account_id=?", (acc["id"],))
            # A network error does not end a previously confirmed incident.

    def maibot_snapshot(self, uids, today):
        placeholders = ",".join("?" for _ in uids)
        with self.connect() as conn:
            rows = conn.execute(
                f"""SELECT a.uid,a.nickname,a.login_status,p.enabled,p.time,
                       CASE WHEN a.last_success_date=? OR EXISTS (
                         SELECT 1 FROM runs r LEFT JOIN run_scopes s ON s.run_id=r.id
                         WHERE r.account_id=a.id AND r.day=? AND r.status='success'
                           AND coalesce(s.scope,'all')=coalesce(CASE WHEN t.mode='selected' THEN t.topic_ids END,'all')
                       ) THEN 'success' ELSE (
                         SELECT r.status FROM runs r LEFT JOIN run_scopes s ON s.run_id=r.id
                         WHERE r.account_id=a.id AND r.day=?
                           AND coalesce(s.scope,'all')=coalesce(CASE WHEN t.mode='selected' THEN t.topic_ids END,'all')
                         ORDER BY r.started_at DESC,r.id DESC LIMIT 1
                       ) END AS today_status,
                       coalesce(t.mode='selected' AND t.topic_ids='[]',0) AS topics_paused,
                       e.id AS incident_id,e.detected_at
                       FROM accounts a JOIN plans p ON p.owner_id=a.owner_id
                       LEFT JOIN topic_preferences t ON t.account_id=a.id
                       LEFT JOIN login_expirations e ON e.account_id=a.id
                       WHERE a.uid IN ({placeholders}) ORDER BY a.created_at,a.uid""",
                (today, today, today, *uids),
            ).fetchall()
        return [
            {
                "uid": row["uid"],
                "nickname": row["nickname"],
                "login_status": "expired" if row["incident_id"] else row["login_status"],
                "today_status": row["today_status"] or "not_run",
                "automatic": bool(row["enabled"] and not row["topics_paused"]),
                "scheduled_time": row["time"],
                "expiration": {"id": row["incident_id"], "detected_at": row["detected_at"]}
                if row["incident_id"] else None,
            }
            for row in rows
        ]

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

    @staticmethod
    def _calendar_streak(conn, owner_id, account_id, today):
        # Keep using the current streak, independent of the selected display range.
        successes = {
            row[0]
            for row in conn.execute(
                "SELECT DISTINCT day FROM runs WHERE user_id=? AND account_id=? "
                "AND status='success' AND day<=?",
                (owner_id, account_id, today.isoformat()),
            )
        }
        cursor = today
        if cursor.isoformat() not in successes and cursor > dt.date.min:
            cursor -= dt.timedelta(days=1)
        streak = 0
        while cursor.isoformat() in successes:
            streak += 1
            if cursor == dt.date.min:
                break
            cursor -= dt.timedelta(days=1)
        return streak

    def _checkin_days(self, owner_id, account_id, first, last, *, today):
        with self.connect() as conn:
            daily = {
                row["day"]: row
                for row in conn.execute(
                    "SELECT day,count(*) AS attempts,max(status='success') AS complete,"
                    "max(status IN ('queued','running')) AS active,max(status='partial') AS partial "
                    "FROM runs WHERE user_id=? AND account_id=? AND day BETWEEN ? AND ? GROUP BY day",
                    (owner_id, account_id, first.isoformat(), last.isoformat()),
                )
            }
            streak = self._calendar_streak(conn, owner_id, account_id, today)
        days = []
        for offset in range((last - first).days + 1):
            day = (first + dt.timedelta(days=offset)).isoformat()
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
                {"date": day, "status": status, "attempts": row["attempts"] if row else 0}
            )
        return {
            "account_id": account_id,
            "today": today.isoformat(),
            "days": days,
            "summary": {
                "success_days": sum(day["status"] == "success" for day in days),
                "streak": streak,
            },
        }

    def checkin_calendar(self, owner_id, account_id, month, *, today):
        first = month.replace(day=1)
        last = first.replace(day=calendar.monthrange(first.year, first.month)[1])
        return {
            **self._checkin_days(owner_id, account_id, first, last, today=today),
            "month": first.strftime("%Y-%m"),
        }

    def checkin_rolling_days(self, owner_id, account_id, length, *, today):
        first = today - dt.timedelta(days=length - 1)
        return {
            **self._checkin_days(owner_id, account_id, first, today, today=today),
            "start": first.isoformat(),
        }

    def checkin_history(self, owner_id, account_id, *, today):
        with self.connect() as conn:
            months = [
                dict(row)
                for row in conn.execute(
                    "SELECT substr(day,1,7) AS month,"
                    "count(DISTINCT CASE WHEN status='success' THEN day END) AS success_days "
                    "FROM runs WHERE user_id=? AND account_id=? AND day<=? "
                    "GROUP BY month ORDER BY month DESC",
                    (owner_id, account_id, today.isoformat()),
                )
            ]
            streak = self._calendar_streak(conn, owner_id, account_id, today)
        return {
            "account_id": account_id,
            "today": today.isoformat(),
            "months": months,
            "summary": {
                "success_days": sum(month["success_days"] for month in months),
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
