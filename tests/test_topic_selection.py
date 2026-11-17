"""按微博保存签到范围；回归用例由用户决定何时执行。"""

import datetime as dt

import pytest

from portal_tasks import SHANGHAI, AlreadyCheckedIn
from tests.test_portal import FakeWeibo, bind, register
from weibo import topic_id

FIRST, SECOND, THIRD = ("100808" + letter * 32 for letter in "abc")


class SelectableWeibo(FakeWeibo):
    signed = []

    def fetch_topics(self):
        self.scan = {
            "complete": True,
            "unknown": [],
            "topics": [
                {"id": FIRST, "name": "音乐分享", "status": "done"},
                {"id": SECOND, "name": "测试超话", "status": "pending"},
                {"id": THIRD, "name": "旅行日记", "status": "pending"},
            ],
        }
        return (
            [
                {"name": "测试超话", "scheme": "/second", "topic_index": 1},
                {"name": "旅行日记", "scheme": "/third", "topic_index": 2},
            ],
            1,
            3,
        )

    def sign(self, item):
        self.signed.append(item["name"])
        return super().sign(item)


def setup_account(portal):
    client, app = portal
    user = register(client)
    account = bind(app, user)
    app.state.runner.client_factory = SelectableWeibo
    app.state.runner.sign_delay = 0
    SelectableWeibo.signed = []
    url = f"/api/accounts/{account['id']}/topics"
    assert client.post(url + "/refresh").status_code == 200
    return client, app, account, url


def test_stable_topic_id_comes_from_container_or_button():
    assert topic_id({"scheme": f"sinaweibo://pageinfo?containerid={FIRST}"}) == FIRST
    assert topic_id({"buttons": [{"scheme": f"/button?id%3D{SECOND}"}]}) == SECOND
    assert topic_id({"title": "同名超话", "id": "temporary-card"}) == ""


@pytest.mark.parametrize("trigger", ["manual", "scheduled"])
def test_manual_and_scheduled_only_sign_selected_topics(portal, trigger):
    client, app, account, url = setup_account(portal)
    app.state.db.set_plan(account["owner_id"], True, "00:00")
    response = client.put(
        url + "/selection", json={"mode": "selected", "topic_ids": [THIRD]}
    )
    assert response.status_code == 200
    run = app.state.runner.claim(account, trigger)
    app.state.runner.execute(run["id"])
    result = app.state.db.run(run["id"])
    assert SelectableWeibo.signed == ["旅行日记"]
    assert (
        result["status"],
        result["total"],
        result["success"],
        result["done_before"],
    ) == ("success", 1, 1, 0)
    assert app.state.db.run_topics(run["id"]) == [
        {"name": "旅行日记", "status": "success"}
    ]
    scan = client.get(url).json()["scan"]
    assert len(scan["items"]) == 3
    assert scan["items"][1]["status"] == "pending"
    assert scan["items"][2]["status"] == "done"


def test_empty_selection_pauses_only_this_account(portal):
    client, app, account, url = setup_account(portal)
    app.state.db.set_plan(account["owner_id"], True, "00:00")
    assert (
        client.put(
            url + "/selection", json={"mode": "selected", "topic_ids": []}
        ).status_code
        == 200
    )
    assert client.post(f"/api/accounts/{account['id']}/checkin").status_code == 409
    assert app.state.runner.claim(account, "scheduled") is None
    assert app.state.runner.due() == []
    assert app.state.db.public_accounts(account["owner_id"])[0]["topics_paused"] == 1
    assert SelectableWeibo.signed == []


def test_default_all_and_changed_selection_can_run_again_today(portal):
    client, app, account, url = setup_account(portal)
    assert client.get(url).json()["selection"]["mode"] == "all"
    run = app.state.runner.claim(account, "manual")
    app.state.runner.execute(run["id"])
    assert SelectableWeibo.signed == ["测试超话", "旅行日记"]
    with pytest.raises(AlreadyCheckedIn):
        app.state.runner.claim(account, "manual")
    # A new scope must not inherit an old scope's successful run.
    client.put(url + "/selection", json={"mode": "selected", "topic_ids": [SECOND]})
    assert (
        app.state.db.public_accounts(account["owner_id"])[0]["last_success_date"] == ""
    )
    next_run = app.state.runner.claim(account, "manual")
    assert next_run is not None
    assert (
        client.put(
            url + "/selection", json={"mode": "all", "topic_ids": []}
        ).status_code
        == 409
    )


def test_selection_is_scoped_validated_and_survives_rescan(portal):
    client, app, account, url = setup_account(portal)
    assert (
        client.put(
            url + "/selection", json={"mode": "selected", "topic_ids": [FIRST]}
        ).status_code
        == 200
    )
    client.post(url + "/refresh")
    assert client.get(url).json()["selection"]["topic_ids"] == [FIRST]
    assert (
        client.put(
            url + "/selection",
            json={"mode": "selected", "topic_ids": ["100808unknown"]},
        ).status_code
        == 400
    )
    assert (
        client.put(
            url + "/selection",
            json={"mode": "selected", "topic_ids": ["/button?secret"]},
        ).status_code
        == 422
    )
    register(client, "other_user")
    assert (
        client.put(
            url + "/selection", json={"mode": "all", "topic_ids": []}
        ).status_code
        == 404
    )


def test_switching_away_and_back_keeps_same_scope_daily_success(portal):
    client, app, account, url = setup_account(portal)
    client.put(
        url + "/selection", json={"mode": "selected", "topic_ids": [SECOND, FIRST]}
    )
    run = app.state.runner.claim(account, "manual")
    app.state.runner.execute(run["id"])
    client.put(url + "/selection", json={"mode": "all", "topic_ids": []})
    client.put(
        url + "/selection",
        json={"mode": "selected", "topic_ids": [FIRST, SECOND, FIRST]},
    )
    with pytest.raises(AlreadyCheckedIn):
        app.state.runner.claim(account, "manual")
    assert (
        app.state.db.public_accounts(account["owner_id"])[0]["last_success_date"]
        == dt.datetime.now(SHANGHAI).date().isoformat()
    )


def test_missing_selected_topic_does_not_become_false_success(portal):
    client, app, account, url = setup_account(portal)
    client.put(url + "/selection", json={"mode": "selected", "topic_ids": [THIRD]})
    # A later fetch no longer contains the selected topic.
    app.state.runner.client_factory = FakeWeibo
    run = app.state.runner.claim(account, "manual")
    app.state.runner.execute(run["id"])
    result = app.state.db.run(run["id"])
    assert result["status"] == "failed" and result["unknown"] == 1
    assert app.state.db.run_topics(run["id"])[0]["name"] == "旅行日记"
    assert (
        app.state.db.account(account["id"])["last_success_date"]
        != dt.datetime.now(SHANGHAI).date().isoformat()
    )
