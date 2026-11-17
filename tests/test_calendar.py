"""按微博、北京时间日期汇总的签到月历。"""

import datetime as dt
import uuid

import pytest

from portal_tasks import SHANGHAI
from tests.test_portal import bind, login, register


def add_run(db, user_id, account_id, day, status, *, clock=9):
    date = dt.date.fromisoformat(day)
    timestamp = dt.datetime.combine(date, dt.time(clock), SHANGHAI).timestamp()
    with db.connect(write=True) as conn:
        conn.execute(
            "INSERT INTO runs(id,user_id,account_id,trigger,day,status,started_at,message) "
            "VALUES (?,?,?,'manual',?,?,?,'测试签到记录')",
            (uuid.uuid4().hex, user_id, account_id, day, status, timestamp),
        )


def test_calendar_daily_precedence_retry_dedup_and_cross_month_streak(portal):
    client, app = portal
    alice = register(client)
    first = bind(app, alice)
    second = bind(app, alice, "10002")
    for day, status in [
        ("2026-10-30", "success"),
        ("2026-10-31", "success"),
        ("2026-11-01", "failed"),
        ("2026-11-01", "success"),
        ("2026-11-01", "partial"),
        ("2026-11-02", "success"),
        ("2026-11-03", "network_error"),
        ("2026-11-04", "partial"),
        ("2026-11-04", "failed"),
    ]:
        add_run(app.state.db, alice["id"], first["id"], day, status)
    add_run(app.state.db, alice["id"], second["id"], "2026-11-03", "success")
    data = app.state.db.checkin_calendar(
        alice["id"], first["id"], dt.date(2026, 11, 1), today=dt.date(2026, 11, 2)
    )
    assert data["summary"] == {"success_days": 2, "streak": 4}
    days = {item["date"]: item for item in data["days"]}
    assert len(days) == 30
    assert days["2026-11-01"] == {
        "date": "2026-11-01",
        "status": "success",
        "attempts": 3,
    }
    assert days["2026-11-02"]["status"] == "success"
    assert days["2026-11-03"]["status"] == "failed"
    assert days["2026-11-04"]["status"] == "partial"
    assert days["2026-11-05"]["status"] == "none"
    # Today's failure can still recover; the consecutive run through yesterday remains.
    data = app.state.db.checkin_calendar(
        alice["id"], first["id"], dt.date(2026, 11, 1), today=dt.date(2026, 11, 3)
    )
    assert data["summary"]["streak"] == 4
    data = app.state.db.checkin_calendar(
        alice["id"], first["id"], dt.date(2026, 11, 1), today=dt.date(2026, 11, 4)
    )
    assert data["summary"]["streak"] == 0


def test_calendar_api_owner_boundary_empty_month_and_validation(portal):
    client, app = portal
    alice = register(client)
    account = bind(app, alice)
    add_run(app.state.db, alice["id"], account["id"], "2026-02-01", "no_topics")
    response = client.get(f"/api/calendar?account_id={account['id']}&month=2026-02")
    assert response.status_code == 200
    data = response.json()
    assert len(data["days"]) == 28
    assert data["summary"]["success_days"] == 0
    assert data["days"][0]["status"] == "failed"
    assert "cookies" not in response.text
    empty = client.get(f"/api/calendar?account_id={account['id']}&month=2024-02").json()
    assert len(empty["days"]) == 29
    assert all(day["status"] == "none" for day in empty["days"])
    for month in ("2026-13", "2026-2", "0000-01", "invalid"):
        assert (
            client.get(
                f"/api/calendar?account_id={account['id']}&month={month}"
            ).status_code
            == 422
        )
    assert client.get("/api/calendar").status_code == 422
    register(client, "bob")
    assert client.get(f"/api/calendar?account_id={account['id']}").status_code == 404
    login(
        client
    )  # Admin also cannot use a personal endpoint to access Alice's calendar.
    assert client.get(f"/api/calendar?account_id={account['id']}").status_code == 404
    client.post("/api/auth/logout", json={})
    assert client.get(f"/api/calendar?account_id={account['id']}").status_code == 401


@pytest.mark.parametrize("status", ["queued", "running"])
def test_calendar_marks_pending_runs_and_resolves_month_edges(portal, status):
    client, app = portal
    alice = register(client)
    account = bind(app, alice)
    add_run(app.state.db, alice["id"], account["id"], "2026-12-31", status)
    data = app.state.db.checkin_calendar(
        alice["id"], account["id"], dt.date(2026, 12, 1), today=dt.date(2026, 12, 31)
    )
    assert len(data["days"]) == 31
    assert data["days"][-1]["status"] == "active"
    assert data["summary"] == {"success_days": 0, "streak": 0}
