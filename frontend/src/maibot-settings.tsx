import { useMemo, useState } from "react";
import type { FormEvent } from "react";
import { Check, Copy, KeyRound, RefreshCw, Search, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import "./maibot-settings.css";

const MAX_UIDS = 50;

export type MaiBotConfig = {
  enabled: boolean;
  account_uids: string[];
  token_configured: boolean;
  token_source: "admin" | "env" | "none";
  token_updated_at: number | null;
  settings_source: "admin" | "env" | "none";
  ready: boolean;
};

export type MaiBotAccount = {
  id: string;
  uid: string;
  nickname: string;
  username: string;
  login_status: string;
  automatic: boolean;
  scheduled_time: string;
};

async function apiRequest<T>(path: string, method: "PUT" | "POST", body?: unknown): Promise<T> {
  const response = await fetch(path, {
    method,
    headers: {
      ...(body !== undefined ? { "Content-Type": "application/json" } : {}),
      "X-Requested-With": "WeiboPortal",
    },
    ...(body !== undefined ? { body: JSON.stringify(body) } : {}),
  });
  let data: Record<string, unknown>;
  try {
    data = (await response.json()) as Record<string, unknown>;
  } catch {
    throw new Error("服务暂时不可用，请稍后重试");
  }
  if (!response.ok) {
    if (response.status === 401) location.assign("/login");
    throw new Error(
      typeof data.detail === "string" ? data.detail : "操作失败，请稍后重试",
    );
  }
  return data as T;
}

function formatBeijingTime(timestamp: number | null): string {
  if (!timestamp) return "";
  try {
    return new Intl.DateTimeFormat("zh-CN", {
      timeZone: "Asia/Shanghai",
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    }).format(new Date(timestamp * 1000));
  } catch {
    return "";
  }
}

function loginStatusMeta(status: string): { label: string; tone: "ok" | "warn" | "bad" | "muted" } {
  if (status === "valid") return { label: "正常", tone: "ok" };
  if (status === "expired") return { label: "已失效", tone: "bad" };
  if (status === "error") return { label: "检测异常", tone: "warn" };
  return { label: status || "未知", tone: "muted" };
}

function integrationStatus(config: MaiBotConfig): {
  label: string;
  tone: "ok" | "warn" | "muted";
  hint?: string;
} {
  if (config.ready) return { label: "运行中", tone: "ok" };
  if (!config.enabled) return { label: "已停用", tone: "muted" };
  if (!config.token_configured) {
    return {
      label: "待生成密钥",
      tone: "warn",
      hint: "请先生成只读密钥并填回麦麦插件配置，接口才会开始对外响应。",
    };
  }
  if (config.account_uids.length === 0) {
    return {
      label: "待选择账号",
      tone: "warn",
      hint: "请至少勾选 1 个授权微博账号并保存，接口才会开始对外响应。",
    };
  }
  return { label: "未就绪", tone: "warn" };
}

function sameUidSet(a: string[], b: string[]): boolean {
  if (a.length !== b.length) return false;
  const setA = new Set(a);
  if (setA.size !== b.length) return false;
  return b.every((uid) => setA.has(uid));
}

async function copyText(text: string): Promise<boolean> {
  if (navigator.clipboard?.writeText) {
    try {
      await navigator.clipboard.writeText(text);
      return true;
    } catch {
      // Fallback below for non-HTTPS or restricted clipboard contexts.
    }
  }
  const area = document.createElement("textarea");
  area.value = text;
  area.setAttribute("readonly", "");
  area.style.position = "fixed";
  area.style.opacity = "0";
  document.body.appendChild(area);
  area.select();
  let ok = false;
  try {
    ok = document.execCommand("copy");
  } catch {
    ok = false;
  } finally {
    document.body.removeChild(area);
  }
  return ok;
}

export function MaiBotSettingsForm({
  config: initialConfig,
  accounts,
}: {
  config: MaiBotConfig;
  accounts: MaiBotAccount[];
}) {
  const [config, setConfig] = useState<MaiBotConfig>(initialConfig);
  const [enabled, setEnabled] = useState(initialConfig.enabled);
  const [selectedUids, setSelectedUids] = useState<string[]>(initialConfig.account_uids);
  const [query, setQuery] = useState("");
  const [saving, setSaving] = useState(false);
  const [saveMessage, setSaveMessage] = useState("");
  const [saveError, setSaveError] = useState("");

  const [rotating, setRotating] = useState(false);
  const [confirmRotate, setConfirmRotate] = useState(false);
  const [freshToken, setFreshToken] = useState("");
  const [copied, setCopied] = useState(false);
  const [tokenError, setTokenError] = useState("");

  const boundUidSet = useMemo(() => new Set(accounts.map((a) => a.uid)), [accounts]);
  const selectedSet = useMemo(() => new Set(selectedUids), [selectedUids]);

  const orphanUids = useMemo(() => {
    const seen = new Set<string>();
    const list: string[] = [];
    for (const uid of [...config.account_uids, ...selectedUids]) {
      if (!boundUidSet.has(uid) && !seen.has(uid)) {
        seen.add(uid);
        list.push(uid);
      }
    }
    return list;
  }, [boundUidSet, config.account_uids, selectedUids]);

  const normalizedQuery = query.trim().toLowerCase();

  const visibleAccounts = useMemo(() => {
    if (!normalizedQuery) return accounts;
    return accounts.filter(
      (account) =>
        account.nickname.toLowerCase().includes(normalizedQuery) ||
        account.uid.toLowerCase().includes(normalizedQuery) ||
        account.username.toLowerCase().includes(normalizedQuery),
    );
  }, [accounts, normalizedQuery]);

  const visibleOrphans = useMemo(() => {
    if (!normalizedQuery) return orphanUids;
    return orphanUids.filter(
      (uid) =>
        uid.toLowerCase().includes(normalizedQuery) || "未绑定".includes(normalizedQuery),
    );
  }, [orphanUids, normalizedQuery]);

  const dirty =
    enabled !== config.enabled || !sameUidSet(selectedUids, config.account_uids);
  const status = integrationStatus(config);
  const busy = saving || rotating;

  function toggleUid(uid: string) {
    setSaveMessage("");
    setSaveError("");
    setSelectedUids((prev) => {
      if (prev.includes(uid)) return prev.filter((item) => item !== uid);
      if (prev.length >= MAX_UIDS) return prev;
      return [...prev, uid];
    });
  }

  function selectAllVisible() {
    setSaveMessage("");
    setSaveError("");
    setSelectedUids((prev) => {
      const next = [...prev];
      const existing = new Set(prev);
      for (const account of visibleAccounts) {
        if (next.length >= MAX_UIDS) break;
        if (!existing.has(account.uid)) {
          existing.add(account.uid);
          next.push(account.uid);
        }
      }
      return next;
    });
  }

  function clearSelected() {
    setSaveMessage("");
    setSaveError("");
    setSelectedUids([]);
  }

  async function handleSave(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    event.stopPropagation();
    setSaving(true);
    setSaveMessage("");
    setSaveError("");
    try {
      const result = await apiRequest<{ config: MaiBotConfig }>(
        "/api/admin/maibot",
        "PUT",
        { enabled, account_uids: selectedUids },
      );
      setConfig(result.config);
      setEnabled(result.config.enabled);
      setSelectedUids(result.config.account_uids);
      if (!result.config.enabled) {
        setSaveMessage("已保存：麦麦集成已停用。");
      } else if (result.config.ready) {
        setSaveMessage(
          `已保存：麦麦集成运行中，已授权 ${result.config.account_uids.length} 个微博账号。`,
        );
      } else if (!result.config.token_configured) {
        setSaveMessage("已保存：请继续生成只读密钥以启用接口。");
      } else {
        setSaveMessage("已保存：请至少勾选 1 个授权微博账号以启用接口。");
      }
    } catch (cause) {
      setSaveError(
        cause instanceof TypeError
          ? "无法连接服务，请稍后重试"
          : (cause as Error).message,
      );
    } finally {
      setSaving(false);
    }
  }

  async function executeRotateToken() {
    setRotating(true);
    setTokenError("");
    setCopied(false);
    try {
      const result = await apiRequest<{ token: string; config: MaiBotConfig }>(
        "/api/admin/maibot/token",
        "POST",
      );
      setConfig(result.config);
      setFreshToken(result.token);
      setConfirmRotate(false);
    } catch (cause) {
      setTokenError(
        cause instanceof TypeError
          ? "无法连接服务，请稍后重试"
          : (cause as Error).message,
      );
    } finally {
      setRotating(false);
    }
  }

  async function handleCopyToken() {
    if (!freshToken) return;
    const ok = await copyText(freshToken);
    if (ok) {
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } else {
      setTokenError("自动复制失败，请手动选中上方密钥复制");
    }
  }

  const tokenStatusText =
    config.token_source === "admin"
      ? `已由管理端生成${config.token_updated_at ? ` · 更新于 ${formatBeijingTime(config.token_updated_at)}` : ""}`
      : config.token_source === "env"
        ? "当前沿用 .env.portal 环境变量密钥"
        : "尚未生成密钥";

  return (
    <form className="maibot-settings" onSubmit={handleSave}>
      <div className="maibot-status-bar">
        <div className="maibot-status-main">
          <span className={`maibot-pill maibot-pill--${status.tone}`}>
            <ShieldCheck className="size-3.5" aria-hidden="true" />
            {status.label}
          </span>
          {config.settings_source === "env" && (
            <span className="maibot-env-note">
              当前沿用 .env.portal 环境变量，保存后改为管理端接管
            </span>
          )}
        </div>
        {dirty && <span className="maibot-dirty-tag">有未保存更改</span>}
      </div>

      {status.hint && <p className="maibot-inline-hint">{status.hint}</p>}

      <fieldset disabled={busy}>
        <div className="credit-switch-row maibot-switch-row">
          <div>
            <Label htmlFor="maibot-enabled">启用麦麦只读接口</Label>
            <p id="maibot-enabled-help">
              开启后，麦麦可按分钟轮询并查询授权账号的今日签到状态与失效提醒；不传输微博 Cookie。
            </p>
          </div>
          <Switch
            id="maibot-enabled"
            checked={enabled}
            onCheckedChange={(checked) => {
              setEnabled(checked);
              setSaveMessage("");
              setSaveError("");
            }}
            aria-describedby="maibot-enabled-help"
          />
        </div>

        <div className="maibot-section">
          <div className="maibot-section-head">
            <div>
              <h3 className="maibot-section-title">
                <KeyRound className="size-3.5" aria-hidden="true" />
                只读密钥
              </h3>
              <p className="maibot-section-desc">{tokenStatusText}</p>
            </div>
            {!confirmRotate && (
              <Button
                type="button"
                variant={config.token_configured ? "outline" : "default"}
                size="sm"
                disabled={busy}
                onClick={() => {
                  setTokenError("");
                  if (config.token_configured) {
                    setConfirmRotate(true);
                  } else {
                    void executeRotateToken();
                  }
                }}
              >
                <RefreshCw className="size-3.5" aria-hidden="true" />
                {rotating
                  ? "正在生成…"
                  : config.token_configured
                    ? "重置密钥"
                    : "生成密钥"}
              </Button>
            )}
          </div>

          {confirmRotate && (
            <div className="maibot-confirm-box" role="alert">
              <p>重置后旧密钥立即失效，需要同步更新麦麦插件中的「只读密钥」并重启麦麦。</p>
              <div className="maibot-confirm-actions">
                <Button
                  type="button"
                  size="sm"
                  variant="destructive"
                  disabled={busy}
                  onClick={() => void executeRotateToken()}
                >
                  {rotating ? "正在重置…" : "确认重置"}
                </Button>
                <Button
                  type="button"
                  size="sm"
                  variant="outline"
                  disabled={busy}
                  onClick={() => setConfirmRotate(false)}
                >
                  取消
                </Button>
              </div>
            </div>
          )}

          {freshToken && (
            <div className="maibot-token-reveal" role="status" aria-live="polite">
              <div className="maibot-token-reveal-head">
                <strong>新只读密钥（仅展示这一次）</strong>
                <div className="maibot-token-actions">
                  <Button
                    type="button"
                    size="sm"
                    variant="outline"
                    onClick={() => void handleCopyToken()}
                  >
                    {copied ? (
                      <>
                        <Check className="size-3.5" aria-hidden="true" />
                        已复制
                      </>
                    ) : (
                      <>
                        <Copy className="size-3.5" aria-hidden="true" />
                        复制密钥
                      </>
                    )}
                  </Button>
                  <Button
                    type="button"
                    size="sm"
                    variant="ghost"
                    onClick={() => setFreshToken("")}
                  >
                    关闭
                  </Button>
                </div>
              </div>
              <code className="maibot-token-code">{freshToken}</code>
              <p className="maibot-token-note">
                请将此密钥填入麦麦管理页「微博超话签到」插件的只读密钥配置中，刷新页面后将无法再次查看明文。
              </p>
            </div>
          )}

          {tokenError && (
            <p className="credit-form-error" role="alert">
              {tokenError}
            </p>
          )}
        </div>

        <div className="maibot-section">
          <div className="maibot-section-head">
            <div>
              <h3 className="maibot-section-title">授权微博账号</h3>
              <p className="maibot-section-desc">
                勾选允许麦麦查询与推送通知的微博账号，最多选择 {MAX_UIDS} 个。
              </p>
            </div>
            <span className="maibot-counter">
              已选 {selectedUids.length} / {MAX_UIDS}
            </span>
          </div>

          <div className="maibot-accounts-toolbar">
            <div className="maibot-search">
              <Search className="size-3.5" aria-hidden="true" />
              <Input
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="搜索微博昵称、UID 或平台用户"
                aria-label="搜索授权微博账号"
                className="h-9 pl-8 text-xs"
              />
            </div>
            <div className="maibot-toolbar-actions">
              <Button
                type="button"
                variant="outline"
                size="sm"
                disabled={
                  busy ||
                  visibleAccounts.length === 0 ||
                  selectedUids.length >= MAX_UIDS
                }
                onClick={selectAllVisible}
              >
                全选
              </Button>
              <Button
                type="button"
                variant="outline"
                size="sm"
                disabled={busy || selectedUids.length === 0}
                onClick={clearSelected}
              >
                清空
              </Button>
            </div>
          </div>

          {accounts.length === 0 && orphanUids.length === 0 ? (
            <div className="maibot-empty">
              当前还没有用户绑定微博账号，绑定后即可在此勾选授权。
            </div>
          ) : visibleAccounts.length === 0 && visibleOrphans.length === 0 ? (
            <div className="maibot-empty">没有匹配的微博账号，试试其他关键词。</div>
          ) : (
            <ul className="maibot-account-list" role="group" aria-label="授权微博账号列表">
              {visibleAccounts.map((account) => {
                const checked = selectedSet.has(account.uid);
                const limitReached = !checked && selectedUids.length >= MAX_UIDS;
                const loginMeta = loginStatusMeta(account.login_status);
                return (
                  <li key={account.id}>
                    <button
                      type="button"
                      role="checkbox"
                      aria-checked={checked}
                      disabled={busy || limitReached}
                      className="maibot-account-row"
                      onClick={() => toggleUid(account.uid)}
                    >
                      <span className="maibot-check" aria-hidden="true">
                        {checked && <Check className="size-3" />}
                      </span>
                      <span className="maibot-account-main">
                        <span className="maibot-account-name">
                          {account.nickname || "微博用户"}
                        </span>
                        <span className="maibot-account-meta">
                          <span className="maibot-mono">{account.uid}</span>
                          <span aria-hidden="true">·</span>
                          <span>{account.username}</span>
                          <span aria-hidden="true">·</span>
                          <span>
                            {account.automatic
                              ? `自动 ${account.scheduled_time}`
                              : "手动"}
                          </span>
                        </span>
                      </span>
                      <span className={`maibot-pill maibot-pill--${loginMeta.tone}`}>
                        {loginMeta.label}
                      </span>
                    </button>
                  </li>
                );
              })}

              {visibleOrphans.map((uid) => {
                const checked = selectedSet.has(uid);
                const limitReached = !checked && selectedUids.length >= MAX_UIDS;
                return (
                  <li key={`orphan-${uid}`}>
                    <button
                      type="button"
                      role="checkbox"
                      aria-checked={checked}
                      disabled={busy || limitReached}
                      className="maibot-account-row"
                      onClick={() => toggleUid(uid)}
                    >
                      <span className="maibot-check" aria-hidden="true">
                        {checked && <Check className="size-3" />}
                      </span>
                      <span className="maibot-account-main">
                        <span className="maibot-account-name">未绑定账号</span>
                        <span className="maibot-account-meta">
                          <span className="maibot-mono">{uid}</span>
                          <span aria-hidden="true">·</span>
                          <span>该 UID 当前未绑定任何平台用户，取消勾选后保存可移除</span>
                        </span>
                      </span>
                      <span className="maibot-pill maibot-pill--muted">未绑定</span>
                    </button>
                  </li>
                );
              })}
            </ul>
          )}
        </div>

        <div className="maibot-footer">
          <div className="maibot-footer-actions">
            <Button type="submit" disabled={busy}>
              {saving ? "正在保存…" : "保存麦麦配置"}
            </Button>
            {dirty && (
              <Button
                type="button"
                variant="ghost"
                size="sm"
                disabled={busy}
                onClick={() => {
                  setEnabled(config.enabled);
                  setSelectedUids(config.account_uids);
                  setSaveMessage("");
                  setSaveError("");
                }}
              >
                撤销修改
              </Button>
            )}
          </div>
          {saveError && (
            <p className="credit-form-error" role="alert">
              {saveError}
            </p>
          )}
          {saveMessage && !saveError && (
            <p className="credit-form-feedback" role="status" aria-live="polite">
              {saveMessage}
            </p>
          )}
        </div>
      </fieldset>
    </form>
  );
}
