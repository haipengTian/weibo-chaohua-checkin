"""Read-only, account-scoped endpoint for the MaiBot integration."""

import datetime as dt
import os
import re
import secrets

from fastapi import APIRouter, HTTPException, Request

from portal_tasks import SHANGHAI

router = APIRouter(prefix="/api/integrations/maibot/v1")


@router.get("/status")
def status(request: Request):
    token = os.environ.get("MAIBOT_READ_TOKEN", "")
    uids = tuple(dict.fromkeys(uid.strip() for uid in os.environ.get("MAIBOT_ACCOUNT_UIDS", "").split(",")))
    if not (
        re.fullmatch(r"[A-Za-z0-9_-]{32,128}", token)
        and 0 < len(uids) <= 50
        and all(re.fullmatch(r"[0-9]{1,32}", uid) for uid in uids)
    ):
        raise HTTPException(503, "麦麦集成未配置")
    scheme, _, candidate = request.headers.get("Authorization", "").partition(" ")
    if (
        scheme.lower() != "bearer"
        or not re.fullmatch(r"[A-Za-z0-9_-]{32,128}", candidate)
        or not secrets.compare_digest(candidate, token)
    ):
        raise HTTPException(401, "麦麦集成密钥无效", headers={"WWW-Authenticate": "Bearer"})
    today = dt.datetime.now(SHANGHAI).date().isoformat()
    return {"day": today, "accounts": request.app.state.db.maibot_snapshot(uids, today)}
