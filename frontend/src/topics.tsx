import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Check } from "lucide-react";
import { Choice } from "./fields";
import type { CalendarAccount } from "./checkin-calendar";
import "./topics.css";

type Topic = { id?: string; name: string; status: string };
type Selection = {
  mode: "all" | "selected";
  topic_ids: string[];
  revision: number;
};
type TopicsResponse = { scan: Scan; selection: Selection };
type Scan = {
  items: Topic[];
  status: string;
  scanned_at: number;
  complete: boolean;
  fresh: boolean;
};
const labels: Record<string, string> = {
  done: "今日已签到",
  pending: "待签到",
  failed: "签到失败",
  unknown: "待确认",
  done_before: "此前已签到",
  success: "本次签到成功",
  network_error: "接口异常",
};
const notices: Record<string, string> = {
  unscanned: "尚未扫描关注的超话。",
  scanning: "正在读取微博关注列表…",
  error: "扫描失败，请稍后刷新超话。",
  expired: "微博登录已失效，请重新扫码。",
  partial: "列表未完整读取，当前仅展示已读取的部分，请刷新重试。",
};

async function read<T>(
  url: string,
  signal: AbortSignal,
  method = "GET",
): Promise<T> {
  const response = await fetch(url, {
    method,
    signal,
    headers: { "X-Requested-With": "WeiboPortal" },
  });
  if (response.status === 401) location.assign("/login");
  const data = await response.json();
  if (!response.ok)
    throw new Error(
      typeof data.detail === "string"
        ? data.detail
        : "暂时无法加载，请稍后重试",
    );
  return data;
}

function TopicList({
  items,
  historical = false,
}: {
  items: Topic[];
  historical?: boolean;
}) {
  return (
    <ul className="topic-list">
      {items.map((topic, index) => (
        <li key={index}>
          <span className="topic-name">{topic.name}</span>
          <span className={`topic-status ${topic.status}`}>
            {historical && topic.status === "pending"
              ? "未执行"
              : historical && topic.status === "unknown"
                ? "状态未识别"
                : labels[topic.status] || "待确认"}
          </span>
        </li>
      ))}
    </ul>
  );
}

function SelectableTopics({
  accountId,
  selection,
  allItems,
  items,
  ready,
}: {
  accountId: string;
  selection: Selection;
  allItems: Topic[];
  items: Topic[];
  ready: boolean;
}) {
  // Keep each account's unsaved choices when switching accounts or refreshing scans.
  const [drafts, setDrafts] = useState<Record<string, Selection>>({});
  const [saved, setSaved] = useState<Record<string, Selection>>({});
  const [feedback, setFeedback] = useState<
    Record<string, { saving?: boolean; error?: string; message?: string }>
  >({});
  const base =
    saved[accountId] && saved[accountId].revision > selection.revision
      ? saved[accountId]
      : selection;
  const draft = drafts[accountId] || base;
  const state = feedback[accountId] || {};
  const selected = new Set(draft.topic_ids);
  const dirty =
    draft.mode !== base.mode ||
    [...draft.topic_ids].sort().join(",") !==
      [...base.topic_ids].sort().join(",");
  function update(next: Selection) {
    setDrafts((previous) => ({ ...previous, [accountId]: next }));
    setFeedback((previous) => ({ ...previous, [accountId]: {} }));
  }
  function toggleVisible(checked: boolean) {
    const next = new Set(selected);
    items.forEach((item) => {
      if (item.id) {
        if (checked) next.add(item.id);
        else next.delete(item.id);
      }
    });
    update({ ...draft, topic_ids: [...next] });
  }
  async function save() {
    setFeedback((previous) => ({ ...previous, [accountId]: { saving: true } }));
    try {
      const response = await fetch(
        `/api/accounts/${encodeURIComponent(accountId)}/topics/selection`,
        {
          method: "PUT",
          headers: {
            "X-Requested-With": "WeiboPortal",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            mode: draft.mode,
            topic_ids: draft.mode === "all" ? [] : draft.topic_ids,
          }),
        },
      );
      if (response.status === 401) location.assign("/login");
      const data = await response.json();
      if (!response.ok)
        throw new Error(
          typeof data.detail === "string"
            ? data.detail
            : "保存失败，请稍后重试",
        );
      setSaved((previous) => ({ ...previous, [accountId]: data.selection }));
      setDrafts((previous) => {
        const next = { ...previous };
        delete next[accountId];
        return next;
      });
      setFeedback((previous) => ({
        ...previous,
        [accountId]: { message: "已保存，手动和定时签到均按此范围执行。" },
      }));
      document.dispatchEvent(new CustomEvent("credit:topics-saved"));
    } catch (error) {
      setFeedback((previous) => ({
        ...previous,
        [accountId]: {
          error:
            error instanceof TypeError
              ? "无法连接服务，请稍后重试"
              : (error as Error).message,
        },
      }));
    }
  }
  const missing = draft.topic_ids.filter(
    (id) => !allItems.some((topic) => topic.id === id),
  ).length;
  if (!ready) return null;
  return (
    <div className="topic-selection">
      <div className="selection-settings">
        <div className="credit-field">
          <Label htmlFor="topic-mode">签到范围</Label>
          <Choice
            id="topic-mode"
            label="签到范围"
            value={draft.mode}
            onChange={(mode) => {
              if (!state.saving)
                update({
                  ...draft,
                  mode: mode as Selection["mode"],
                  topic_ids:
                    mode === "selected" && draft.mode === "all"
                      ? allItems.flatMap((topic) =>
                          topic.id ? [topic.id] : [],
                        )
                      : draft.topic_ids,
                });
            }}
            options={[
              { value: "all", label: "全部关注超话" },
              { value: "selected", label: "仅选中的超话" },
            ]}
          />
        </div>
        <div className="selection-actions">
          {dirty && (
            <Button
              type="button"
              size="sm"
              variant="ghost"
              disabled={state.saving}
              onClick={() => update(base)}
            >
              撤销修改
            </Button>
          )}
          <Button
            type="button"
            size="sm"
            disabled={!dirty || state.saving}
            onClick={save}
          >
            {state.saving ? "正在保存…" : "保存签到范围"}
          </Button>
        </div>
      </div>
      <p className="topics-notice">
        {draft.mode === "all"
          ? "包含以后新关注的超话。"
          : `已选 ${selected.size} 个；以后新关注的超话需手动勾选。`}
        {draft.mode === "selected" &&
          !selected.size &&
          "未选择时暂停该微博的手动和定时签到。"}
        {dirty && <strong> 有未保存的修改。</strong>}
      </p>
      {state.error && (
        <p role="alert" className="credit-form-error">
          {state.error}
        </p>
      )}
      {state.message && (
        <p role="status" className="selection-saved">
          {state.message}
        </p>
      )}
      {draft.mode === "selected" && (
        <>
          <div className="selection-bulk">
            <Button
              type="button"
              size="sm"
              variant="outline"
              disabled={state.saving || !items.some((item) => item.id)}
              onClick={() => toggleVisible(true)}
            >
              全选当前结果
            </Button>
            <Button
              type="button"
              size="sm"
              variant="ghost"
              disabled={state.saving || !items.some((item) => item.id)}
              onClick={() => toggleVisible(false)}
            >
              取消当前结果
            </Button>
          </div>
          {missing > 0 && (
            <p className="topics-notice">
              有 {missing} 个已选超话不在当前列表中，请刷新确认。
              <Button
                type="button"
                size="sm"
                variant="ghost"
                disabled={state.saving}
                onClick={() =>
                  update({
                    ...draft,
                    topic_ids: draft.topic_ids.filter((id) =>
                      allItems.some((topic) => topic.id === id),
                    ),
                  })
                }
              >
                移除未显示的选择
              </Button>
            </p>
          )}
        </>
      )}
      {items.length ? (
        <ul className="topic-list">
          {items.map((topic, index) => (
            <li key={topic.id || index}>
              {draft.mode === "selected" ? (
                <Button
                  type="button"
                  variant="ghost"
                  className="topic-choice whitespace-normal h-auto justify-start"
                  role="checkbox"
                  aria-checked={!!topic.id && selected.has(topic.id)}
                  aria-label={topic.name}
                  disabled={!topic.id || state.saving}
                  onClick={() => {
                    const next = new Set(selected);
                    if (next.has(topic.id!)) next.delete(topic.id!);
                    else next.add(topic.id!);
                    update({ ...draft, topic_ids: [...next] });
                  }}
                >
                  <span className="topic-check" aria-hidden="true">
                    {topic.id && selected.has(topic.id) && <Check size={14} />}
                  </span>
                  <span className="topic-name">
                    {topic.name}
                    {!topic.id && <small>缺少超话标识，请刷新后选择</small>}
                  </span>
                </Button>
              ) : (
                <span className="topic-name">{topic.name}</span>
              )}
              <span className={`topic-status ${topic.status}`}>
                {labels[topic.status] || "待确认"}
              </span>
            </li>
          ))}
        </ul>
      ) : (
        <p className="topics-empty">没有可显示的超话</p>
      )}
    </div>
  );
}

export function FollowedTopics({
  accounts: initial,
}: {
  accounts: CalendarAccount[];
}) {
  const [accounts, setAccounts] = useState(initial);
  const [accountId, setAccountId] = useState(initial[0]?.id || "");
  const [search, setSearch] = useState("");
  const [request, setRequest] = useState({
    accountId: "",
    method: "GET",
    revision: 0,
  });
  const [state, setState] = useState<{
    accountId: string;
    scan?: Scan;
    selection?: Selection;
    loading: boolean;
    error?: string;
  }>({ accountId: "", loading: false });
  const current =
    state.accountId === accountId ? state : { accountId, loading: !!accountId };
  const scan = current.scan;
  function reload(method = "GET") {
    setRequest((previous) => ({
      accountId,
      method,
      revision: previous.revision + 1,
    }));
  }
  useEffect(() => {
    if (!accountId) return;
    const controller = new AbortController();
    setState((previous) => ({
      accountId,
      scan: previous.accountId === accountId ? previous.scan : undefined,
      selection:
        previous.accountId === accountId ? previous.selection : undefined,
      loading: true,
    }));
    const method = request.accountId === accountId ? request.method : "GET";
    read<TopicsResponse>(
      `/api/accounts/${encodeURIComponent(accountId)}/topics${method === "POST" ? "/refresh" : ""}`,
      controller.signal,
      method,
    )
      .then(({ scan, selection }) => {
        if (!controller.signal.aborted)
          setState({ accountId, scan, selection, loading: false });
      })
      .catch((error) => {
        if (!controller.signal.aborted)
          setState((previous) => ({
            ...previous,
            loading: false,
            error:
              error instanceof TypeError
                ? "无法连接服务，请稍后重试"
                : error.message,
          }));
      });
    return () => controller.abort();
  }, [accountId, request]);
  useEffect(() => {
    if (!scan || current.loading || current.error) return;
    if (scan.status === "unscanned") {
      setRequest((previous) => ({
        accountId,
        method: "POST",
        revision: previous.revision + 1,
      }));
    } else if (scan.status === "scanning") {
      const timer = setTimeout(
        () =>
          setRequest((previous) => ({
            accountId,
            method: "GET",
            revision: previous.revision + 1,
          })),
        2000,
      );
      return () => clearTimeout(timer);
    }
  }, [accountId, scan, current.loading, current.error]);
  useEffect(() => {
    const refresh = (event: Event) => {
      const next = (event as CustomEvent<{ accounts: CalendarAccount[] }>)
        .detail?.accounts;
      if (next) {
        setAccounts(next);
        setAccountId((current) =>
          next.some((account) => account.id === current)
            ? current
            : next[0]?.id || "",
        );
      }
      setRequest((previous) => ({
        accountId: "",
        method: "GET",
        revision: previous.revision + 1,
      }));
    };
    const select = (event: Event) => {
      setAccountId((event as CustomEvent<{ id: string }>).detail.id);
      setSearch("");
    };
    document.addEventListener("credit:calendar-refresh", refresh);
    document.addEventListener("credit:topics-select", select);
    return () => {
      document.removeEventListener("credit:calendar-refresh", refresh);
      document.removeEventListener("credit:topics-select", select);
    };
  }, []);
  const items = (scan?.items || []).filter((topic) =>
    topic.name.toLocaleLowerCase().includes(search.trim().toLocaleLowerCase()),
  );
  return (
    <section
      id="followed-topics"
      className="followed-topics"
      aria-label="关注的超话"
    >
      <div className="topics-heading">
        <div>
          <h2>关注的超话</h2>
          <p>查看今日状态，设置这个微博需要签到的超话。</p>
        </div>
        {accountId && (
          <Button
            type="button"
            size="sm"
            variant="outline"
            disabled={current.loading || scan?.status === "scanning"}
            onClick={() => reload("POST")}
          >
            {current.loading || scan?.status === "scanning"
              ? "正在扫描…"
              : "刷新超话"}
          </Button>
        )}
      </div>
      {!accounts.length ? (
        <p className="topics-empty">绑定微博后显示你关注的超话。</p>
      ) : (
        <>
          <div className="topics-toolbar">
            <div className="credit-field">
              <Label htmlFor="topics-account">微博账号</Label>
              <Choice
                id="topics-account"
                label="微博账号"
                value={accountId}
                onChange={(value) => {
                  setAccountId(value);
                  setSearch("");
                }}
                options={accounts.map((account) => ({
                  value: account.id,
                  label: `${account.nickname || "微博用户"} · ${account.uid}`,
                }))}
              />
            </div>
            <div className="credit-field">
              <Label htmlFor="topic-search">搜索超话</Label>
              <Input
                id="topic-search"
                type="search"
                placeholder="输入超话名称"
                value={search}
                onChange={(event) => setSearch(event.target.value)}
              />
            </div>
          </div>
          {current.error && (
            <p role="alert" className="credit-form-error">
              {current.error}{" "}
              <Button
                type="button"
                variant="ghost"
                size="sm"
                onClick={() => reload()}
              >
                重试加载
              </Button>
            </p>
          )}
          {scan && notices[scan.status] && (
            <p
              className="topics-notice"
              role={
                scan.status === "error" || scan.status === "expired"
                  ? "alert"
                  : "status"
              }
            >
              {notices[scan.status]}
            </p>
          )}
          {scan?.scanned_at ? (
            <div className="topics-summary">
              <span>
                {scan.complete ? "关注" : "已读取"} {scan.items.length} 个超话
                {scan.fresh
                  ? ` · 今日已签 ${scan.items.filter((topic) => topic.status === "done").length} 个`
                  : " · 今日状态待刷新"}
              </span>
              <span>
                同步于{" "}
                {new Intl.DateTimeFormat("zh-CN", {
                  timeZone: "Asia/Shanghai",
                  month: "2-digit",
                  day: "2-digit",
                  hour: "2-digit",
                  minute: "2-digit",
                }).format(scan.scanned_at * 1000)}
              </span>
            </div>
          ) : null}
          {current.loading && !scan && (
            <p className="topics-empty" role="status">
              正在加载超话…
            </p>
          )}
          <SelectableTopics
            accountId={accountId}
            selection={
              current.selection || { mode: "all", topic_ids: [], revision: 0 }
            }
            allItems={scan?.items || []}
            items={items}
            ready={!!scan && !!current.selection}
          />
          {!items.length && scan?.scanned_at ? (
            <p className="topics-empty">
              {search
                ? "没有匹配的超话"
                : scan.complete
                  ? "当前没有关注的超话"
                  : "暂未获取到超话，请刷新重试"}
            </p>
          ) : null}
        </>
      )}
    </section>
  );
}

export function RunTopics({ runId }: { runId: string }) {
  const [expanded, setExpanded] = useState(false);
  const [revision, setRevision] = useState(0);
  const [data, setData] = useState<{ items: Topic[]; status: string }>();
  const [error, setError] = useState("");
  useEffect(() => {
    if (!expanded) return;
    const controller = new AbortController();
    let timer: ReturnType<typeof setTimeout> | undefined;
    setError("");
    read<{ items: Topic[]; status: string }>(
      `/api/runs/${encodeURIComponent(runId)}/topics`,
      controller.signal,
    )
      .then((result) => {
        if (controller.signal.aborted) return;
        setData(result);
        if (["queued", "running"].includes(result.status))
          timer = setTimeout(() => setRevision((value) => value + 1), 2000);
      })
      .catch((cause) => {
        if (!controller.signal.aborted)
          setError(
            cause instanceof TypeError
              ? "无法连接服务，请稍后重试"
              : cause.message,
          );
      });
    return () => {
      controller.abort();
      clearTimeout(timer);
    };
  }, [expanded, runId, revision]);
  return (
    <div className="run-topics">
      <Button
        type="button"
        variant="ghost"
        size="sm"
        aria-expanded={expanded}
        onClick={() => setExpanded((value) => !value)}
      >
        {expanded ? "收起超话明细" : "查看超话明细"}
      </Button>
      {expanded && (
        <div className="run-topics-content">
          {error ? (
            <p role="alert" className="credit-form-error">
              {error}{" "}
              <Button
                type="button"
                variant="ghost"
                size="sm"
                onClick={() => setRevision((value) => value + 1)}
              >
                重试
              </Button>
            </p>
          ) : !data ? (
            <p role="status">正在加载超话明细…</p>
          ) : data.items.length ? (
            <TopicList items={data.items} historical />
          ) : (
            <p className="topics-notice">此记录暂无逐个超话明细。</p>
          )}
        </div>
      )}
    </div>
  );
}
