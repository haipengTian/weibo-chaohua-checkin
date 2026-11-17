"""管理员创建用户及注册开关；隔离数据库，无真实微博请求。"""

import pytest

from portal_db import Database, RegistrationClosed
from tests.test_portal import PASSWORD, login, register


def test_admin_writes_require_administrator(portal):
    client, _ = portal
    body = {"username": "managed_user", "password": PASSWORD}
    assert client.post("/api/admin/users", json=body).status_code == 401
    assert client.get("/api/admin/settings").status_code == 401
    assert (
        client.put(
            "/api/admin/settings", json={"registration_enabled": False}
        ).status_code
        == 401
    )
    register(client)
    assert client.post("/api/admin/users", json=body).status_code == 403
    assert client.get("/api/admin/settings").status_code == 403
    assert (
        client.put(
            "/api/admin/settings", json={"registration_enabled": False}
        ).status_code
        == 403
    )


def test_registration_toggle_persists_and_admin_can_create_users(portal):
    client, app = portal
    assert 'name="registration-enabled" content="true"' in client.get("/login").text
    login(client)
    admin_id = client.get("/api/auth/me").json()["user"]["id"]
    assert (
        client.get("/api/admin/settings").json()["settings"]["registration_enabled"]
        is True
    )
    response = client.put("/api/admin/settings", json={"registration_enabled": False})
    assert response.json() == {"settings": {"registration_enabled": False}}
    assert (
        Database(app.state.db.path.parent).system_settings()["registration_enabled"]
        is False
    )
    assert 'name="registration-enabled" content="false"' in client.get("/login").text
    closed = client.post(
        "/api/auth/register", json={"username": "blocked_user", "password": PASSWORD}
    )
    assert closed.status_code == 403 and closed.json()["code"] == "registration_closed"
    assert app.state.db.user_by_name("blocked_user") is None
    created = client.post(
        "/api/admin/users", json={"username": "managed_user", "password": PASSWORD}
    )
    assert created.status_code == 201
    assert created.json()["user"]["role"] == "user"
    assert PASSWORD not in created.text and "password_hash" not in created.text
    assert "set-cookie" not in created.headers
    assert client.get("/api/auth/me").json()["user"]["id"] == admin_id
    assert app.state.db.plan(created.json()["user"]["id"])["enabled"] is False
    assert (
        client.post(
            "/api/admin/users", json={"username": "MANAGED_USER", "password": PASSWORD}
        ).status_code
        == 409
    )
    client.post("/api/auth/logout", json={})
    login(client, "managed_user")
    assert client.get("/api/accounts").status_code == 200
    client.post("/api/auth/logout", json={})
    login(client)
    client.put("/api/admin/settings", json={"registration_enabled": True})
    client.post("/api/auth/logout", json={})
    register(client, "reopened_user")


def test_admin_write_validation_and_csrf(portal):
    client, _ = portal
    login(client)
    for body in [
        {"username": "managed_user", "password": "short"},
        {"username": "managed_user", "password": PASSWORD, "role": "admin"},
        {"username": "invalid name", "password": PASSWORD},
    ]:
        response = client.post("/api/admin/users", json=body)
        assert response.status_code == 422
        assert PASSWORD not in response.text
    for value in ["false", 0, None]:
        assert (
            client.put(
                "/api/admin/settings", json={"registration_enabled": value}
            ).status_code
            == 422
        )
    assert (
        client.put(
            "/api/admin/settings",
            json={"registration_enabled": False},
            headers={"Origin": "https://evil.example"},
        ).status_code
        == 403
    )
    assert (
        client.post(
            "/api/admin/users",
            json={"username": "managed_user", "password": PASSWORD},
            headers={"Origin": "https://evil.example"},
        ).status_code
        == 403
    )


def test_registration_checks_setting_inside_creation_transaction(portal, monkeypatch):
    _, app = portal
    db = app.state.db
    # 模拟密码散列期间管理员关闭注册，后续写事务仍必须拦截。
    import portal_db

    original = portal_db.hash_password
    admin_id = db.user_by_name("owner")["id"]

    def close_before_insert(password):
        db.set_system_settings(False, admin_id)
        return original(password)

    monkeypatch.setattr(portal_db, "hash_password", close_before_insert)
    with pytest.raises(RegistrationClosed):
        db.create_user("racing_user", PASSWORD, self_registration=True)
    assert db.user_by_name("racing_user") is None
