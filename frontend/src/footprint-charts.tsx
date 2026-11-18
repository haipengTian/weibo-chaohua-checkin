import { useLayoutEffect, useRef } from "react";
import { dayStatuses, type CalendarDay } from "./checkin-data";

const weekdays = ["一", "二", "三", "四", "五", "六", "日"];
const dayMs = 86_400_000;

export function rangeStart(today: string, length: number) {
  return new Date(Date.parse(today) - (length - 1) * dayMs).toISOString().slice(0, 10);
}

function weekdayOffset(date: string) {
  return (new Date(date).getUTCDay() + 6) % 7;
}

function DayTile({ day, accountId, today, includeYear = false }: {
  day?: CalendarDay;
  accountId: string;
  today: string;
  includeYear?: boolean;
}) {
  if (!day) return <span className="footprint-day placeholder" aria-hidden="true" />;
  const [year, month, date] = day.date.split("-").map(Number);
  const future = day.date > today;
  const label = `${includeYear ? `${year}年` : ""}${month}月${date}日，${future ? "未到日期" : dayStatuses[day.status]}`;
  return (
    <button
      type="button"
      className={`footprint-day ${future ? "future" : day.status}`}
      data-action="day-details"
      data-id={accountId}
      data-date={day.date}
      disabled={future}
      aria-label={label}
      aria-current={day.date === today ? "date" : undefined}
      title={label}
    >
      {!includeYear && date}
    </button>
  );
}

export function MonthGrid({ monthKey, days, accountId, today, loading }: {
  monthKey: string;
  days?: CalendarDay[];
  accountId: string;
  today: string;
  loading: boolean;
}) {
  const [year, month] = monthKey.split("-").map(Number);
  const size = new Date(Date.UTC(year, month, 0)).getUTCDate();
  const offset = weekdayOffset(`${monthKey}-01`);
  return (
    <div className="footprint-grid" role="group" aria-label="本月每日签到状态" aria-busy={loading}>
      {weekdays.map((day) => <span key={day} aria-hidden="true">{day}</span>)}
      {Array.from({ length: offset }, (_, index) => <span key={`leading-${index}`} aria-hidden="true" />)}
      {Array.from({ length: size }, (_, index) => (
        <DayTile key={index} day={days?.[index]} accountId={accountId} today={today} />
      ))}
    </div>
  );
}

export function RangeGrid({ days, accountId, today, start, length, label, loading }: {
  days?: CalendarDay[];
  accountId: string;
  today: string;
  start: string;
  length: number;
  label: string;
  loading: boolean;
}) {
  const scroll = useRef<HTMLDivElement>(null);
  const first = Date.parse(start);
  const offset = weekdayOffset(start);
  const weekCount = Math.ceil((offset + length) / 7);
  useLayoutEffect(() => {
    const node = scroll.current;
    if (node) node.scrollLeft = node.scrollWidth - node.clientWidth;
  }, [start]);
  return (
    <div className="footprint-year-scroll" ref={scroll} role="region" aria-label={`${label}每日签到状态，可横向滚动`} tabIndex={0}>
      <div className="footprint-year-grid" aria-busy={loading}>
        {Array.from({ length: weekCount }, (_, week) => {
          const startIndex = week * 7 - offset;
          const dates = Array.from({ length: 7 }, (_, day) => {
            const index = startIndex + day;
            return index >= 0 && index < length ? new Date(first + index * dayMs) : undefined;
          });
          const monthLabel = dates.find((date) => date?.getUTCDate() === 1);
          return (
            <div className="footprint-week" key={week}>
              <span className="footprint-week-label" aria-hidden="true">{monthLabel ? (
                length > 365 && monthLabel.getUTCMonth() === 0
                  ? `${monthLabel.getUTCFullYear()}年`
                  : `${monthLabel.getUTCMonth() + 1}月`
              ) : ""}</span>
              {dates.map((date, index) => date ? (
                <DayTile key={index} day={days?.[startIndex + index]} accountId={accountId} today={today} includeYear />
              ) : <span key={index} aria-hidden="true" />)}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export function DayLegend() {
  return (
    <div className="footprint-legend">
      {Object.entries(dayStatuses).map(([status, label]) => (
        <span key={status}><i className={status} aria-hidden="true" />{label}</span>
      ))}
    </div>
  );
}
