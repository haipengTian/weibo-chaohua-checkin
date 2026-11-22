import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Choice } from "./fields";
import { DayLegend, MonthGrid, RangeGrid, rangeStart } from "./footprint-charts";
import {
  beijingToday,
  footprintUrl,
  useResource,
  type CalendarAccount,
  type FootprintData,
  type FootprintPeriod,
} from "./checkin-data";
import "./checkin-footprint.css";

const periods = { month: "本月", year: "近一年", two_years: "近两年" } satisfies Record<FootprintPeriod, string>;

function DayCount({ value }: { value: number }) {
  const [animate] = useState(() =>
    value > 0 && window.matchMedia("(prefers-reduced-motion: no-preference)").matches,
  );
  const [count, setCount] = useState(animate ? 0 : value);

  useEffect(() => {
    if (!animate) return;
    const started = performance.now();
    let frame = requestAnimationFrame(function tick(now) {
      const progress = Math.min(1, Math.max(0, now - started) / 520);
      setCount(Math.round(value * (1 - (1 - progress) ** 3)));
      if (progress < 1) frame = requestAnimationFrame(tick);
    });
    return () => cancelAnimationFrame(frame);
  }, [animate, value]);

  return (
    <>
      <span className="footprint-count">
        <span className="footprint-count-target">{value}</span>
        <span className="footprint-count-display" data-animated={animate} aria-hidden="true">{count}</span>
      </span>
      <small>天</small>
    </>
  );
}

export function CheckinFootprint({ accounts: initialAccounts }: { accounts: CalendarAccount[] }) {
  const [accounts, setAccounts] = useState(initialAccounts);
  const [accountId, setAccountId] = useState(initialAccounts[0]?.id || "");
  const [period, setPeriod] = useState<FootprintPeriod>("month");
  const [revision, setRevision] = useState(0);
  const beijingDate = beijingToday();
  const monthKey = beijingDate.slice(0, 7);
  const [year, month] = monthKey.split("-").map(Number);
  const resource = useResource<FootprintData>(footprintUrl(accountId, period, monthKey), revision);
  const data = resource.data;
  const loading = resource.loading && !data;
  const today = data?.today ?? beijingDate;
  const rollingDays = period === "month" ? 0 : period === "year" ? 365 : 730;
  const start = rollingDays ? data?.start ?? rangeStart(today, rollingDays) : "";
  const periodLabel = rollingDays
    ? `${start.replaceAll("-", "/")} – ${today.replaceAll("-", "/")}`
    : `${year}年${month}月`;

  useEffect(() => {
    const refresh = (event: Event) => {
      const next = (event as CustomEvent<{ accounts: CalendarAccount[] }>).detail?.accounts;
      if (next) {
        setAccounts(next);
        setAccountId((current) => next.some((account) => account.id === current)
          ? current : next[0]?.id || "");
      }
      setRevision((value) => value + 1);
    };
    document.addEventListener("credit:calendar-refresh", refresh);
    return () => document.removeEventListener("credit:calendar-refresh", refresh);
  }, []);

  return (
    <section className="card checkin-footprint" aria-labelledby="footprint-heading">
      <Tabs className="gap-4" value={period} onValueChange={(value) => setPeriod(value as FootprintPeriod)}>
        <div className="footprint-heading">
          <h2 id="footprint-heading">签到足迹</h2>
          <p className="footprint-period">{periodLabel} · 北京时间</p>
        </div>
        {!accountId ? (
          <p className="footprint-empty">绑定微博后，在这里查看每天的签到进度。</p>
        ) : (
          <>
            <div className="footprint-toolbar">
              {accounts.length > 1 && (
                <div className="footprint-account">
                  <Choice
                    id="footprint-account"
                    label="签到足迹的微博账号"
                    value={accountId}
                    onChange={setAccountId}
                    options={accounts.map((account) => ({
                      value: account.id,
                      label: `${account.nickname || "微博用户"} · ${account.uid}`,
                    }))}
                  />
                </div>
              )}
              <TabsList aria-label="签到足迹时间范围" className="footprint-ranges h-9 gap-1 rounded-full border-0 bg-muted p-1">
                {Object.entries(periods).map(([value, label]) => (
                  <TabsTrigger key={value} value={value} className="h-full rounded-full px-3 text-xs max-[640px]:px-2">
                    {label}
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>
            <div className="footprint-body" data-period={period}>
              {(() => {
                const elapsed = data ? data.days.filter((day) => day.date <= today) : [];
                const totalElapsed = elapsed.length;
                const successDays = data?.summary.success_days ?? 0;
                const completionRate = totalElapsed
                  ? Math.min(100, Math.round((successDays / totalElapsed) * 100))
                  : 0;
                const abnormalDays = elapsed.filter(
                  (day) => day.status === "partial" || day.status === "failed",
                ).length;
                return (
                  <div className="footprint-metrics-wrap">
                    <dl className="footprint-metrics">
                      <div>
                        <dt>{periods[period]}已签</dt>
                        <dd data-testid="footprint-success-days">
                          {data ? <DayCount key={data.summary.success_days} value={data.summary.success_days} /> : "—"}
                        </dd>
                      </div>
                      <div>
                        <dt>连续签到</dt>
                        <dd data-testid="footprint-streak">
                          {data ? <DayCount key={data.summary.streak} value={data.summary.streak} /> : "—"}
                        </dd>
                      </div>
                    </dl>
                    {data && totalElapsed > 0 && (
                      <p className="footprint-summary">
                        <span>
                          完成率 <strong>{completionRate}%</strong>（{successDays}/{totalElapsed} 天）
                        </span>
                        <span aria-hidden="true">·</span>
                        <span className={abnormalDays > 0 ? "footprint-summary-warn" : ""}>
                          {abnormalDays > 0 ? `异常 ${abnormalDays} 天` : "暂无异常"}
                        </span>
                      </p>
                    )}
                  </div>
                );
              })()}
              <TabsContent value={period} key={period} className="footprint-chart">
                {loading && <p className="sr-only" role="status">正在加载签到足迹…</p>}
                {rollingDays ? (
                  <>
                    <RangeGrid
                      accountId={accountId}
                      days={data?.days}
                      today={today}
                      start={start}
                      length={rollingDays}
                      label={periods[period]}
                      loading={loading}
                    />
                    <p className="footprint-year-hint">左右滑动查看更多日期</p>
                  </>
                ) : (
                  <MonthGrid monthKey={monthKey} accountId={accountId} days={data?.days} today={today} loading={loading} />
                )}
                <DayLegend />
                {resource.error && (
                  <div className="footprint-error" role="alert">
                    <span>{resource.error}</span>
                    <Button type="button" variant="outline" size="sm" onClick={() => setRevision((value) => value + 1)}>
                      重试
                    </Button>
                  </div>
                )}
              </TabsContent>
            </div>
          </>
        )}
      </Tabs>
    </section>
  );
}
