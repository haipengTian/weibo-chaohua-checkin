import { useEffect, useState, type ReactNode } from "react";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useResource, type CalendarAccount } from "./checkin-data";
import { RunTopics } from "./topics";
import "./checkin-day.css";

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
type Records = { items: Run[]; total: number };
const statuses: Record<string, string> = {
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
const formatTime = new Intl.DateTimeFormat("zh-CN", {
  timeZone: "Asia/Shanghai",
  year: "numeric",
  month: "2-digit",
  day: "2-digit",
  hour: "2-digit",
  minute: "2-digit",
});

function ReceiptField({ label, children }: { label: string; children: ReactNode }) {
  return <div><dt>{label}</dt><dd>{children}</dd></div>;
}

export function CheckinDay({ account, date, onClose }: {
  account: CalendarAccount;
  date: string;
  onClose: () => void;
}) {
  const [page, setPage] = useState(1);
  const [lastTotal, setLastTotal] = useState(0);
  const [revision, setRevision] = useState(0);
  const refresh = () => setRevision((value) => value + 1);
  const params = new URLSearchParams({
    account_id: account.id,
    start: date,
    end: date,
    page: String(page),
    page_size: "1",
  });
  const { data, loading, error } = useResource<Records>(`/api/runs?${params}`, revision);
  const run = data?.items[0];
  const total = data?.total ?? lastTotal;

  useEffect(() => {
    document.addEventListener("credit:calendar-refresh", refresh);
    return () => document.removeEventListener("credit:calendar-refresh", refresh);
  }, []);

  function changeRun(offset: number) {
    if (loading) return;
    setLastTotal(total);
    setPage((current) => current + offset);
  }

  return (
    <section className="checkin-day run-receipt-paper" aria-label="当日签到明细">
      <Button type="button" size="icon" variant="ghost" className="run-receipt-close"
        aria-label="关闭弹窗" onClick={onClose}>
        <X aria-hidden="true" />
      </Button>
      <header className="run-receipt-header">
        <h2 id="account-panel-title">签到详情</h2>
        <p className="mono">{run ? formatTime.format(run.started_at * 1000) : date.replaceAll("-", "/")} · 北京时间</p>
      </header>
      {total > 1 && (
        <nav className="checkin-day-pager" aria-label="当日执行记录">
          <Button type="button" variant="outline" size="sm" disabled={page <= 1} onClick={() => changeRun(-1)}>
            上一条
          </Button>
          <span>第 {page} 条 · 共 {total} 条</span>
          <Button type="button" variant="outline" size="sm" disabled={page >= total} onClick={() => changeRun(1)}>
            下一条
          </Button>
        </nav>
      )}
      {error ? (
        <div className="checkin-day-notice" role="alert">
          <p>{error}</p>
          <Button type="button" variant="outline" size="sm" onClick={refresh}>重试</Button>
        </div>
      ) : run ? (
        <>
          <div className="run-receipt-total"><span>本次新签超话</span><strong>{run.success}</strong></div>
          <dl className="run-receipt-fields">
            <ReceiptField label="微博账号">{account.nickname || "微博用户"}</ReceiptField>
            <ReceiptField label="微博 UID"><span className="mono">{account.uid}</span></ReceiptField>
            <ReceiptField label="执行结果"><span className={`badge ${run.status}`}>{statuses[run.status] || run.status}</span></ReceiptField>
            <ReceiptField label="触发方式">{run.trigger === "scheduled" ? "定时签到" : "手动签到"}</ReceiptField>
            <ReceiptField label="签到汇总">
              此前已签 {run.done_before} · <span className={run.failed ? "has-failures" : undefined}>失败 {run.failed}</span> · 共 {run.total}
            </ReceiptField>
            {run.message && <ReceiptField label="说明">{run.message}</ReceiptField>}
          </dl>
          <section className="run-receipt-topics" aria-labelledby="day-receipt-topics-title">
            <h3 id="day-receipt-topics-title">超话明细</h3>
            <RunTopics key={run.id} runId={run.id} embedded />
          </section>
        </>
      ) : loading ? (
        <p className="checkin-day-notice" role="status">正在加载当天明细…</p>
      ) : (
        <p className="checkin-day-notice">当天没有签到记录</p>
      )}
    </section>
  );
}
