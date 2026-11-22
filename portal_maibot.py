"""Read-only, account-scoped endpoint for the MaiBot integration."""

import datetime as dt
import secrets

from fastapi import APIRouter, HTTPException, Request

from portal_db import MAIBOT_TOKEN_RE
from portal_security import token_digest
from portal_tasks import SHANGHAI

router = APIRouter(prefix="/api/integrations/maibot/v1")


@router.get("/status")
def status(request: Request):
    runtime = request.app.state.db.maibot_runtime()
    if not runtime["ready"]:
        raise HTTPException(503, "麦麦集成未配置")
    scheme, _, candidate = request.headers.get("Authorization", "").partition(" ")
    if (
        scheme.lower() != "bearer"
        or not MAIBOT_TOKEN_RE.fullmatch(candidate)
        or not secrets.compare_digest(token_digest(candidate), runtime["token_hash"])
    ):
        raise HTTPException(
            401, "麦麦集成密钥无效", headers={"WWW-Authenticate": "Bearer"}
        )
    today = dt.datetime.now(SHANGHAI).date().isoformat()
    return {
        "day": today,
        "accounts": request.app.state.db.maibot_snapshot(
            tuple(runtime["account_uids"]), today
        ),
    }
