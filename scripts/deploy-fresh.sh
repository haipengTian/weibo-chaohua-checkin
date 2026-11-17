#!/usr/bin/env bash
# 在目标服务器以 root 执行：全新替换旧单面板，不导入旧数据。
set -euo pipefail
umask 077

readonly OLD_DIR=/opt/weibo-checkin
readonly NEW_DIR=/opt/weibo-portal
readonly DOMAIN=wb.thpvip.xyz
readonly RELEASE=portal-v0.1.0
readonly IMAGE=ghcr.io/haipengtian/weibo-chaohua-checkin@sha256:5fec5b7161f83237cc247ef4fa28021c7ede150592f3618cc2c8b094bd49b736
readonly SOURCE=https://raw.githubusercontent.com/haipengTian/weibo-chaohua-checkin

[[ $(id -u) == 0 ]] || { echo '请使用 root 或 sudo bash 运行。' >&2; exit 1; }
[[ -f "$OLD_DIR/compose.yaml" && -f "$OLD_DIR/.env" ]] || {
  echo '未找到原部署 /opt/weibo-checkin/compose.yaml 和 .env，请先核对实际目录。' >&2
  exit 1
}

old() { (cd "$OLD_DIR" && docker compose --env-file .env -f compose.yaml "$@"); }
new() { (cd "$NEW_DIR" && docker compose -p weibo-portal --env-file .env.portal -f compose.yaml "$@"); }

# 已创建的新平台继续使用自己的数据库和密码，不在重跑时覆盖。
install -d -m 700 "$NEW_DIR"
if [[ ! -f "$NEW_DIR/.env.portal" ]]; then
  [[ ! -e "$NEW_DIR/portal-data" ]] || {
    echo '发现新版数据但缺少 .env.portal；请先恢复对应配置，不自动重建密码。' >&2
    exit 1
  }
  password=$(openssl rand -hex 24)
  printf 'PANEL_USER=avatar\nPANEL_PASSWORD=%s\nPORTAL_IMAGE=%s\nFORWARDED_ALLOW_IPS=127.0.0.1\n' \
    "$password" "$IMAGE" > "$NEW_DIR/.env.portal"
  unset password
fi
chmod 600 "$NEW_DIR/.env.portal"
install -d -o 10001 -g 10001 -m 700 "$NEW_DIR/portal-data"

curl --fail --silent --show-error --location --retry 2 \
  "$SOURCE/$RELEASE/compose.portal.yaml" -o "$NEW_DIR/compose.yaml.download"
# 直接复用原端口；生产配置只拉镜像，不需要源码目录。
sed -e '/^    build: \.$/d' \
  -e 's/127.0.0.1:8788:8787/127.0.0.1:8787:8787/' \
  "$NEW_DIR/compose.yaml.download" > "$NEW_DIR/compose.yaml"
rm -- "$NEW_DIR/compose.yaml.download"
old config --quiet
new config --quiet
new pull

# create 不启动应用；先取得本次 Docker 网络的实际网关供可信反代使用。
new create --no-build
gateway=$(docker network inspect weibo-portal_default --format '{{(index .IPAM.Config 0).Gateway}}')
[[ -n "$gateway" ]] || { echo '未取得新版 Docker 网络网关，旧服务未停止。' >&2; exit 1; }
sed -i "s/^FORWARDED_ALLOW_IPS=.*/FORWARDED_ALLOW_IPS=$gateway/" "$NEW_DIR/.env.portal"

restore_on_error() {
  local result=$?
  trap - ERR
  echo '新版启动或检查失败，停止新版并恢复旧服务。' >&2
  if new stop weibo-portal && old up -d --no-build --pull never --wait --wait-timeout 120 weibo-checkin; then
    echo '旧服务已恢复健康。' >&2
  else
    echo '自动恢复未成功，请检查旧服务：cd /opt/weibo-checkin && docker compose logs --tail=80' >&2
  fi
  echo '查看新版日志：cd /opt/weibo-portal && docker compose --env-file .env.portal logs --tail=80' >&2
  exit "$result"
}

trap restore_on_error ERR
old stop weibo-checkin
new up -d --no-build --wait --wait-timeout 180
curl --noproxy '*' --fail --silent --show-error --max-time 10 \
  http://127.0.0.1:8787/healthz
printf '\n'
curl --noproxy '*' --fail --silent --show-error --max-time 15 \
  --resolve "$DOMAIN:443:127.0.0.1" "https://$DOMAIN/login" -o /dev/null
code=$(curl --noproxy '*' --silent --show-error --max-time 15 \
  --resolve "$DOMAIN:443:127.0.0.1" "https://$DOMAIN/api/accounts" -o /dev/null -w '%{http_code}')
[[ "$code" == 401 ]] || { echo "匿名接口预期 401，实际 $code" >&2; false; }
trap - ERR

# 新版健康后才移除旧容器；不删除旧文件或其他服务的镜像、网络和数据。
old rm -f weibo-checkin
new ps
printf '\n新版已替换： https://%s\n' "$DOMAIN"
printf '管理员：avatar\n在本机终端查看管理员密码（不要截图发送）：\n'
printf "sudo sed -n 's/^PANEL_PASSWORD=//p' /opt/weibo-portal/.env.portal\n"
