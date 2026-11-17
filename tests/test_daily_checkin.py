"""当天成功防重与北京时间次日恢复；交由后续验收执行。"""

import datetime as dt

import pytest

from portal_tasks import SHANGHAI, AlreadyCheckedIn
from tests.test_calendar import add_run
from tests.test_portal import bind, register


def test_manual_success_is_rejected_even_with_stale_account_snapshot(portal):
    client, app = portal
    user = register(client)
    account = bind(app, user)
    today = dt.datetime.now(SHANGHAI).date()
    add_run(app.state.db, user["id"], account["id"], today.isoformat(), "success")
    with pytest.raises(AlreadyCheckedIn, match="今日已签到"):
        app.state.runner.claim(account, "manual")
    response = client.post(f"/api/accounts/{account['id']}/checkin", json={})
    assert response.status_code == 409
    assert response.json()["detail"] == "今日已签到，请明天再来"
    assert client.get("/api/runs").json()["total"] == 1
    public = client.get("/api/accounts").json()["accounts"][0]
    assert public["last_success_date"] == today.isoformat()


@pytest.mark.parametrize("status", ["failed", "partial"])
def test_incomplete_manual_checkin_can_retry(portal, status):
    client, app = portal
    user = register(client)
    account = bind(app, user)
    today = dt.datetime.now(SHANGHAI).date()
    add_run(app.state.db, user["id"], account["id"], today.isoformat(), status)
    assert app.state.runner.claim(account, "manual") is not None


def test_beijing_midnight_restores_manual_checkin(portal):
    client, app = portal
    user = register(client)
    account = bind(app, user)
    with app.state.db.connect(write=True) as conn:
        conn.execute(
            "UPDATE accounts SET last_success_date='2026-11-17' WHERE id=?",
            (account["id"],),
        )
    before = dt.datetime(2026, 11, 17, 15, 59, 59, tzinfo=dt.timezone.utc)
    after = before + dt.timedelta(seconds=1)
    with pytest.raises(AlreadyCheckedIn):
        app.state.runner.claim(account, "manual", now=before)
    run = app.state.runner.claim(account, "manual", now=after)
    assert run["day"] == "2026-11-18"
