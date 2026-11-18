import { useEffect, useState } from "react";

export type CalendarAccount = { id: string; uid: string; nickname: string };
export type DayStatus = "success" | "partial" | "failed" | "active" | "none";
export type CalendarDay = { date: string; status: DayStatus; attempts: number };
export type FootprintPeriod = "month" | "year" | "two_years";
export type FootprintData = {
  account_id: string;
  today: string;
  start?: string;
  days: CalendarDay[];
  summary: { success_days: number; streak: number };
};

export const dayStatuses: Record<DayStatus, string> = {
  success: "成功",
  partial: "部分失败",
  failed: "失败",
  active: "执行中",
  none: "无记录",
};

export const beijingToday = () =>
  new Intl.DateTimeFormat("en-CA", {
    timeZone: "Asia/Shanghai",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(new Date());

export function footprintUrl(accountId: string, period: FootprintPeriod, month: string) {
  if (!accountId) return "";
  const params = new URLSearchParams({ account_id: accountId });
  if (period === "month") params.set("month", month);
  else params.set("period", period);
  return `/api/calendar?${params}`;
}

export function useResource<T>(url: string, revision: number) {
  const [state, setState] = useState<{
    url: string;
    data?: T;
    error?: string;
    loading: boolean;
  }>({ url: "", loading: false });
  useEffect(() => {
    if (!url) return;
    const controller = new AbortController();
    setState((current) => ({
      url,
      data: current.url === url ? current.data : undefined,
      loading: true,
    }));
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
          setState((current) => ({
            url,
            data: current.url === url ? current.data : undefined,
            error:
              error instanceof TypeError
                ? "无法连接服务，请稍后重试"
                : (error as Error).message,
            loading: false,
          }));
      }
    })();
    return () => controller.abort();
  }, [url, revision]);
  return state.url === url ? state : { url, loading: !!url };
}
