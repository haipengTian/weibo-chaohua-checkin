"""MaiBot gets only the assigned accounts and confirmed active incidents."""

from fastapi.testclient import TestClient

from portal import create_app
from portal_db import Database

STATUS = "/api/integrations/maibot/v1/status"
TOKEN = "read-only-test-token-0123456789-secret"
AUTH = {"Authorization": f"Bearer {TOKEN}"}


def test_authenticated_today_status_only_for_allowed_uids(monkeypatch, tmp_path):
    monkeypatch.delenv("MAIBOT_READ_TOKEN", raising=False)
    monkeypatch.delenv("MAIBOT_ACCOUNT_UIDS", raising=False)
    app = create_app(
        tmp_path,
        admin_user="owner",
        admin_password="test-password-123",
        enable_scheduler=False,
    )
    with TestClient(app) as client:
        assert client.get(STATUS, headers=AUTH).status_code == 503
        monkeypatch.setenv("MAIBOT_READ_TOKEN", TOKEN)
        assert client.get(STATUS, headers=AUTH).status_code == 503
        monkeypatch.setenv("MAIBOT_ACCOUNT_UIDS", "10001,10003")
        assert client.get(STATUS).status_code == 401
        assert (
            client.get(STATUS, headers={"Authorization": "Bearer Wrong"}).status_code
            == 401
        )
        db = app.state.db
        owner = db.user_by_name("owner")
        other = db.create_user("another", "test-password-123")
        one = db.bind_account(owner["id"], "10001", "允许一", {"SUB": "private-cookie"})
        two = db.bind_account(other["id"], "10002", "拒绝二", {"SUB": "private-cookie"})
        three = db.bind_account(
            owner["id"], "10003", "允许三", {"SUB": "private-cookie"}
        )
        today = client.get(STATUS, headers=AUTH).json()["day"]
        with db.connect(write=True) as conn:
            conn.executemany(
                """INSERT INTO runs(
                    id,user_id,account_id,trigger,day,status,started_at,finished_at,
                    total,done_before,success,failed,unknown,message
                ) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?)""",
                [
                    (
                        "run-old",
                        owner["id"],
                        one["id"],
                        "scheduled",
                        today,
                        "failed",
                        5,
                        6,
                        1,
                        0,
                        0,
                        1,
                        0,
                        "旧失败",
                    ),
                    (
                        "1",
                        owner["id"],
                        one["id"],
                        "manual",
                        today,
                        "partial",
                        10,
                        15,
                        3,
                        1,
                        1,
                        1,
                        0,
                        "部分成功",
                    ),
                    (
                        "2",
                        other["id"],
                        two["id"],
                        "manual",
                        today,
                        "success",
                        15,
                        20,
                        1,
                        0,
                        1,
                        0,
                        0,
                        "忽略",
                    ),
                    (
                        "3",
                        owner["id"],
                        three["id"],
                        "manual",
                        "2026-01-01",
                        "success",
                        20,
                        25,
                        1,
                        0,
                        1,
                        0,
                        0,
                        "历史",
                    ),
                ],
            )
            conn.executemany(
                "INSERT INTO run_topics(run_id,position,name,status) VALUES (?,?,?,?)",
                [
                    ("1", 1, "第二超话", "failed"),
                    ("1", 0, "第一超话", "success"),
                    ("run-old", 0, "旧超话", "failed"),
                ],
            )
        response = client.get(STATUS, headers=AUTH)
        assert response.status_code == 200
        assert response.headers["cache-control"] == "no-store"
        rows = {row["uid"]: row for row in response.json()["accounts"]}
        assert {uid: row["today_status"] for uid, row in rows.items()} == {
            "10001": "partial",
            "10003": "not_run",
        }
        assert rows["10001"]["latest_run"] == {
            "id": "1",
            "trigger": "manual",
            "status": "partial",
            "started_at": 10.0,
            "finished_at": 15.0,
            "total": 3,
            "done_before": 1,
            "success": 1,
            "failed": 1,
            "unknown": 0,
            "message": "部分成功",
            "topics": [
                {"name": "第一超话", "status": "success"},
                {"name": "第二超话", "status": "failed"},
            ],
        }
        assert rows["10003"]["latest_run"] is None
        assert "private-cookie" not in response.text and "拒绝二" not in response.text
        assert client.get("/api/accounts", headers=AUTH).status_code == 401


def test_login_incident_survives_retry_and_restart_until_valid(tmp_path):
    db = Database(tmp_path)
    owner = db.create_user("owner", "test-password-123")
    account = db.bind_account(owner["id"], "10001", "微博", {"SUB": "old"})

    def row():
        return db.maibot_snapshot(["10001"], "2026-11-18")[0]

    db.save_login(account, "error")
    assert row()["login_status"] == "error" and row()["expiration"] is None
    db.save_login(account, "expired")
    incident = row()["expiration"]
    assert incident
    db.save_login(account, "expired")
    db.save_login(account, "error")
    db = Database(tmp_path)
    assert row()["login_status"] == "expired" and row()["expiration"] == incident
    fresh = db.bind_account(owner["id"], "10001", "微博", {"SUB": "new"})
    db.save_login(account, "expired")
    assert row()["login_status"] == "valid" and row()["expiration"] is None
    db.save_login(fresh, "expired")
    assert row()["expiration"]["id"] != incident["id"]
    db.save_login(fresh, "valid")
    assert row()["expiration"] is None


def test_accounts_already_expired_are_available_after_upgrade(tmp_path):
    db = Database(tmp_path)
    owner = db.create_user("owner", "test-password-123")
    account = db.bind_account(owner["id"], "10001", "微博", {"SUB": "old"})
    with db.connect(write=True) as conn:
        conn.execute(
            "UPDATE accounts SET login_status='expired',last_checked=123 WHERE id=?",
            (account["id"],),
        )
    db = Database(tmp_path)
    expired = db.maibot_snapshot(["10001"], "2026-11-18")[0]["expiration"]
    assert expired["detected_at"] == 123
    assert (
        Database(tmp_path).maibot_snapshot(["10001"], "2026-11-18")[0]["expiration"]
        == expired
    )


CSRF = {"X-Requested-With": "WeiboPortal"}


def _login(client: TestClient, username: str, password: str) -> None:
    response = client.post(
        "/api/auth/login",
        json={"username": username, "password": password},
        headers=CSRF,
    )
    assert response.status_code == 200


def test_admin_maibot_auth_and_csrf_guards(monkeypatch, tmp_path):
    monkeypatch.delenv("MAIBOT_READ_TOKEN", raising=False)
    monkeypatch.delenv("MAIBOT_ACCOUNT_UIDS", raising=False)
    app = create_app(
        tmp_path,
        admin_user="owner",
        admin_password="test-password-123",
        secure_cookie=False,
        enable_scheduler=False,
    )
    with TestClient(app) as client:
        # Unauthenticated
        assert client.get("/api/admin/maibot").status_code == 401
        assert (
            client.put(
                "/api/admin/maibot",
                json={"enabled": True, "account_uids": ["10001"]},
                headers=CSRF,
            ).status_code
            == 401
        )
        assert client.post("/api/admin/maibot/token", headers=CSRF).status_code == 401

        # Non-admin user
        app.state.db.create_user("member", "member-password-123")
        _login(client, "member", "member-password-123")
        assert client.get("/api/admin/maibot").status_code == 403
        assert (
            client.put(
                "/api/admin/maibot",
                json={"enabled": True, "account_uids": ["10001"]},
                headers=CSRF,
            ).status_code
            == 403
        )
        assert client.post("/api/admin/maibot/token", headers=CSRF).status_code == 403

        # Admin without X-Requested-With header on write endpoints
        _login(client, "owner", "test-password-123")
        assert (
            client.put(
                "/api/admin/maibot",
                json={"enabled": False, "account_uids": []},
            ).status_code
            == 403
        )
        assert client.post("/api/admin/maibot/token").status_code == 403


def test_admin_maibot_env_fallback_override_and_token_rotation(monkeypatch, tmp_path):
    monkeypatch.setenv("MAIBOT_READ_TOKEN", TOKEN)
    monkeypatch.setenv("MAIBOT_ACCOUNT_UIDS", "10001")
    app = create_app(
        tmp_path,
        admin_user="owner",
        admin_password="test-password-123",
        secure_cookie=False,
        enable_scheduler=False,
    )
    with TestClient(app) as client:
        db = app.state.db
        owner = db.user_by_name("owner")
        other = db.create_user("alice", "alice-password-123")
        acc1 = db.bind_account(owner["id"], "10001", "主号", {"SUB": "secret-1"})
        acc2 = db.bind_account(other["id"], "10002", "小号", {"SUB": "secret-2"})
        db.save_login(acc2, "expired")

        _login(client, "owner", "test-password-123")
        initial = client.get("/api/admin/maibot")
        assert initial.status_code == 200
        assert initial.headers["cache-control"] == "no-store"
        payload = initial.json()
        assert payload["config"] == {
            "enabled": True,
            "account_uids": ["10001"],
            "token_configured": True,
            "token_source": "env",
            "token_updated_at": None,
            "settings_source": "env",
            "ready": True,
        }
        assert "token_hash" not in payload["config"]
        assert TOKEN not in initial.text
        assert "secret-1" not in initial.text

        accounts_by_uid = {item["uid"]: item for item in payload["accounts"]}
        assert set(accounts_by_uid) == {"10001", "10002"}
        assert accounts_by_uid["10001"]["id"] == acc1["id"]
        assert accounts_by_uid["10001"]["nickname"] == "主号"
        assert accounts_by_uid["10001"]["username"] == "owner"
        assert accounts_by_uid["10001"]["login_status"] == "valid"
        assert accounts_by_uid["10002"]["username"] == "alice"
        assert accounts_by_uid["10002"]["login_status"] == "expired"

        # Update authorized UIDs in Admin while preserving env token
        updated = client.put(
            "/api/admin/maibot",
            json={"enabled": True, "account_uids": ["10002", "10002"]},
            headers=CSRF,
        )
        assert updated.status_code == 200
        assert updated.json()["config"]["account_uids"] == ["10002"]
        assert updated.json()["config"]["settings_source"] == "admin"
        assert updated.json()["config"]["token_source"] == "env"
        assert updated.json()["config"]["ready"] is True

        status_res = client.get(STATUS, headers=AUTH)
        assert status_res.status_code == 200
        assert [row["uid"] for row in status_res.json()["accounts"]] == ["10002"]

        # Disabling in Admin overrides env vars -> 503
        disabled = client.put(
            "/api/admin/maibot",
            json={"enabled": False, "account_uids": ["10002"]},
            headers=CSRF,
        )
        assert disabled.status_code == 200
        assert disabled.json()["config"]["ready"] is False
        assert client.get(STATUS, headers=AUTH).status_code == 503

        # Re-enable and rotate token -> overrides env token, plaintext returned once
        assert (
            client.put(
                "/api/admin/maibot",
                json={"enabled": True, "account_uids": ["10001", "10002"]},
                headers=CSRF,
            ).status_code
            == 200
        )
        rotated = client.post("/api/admin/maibot/token", headers=CSRF)
        assert rotated.status_code == 200
        assert rotated.headers["cache-control"] == "no-store"
        rotated_body = rotated.json()
        new_token = rotated_body["token"]
        assert isinstance(new_token, str) and len(new_token) >= 32
        assert rotated_body["config"]["token_source"] == "admin"
        assert rotated_body["config"]["token_updated_at"] is not None
        assert rotated_body["config"]["ready"] is True

        # Subsequent GET never returns plaintext token
        after = client.get("/api/admin/maibot")
        assert after.status_code == 200
        assert new_token not in after.text
        assert after.json()["config"]["token_source"] == "admin"

        # Old env token is now rejected, new rotated token succeeds
        assert client.get(STATUS, headers=AUTH).status_code == 401
        ok = client.get(STATUS, headers={"Authorization": f"Bearer {new_token}"})
        assert ok.status_code == 200
        assert [row["uid"] for row in ok.json()["accounts"]] == ["10001", "10002"]


def test_admin_maibot_validation(monkeypatch, tmp_path):
    monkeypatch.delenv("MAIBOT_READ_TOKEN", raising=False)
    monkeypatch.delenv("MAIBOT_ACCOUNT_UIDS", raising=False)
    app = create_app(
        tmp_path,
        admin_user="owner",
        admin_password="test-password-123",
        secure_cookie=False,
        enable_scheduler=False,
    )
    with TestClient(app) as client:
        _login(client, "owner", "test-password-123")
        # Invalid UID format
        assert (
            client.put(
                "/api/admin/maibot",
                json={"enabled": True, "account_uids": ["not-a-uid"]},
                headers=CSRF,
            ).status_code
            == 422
        )
        # More than 50 UIDs
        assert (
            client.put(
                "/api/admin/maibot",
                json={
                    "enabled": True,
                    "account_uids": [str(10000 + i) for i in range(51)],
                },
                headers=CSRF,
            ).status_code
            == 422
        )
        # Enabled without token or accounts is saved cleanly but not ready (503)
        res = client.put(
            "/api/admin/maibot",
            json={"enabled": True, "account_uids": []},
            headers=CSRF,
        )
        assert res.status_code == 200
        assert res.json()["config"]["ready"] is False
        assert client.get(STATUS, headers=AUTH).status_code == 503
