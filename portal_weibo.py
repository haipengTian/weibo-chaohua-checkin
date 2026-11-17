"""平台使用严格的异常语义，旧面板调用保持原有默认行为。"""

from urllib.parse import urlsplit

import requests

from weibo import QRLogin, WeiboClient


class WeiboSession(requests.Session):
    def send(self, request, **kwargs):
        parsed = urlsplit(request.url)
        host = parsed.hostname or ""
        allowed = ("weibo.com", "weibo.cn", "sina.com.cn", "sinaimg.cn")
        if (
            parsed.scheme != "https"
            or parsed.port not in (None, 443)
            or parsed.username
            or not any(
                host == domain or host.endswith("." + domain) for domain in allowed
            )
        ):
            raise ValueError("微博返回了非受信任的地址")
        return super().send(request, **kwargs)


class PortalQR(QRLogin):
    def __init__(self):
        super().__init__(session=WeiboSession())

    def poll(self):
        return super().poll(strict=True)

    def close(self):
        self.session.close()


class PortalWeibo(WeiboClient):
    def __init__(self, cookies):
        super().__init__(cookies)
        old = self.session
        self.session = WeiboSession()
        self.session.headers.update(old.headers)
        self.session.cookies.update(old.cookies)
        old.close()

    def login_info(self):
        return super().login_info(strict=True)

    def fetch_topics(self):
        return super().fetch_topics(strict=True)

    def sign(self, item):
        scheme = item.get("scheme", "")
        if not scheme.startswith("/") or scheme.startswith("//"):
            return False, "微博签到地址无效"
        return super().sign(item, strict=True)

    def export_cookies(self):
        return self.session.cookies.get_dict()

    def close(self):
        self.session.close()
