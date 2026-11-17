"""仅用于本地浏览器验收：使用隔离目录和微博替身，绝不请求真实微博。"""

import base64
import datetime as dt
import struct
import zlib
from pathlib import Path

import uvicorn

from portal import create_app
from portal_db import Database
from portal_tasks import SHANGHAI
from tests.test_calendar import add_run
from tests.test_portal import PASSWORD, FakeWeibo

ROOT = Path(__file__).resolve().parents[1]


def fixture_image():
    def chunk(kind, data):
        return (
            struct.pack(">I", len(data))
            + kind
            + data
            + struct.pack(">I", zlib.crc32(kind + data))
        )

    # Test-only placeholder, deliberately not a scannable real login QR.
    size = 180
    rows = b"".join(b"\x00" + bytes([240, 240, 240]) * size for _ in range(size))
    png = (
        b"\x89PNG\r\n\x1a\n"
        + chunk(b"IHDR", struct.pack(">IIBBBBB", size, size, 8, 2, 0, 0, 0))
        + chunk(b"IDAT", zlib.compress(rows))
        + chunk(b"IEND", b"")
    )
    return base64.b64encode(png).decode()


class PreviewQR:
    image = fixture_image()

    def poll(self):
        return "confirmed", {"uid": "10003", "mode": "valid"}

    def close(self):
        pass


if __name__ == "__main__":
    directory = ROOT / ".preview" / "browser"
    db = Database(directory)
    db.initialize("owner", PASSWORD)
    if not db.user_by_name("sample_user"):
        sample = db.create_user("sample_user", PASSWORD)
        db.bind_account(
            sample["id"], "10001", "微光收藏家", {"uid": "10001", "mode": "valid"}
        )
        db.bind_account(
            sample["id"], "10002", "橘子汽水", {"uid": "10002", "mode": "expired"}
        )
        db.set_plan(sample["id"], True, "08:30")
    # Calendar-only fixture, separate from the accounts used by other UI tests.
    if not db.user_by_name("calendar_user"):
        calendar_user = db.create_user("calendar_user", PASSWORD)
        first = db.bind_account(
            calendar_user["id"], "20001", "月光收集站", {"uid": "20001"}
        )
        second = db.bind_account(
            calendar_user["id"], "20002", "晚风放映室", {"uid": "20002"}
        )
        today = dt.datetime.now(SHANGHAI).date()
        for offset, status in [
            (0, "failed"),
            (0, "success"),
            (1, "success"),
            (2, "success"),
            (3, "success"),
            (4, "partial"),
            (5, "failed"),
            (7, "success"),
            (8, "success"),
            (9, "network_error"),
            (10, "no_topics"),
            (12, "success"),
        ]:
            add_run(
                db,
                calendar_user["id"],
                first["id"],
                (today - dt.timedelta(days=offset)).isoformat(),
                status,
            )
        for index in range(6):
            add_run(
                db,
                calendar_user["id"],
                second["id"],
                today.isoformat(),
                "failed",
                clock=index + 9,
            )
    app = create_app(
        directory,
        secure_cookie=False,
        enable_scheduler=False,
        client_factory=FakeWeibo,
        qr_factory=PreviewQR,
    )
    uvicorn.run(app, host="127.0.0.1", port=8788)
