"""平台契约测试；所有微博请求由边界替身提供，不接触真实账号。"""

import datetime as dt
import json
import re
from concurrent.futures import ThreadPoolExecutor

import pytest
import requests
from fastapi.testclient import TestClient

from portal import create_app
from portal_db import BindingConflict, Database
from portal_runtime import service_lock
from portal_security import hash_password, verify_password
from portal_tasks import SHANGHAI
from portal_weibo import PortalWeibo

HEADERS = {"X-Requested-With": "WeiboPortal"}
PASSWORD = "Test-password-2026!"


class FakeWeibo:
    def __init__(self, cookies):
        self.cookies = dict(cookies)
        self.scan = {"unknown": [], "complete": True}

    def login_info(self):
        if self.cookies.get("mode") == "network":
            raise ConnectionError("secret-ticket-must-not-leak")
        return {
            "login": self.cookies.get("mode") != "expired",
            "uid": self.cookies["uid"],
        }

    def get_nickname(self, uid):
        return "微博" + uid

    def fetch_topics(self):
        mode = self.cookies.get("mode")
        if mode == "empty":
            return [], 0, 0
        if mode == "partial_page":
            self.scan["complete"] = False
        return [{"name": "测试超话", "scheme": "/safe"}], 1, 2

    def sign(self, item):
        self.cookies["renewed"] = "yes"
        return self.cookies.get("mode") != "failed", "secret-cookie-must-not-leak"

    def export_cookies(self):
        return self.cookies

    def close(self):
        pass


class FakeQR:
    image = "iVBORw0KGgo="

    def __init__(self):
        self.uid = "10001"

    def poll(self):
        return "confirmed", {"uid": self.uid, "SUB": "private-cookie"}

    def close(self):
        pass


@pytest.fixture
def portal(tmp_path):
    app = create_app(
        tmp_path,
        admin_user="owner",
        admin_password=PASSWORD,
        secure_cookie=False,
        enable_scheduler=False,
        client_factory=FakeWeibo,
        qr_factory=FakeQR,
    )
    with TestClient(app, headers=HEADERS) as client:
        yield client, app


def register(client, name="alice"):
    response = client.post(
        "/api/auth/register", json={"username": name, "password": PASSWORD}
    )
    assert response.status_code == 201, response.text
    return response.json()["user"]


def login(client, name="owner"):
    response = client.post(
        "/api/auth/login", json={"username": name, "password": PASSWORD}
    )
    assert response.status_code == 200, response.text


def bind(app, user, uid="10001", mode="valid"):
    return app.state.db.bind_account(
        user["id"], uid, "微博" + uid, {"uid": uid, "mode": mode}
    )


def test_password_is_salted_and_verified():
    first, second = hash_password(PASSWORD), hash_password(PASSWORD)
    assert first != second and PASSWORD not in first
    assert verify_password(PASSWORD, first)
    assert not verify_password("wrong-password", first)


def test_only_one_scheduler_process_owns_data_directory(tmp_path):
    with service_lock(tmp_path):
        with pytest.raises(RuntimeError, match="进程"):
            with service_lock(tmp_path):
                pass
    with service_lock(tmp_path):
        pass


def test_registration_logout_and_role_escalation(portal):
    client, app = portal
    assert client.get("/api/accounts").status_code == 401
    assert (
        client.post(
            "/api/auth/register",
            json={"username": "alice", "password": PASSWORD, "role": "admin"},
        ).status_code
        == 422
    )
    user = register(client)
    assert user["role"] == "user"
    assert client.get("/api/admin/users").status_code == 403
    assert PASSWORD not in json.dumps(user)
    assert client.post("/api/auth/logout", json={}).status_code == 200
    assert client.get("/api/accounts").status_code == 401
    assert (
        client.post(
            "/api/auth/login", json={"username": "alice", "password": "wrong"}
        ).status_code
        == 401
    )
    login(client, "alice")
    assert client.get("/api/auth/me").json()["user"]["id"] == user["id"]


def test_duplicate_username_is_case_insensitive(portal):
    client, _ = portal
    register(client)
    assert (
        client.post(
            "/api/auth/register", json={"username": "ALICE", "password": PASSWORD}
        ).status_code
        == 409
    )


def test_csrf_and_cookie_security(portal):
    client, _ = portal
    response = client.post(
        "/api/auth/login",
        json={"username": "owner", "password": PASSWORD},
        headers={"Origin": "https://evil.example"},
    )
    assert response.status_code == 403
    response = client.post(
        "/api/auth/login", json={"username": "owner", "password": PASSWORD}
    )
    assert "HttpOnly" in response.headers["set-cookie"]
    assert "SameSite=strict" in response.headers["set-cookie"]
    assert response.headers["cache-control"] == "no-store"


def test_html_style_nonce_matches_policy_and_rotates(portal):
    client, _ = portal
    login(client)
    nonces = set()
    for path in ("/login", "/login", "/", "/admin"):
        response = client.get(path)
        assert response.status_code == 200
        nonce = re.search(r'name="csp-nonce" content="([\w-]+)"', response.text)[1]
        policy = response.headers["content-security-policy"]
        assert f"style-src 'self' 'nonce-{nonce}'" in policy
        assert "script-src 'self';" in policy
        assert "unsafe-inline" not in policy
        assert "__CSP_STYLE_NONCE__" not in response.text
        assert response.headers["cache-control"] == "no-store"
        assert nonce not in nonces
        nonces.add(nonce)


def test_many_accounts_and_unique_owner(portal):
    client, app = portal
    alice = register(client)
    first = bind(app, alice)
    bind(app, alice, "10002")
    same = app.state.db.bind_account(alice["id"], "10001", "新昵称", {"SUB": "new"})
    assert same["id"] == first["id"]
    assert len(client.get("/api/accounts").json()["accounts"]) == 2
    bob = register(client, "bob")
    with pytest.raises(BindingConflict):
        bind(app, bob)
    assert client.get("/api/accounts").json()["accounts"] == []
    assert client.post(f"/api/accounts/{first['id']}/check", json={}).status_code == 404
    assert (
        client.post(f"/api/accounts/{first['id']}/checkin", json={}).status_code == 404
    )
    assert "new" == app.state.db.account(first["id"])["cookies"]["SUB"]


def test_parallel_uid_binding_is_atomic(portal):
    client, app = portal
    users = [register(client, name) for name in ("alice", "bob")]

    def attempt(user):
        try:
            return bind(app, user)["owner_id"]
        except BindingConflict:
            return "conflict"

    with ThreadPoolExecutor(2) as executor:
        results = list(executor.map(attempt, users))
    assert results.count("conflict") == 1
    assert len(app.state.db.accounts()) == 1


def test_qr_session_ownership_and_conflict(portal):
    client, app = portal
    alice = register(client)
    qr = client.post("/api/login/qrcode", json={}).json()
    bob = register(client, "bob")
    assert client.post(f"/api/login/qrcode/{qr['id']}/poll", json={}).status_code == 404
    bind(app, bob)
    login(client, "alice")
    response = client.post(f"/api/login/qrcode/{qr['id']}/poll", json={})
    assert response.status_code == 409
    assert "bob" not in response.text and "private-cookie" not in response.text
    assert app.state.db.accounts(alice["id"]) == []


def test_qr_confirmation_is_single_use(portal):
    client, app = portal
    register(client)
    qr = client.post("/api/login/qrcode", json={}).json()
    result = client.post(f"/api/login/qrcode/{qr['id']}/poll", json={})
    assert result.status_code == 200 and result.json()["status"] == "confirmed"
    assert "SUB" not in result.text
    assert client.post(f"/api/login/qrcode/{qr['id']}/poll", json={}).status_code == 404


def test_plans_are_isolated_validated_and_persisted(portal):
    client, app = portal
    alice = register(client)
    assert (
        client.put("/api/settings", json={"enabled": True, "time": "08:30"}).status_code
        == 200
    )
    assert (
        client.put("/api/settings", json={"enabled": True, "time": "24:00"}).status_code
        == 422
    )
    register(client, "bob")
    assert client.get("/api/settings").json()["plan"]["enabled"] is False
    reopened = Database(app.state.db.path.parent)
    assert reopened.plan(alice["id"])["time"] == "08:30"


@pytest.mark.parametrize(
    "mode,expected",
    [
        ("valid", "success"),
        ("failed", "partial"),
        ("expired", "expired"),
        ("network", "network_error"),
        ("empty", "no_topics"),
        ("partial_page", "partial"),
    ],
)
def test_runner_classifies_and_redacts_results(portal, mode, expected):
    client, app = portal
    user = register(client)
    account = bind(app, user, mode=mode)
    run = app.state.runner.claim(account, "manual")
    app.state.runner.execute(run["id"])
    records = client.get("/api/runs").json()["items"]
    assert records[0]["status"] == expected
    exposed = json.dumps(records) + client.get("/api/logs").text
    assert "secret-" not in exposed and "cookies" not in exposed
    if mode == "valid":
        assert app.state.db.account(account["id"])["cookies"]["renewed"] == "yes"
    if mode == "network":
        assert app.state.db.account(account["id"])["login_status"] == "error"


def test_claim_prevents_duplicate_concurrent_runs(portal):
    client, app = portal
    user = register(client)
    acc = bind(app, user)
    assert app.state.runner.claim(acc, "manual") is not None
    assert app.state.runner.claim(acc, "manual") is None


def test_login_check_reloads_credentials_after_getting_lock(portal):
    client, app = portal
    user = register(client)
    old = bind(app, user)
    app.state.db.save_login(
        old, "valid", {"uid": "10001", "mode": "valid", "rotated": "new"}
    )
    app.state.runner.check(old)
    assert app.state.db.account(old["id"])["cookies"]["rotated"] == "new"


def test_retry_waits_ten_minutes_after_completion(portal):
    client, app = portal
    user = register(client)
    acc = bind(app, user)
    app.state.db.set_plan(user["id"], True, "08:30")
    began = dt.datetime(2026, 11, 17, 9, tzinfo=SHANGHAI)
    finished = began + dt.timedelta(hours=1)
    run = app.state.runner.claim(acc, "scheduled", now=began)
    with app.state.db.connect(write=True) as conn:
        conn.execute(
            "UPDATE runs SET status='failed',finished_at=? WHERE id=?",
            (finished.timestamp(), run["id"]),
        )
    assert app.state.runner.due(finished + dt.timedelta(minutes=1)) == []
    assert (
        app.state.runner.claim(acc, "scheduled", now=finished + dt.timedelta(minutes=1))
        is None
    )
    assert (
        app.state.runner.due(finished + dt.timedelta(minutes=11))[0]["id"] == acc["id"]
    )


def test_platform_sign_propagates_network_failure(monkeypatch):
    client = PortalWeibo({"SUB": "unit-test"})

    def timeout(*args, **kwargs):
        raise requests.Timeout("test timeout")

    monkeypatch.setattr(client, "get_json", timeout)
    try:
        with pytest.raises(requests.Timeout):
            client.sign({"scheme": "/api/container/button"})
    finally:
        client.close()


def test_queued_run_does_not_execute_on_another_beijing_day(portal):
    client, app = portal
    user = register(client)
    acc = bind(app, user)
    yesterday = dt.datetime.now(SHANGHAI) - dt.timedelta(days=1)
    run = app.state.runner.claim(acc, "manual", now=yesterday)
    app.state.runner.execute(run["id"])
    assert app.state.db.run(run["id"])["status"] == "interrupted"
    assert app.state.db.account(acc["id"])["last_success_date"] == ""


def test_schedule_uses_beijing_date_pause_and_daily_dedup(portal):
    client, app = portal
    user = register(client)
    acc = bind(app, user)
    db = app.state.db
    db.set_plan(user["id"], True, "08:30")
    before = dt.datetime.combine(
        dt.datetime.now(SHANGHAI).date(), dt.time(8, 29), SHANGHAI
    )
    after = before + dt.timedelta(minutes=2)
    assert app.state.runner.due(before) == []
    assert [a["id"] for a in app.state.runner.due(after)] == [acc["id"]]
    run = app.state.runner.claim(acc, "scheduled", now=after)
    app.state.runner.execute(run["id"])
    assert app.state.runner.due(after + dt.timedelta(hours=1)) == []
    db.set_plan(user["id"], False, "08:30")
    assert app.state.runner.due(after + dt.timedelta(days=1)) == []


def test_only_three_automatic_attempts_per_day(portal):
    client, app = portal
    user = register(client)
    acc = bind(app, user)
    app.state.db.set_plan(user["id"], True, "00:00")
    now = dt.datetime.combine(dt.datetime.now(SHANGHAI).date(), dt.time(10), SHANGHAI)
    for _ in range(3):
        run = app.state.runner.claim(acc, "scheduled", now=now)
        assert run is not None
        with app.state.db.connect(write=True) as conn:
            conn.execute(
                "UPDATE runs SET status='failed',finished_at=? WHERE id=?",
                (now.timestamp(), run["id"]),
            )
        now += dt.timedelta(minutes=11)
    assert app.state.runner.due(now) == []
    assert app.state.runner.claim(acc, "scheduled", now=now) is None


def test_long_batch_stops_when_beijing_day_changes(portal, monkeypatch):
    import portal_tasks

    client, app = portal
    user = register(client)
    acc = bind(app, user)
    run = app.state.runner.claim(acc, "manual")
    current = [dt.datetime.now(SHANGHAI)]
    real_datetime = dt.datetime

    class Clock(real_datetime):
        @classmethod
        def now(cls, tz=None):
            return current[0]

    class CrossingWeibo(FakeWeibo):
        def fetch_topics(self):
            return [{"scheme": "/one"}, {"scheme": "/two"}], 0, 2

        def sign(self, item):
            current[0] += dt.timedelta(days=1)
            return True, "ok"

    monkeypatch.setattr(portal_tasks.dt, "datetime", Clock)
    app.state.runner.client_factory = CrossingWeibo
    app.state.runner.sign_delay = 0
    app.state.runner.execute(run["id"])
    result = app.state.db.run(run["id"])
    assert result["status"] == "interrupted" and result["success"] == 1
    assert app.state.db.account(acc["id"])["last_success_date"] == ""


def test_qr_expires_without_binding(portal):
    client, app = portal
    user = register(client)
    qr = client.post("/api/login/qrcode", json={}).json()
    app.state.qr_sessions[qr["id"]]["expires"] = 0
    assert (
        client.post(f"/api/login/qrcode/{qr['id']}/poll", json={}).json()["status"]
        == "expired"
    )
    assert app.state.db.accounts(user["id"]) == []
    assert client.post(f"/api/login/qrcode/{qr['id']}/poll", json={}).status_code == 404


def test_restart_retains_plan_and_recovers_pending_run(tmp_path):
    app = create_app(
        tmp_path,
        admin_user="owner",
        admin_password=PASSWORD,
        secure_cookie=False,
        enable_scheduler=False,
        client_factory=FakeWeibo,
    )
    with TestClient(app, headers=HEADERS) as client:
        user = register(client)
        acc = bind(app, user)
        app.state.db.set_plan(user["id"], True, "08:30")
        run = app.state.runner.claim(acc, "manual")
    reopened = create_app(
        tmp_path, secure_cookie=False, enable_scheduler=False, client_factory=FakeWeibo
    )
    with TestClient(reopened, headers=HEADERS):
        assert reopened.state.db.plan(user["id"])["time"] == "08:30"
        assert reopened.state.db.run(run["id"])["status"] == "interrupted"
        assert reopened.state.db.account(acc["id"])["owner_id"] == user["id"]


def test_real_scheduler_has_active_monitor_anchor(tmp_path):
    app = create_app(tmp_path, admin_user="owner", admin_password=PASSWORD)
    with TestClient(app) as client:
        assert client.get("/healthz").json()["ok"]
        assert app.state.scheduler.get_job("monitor").next_run_time is not None
        assert app.state.scheduler.get_job("daily").next_run_time is not None


def test_legacy_weibo_defaults_keep_error_contract(monkeypatch):
    from weibo import WeiboClient

    client = WeiboClient({"SUB": "unit-test"})

    def timeout(*args, **kwargs):
        raise requests.Timeout("unit timeout")

    monkeypatch.setattr(client, "get_json", timeout)
    try:
        assert client.login_info() == {"login": False}
        assert client.sign({"scheme": "/api/container/button"})[0] is False
        assert client.fetch_topics() == ([], 0, 0)
    finally:
        client.session.close()


def test_admin_filters_and_statistics_match(portal):
    client, app = portal
    alice = register(client)
    acc = bind(app, alice)
    run = app.state.runner.claim(acc, "manual")
    app.state.runner.execute(run["id"])
    bob = register(client, "bob")
    assert client.get("/api/runs").json()["total"] == 0
    login(client)
    users = client.get("/api/admin/users?page=1&page_size=1").json()
    assert len(users["items"]) == 1 and users["total"] == 3
    result = client.get(f"/api/admin/runs?user_id={alice['id']}&status=success").json()
    stats = client.get(f"/api/admin/stats?user_id={alice['id']}").json()
    assert result["total"] == stats["runs"] == stats["success"] == 1
    assert client.get(f"/api/admin/runs?user_id={bob['id']}").json()["total"] == 0
    assert "cookies" not in json.dumps(result) and "password_hash" not in json.dumps(
        users
    )
    assert client.get("/api/admin/runs?username=alice&uid=10001").json()["total"] == 1
    assert client.get("/api/admin/runs?username=bob&uid=10001").json()["total"] == 0
    assert client.get("/api/admin/stats?username=bob").json()["accounts"] == 0
    assert client.get("/api/admin/stats?username=missing").json()["runs"] == 0


def test_anomaly_pagination(portal):
    client, app = portal
    alice = register(client)
    for uid in ("10001", "10002"):
        account = bind(app, alice, uid, mode="expired")
        app.state.runner.check(account)
    login(client)
    result = client.get("/api/admin/anomalies?page_size=1").json()
    assert result["total"] == 2 and len(result["items"]) == 1
    assert (
        len(client.get("/api/admin/anomalies?page=2&page_size=1").json()["items"]) == 1
    )


def test_validation_responses_do_not_echo_credentials(portal):
    client, _ = portal
    password = "sensitive-password-" * 20
    result = client.post(
        "/api/auth/register", json={"username": "a", "password": password}
    )
    assert result.status_code == 422 and password not in result.text


def test_new_scan_cannot_be_overwritten_by_old_background_request(portal):
    client, app = portal
    alice = register(client)
    old = bind(app, alice)
    app.state.db.bind_account(
        alice["id"], "10001", "新昵称", {"uid": "10001", "SUB": "new"}
    )
    app.state.db.save_login(old, "expired", {"uid": "10001", "SUB": "old"})
    current = app.state.db.account(old["id"])
    assert current["cookies"]["SUB"] == "new" and current["login_status"] == "valid"


def test_reset_password_revokes_sessions_and_secure_default(tmp_path):
    app = create_app(
        tmp_path, admin_user="owner", admin_password=PASSWORD, enable_scheduler=False
    )
    with TestClient(app, base_url="https://testserver", headers=HEADERS) as client:
        response = client.post(
            "/api/auth/login", json={"username": "owner", "password": PASSWORD}
        )
        assert "Secure" in response.headers["set-cookie"]
        app.state.db.reset_password("owner", "New-password-2026!")
        assert client.get("/api/auth/me").status_code == 401


def test_auth_attempts_are_rate_limited(portal):
    client, _ = portal
    for _ in range(20):
        assert (
            client.post(
                "/api/auth/login", json={"username": "none", "password": "wrong"}
            ).status_code
            == 401
        )
    assert (
        client.post(
            "/api/auth/login", json={"username": "none", "password": "wrong"}
        ).status_code
        == 429
    )


def test_legacy_import_is_explicit_atomic_and_idempotent(tmp_path):
    db = Database(tmp_path)
    db.initialize("owner", PASSWORD)
    source = [
        {
            "id": "old-a",
            "uid": "10001",
            "nickname": "旧微博",
            "cookies": {"SUB": "legacy"},
        }
    ]
    (tmp_path / "accounts.json").write_text(json.dumps(source), encoding="utf-8")
    (tmp_path / "settings.json").write_text(
        json.dumps({"checkin_time": "08:30", "enable_daily": True}), encoding="utf-8"
    )
    assert db.needs_migration()
    report = db.migrate_legacy("owner")
    assert report["accounts"] == 1 and not db.needs_migration()
    assert (tmp_path / "accounts.json").exists()
    owner = db.user_by_name("owner")
    assert db.accounts(owner["id"])[0]["id"] == "old-a"
    assert db.plan(owner["id"])["time"] == "08:30"
    assert db.migrate_legacy("owner")["already_imported"]


def test_invalid_legacy_import_rolls_back(tmp_path):
    db = Database(tmp_path)
    db.initialize("owner", PASSWORD)
    (tmp_path / "accounts.json").write_text(
        json.dumps(
            [
                {"id": "a", "uid": "123", "cookies": {"SUB": "a"}},
                {"id": "b", "uid": "123", "cookies": {"SUB": "b"}},
            ]
        ),
        encoding="utf-8",
    )
    with pytest.raises(ValueError):
        db.migrate_legacy("owner")
    assert db.accounts() == [] and db.needs_migration()


def test_legacy_unknown_topics_do_not_suppress_makeup(tmp_path):
    db = Database(tmp_path)
    db.initialize("owner", PASSWORD)
    source = [
        {
            "id": "old-a",
            "uid": "10001",
            "cookies": {"SUB": "legacy"},
            "last_checkin_date": "2026-11-17",
            "last_result": {"total": 2, "done_before": 0, "success": 0, "failed": []},
        }
    ]
    (tmp_path / "accounts.json").write_text(json.dumps(source), encoding="utf-8")
    db.migrate_legacy("owner")
    assert db.account("old-a")["last_success_date"] == ""
