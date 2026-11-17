import { useEffect, useState } from "react";
import { addMonths, format, getDaysInMonth, parse } from "date-fns";
import {
  Check,
  ChevronLeft,
  ChevronRight,
  Ellipsis,
  Minus,
  X,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Choice } from "./fields";
import "./checkin-calendar.css";

export type CalendarAccount = { id: string; uid: string; nickname: string };
type DayStatus = "success" | "partial" | "failed" | "active" | "none";
type CalendarDay = { date: string; status: DayStatus; attempts: number };
type MonthData = {
  account_id: string;
  month: string;
  today: string;
  days: CalendarDay[];
  summary: { success_days: number; streak: number };
};
type Run = {
  id: string;
  status: string;
  started_at: number;
  trigger: string;
  total: number;
  done_before: number;
  success: number;
  failed: number;
  message: string;
};
type Records = { items: Run[]; total: number; page: number; page_size: number };
const statuses: Record<DayStatus, string> = {
  success: "成功",
  partial: "部分失败",
  failed: "失败",
  active: "执行中",
  none: "无记录",
};
const runStatuses: Record<string, string> = {
  success: "成功",
  partial: "部分失败",
  failed: "失败",
  queued: "等待执行",
  running: "正在签到",
  expired: "登录失效",
  network_error: "网络 / 接口异常",
  no_topics: "未获取到超话",
  interrupted: "任务中断",
};
const iso = (date: Date) => format(date, "yyyy-MM-dd");
const fromIso = (date: string) => parse(date, "yyyy-MM-dd", new Date());
const beijingToday = () =>
  new Intl.DateTimeFormat("en-CA", {
    timeZone: "Asia/Shanghai",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(new Date());

function useResource<T>(url: string, revision: number) {
  const [state, setState] = useState<{
    url: string;
    data?: T;
    error?: string;
    loading: boolean;
  }>({ url: "", loading: false });
  useEffect(() => {
    if (!url) return;
    const controller = new AbortController();
    setState({ url, loading: true });
    (async () => {
      try {
        const response = await fetch(url, { signal: controller.signal });
        if (response.status === 401) {
          location.assign("/login");
          return;
        }
        const data = await response.json();
        if (!response.ok)
          throw new Error(
            typeof data.detail === "string"
              ? data.detail
              : "暂时无法加载，请重试",
          );
        if (!controller.signal.aborted) setState({ url, data, loading: false });
      } catch (error) {
        if (!controller.signal.aborted)
          setState({
            url,
            error:
              error instanceof TypeError
                ? "无法连接服务，请稍后重试"
                : (error as Error).message,
            loading: false,
          });
      }
    })();
    return () => controller.abort();
  }, [url, revision]);
  return state.url === url ? state : { url, loading: !!url };
}

export function CheckinCalendar({
  accounts: initialAccounts,
}: {
  accounts: CalendarAccount[];
}) {
  const [accounts, setAccounts] = useState(initialAccounts);
  const [accountId, setAccountId] = useState(initialAccounts[0]?.id || "");
  const [month, setMonth] = useState(() =>
    fromIso(beijingToday().slice(0, 7) + "-01"),
  );
  const [selected, setSelected] = useState(() => fromIso(beijingToday()));
  const [page, setPage] = useState(1);
  const [revision, setRevision] = useState(0);
  const monthKey = format(month, "yyyy-MM");
  const date = iso(selected);
  const resource = useResource<MonthData>(
    accountId
      ? `/api/calendar?account_id=${encodeURIComponent(accountId)}&month=${monthKey}`
      : "",
    revision,
  );
  const data = resource.data;
  const today = data?.today || beijingToday();
  const days = Object.fromEntries(
    (data?.days || []).map((day) => [day.date, day]),
  );
  const monthDates = Array.from(
    { length: getDaysInMonth(month) },
    (_, index) => `${monthKey}-${String(index + 1).padStart(2, "0")}`,
  );
  const daily = days[date];
  const details = useResource<Records>(
    accountId && data && daily?.attempts
      ? `/api/runs?account_id=${encodeURIComponent(accountId)}&start=${date}&end=${date}&page=${page}&page_size=5`
      : "",
    revision,
  );
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
      setRevision((value) => value + 1);
    };
    document.addEventListener("credit:calendar-refresh", refresh);
    return () =>
      document.removeEventListener("credit:calendar-refresh", refresh);
  }, []);
  function changeMonth(next: Date) {
    setMonth(next);
    setSelected(
      fromIso(
        format(next, "yyyy-MM") === today.slice(0, 7)
          ? today
          : format(next, "yyyy-MM") + "-01",
      ),
    );
    setPage(1);
  }
  return (
    <div className="checkin-calendar" aria-label="签到日历">
      <div className="checkin-calendar-heading">
        <div>
          <h2>签到日历</h2>
          <p>北京时间 · 按微博账号统计</p>
        </div>
        {accounts.length > 0 && (
          <Button
            type="button"
            variant="outline"
            size="sm"
            onClick={() => setRevision((value) => value + 1)}
          >
            刷新日历
          </Button>
        )}
      </div>
      {accounts.length === 0 ? (
        <div className="checkin-calendar-empty">
          <p>绑定微博后，在这里查看每天的签到进度。</p>
          <Button type="button" variant="outline" data-action="bind">
            绑定微博
          </Button>
        </div>
      ) : (
        <>
          <div className="checkin-calendar-toolbar">
            <div className="credit-field">
              <Label htmlFor="calendar-account">微博账号</Label>
              <Choice
                id="calendar-account"
                label="微博账号"
                value={accountId}
                onChange={(value) => {
                  setAccountId(value);
                  setPage(1);
                }}
                options={accounts.map((account) => ({
                  value: account.id,
                  label: `${account.nickname || "微博用户"} · ${account.uid}`,
                }))}
              />
            </div>
            <Button
              variant="ghost"
              size="sm"
              type="button"
              onClick={() => changeMonth(fromIso(today.slice(0, 7) + "-01"))}
            >
              回到本月
            </Button>
          </div>
          {resource.loading && (
            <p className="checkin-calendar-message" role="status">
              正在加载签到日历…
            </p>
          )}
          {resource.error && (
            <div
              className="checkin-calendar-message credit-form-error"
              role="alert"
            >
              {resource.error}{" "}
              <Button
                variant="outline"
                type="button"
                size="sm"
                onClick={() => setRevision((value) => value + 1)}
              >
                重试
              </Button>
            </div>
          )}
          {data && (
            <>
              <div className="checkin-calendar-summary">
                <div>
                  <span>当月成功签到</span>
                  <strong data-testid="calendar-success-days">
                    {data.summary.success_days}
                    <small>天</small>
                  </strong>
                </div>
                <div>
                  <span>当前连续签到</span>
                  <strong data-testid="calendar-streak">
                    {data.summary.streak}
                    <small>天</small>
                  </strong>
                </div>
                <p>每天完整成功计 1 天。今天未成功时，连续天数从昨天起算。</p>
              </div>
            </>
          )}
          <div className="checkin-calendar-body" aria-busy={resource.loading}>
            <div className="checkin-month">
              <div className="checkin-month-heading">
                <h3 aria-live="polite">{format(month, "yyyy年M月")}</h3>
                <div className="checkin-month-navigation">
                  <Button
                    type="button"
                    variant="ghost"
                    size="icon-sm"
                    aria-label="上个月签到日历"
                    onClick={() => changeMonth(addMonths(month, -1))}
                  >
                    <ChevronLeft aria-hidden="true" />
                  </Button>
                  <Button
                    type="button"
                    variant="ghost"
                    size="icon-sm"
                    aria-label="下个月签到日历"
                    disabled={monthKey >= today.slice(0, 7)}
                    onClick={() => changeMonth(addMonths(month, 1))}
                  >
                    <ChevronRight aria-hidden="true" />
                  </Button>
                </div>
              </div>
              <div
                className="checkin-month-grid"
                role="group"
                aria-label="每日签到方格"
              >
                {monthDates.map((day) => {
                  const status = days[day]?.status || "none";
                  const future = day > today;
                  const label = `${format(fromIso(day), "yyyy年M月d日")}，${!data ? (resource.error ? "加载失败" : "加载中") : future ? "未到日期" : statuses[status]}`;
                  return (
                    <Button
                      key={day}
                      type="button"
                      variant="outline"
                      size="icon"
                      className={`checkin-tile ${status}`}
                      disabled={!data || future}
                      aria-label={label}
                      title={label}
                      aria-pressed={day === date}
                      aria-current={day === today ? "date" : undefined}
                      onClick={() => {
                        setSelected(fromIso(day));
                        setPage(1);
                      }}
                    >
                      {status === "success" ? (
                        <Check aria-hidden="true" />
                      ) : status === "partial" ? (
                        <Minus aria-hidden="true" />
                      ) : status === "failed" ? (
                        <X aria-hidden="true" />
                      ) : status === "active" ? (
                        <Ellipsis aria-hidden="true" />
                      ) : (
                        <span>{day.slice(-2)}</span>
                      )}
                    </Button>
                  );
                })}
              </div>
              <div className="checkin-calendar-legend">
                {(Object.entries(statuses) as [DayStatus, string][]).map(
                  ([status, label]) => (
                    <span key={status}>
                      <i
                        className={`checkin-legend-cell ${status}`}
                        aria-hidden="true"
                      />
                      {label}
                    </span>
                  ),
                )}
              </div>
            </div>
            <section className="checkin-day-details" aria-label="当日签到明细">
              <div className="checkin-day-heading">
                <h3>
                  {format(selected, "M月d日")}
                  <small>签到明细</small>
                </h3>
                {data && (
                  <span className={`checkin-status ${daily?.status || "none"}`}>
                    {statuses[daily?.status || "none"]}
                  </span>
                )}
              </div>
              {!resource.loading &&
                !resource.error &&
                daily?.attempts === 0 && (
                  <p className="checkin-day-empty">当天没有签到记录</p>
                )}
              {details.loading && (
                <p className="checkin-day-empty" role="status">
                  正在加载当天明细…
                </p>
              )}
              {details.error && (
                <div
                  className="checkin-calendar-message credit-form-error"
                  role="alert"
                >
                  {details.error}
                  <Button
                    type="button"
                    variant="outline"
                    size="sm"
                    onClick={() => setRevision((value) => value + 1)}
                  >
                    重试
                  </Button>
                </div>
              )}
              {details.data && (
                <>
                  <p className="checkin-day-count">
                    当天共 {details.data.total} 次执行
                  </p>
                  <ol className="checkin-run-list">
                    {details.data.items.map((run) => (
                      <li key={run.id}>
                        <div>
                          <span className={`badge ${run.status}`}>
                            {runStatuses[run.status] || run.status}
                          </span>
                          <time
                            dateTime={new Date(
                              run.started_at * 1000,
                            ).toISOString()}
                          >
                            {new Intl.DateTimeFormat("zh-CN", {
                              timeZone: "Asia/Shanghai",
                              hour: "2-digit",
                              minute: "2-digit",
                            }).format(run.started_at * 1000)}
                          </time>
                        </div>
                        <p>{run.message}</p>
                        <small>
                          {run.trigger === "scheduled"
                            ? "定时签到"
                            : "手动签到"}{" "}
                          · 已签 {run.done_before} / 新签 {run.success} / 失败{" "}
                          {run.failed} · 共 {run.total} 个超话
                        </small>
                      </li>
                    ))}
                  </ol>
                  {details.data.total > 5 && (
                    <div className="checkin-day-pager">
                      <Button
                        type="button"
                        variant="ghost"
                        size="sm"
                        disabled={page <= 1}
                        onClick={() => setPage((value) => value - 1)}
                      >
                        上一页
                      </Button>
                      <span>第 {page} 页</span>
                      <Button
                        type="button"
                        variant="ghost"
                        size="sm"
                        disabled={page * 5 >= details.data.total}
                        onClick={() => setPage((value) => value + 1)}
                      >
                        下一页
                      </Button>
                    </div>
                  )}
                </>
              )}
            </section>
          </div>
        </>
      )}
    </div>
  );
}
