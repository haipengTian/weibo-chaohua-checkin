import { useState } from "react";
import { format, isValid, parse } from "date-fns";
import { zhCN } from "react-day-picker/locale";
import { CalendarIcon, Clock3Icon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Label } from "@/components/ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export type Option = { value: string; label: string };

export function Choice({
  id,
  label,
  value,
  onChange,
  options,
}: {
  id: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
  options: Option[];
}) {
  return (
    <Select
      value={value || "__all__"}
      onValueChange={(next) => onChange(next === "__all__" ? "" : next)}
    >
      <SelectTrigger id={id} className="w-full h-9 text-xs" aria-label={label}>
        <SelectValue />
      </SelectTrigger>
      <SelectContent className="credit-popup" position="popper" align="start">
        {options.map((option) => (
          <SelectItem
            key={option.value || "__all__"}
            value={option.value || "__all__"}
          >
            {option.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}

function localDate(value: string) {
  if (!value) return undefined;
  const date = parse(value, "yyyy-MM-dd", new Date());
  return isValid(date) ? date : undefined;
}

export function DateField({
  id,
  name,
  label,
  initialValue = "",
}: {
  id: string;
  name: string;
  label: string;
  initialValue?: string;
}) {
  const [value, setValue] = useState(initialValue);
  const [open, setOpen] = useState(false);
  const date = localDate(value);
  return (
    <div className="credit-field">
      <Label htmlFor={id}>{label}</Label>
      <input type="hidden" name={name} value={value} />
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            id={id}
            type="button"
            variant="outline"
            className="w-full justify-between h-9 px-3 text-xs font-normal"
            aria-label={label}
          >
            <span className={!value ? "text-muted-foreground" : ""}>
              {date ? format(date, "yyyy/MM/dd") : "选择日期"}
            </span>
            <CalendarIcon className="size-4 text-muted-foreground" />
          </Button>
        </PopoverTrigger>
        <PopoverContent
          align="start"
          className="credit-popup date-popup w-auto p-0"
          aria-label={`${label}日历`}
        >
          <Calendar
            mode="single"
            selected={date}
            defaultMonth={date}
            locale={zhCN}
            autoFocus
            labels={{
              labelPrevious: () => "上个月",
              labelNext: () => "下个月",
              labelDayButton: (day) => format(day, "yyyy年M月d日"),
            }}
            onSelect={(next) => {
              setValue(next ? format(next, "yyyy-MM-dd") : "");
              setOpen(false);
            }}
          />
          <div className="credit-picker-footer">
            <Button
              type="button"
              variant="ghost"
              size="sm"
              onClick={() => {
                setValue("");
                setOpen(false);
              }}
            >
              清除日期
            </Button>
            <Button
              type="button"
              variant="outline"
              size="sm"
              onClick={() => {
                setValue(
                  new Intl.DateTimeFormat("en-CA", {
                    timeZone: "Asia/Shanghai",
                    year: "numeric",
                    month: "2-digit",
                    day: "2-digit",
                  }).format(new Date()),
                );
                setOpen(false);
              }}
            >
              今天
            </Button>
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
}

const numbers = (length: number) =>
  Array.from({ length }, (_, value) => {
    const text = String(value).padStart(2, "0");
    return { value: text, label: text };
  });
const hours = numbers(24),
  minutes = numbers(60);

// credit-ui has no time picker. Compose its Popover/Select/Button primitives,
// preserving the API's 24-hour HH:mm value without a browser-native time widget.
export function TimeField({ initialValue }: { initialValue: string }) {
  const [value, setValue] = useState(initialValue);
  const [draft, setDraft] = useState(initialValue);
  const [open, setOpen] = useState(false);
  const [hour, minute] = draft.split(":");
  return (
    <div className="credit-field">
      <Label htmlFor="plan-time">每天签到时间 · 北京时间</Label>
      <input type="hidden" name="time" value={value} />
      <Popover
        open={open}
        onOpenChange={(next) => {
          if (next) setDraft(value);
          setOpen(next);
        }}
      >
        <PopoverTrigger asChild>
          <Button
            id="plan-time"
            type="button"
            variant="outline"
            className="credit-time-trigger w-full justify-between h-14 px-3 text-2xl font-medium tabular-nums"
            aria-label="每天签到时间 · 北京时间"
          >
            {value}
            <Clock3Icon className="size-5 text-muted-foreground" />
          </Button>
        </PopoverTrigger>
        <PopoverContent
          align="start"
          className="credit-popup time-popup w-64 p-4"
          aria-label="签到时间选择器"
        >
          <p className="credit-picker-title">
            每天签到时间 <span>24 小时制</span>
          </p>
          <div className="credit-time-columns">
            <div className="credit-field">
              <Label htmlFor="time-hour">小时</Label>
              <Choice
                id="time-hour"
                label="小时"
                value={hour}
                options={hours}
                onChange={(next) => setDraft(`${next}:${minute}`)}
              />
            </div>
            <span className="credit-time-separator">:</span>
            <div className="credit-field">
              <Label htmlFor="time-minute">分钟</Label>
              <Choice
                id="time-minute"
                label="分钟"
                value={minute}
                options={minutes}
                onChange={(next) => setDraft(`${hour}:${next}`)}
              />
            </div>
          </div>
          <div className="credit-time-actions">
            <Button
              type="button"
              variant="ghost"
              size="sm"
              onClick={() => setOpen(false)}
            >
              取消
            </Button>
            <Button
              type="button"
              size="sm"
              onClick={() => {
                setValue(draft);
                setOpen(false);
              }}
            >
              确定时间
            </Button>
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
}
