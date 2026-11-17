"""关注超话与逐个执行结果；不调用真实微博。"""

import datetime as dt

from portal_tasks import SHANGHAI
from tests.test_portal import FakeWeibo, bind, login, register
from weibo import WeiboClient, topic_name


def test_names_and_all_followed_statuses_are_collected(monkeypatch):
    cards = [
        {
            "title_sub": "100808" + "a" * 32,
            "title": "<b>周杰伦</b>",
            "buttons": [{"name": "签到", "scheme": "/safe"}],
        },
        {"title_sub": "旅行 &amp; 生活", "buttons": [{"name": "已签到"}]},
        {
            "title": "音乐分享",
            "scheme": "https://m.weibo.cn/p/index?containerid=100808abc",
        },
    ]
    client = WeiboClient({})
    monkeypatch.setattr(
        client,
        "get_json",
        lambda *args: {"ok": 1, "data": {"cards": [{"card_group": cards}]}},
    )
    try:
        pending, done, total = client.fetch_topics(strict=True)
        assert (done, total) == (1, 3)
        assert pending[0]["name"] == "周杰伦"
        assert pending[0]["topic_index"] == 0
        assert client.scan["topics"] == [
            {"name": "周杰伦", "status": "pending"},
            {"name": "旅行 & 生活", "status": "done"},
            {"id": "100808abc", "name": "音乐分享", "status": "unknown"},
        ]
        assert (
            topic_name({"id": "123", "title_sub": "123", "title": "可读名称"})
            == "可读名称"
        )
    finally:
        client.session.close()


def test_refresh_is_read_only_and_account_scoped(portal):
    client, app = portal
    user = register(client)
    account = bind(app, user)

    class ReadOnlyWeibo(FakeWeibo):
        def sign(self, item):
            raise AssertionError("扫描不应执行签到")

    app.state.runner.client_factory = ReadOnlyWeibo
    response = client.post(f"/api/accounts/{account['id']}/topics/refresh")
    assert response.status_code == 200
    scan = response.json()["scan"]
    assert scan["status"] == "success" and scan["complete"] is True
    assert [item["name"] for item in scan["items"]] == ["音乐分享", "测试超话"]
    assert "scheme" not in response.text and "cookies" not in response.text
    assert app.state.db.records()["total"] == 0
    register(client, "another_user")
    assert client.get(f"/api/accounts/{account['id']}/topics").status_code == 404
    assert (
        client.post(f"/api/accounts/{account['id']}/topics/refresh").status_code == 404
    )


def test_run_keeps_named_results_and_hides_other_owners(portal):
    client, app = portal
    user = register(client)
    account = bind(app, user)
    run = app.state.runner.claim(account, "manual")
    app.state.runner.execute(run["id"])
    url = f"/api/runs/{run['id']}/topics"
    response = client.get(url)
    assert response.json()["items"] == [
        {"name": "音乐分享", "status": "done_before"},
        {"name": "测试超话", "status": "success"},
    ]
    assert (
        "private-cookie" not in response.text and "secret-cookie" not in response.text
    )
    register(client, "another_user")
    assert client.get(url).status_code == 404
    login(client)
    assert client.get(url).status_code == 200


def test_stale_scan_does_not_claim_today_or_overwrite_new_credentials(portal):
    client, app = portal
    user = register(client)
    account = bind(app, user)
    today = dt.datetime.now(SHANGHAI).date()
    topics = [{"name": "音乐分享", "status": "done"}]
    app.state.db.save_topic_scan(
        account, topics, True, (today - dt.timedelta(days=1)).isoformat()
    )
    stale = client.get(f"/api/accounts/{account['id']}/topics").json()["scan"]
    assert stale["fresh"] is False and stale["items"][0]["status"] == "unknown"
    fresh_account = bind(app, user)
    app.state.db.save_topic_scan(fresh_account, topics, True, today.isoformat())
    app.state.db.save_topic_scan(
        account, [{"name": "旧凭据结果", "status": "done"}], True, today.isoformat()
    )
    assert app.state.db.topic_scan(account["id"], today.isoformat())["items"] == topics


def test_failed_refresh_preserves_last_scan_with_error_status(portal):
    client, app = portal
    user = register(client)
    account = bind(app, user)
    client.post(f"/api/accounts/{account['id']}/topics/refresh")
    bind(app, user, mode="network")
    response = client.post(f"/api/accounts/{account['id']}/topics/refresh")
    scan = response.json()["scan"]
    assert scan["status"] == "error" and len(scan["items"]) == 2
    assert scan["fresh"] is False
    assert "secret-ticket" not in response.text


def test_scan_crossing_midnight_keeps_original_day(portal, monkeypatch):
    client, app = portal
    user = register(client)
    account = bind(app, user)
    before = dt.datetime(2026, 11, 17, 23, 59, 59, tzinfo=SHANGHAI)
    after = before + dt.timedelta(seconds=2)

    class Clock(dt.datetime):
        current = before

        @classmethod
        def now(cls, tz=None):
            return cls.current.astimezone(tz) if tz else cls.current

    class MidnightWeibo(FakeWeibo):
        def fetch_topics(self):
            Clock.current = after
            return super().fetch_topics()

    monkeypatch.setattr("portal_tasks.dt.datetime", Clock)
    app.state.runner.client_factory = MidnightWeibo
    scan = client.post(f"/api/accounts/{account['id']}/topics/refresh").json()["scan"]
    assert scan["fresh"] is False
    assert all(item["status"] == "unknown" for item in scan["items"])


def test_failed_scan_still_saves_rotated_cookies(portal):
    client, app = portal
    user = register(client)
    account = bind(app, user)

    class RotatingFailure(FakeWeibo):
        def fetch_topics(self):
            self.cookies["rotated"] = "updated"
            raise ConnectionError("private-cookie-url")

    app.state.runner.client_factory = RotatingFailure
    response = client.post(f"/api/accounts/{account['id']}/topics/refresh")
    assert response.json()["scan"]["status"] == "error"
    assert app.state.db.account(account["id"])["cookies"]["rotated"] == "updated"
    assert "private-cookie-url" not in response.text


def test_qr_binding_queues_automatic_topic_scan(portal, monkeypatch):
    client, app = portal
    user = register(client)
    queued = []
    monkeypatch.setattr(app.state.runner, "submit_topic_scan", queued.append)
    qr = client.post("/api/login/qrcode").json()
    assert (
        client.post(f"/api/login/qrcode/{qr['id']}/poll").json()["status"]
        == "confirmed"
    )
    assert len(queued) == 1 and queued[0]["owner_id"] == user["id"]
