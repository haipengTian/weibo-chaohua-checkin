"""多用户平台入口：uvicorn portal:app --host 127.0.0.1 --port 8788。"""

import datetime as dt
import os
import re
import secrets
import sqlite3
import threading
import time
from contextlib import asynccontextmanager
from pathlib import Path
from typing import Literal

from apscheduler.schedulers.background import BackgroundScheduler
from fastapi import Depends, FastAPI, HTTPException, Query, Request
from fastapi.exceptions import RequestValidationError
from fastapi.responses import HTMLResponse, JSONResponse, RedirectResponse
from fastapi.staticfiles import StaticFiles
from pydantic import BaseModel, ConfigDict, Field, field_validator

from portal_db import (
    MAIBOT_MAX_UIDS,
    MAIBOT_UID_RE,
    AccountBusy,
    BindingConflict,
    Database,
    RegistrationClosed,
    validate_time,
    validate_username,
)
from portal_maibot import router as maibot_router
from portal_runtime import service_lock
from portal_security import DUMMY_PASSWORD, verify_password
from portal_tasks import SHANGHAI, Runner
from portal_weibo import PortalQR, PortalWeibo

ROOT = Path(__file__).resolve().parent
COOKIE = "weibo_portal_session"
SESSION_AGE = 30 * 86400


class Credentials(BaseModel):
    model_config = ConfigDict(extra="forbid")
    username: str = Field(min_length=1, max_length=32)
    password: str = Field(min_length=1, max_length=128)


class Registration(Credentials):
    password: str = Field(min_length=12, max_length=128)

    @field_validator("username")
    @classmethod
    def valid_name(cls, value):
        return validate_username(value)


class PlanBody(BaseModel):
    model_config = ConfigDict(extra="forbid", strict=True)
    enabled: bool
    time: str

    @field_validator("time")
    @classmethod
    def valid_time(cls, value):
        return validate_time(value)


class SystemSettingsBody(BaseModel):
    model_config = ConfigDict(extra="forbid", strict=True)
    registration_enabled: bool


class MaiBotSettingsBody(BaseModel):
    model_config = ConfigDict(extra="forbid", strict=True)
    enabled: bool
    account_uids: list[str] = Field(max_length=MAIBOT_MAX_UIDS)

    @field_validator("account_uids")
    @classmethod
    def valid_uids(cls, values):
        deduped = list(dict.fromkeys(values))
        if any(not MAIBOT_UID_RE.fullmatch(uid) for uid in deduped):
            raise ValueError("微博 UID 格式无效")
        return deduped


class TopicPreferencesBody(BaseModel):
    model_config = ConfigDict(extra="forbid", strict=True)
    mode: str = Field(pattern=r"^(all|selected)$")
    topic_ids: list[str] = Field(max_length=5000)

    @field_validator("topic_ids")
    @classmethod
    def valid_ids(cls, values):
        if any(
            not re.fullmatch(r"100808[0-9a-zA-Z]{1,128}", value) for value in values
        ):
            raise ValueError("超话标识无效，请刷新关注列表")
        return values


def create_app(
    data_dir=None,
    *,
    admin_user=None,
    admin_password=None,
    secure_cookie=None,
    enable_scheduler=True,
    client_factory=PortalWeibo,
    qr_factory=PortalQR,
):
    directory = Path(data_dir or os.environ.get("PORTAL_DATA_DIR") or ROOT / "data")
    secure = (
        secure_cookie
        if secure_cookie is not None
        else os.environ.get("PORTAL_COOKIE_SECURE", "1") != "0"
    )
    qr_sessions, qr_lock = {}, threading.RLock()

    def close_qr(item):
        if item["qr"] is not None:
            item["qr"].close()

    @asynccontextmanager
    async def lifespan(app):
        with service_lock(directory):
            db = Database(directory)
            db.initialize(
                admin_user or os.environ.get("PANEL_USER", "admin"),
                admin_password or os.environ.get("PANEL_PASSWORD", ""),
            )
            if db.needs_migration():
                raise RuntimeError(
                    "检测到旧 accounts.json。请先备份并运行 python portal_manage.py migrate-legacy --owner 原管理员用户名"
                )
            runner = Runner(db, client_factory)
            runner.recover()
            app.state.db, app.state.runner = db, runner
            app.state.qr_sessions = qr_sessions
            scheduler = BackgroundScheduler(timezone=SHANGHAI)
            app.state.scheduler = scheduler
            if enable_scheduler:
                scheduler.add_job(
                    runner.tick,
                    "interval",
                    seconds=30,
                    id="daily",
                    max_instances=1,
                    coalesce=True,
                    next_run_time=dt.datetime.now(SHANGHAI),
                )
                scheduler.add_job(
                    runner.monitor,
                    "interval",
                    minutes=10,
                    id="monitor",
                    max_instances=1,
                    coalesce=True,
                    next_run_time=dt.datetime.now(SHANGHAI) + dt.timedelta(seconds=10),
                )
                scheduler.start()
            try:
                yield
            finally:
                if scheduler.running:
                    scheduler.shutdown(wait=True)
                runner.shutdown()
                with qr_lock:
                    for item in qr_sessions.values():
                        close_qr(item)
                    qr_sessions.clear()

    app = FastAPI(
        title="超话 · 多用户签到平台",
        lifespan=lifespan,
        docs_url=None,
        redoc_url=None,
        openapi_url=None,
    )
    app.include_router(maibot_router)
    app.mount(
        "/assets",
        StaticFiles(directory=ROOT / "static" / "portal"),
        name="portal-assets",
    )

    @app.exception_handler(RequestValidationError)
    async def invalid_request(request, error):
        # Pydantic's default JSON includes the submitted value, including passwords.
        errors = [
            {"loc": list(item["loc"]), "type": item["type"], "msg": item["msg"]}
            for item in error.errors()
        ]
        return JSONResponse({"detail": errors}, status_code=422)

    @app.middleware("http")
    async def browser_security(request, call_next):
        request.state.style_nonce = secrets.token_urlsafe(24)
        if request.method not in ("GET", "HEAD", "OPTIONS"):
            origin = request.headers.get("origin")
            expected = str(request.base_url).rstrip("/")
            if request.headers.get("X-Requested-With") != "WeiboPortal" or (
                origin and origin != expected
            ):
                return JSONResponse(
                    {"detail": "请求来源校验失败，请刷新后重试"}, status_code=403
                )
        response = await call_next(request)
        response.headers["Cache-Control"] = "no-store"
        response.headers["X-Content-Type-Options"] = "nosniff"
        response.headers["Referrer-Policy"] = "no-referrer"
        response.headers["Content-Security-Policy"] = (
            "default-src 'self'; script-src 'self'; "
            f"style-src 'self' 'nonce-{request.state.style_nonce}'; img-src 'self' data:; "
            "connect-src 'self'; frame-ancestors 'none'; base-uri 'none'; form-action 'self'"
        )
        return response

    def current_user(request: Request):
        user = app.state.db.session_user(request.cookies.get(COOKIE, ""))
        if not user:
            raise HTTPException(401, "请先登录平台")
        return user

    def administrator(user=Depends(current_user)):
        if user["role"] != "admin":
            raise HTTPException(403, "此页面仅管理员可访问")
        return user

    def account_for(user, account_id):
        account = app.state.db.account(account_id, user["id"])
        if not account:
            raise HTTPException(404, "未找到微博账号")
        return account

    def rate(key, limit, window=600):
        if not app.state.db.allow_attempt(key, limit, window):
            raise HTTPException(
                429, "操作过于频繁，请稍后重试", headers={"Retry-After": str(window)}
            )

    def auth_response(user, *, status=200):
        response = JSONResponse({"ok": True, "user": user}, status_code=status)
        response.set_cookie(
            COOKIE,
            app.state.db.new_session(user["id"]),
            httponly=True,
            secure=secure,
            samesite="strict",
            max_age=SESSION_AGE,
        )
        return response

    def query_filters(
        user_id=None,
        account_id=None,
        status=None,
        start=None,
        end=None,
        *,
        today=False,
        username=None,
        uid=None,
    ):
        if today and start is None and end is None:
            start = end = dt.datetime.now(SHANGHAI).date()
        if start and end and start > end:
            raise HTTPException(422, "开始日期不能晚于结束日期")
        return dict(
            user_id=user_id,
            account_id=account_id,
            status=status,
            username=username,
            uid=uid,
            since=dt.datetime.combine(start, dt.time(), SHANGHAI).timestamp()
            if start
            else None,
            until=dt.datetime.combine(
                end + dt.timedelta(days=1), dt.time(), SHANGHAI
            ).timestamp()
            if end
            else None,
        )

    @app.get("/healthz")
    def health():
        with app.state.db.connect() as conn:
            conn.execute("SELECT 1").fetchone()
        return {"ok": True}

    @app.get("/login")
    def login_page(request: Request):
        return page("login.html", request)

    def page(filename, request):
        html = (ROOT / "static/portal" / filename).read_text(encoding="utf-8")
        if filename == "login.html":
            html = html.replace(
                "__REGISTRATION_ENABLED__",
                "true"
                if app.state.db.system_settings()["registration_enabled"]
                else "false",
            )
        return HTMLResponse(
            html.replace("__CSP_STYLE_NONCE__", request.state.style_nonce)
        )

    @app.get("/")
    def user_page(request: Request):
        if not app.state.db.session_user(request.cookies.get(COOKIE, "")):
            return RedirectResponse("/login", status_code=302)
        return page("index.html", request)

    @app.get("/admin")
    def admin_page(request: Request):
        user = app.state.db.session_user(request.cookies.get(COOKIE, ""))
        if not user:
            return RedirectResponse("/login?next=admin", status_code=302)
        if user["role"] != "admin":
            return RedirectResponse("/", status_code=302)
        return page("index.html", request)

    @app.post("/api/auth/register")
    def register(body: Registration, request: Request):
        rate("register:" + (request.client.host if request.client else "unknown"), 10)
        try:
            user = app.state.db.create_user(
                body.username, body.password, self_registration=True
            )
        except RegistrationClosed as error:
            return JSONResponse(
                {"detail": str(error), "code": "registration_closed"}, status_code=403
            )
        except sqlite3.IntegrityError:
            raise HTTPException(409, "用户名已存在") from None
        return auth_response(user, status=201)

    @app.post("/api/auth/login")
    def login(body: Credentials, request: Request):
        rate("login:" + (request.client.host if request.client else "unknown"), 20)
        user = app.state.db.user_by_name(body.username)
        valid = verify_password(
            body.password, user["password_hash"] if user else DUMMY_PASSWORD
        )
        if not user or not valid:
            # Do not store attempted usernames or submitted credentials in the log.
            app.state.db.log(None, None, "auth", "failed", "平台登录失败")
            raise HTTPException(401, "用户名或密码错误")
        app.state.db.log(user["id"], None, "auth", "success", "登录平台")
        return auth_response(app.state.db.user(user["id"]))

    @app.get("/api/auth/me")
    def me(user=Depends(current_user)):
        return {"user": user}

    @app.post("/api/auth/logout")
    def logout(request: Request, user=Depends(current_user)):
        app.state.db.revoke_session(request.cookies.get(COOKIE, ""))
        response = JSONResponse({"ok": True})
        response.delete_cookie(COOKIE, secure=secure, httponly=True, samesite="strict")
        return response

    @app.get("/api/accounts")
    def accounts(user=Depends(current_user)):
        return {"accounts": app.state.db.public_accounts(user["id"])}

    @app.post("/api/accounts/{account_id}/check")
    def check_account(account_id: str, user=Depends(current_user)):
        account = account_for(user, account_id)
        rate("check:" + user["id"], 10, 60)
        return app.state.runner.check(account)

    @app.post("/api/accounts/{account_id}/checkin", status_code=202)
    def checkin(account_id: str, user=Depends(current_user)):
        account = account_for(user, account_id)
        rate("checkin:" + user["id"], 10, 60)
        try:
            run = app.state.runner.claim(account, "manual")
        except ValueError as error:
            raise HTTPException(409, str(error)) from None
        if not run:
            raise HTTPException(409, "该微博账号正在签到，请等待完成")
        app.state.runner.submit(run)
        return {"run": run}

    @app.get("/api/accounts/{account_id}/topics")
    def followed_topics(account_id: str, user=Depends(current_user)):
        account_for(user, account_id)
        return {
            "scan": app.state.db.topic_scan(
                account_id, dt.datetime.now(SHANGHAI).date().isoformat()
            ),
            "selection": app.state.db.topic_preferences(account_id),
        }

    @app.put("/api/accounts/{account_id}/topics/selection")
    def save_topic_selection(
        account_id: str, body: TopicPreferencesBody, user=Depends(current_user)
    ):
        account_for(user, account_id)
        rate("topic_settings:" + user["id"], 30, 60)
        try:
            selection = app.state.db.set_topic_preferences(
                account_id, body.mode, body.topic_ids
            )
        except AccountBusy as error:
            raise HTTPException(409, str(error)) from None
        except ValueError as error:
            raise HTTPException(400, str(error)) from None
        return {"selection": selection}

    @app.post("/api/accounts/{account_id}/topics/refresh")
    def refresh_topics(account_id: str, user=Depends(current_user)):
        account = account_for(user, account_id)
        rate("topics:" + user["id"], 10, 60)
        result = app.state.runner.scan_topics(account)
        if result["status"] == "busy":
            raise HTTPException(409, "该账号正在处理任务，请稍后刷新超话")
        return {"scan": result, "selection": app.state.db.topic_preferences(account_id)}

    @app.get("/api/runs/{run_id}/topics")
    def run_topic_details(run_id: str, user=Depends(current_user)):
        run = app.state.db.run(run_id)
        if not run or (user["role"] != "admin" and run["user_id"] != user["id"]):
            raise HTTPException(404, "未找到签到记录")
        return {"items": app.state.db.run_topics(run_id), "status": run["status"]}

    @app.get("/api/settings")
    def get_plan(user=Depends(current_user)):
        return {"plan": app.state.db.plan(user["id"])}

    @app.put("/api/settings")
    def save_plan(body: PlanBody, user=Depends(current_user)):
        rate("plan:" + user["id"], 20, 60)
        return {"plan": app.state.db.set_plan(user["id"], body.enabled, body.time)}

    @app.post("/api/login/qrcode")
    def new_qr(user=Depends(current_user)):
        rate("qr:" + user["id"], 6, 60)
        # Reserve a slot before the upstream request; repeated creates cannot leak sessions.
        with qr_lock:
            for key, item in list(qr_sessions.items()):
                if item["owner"] == user["id"] or item["expires"] < time.time():
                    if not item["lock"].locked():
                        close_qr(item)
                        del qr_sessions[key]
            if any(item["owner"] == user["id"] for item in qr_sessions.values()):
                raise HTTPException(409, "二维码正在验证，请稍后重试")
            if len(qr_sessions) >= 100:
                raise HTTPException(503, "扫码服务繁忙，请稍后再试")
            key = secrets.token_urlsafe(24)
            item = {
                "owner": user["id"],
                "expires": time.time() + 180,
                "qr": None,
                "lock": threading.Lock(),
            }
            item["lock"].acquire()
            qr_sessions[key] = item
        try:
            item["qr"] = qr_factory()
        except Exception:
            with qr_lock:
                qr_sessions.pop(key, None)
            raise HTTPException(502, "获取微博二维码失败，请稍后重试") from None
        finally:
            item["lock"].release()
        app.state.db.log(user["id"], None, "qr", "created", "发起微博扫码")
        return {"id": key, "image": item["qr"].image, "expires_in": 180}

    @app.post("/api/login/qrcode/{qr_id}/poll")
    def poll_qr(qr_id: str, user=Depends(current_user)):
        rate("poll:" + user["id"], 60, 60)
        with qr_lock:
            item = qr_sessions.get(qr_id)
            if not item or item["owner"] != user["id"]:
                raise HTTPException(404, "二维码已结束，请重新获取")
            if not item["lock"].acquire(blocking=False):
                raise HTTPException(409, "二维码正在验证")
        terminal = False
        client = None
        try:
            if item["expires"] < time.time():
                terminal = True
                return {"status": "expired"}
            status, cookies = item["qr"].poll()
            if status in ("waiting", "scanned"):
                return {"status": status}
            terminal = True
            if status in ("expired", "blocked"):
                return {"status": status}
            if status != "confirmed" or not cookies:
                raise HTTPException(502, "微博没有返回有效登录凭据，请重新扫码")
            client = client_factory(cookies)
            info = client.login_info()
            if not info["login"] or not info.get("uid"):
                raise HTTPException(422, "微博登录尚未生效，请重新扫码")
            uid = str(info["uid"])
            nickname = client.get_nickname(uid)
            try:
                account = app.state.db.bind_account(
                    user["id"], uid, nickname, client.export_cookies()
                )
            except BindingConflict:
                app.state.db.log(
                    user["id"],
                    None,
                    "binding",
                    "conflict",
                    "扫码绑定冲突，未更改原归属",
                )
                raise HTTPException(409, "该微博账号已被绑定") from None
            app.state.runner.submit_topic_scan(account)
            return {"status": "confirmed"}
        except HTTPException:
            raise
        except Exception:
            # Unknown failures are not an expired-login signal and must not reveal ticket URLs.
            raise HTTPException(502, "微博验证或网络异常，请稍后重试") from None
        finally:
            if client:
                client.close()
            with qr_lock:
                if terminal:
                    qr_sessions.pop(qr_id, None)
                    close_qr(item)
                item["lock"].release()

    @app.get("/api/calendar")
    def personal_calendar(
        account_id: str = Query(..., min_length=1, max_length=64),
        month: str | None = Query(None, pattern=r"^\d{4}-(0[1-9]|1[0-2])$"),
        period: Literal["month", "year", "two_years", "all"] = "month",
        user=Depends(current_user),
    ):
        account_for(user, account_id)
        today = dt.datetime.now(SHANGHAI).date()
        db = app.state.db
        if period in ("year", "two_years"):
            length = 365 if period == "year" else 730
            return db.checkin_rolling_days(user["id"], account_id, length, today=today)
        if period == "all":
            return db.checkin_history(user["id"], account_id, today=today)
        try:
            first = (
                dt.date.fromisoformat(month + "-01") if month else today.replace(day=1)
            )
        except ValueError:
            raise HTTPException(422, "月份应为有效的 YYYY-MM") from None
        return db.checkin_calendar(user["id"], account_id, first, today=today)

    @app.get("/api/runs")
    def personal_runs(
        page: int = Query(1, ge=1),
        page_size: int = Query(20, ge=1, le=100),
        account_id: str | None = None,
        status: str | None = None,
        uid: str | None = Query(None, max_length=32),
        start: dt.date | None = None,
        end: dt.date | None = None,
        user=Depends(current_user),
    ):
        return app.state.db.records(
            page=page,
            page_size=page_size,
            **query_filters(user["id"], account_id, status, start, end, uid=uid),
        )

    @app.get("/api/logs")
    def personal_logs(
        page: int = Query(1, ge=1),
        page_size: int = Query(20, ge=1, le=100),
        start: dt.date | None = None,
        end: dt.date | None = None,
        user=Depends(current_user),
    ):
        return app.state.db.records(
            logs=True,
            page=page,
            page_size=page_size,
            **query_filters(user["id"], start=start, end=end),
        )

    @app.get("/api/stats")
    def personal_stats(
        start: dt.date | None = None,
        end: dt.date | None = None,
        uid: str | None = Query(None, max_length=32),
        account_id: str | None = None,
        status: str | None = None,
        all_time: bool = False,
        user=Depends(current_user),
    ):
        return app.state.db.stats(
            **query_filters(
                user["id"], account_id, status, start, end, today=not all_time, uid=uid
            )
        )

    @app.get("/api/admin/users")
    def admin_users(
        page: int = Query(1, ge=1),
        page_size: int = Query(20, ge=1, le=100),
        search: str = Query("", max_length=64),
        user=Depends(administrator),
    ):
        return app.state.db.users(page, page_size, search)

    @app.post("/api/admin/users", status_code=201)
    def admin_create_user(body: Registration, user=Depends(administrator)):
        try:
            created = app.state.db.create_user(
                body.username, body.password, created_by=user["id"]
            )
        except sqlite3.IntegrityError:
            raise HTTPException(409, "用户名已存在") from None
        return {"user": created}

    @app.get("/api/admin/settings")
    def admin_settings(user=Depends(administrator)):
        return {"settings": app.state.db.system_settings()}

    @app.put("/api/admin/settings")
    def update_admin_settings(body: SystemSettingsBody, user=Depends(administrator)):
        return {
            "settings": app.state.db.set_system_settings(
                body.registration_enabled, user["id"]
            )
        }

    @app.get("/api/admin/maibot")
    def admin_maibot(user=Depends(administrator)):
        return {
            "config": app.state.db.maibot_config(),
            "accounts": app.state.db.maibot_accounts(),
        }

    @app.put("/api/admin/maibot")
    def update_admin_maibot(body: MaiBotSettingsBody, user=Depends(administrator)):
        return {
            "config": app.state.db.set_maibot_settings(
                body.enabled, body.account_uids, user["id"]
            )
        }

    @app.post("/api/admin/maibot/token")
    def rotate_admin_maibot_token(user=Depends(administrator)):
        return app.state.db.rotate_maibot_token(user["id"])

    @app.get("/api/admin/runs")
    def admin_runs(
        page: int = Query(1, ge=1),
        page_size: int = Query(20, ge=1, le=100),
        user_id: str | None = None,
        account_id: str | None = None,
        status: str | None = None,
        username: str | None = Query(None, max_length=32),
        uid: str | None = Query(None, max_length=32),
        start: dt.date | None = None,
        end: dt.date | None = None,
        user=Depends(administrator),
    ):
        return app.state.db.records(
            page=page,
            page_size=page_size,
            **query_filters(
                user_id, account_id, status, start, end, username=username, uid=uid
            ),
        )

    @app.get("/api/admin/logs")
    def admin_logs(
        page: int = Query(1, ge=1),
        page_size: int = Query(20, ge=1, le=100),
        user_id: str | None = None,
        account_id: str | None = None,
        status: str | None = None,
        username: str | None = Query(None, max_length=32),
        uid: str | None = Query(None, max_length=32),
        start: dt.date | None = None,
        end: dt.date | None = None,
        user=Depends(administrator),
    ):
        return app.state.db.records(
            logs=True,
            page=page,
            page_size=page_size,
            **query_filters(
                user_id, account_id, status, start, end, username=username, uid=uid
            ),
        )

    @app.get("/api/admin/stats")
    def admin_stats(
        user_id: str | None = None,
        account_id: str | None = None,
        status: str | None = None,
        username: str | None = Query(None, max_length=32),
        uid: str | None = Query(None, max_length=32),
        all_time: bool = False,
        start: dt.date | None = None,
        end: dt.date | None = None,
        user=Depends(administrator),
    ):
        return app.state.db.stats(
            **query_filters(
                user_id,
                account_id,
                status,
                start,
                end,
                today=not all_time,
                username=username,
                uid=uid,
            )
        )

    @app.get("/api/admin/anomalies")
    def admin_anomalies(
        kind: Literal["expired", "error", "run_failed"] | None = Query(None),
        page: int = Query(1, ge=1),
        page_size: int = Query(20, ge=1, le=100),
        user=Depends(administrator),
    ):
        return app.state.db.anomalies(kind=kind, page=page, page_size=page_size)

    return app


app = create_app()
