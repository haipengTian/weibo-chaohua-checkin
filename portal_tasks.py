"""每日调度与持久化执行记录。生产只启动一个调度进程。"""

import datetime as dt
import sqlite3
import threading
import time
from concurrent.futures import ThreadPoolExecutor
from zoneinfo import ZoneInfo

from portal_db import new_id
from portal_weibo import PortalWeibo

SHANGHAI = ZoneInfo("Asia/Shanghai")
MESSAGES = {
    "success": "签到完成",
    "partial": "部分超话未完成，可重试",
    "failed": "签到失败，请稍后重试",
    "expired": "微博登录已失效，请重新扫码",
    "network_error": "微博接口或网络异常，请稍后重试",
    "no_topics": "未获取到可识别的超话，请检查微博关注列表",
    "interrupted": "任务被服务重启或跨日中断，等待重新执行",
}


class DayBoundary(Exception):
    """过期任务不得被当作历史日期的补签继续执行。"""


class AlreadyCheckedIn(ValueError):
    """该微博在当前北京时间日期已完整成功。"""


class Runner:
    def __init__(self, db, client_factory=PortalWeibo, *, sign_delay=0.8):
        self.db, self.client_factory, self.sign_delay = db, client_factory, sign_delay
        self.pool = ThreadPoolExecutor(max_workers=4, thread_name_prefix="checkin")
        self.account_locks = {}
        self.topic_scans_pending = set()
        self.lock = threading.Lock()

    def account_lock(self, account_id):
        with self.lock:
            return self.account_locks.setdefault(account_id, threading.Lock())

    def recover(self):
        with self.db.connect(write=True) as conn:
            conn.execute(
                "UPDATE topic_scans SET status='error' WHERE status='scanning'"
            )
            rows = conn.execute(
                "SELECT user_id,account_id FROM runs WHERE status IN ('queued','running')"
            ).fetchall()
            conn.execute(
                "UPDATE runs SET status='interrupted',finished_at=?,message=? WHERE status IN ('queued','running')",
                (time.time(), MESSAGES["interrupted"]),
            )
            for row in rows:
                self.db._log(
                    conn,
                    row["user_id"],
                    row["account_id"],
                    "checkin",
                    "interrupted",
                    MESSAGES["interrupted"],
                )

    def claim(self, account, trigger, *, now=None):
        now = now or dt.datetime.now(SHANGHAI)
        now = now.astimezone(SHANGHAI)
        day, run_id = now.date().isoformat(), new_id()
        try:
            with self.db.connect(write=True) as conn:
                selection = self.db._topic_preferences(conn, account["id"])
                if selection["mode"] == "selected" and not selection["topic_ids"]:
                    if trigger == "manual":
                        raise ValueError("尚未选择签到超话，请先在关注超话中选择并保存")
                    return None
                scope = self.db.selection_scope(selection)
                # Read inside the claim transaction, never trust the caller's snapshot.
                row = conn.execute(
                    "SELECT a.last_success_date,p.enabled,p.time,"
                    "EXISTS(SELECT 1 FROM runs WHERE account_id=a.id AND day=? AND status='success' "
                    "AND coalesce((SELECT scope FROM run_scopes WHERE run_id=runs.id),'all')=?) AS day_success "
                    "FROM accounts a JOIN plans p ON p.owner_id=a.owner_id WHERE a.id=?",
                    (day, scope, account["id"]),
                ).fetchone()
                if not row:
                    return None
                if row["last_success_date"] == day or row["day_success"]:
                    if trigger == "manual":
                        raise AlreadyCheckedIn("今日已签到，请明天再来")
                    return None
                if trigger == "scheduled":
                    if not row["enabled"] or now.strftime("%H:%M") < row["time"]:
                        return None
                    attempts = conn.execute(
                        "SELECT count(*),max(coalesce(finished_at,started_at)) FROM runs WHERE account_id=? AND day=? "
                        "AND trigger='scheduled' AND coalesce((SELECT scope FROM run_scopes WHERE run_id=runs.id),'all')=?",
                        (account["id"], day, scope),
                    ).fetchone()
                    if attempts[0] >= 3 or (
                        attempts[1] is not None and now.timestamp() - attempts[1] < 600
                    ):
                        return None
                conn.execute(
                    "INSERT INTO runs(id,user_id,account_id,trigger,day,status,started_at) VALUES (?,?,?,?,?,'queued',?)",
                    (
                        run_id,
                        account["owner_id"],
                        account["id"],
                        trigger,
                        day,
                        now.timestamp(),
                    ),
                )
                conn.execute(
                    "INSERT INTO run_scopes VALUES (?,?)",
                    (run_id, scope),
                )
        except sqlite3.IntegrityError:
            return None
        return self.db.run(run_id)

    def submit(self, run):
        self.pool.submit(self.execute, run["id"])

    @staticmethod
    def topic_items(client, pending):
        # 真实客户端提供全部超话；旧测试替身/调用方仍可只提供待签列表。
        return [
            dict(item)
            for item in client.scan.get(
                "topics",
                [
                    {"name": item.get("name") or "未返回超话名称", "status": "pending"}
                    for item in pending
                ],
            )
        ]

    def submit_topic_scan(self, account):
        key = (account["id"], account["credential_version"])
        with self.lock:
            if key in self.topic_scans_pending:
                return
            self.topic_scans_pending.add(key)
        self.db.mark_topic_scan(account, "scanning")
        self.pool.submit(self._background_topic_scan, account, key)

    def _background_topic_scan(self, account, key):
        try:
            self.scan_topics(account, wait=True)
        finally:
            with self.lock:
                self.topic_scans_pending.discard(key)

    def scan_topics(self, account, *, wait=False):
        guard = self.account_lock(account["id"])
        if not guard.acquire(blocking=wait):
            return {"status": "busy"}
        client, login_status = None, "error"
        try:
            account = self.db.account(account["id"])
            self.db.mark_topic_scan(account, "scanning")
            client = self.client_factory(account["cookies"])
            info = client.login_info()
            if not info["login"] or str(info.get("uid")) != account["uid"]:
                login_status = "expired"
                self.db.mark_topic_scan(account, "expired")
            else:
                login_status = "valid"
                scan_day = dt.datetime.now(SHANGHAI).date().isoformat()
                pending, _, _ = client.fetch_topics()
                self.db.save_topic_scan(
                    account,
                    self.topic_items(client, pending),
                    client.scan.get("complete", False),
                    scan_day,
                )
        except Exception:
            login_status = "error"
            self.db.save_login(account, "error")
            self.db.mark_topic_scan(account, "error")
        finally:
            try:
                if client:
                    try:
                        self.db.save_login(
                            account, login_status, client.export_cookies()
                        )
                    finally:
                        client.close()
            finally:
                guard.release()
        scan = self.db.topic_scan(
            account["id"], dt.datetime.now(SHANGHAI).date().isoformat()
        )
        self.db.log(
            account["owner_id"],
            account["id"],
            "topic_scan",
            scan["status"],
            "读取关注超话" if scan["status"] == "success" else "关注超话扫描未完整完成",
        )
        return scan

    def check(self, account):
        if not self.account_lock(account["id"]).acquire(blocking=False):
            return {"status": "busy", "message": "该账号正在执行任务"}
        client = None
        try:
            account = self.db.account(account["id"])
            client = self.client_factory(account["cookies"])
            info = client.login_info()
            status = "valid" if info["login"] else "expired"
            if info["login"] and str(info.get("uid")) != account["uid"]:
                status = "expired"
            self.db.save_login(account, status, client.export_cookies())
            message = "微博登录正常" if status == "valid" else MESSAGES["expired"]
        except Exception:
            status, message = "error", MESSAGES["network_error"]
            self.db.save_login(account, status)
        finally:
            if client:
                client.close()
            self.account_lock(account["id"]).release()
        self.db.log(account["owner_id"], account["id"], "login_check", status, message)
        return {"status": status, "message": message}

    def execute(self, run_id):
        with self.db.connect(write=True) as conn:
            changed = conn.execute(
                "UPDATE runs SET status='running',message='正在签到' WHERE id=? AND status='queued'",
                (run_id,),
            ).rowcount
        if not changed:
            return
        run = self.db.run(run_id)
        acc = self.db.account(run["account_id"])
        counts = {"total": 0, "done_before": 0, "success": 0, "failed": 0, "unknown": 0}
        client, status, scan_rows = None, "failed", None
        with self.account_lock(acc["id"]):
            try:
                if dt.datetime.now(SHANGHAI).date().isoformat() != run["day"]:
                    raise DayBoundary
                # Reload because another request may have refreshed the credentials.
                acc = self.db.account(acc["id"])
                client = self.client_factory(acc["cookies"])
                info = client.login_info()
                if not info["login"] or str(info.get("uid")) != acc["uid"]:
                    status = "expired"
                    self.db.save_login(acc, "expired", client.export_cookies())
                else:
                    self.db.save_login(acc, "valid", client.export_cookies())
                    pending, done, total = client.fetch_topics()
                    scan_rows = self.topic_items(client, pending)
                    selection = self.db.topic_preferences(acc["id"])
                    selected = set(selection["topic_ids"])
                    positions = [
                        index
                        for index, item in enumerate(scan_rows)
                        if selection["mode"] == "all" or item.get("id") in selected
                    ]
                    topic_rows = [dict(scan_rows[index]) for index in positions]
                    position_map = {
                        original: index for index, original in enumerate(positions)
                    }
                    pending = [
                        {
                            **item,
                            "scan_index": item.get("topic_index", index),
                            "topic_index": position_map[item.get("topic_index", index)],
                        }
                        for index, item in enumerate(pending)
                        if item.get("topic_index", index) in position_map
                    ]
                    if selection["mode"] == "selected":
                        found = {item.get("id") for item in topic_rows}
                        cached = self.db.topic_scan(acc["id"], run["day"])["items"]
                        names = {item.get("id"): item["name"] for item in cached}
                        topic_rows += [
                            {
                                "name": names.get(
                                    identifier, "未在关注列表中找到的已选超话"
                                ),
                                "status": "unknown",
                            }
                            for identifier in sorted(selected - found)
                        ]
                        total = len(topic_rows)
                        done = sum(item["status"] == "done" for item in topic_rows)
                    self.db.save_run_topics(run_id, topic_rows)
                    counts.update(
                        total=total,
                        done_before=done,
                        unknown=sum(item["status"] == "unknown" for item in topic_rows)
                        if selection["mode"] == "selected"
                        else len(client.scan.get("unknown", [])),
                    )
                    for index, item in enumerate(pending):
                        if dt.datetime.now(SHANGHAI).date().isoformat() != run["day"]:
                            raise DayBoundary
                        try:
                            ok, _ = client.sign(item)
                        except Exception:
                            counts["failed"] += 1
                            position = item.get("topic_index", index)
                            self.db.set_run_topic(run_id, position, "network_error")
                            scan_rows[item["scan_index"]]["status"] = "unknown"
                            raise
                        counts["success" if ok else "failed"] += 1
                        position = item.get("topic_index", index)
                        self.db.set_run_topic(
                            run_id, position, "success" if ok else "failed"
                        )
                        scan_rows[item["scan_index"]]["status"] = (
                            "done" if ok else "failed"
                        )
                        if index + 1 < len(pending):
                            time.sleep(self.sign_delay)
                    complete = client.scan.get("complete", False)
                    if dt.datetime.now(SHANGHAI).date().isoformat() != run["day"]:
                        raise DayBoundary
                    if total == 0:
                        status = "no_topics"
                    elif (
                        counts["failed"]
                        or counts["unknown"]
                        or not complete
                        or done + counts["success"] < total
                    ):
                        status = "partial" if done + counts["success"] else "failed"
                    else:
                        status = "success"
            except DayBoundary:
                status = "interrupted"
            except Exception:
                status = "network_error"
                self.db.save_login(acc, "error")
            finally:
                if client:
                    try:
                        if scan_rows is not None:
                            self.db.save_topic_scan(
                                acc,
                                scan_rows,
                                client.scan.get("complete", False),
                                run["day"],
                            )
                        # Even error responses may rotate cookies. Never discard a refresh.
                        self.db.save_login(
                            acc,
                            "expired"
                            if status == "expired"
                            else "error"
                            if status == "network_error"
                            else "valid",
                            client.export_cookies(),
                        )
                    finally:
                        client.close()
        with self.db.connect(write=True) as conn:
            conn.execute(
                "UPDATE runs SET status=?,finished_at=?,total=?,done_before=?,success=?,failed=?,unknown=?,message=? WHERE id=?",
                (
                    status,
                    time.time(),
                    counts["total"],
                    counts["done_before"],
                    counts["success"],
                    counts["failed"],
                    counts["unknown"],
                    MESSAGES[status],
                    run_id,
                ),
            )
            if status == "success":
                conn.execute(
                    "UPDATE accounts SET last_success_date=? WHERE id=?",
                    (run["day"], acc["id"]),
                )
            self.db._log(
                conn, acc["owner_id"], acc["id"], "checkin", status, MESSAGES[status]
            )

    def due(self, now=None):
        now = now or dt.datetime.now(SHANGHAI)
        now = now.astimezone(SHANGHAI)
        day = now.date().isoformat()
        with self.db.connect() as conn:
            ids = [
                row[0]
                for row in conn.execute(
                    "SELECT a.id FROM accounts a JOIN plans p ON p.owner_id=a.owner_id WHERE p.enabled=1 "
                    "AND p.time<=? AND a.last_success_date<>? "
                    "AND NOT EXISTS(SELECT 1 FROM topic_preferences t WHERE t.account_id=a.id AND t.mode='selected' AND t.topic_ids='[]') "
                    "AND NOT EXISTS(SELECT 1 FROM runs r WHERE r.account_id=a.id AND r.status IN ('queued','running')) "
                    "AND (SELECT count(*) FROM runs r WHERE r.account_id=a.id AND r.day=? AND r.trigger='scheduled' "
                    "AND coalesce((SELECT scope FROM run_scopes WHERE run_id=r.id),'all')=coalesce((SELECT CASE WHEN mode='all' THEN 'all' ELSE topic_ids END FROM topic_preferences WHERE account_id=a.id),'all'))<3 "
                    "AND NOT EXISTS(SELECT 1 FROM runs r WHERE r.account_id=a.id AND r.day=? AND r.trigger='scheduled' AND coalesce(r.finished_at,r.started_at)>? "
                    "AND coalesce((SELECT scope FROM run_scopes WHERE run_id=r.id),'all')=coalesce((SELECT CASE WHEN mode='all' THEN 'all' ELSE topic_ids END FROM topic_preferences WHERE account_id=a.id),'all'))",
                    (now.strftime("%H:%M"), day, day, day, now.timestamp() - 600),
                )
            ]
        return [self.db.account(account_id) for account_id in ids]

    def tick(self):
        for account in self.due():
            run = self.claim(account, "scheduled")
            if run:
                self.submit(run)

    def monitor(self):
        for account in self.db.accounts():
            if time.time() - account["last_checked"] >= 6 * 3600:
                self.check(account)

    def shutdown(self):
        self.pool.shutdown(wait=True)
