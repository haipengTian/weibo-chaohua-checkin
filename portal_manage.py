"""离线初始化、显式迁移与找回平台密码；通过 getpass 读取密码。"""

import argparse
import getpass
import json
import os
import sqlite3
from pathlib import Path

from portal_db import Database
from portal_runtime import service_lock


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument(
        "--data-dir",
        default=os.environ.get("PORTAL_DATA_DIR", str(Path(__file__).parent / "data")),
    )
    sub = parser.add_subparsers(dest="command", required=True)
    sub.add_parser("init", help="从 PANEL_USER/PANEL_PASSWORD 初始化管理员")
    migrate = sub.add_parser(
        "migrate-legacy", help="备份并将旧 JSON 的账号/计划迁移给指定管理员"
    )
    migrate.add_argument("--owner", required=True)
    reset = sub.add_parser("reset-password", help="交互重置密码并撤销该用户全部会话")
    reset.add_argument("--username", required=True)
    args = parser.parse_args()
    try:
        with service_lock(args.data_dir):
            db = Database(args.data_dir)
            if args.command in ("init", "migrate-legacy"):
                db.initialize(
                    os.environ.get("PANEL_USER", "admin"),
                    os.environ.get("PANEL_PASSWORD", ""),
                )
            if args.command == "migrate-legacy":
                print(
                    json.dumps(
                        db.migrate_legacy(args.owner), ensure_ascii=False, indent=2
                    )
                )
            elif args.command == "reset-password":
                password = getpass.getpass("新密码（12–128 位）: ")
                if password != getpass.getpass("再次输入: "):
                    raise ValueError("两次密码不一致")
                db.reset_password(args.username, password)
                print("密码已重置，旧会话已撤销。")
            else:
                print("管理员已初始化。")
    except (ValueError, OSError, RuntimeError, sqlite3.IntegrityError) as error:
        parser.exit(1, str(error) + "\n")


if __name__ == "__main__":
    main()
