import { useState } from "react";
import type { FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Choice, DateField, TimeField, type Option } from "./fields";

type Filters = Record<string, string>;
export type Plan = { enabled: boolean; time: string };
export type SystemSettings = { registration_enabled: boolean };
export type FormProps =
  | { kind: "plan"; plan: Plan }
  | { kind: "filters"; admin: boolean; values: Filters; statuses: Option[] }
  | { kind: "users"; search: string }
  | { kind: "run-topics"; runId: string }
  | { kind: "system-settings"; settings: SystemSettings };

function emit(form: HTMLFormElement, name: string, detail: unknown) {
  form.dispatchEvent(new CustomEvent(name, { detail, bubbles: true }));
}

class RequestError extends Error {
  constructor(
    message: string,
    readonly status: number,
    readonly code?: string,
  ) {
    super(message);
  }
}

async function request(path: string, body: unknown, method = "POST") {
  const response = await fetch(path, {
    method,
    headers: {
      "Content-Type": "application/json",
      "X-Requested-With": "WeiboPortal",
    },
    body: JSON.stringify(body),
  });
  let data;
  try {
    data = await response.json();
  } catch {
    throw new Error("服务暂时不可用，请稍后重试");
  }
  if (!response.ok) {
    if (
      response.status === 401 &&
      (path === "/api/settings" || path.startsWith("/api/admin/"))
    )
      location.assign("/login");
    throw new RequestError(
      typeof data.detail === "string" ? data.detail : "请检查填写内容后重试",
      response.status,
      data.code,
    );
  }
  return data;
}

function TextField({
  id,
  name,
  label,
  value,
  placeholder,
  numeric = false,
}: {
  id: string;
  name: string;
  label: string;
  value: string;
  placeholder: string;
  numeric?: boolean;
}) {
  return (
    <div className="credit-field">
      <Label htmlFor={id}>{label}</Label>
      <Input
        id={id}
        name={name}
        defaultValue={value}
        placeholder={placeholder}
        inputMode={numeric ? "numeric" : undefined}
        maxLength={numeric ? 32 : 64}
        className="h-9 text-xs"
      />
    </div>
  );
}

export function FiltersForm({
  admin,
  values,
  statuses,
}: {
  admin: boolean;
  values: Filters;
  statuses: Option[];
}) {
  const [status, setStatus] = useState(values.status || "");
  return (
    <form
      id="filter-form"
      className="credit-filter-form"
      onSubmit={(event) => {
        event.preventDefault();
        event.stopPropagation();
        emit(event.currentTarget, "credit:filters", {
          kind: "records",
          values: Object.fromEntries(new FormData(event.currentTarget)),
        });
      }}
    >
      {admin && (
        <TextField
          id="filter-username"
          name="username"
          label="平台用户名"
          value={values.username || ""}
          placeholder="完整用户名"
        />
      )}
      <TextField
        id="filter-uid"
        name="uid"
        label="微博 UID"
        value={values.uid || ""}
        placeholder="全部微博"
        numeric
      />
      <div className="credit-field">
        <Label htmlFor="filter-status">执行结果</Label>
        <input type="hidden" name="status" value={status} />
        <Choice
          id="filter-status"
          label="执行结果"
          value={status}
          onChange={setStatus}
          options={[{ value: "", label: "全部结果" }, ...statuses]}
        />
      </div>
      <DateField
        id="filter-start"
        name="start"
        label="开始日期"
        initialValue={values.start}
      />
      <DateField
        id="filter-end"
        name="end"
        label="结束日期"
        initialValue={values.end}
      />
      <div className="credit-filter-actions">
        <Button variant="outline" type="submit" className="h-9 text-xs">
          筛选
        </Button>
        <Button
          type="button"
          variant="ghost"
          className="h-9 text-xs"
          data-action="clear-filters"
        >
          重置
        </Button>
      </div>
    </form>
  );
}

export function UserSearch({ search }: { search: string }) {
  const [adding, setAdding] = useState(false);
  return (
    <>
      <div className="credit-users-toolbar">
        <form
          id="user-search"
          className="credit-filter-form credit-user-search"
          onSubmit={(event) => {
            event.preventDefault();
            event.stopPropagation();
            emit(event.currentTarget, "credit:filters", {
              kind: "users",
              values: Object.fromEntries(new FormData(event.currentTarget)),
            });
          }}
        >
          <TextField
            id="user-search-input"
            name="search"
            label="搜索用户名"
            value={search}
            placeholder="输入用户名关键词"
          />
          <Button type="submit" variant="outline" className="h-9 text-xs">
            搜索
          </Button>
        </form>
        <Button
          type="button"
          size="sm"
          disabled={adding}
          onClick={() => setAdding(true)}
          aria-expanded={adding}
          aria-controls="admin-create-user"
        >
          添加用户
        </Button>
      </div>
      {adding && <CreateUserForm onCancel={() => setAdding(false)} />}
    </>
  );
}

function CreateUserForm({ onCancel }: { onCancel: () => void }) {
  const [pending, setPending] = useState(false);
  const [error, setError] = useState("");
  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    event.stopPropagation();
    const form = event.currentTarget;
    const data = new FormData(form);
    setError("");
    if (data.get("password") !== data.get("confirmation")) {
      setError("两次密码输入不一致");
      return;
    }
    setPending(true);
    try {
      const result = await request("/api/admin/users", {
        username: data.get("username"),
        password: data.get("password"),
      });
      form.reset();
      emit(form, "credit:user-created", { username: result.user.username });
    } catch (cause) {
      setError(
        cause instanceof TypeError
          ? "无法连接服务，请稍后重试"
          : (cause as Error).message,
      );
    } finally {
      setPending(false);
    }
  }
  return (
    <form
      id="admin-create-user"
      className="credit-create-user"
      onSubmit={submit}
    >
      <h3>添加平台用户</h3>
      <p>创建普通用户账号，用户登录后自行绑定微博。</p>
      <fieldset disabled={pending}>
        <div className="credit-field">
          <Label htmlFor="new-user-name">用户名</Label>
          <Input
            id="new-user-name"
            name="username"
            required
            minLength={3}
            maxLength={32}
            autoComplete="off"
            placeholder="3–32 位，支持中文、字母和数字"
          />
        </div>
        <div className="credit-field">
          <Label htmlFor="new-user-password">初始密码</Label>
          <Input
            id="new-user-password"
            name="password"
            type="password"
            required
            minLength={12}
            maxLength={128}
            autoComplete="new-password"
            placeholder="12–128 位"
          />
        </div>
        <div className="credit-field">
          <Label htmlFor="new-user-confirmation">确认初始密码</Label>
          <Input
            id="new-user-confirmation"
            name="confirmation"
            type="password"
            required
            minLength={12}
            maxLength={128}
            autoComplete="new-password"
            placeholder="再次输入初始密码"
          />
        </div>
        {error && (
          <p role="alert" className="credit-form-error">
            {error}
          </p>
        )}
        <div className="credit-filter-actions">
          <Button type="submit" size="sm">
            {pending ? "正在创建…" : "创建用户"}
          </Button>
          <Button type="button" variant="ghost" size="sm" onClick={onCancel}>
            取消
          </Button>
        </div>
      </fieldset>
    </form>
  );
}

export function SystemSettingsForm({ settings }: { settings: SystemSettings }) {
  const [enabled, setEnabled] = useState(settings.registration_enabled);
  const [pending, setPending] = useState(false);
  const [feedback, setFeedback] = useState("");
  const [failed, setFailed] = useState(false);
  async function save(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    event.stopPropagation();
    setPending(true);
    setFeedback("");
    setFailed(false);
    try {
      await request(
        "/api/admin/settings",
        { registration_enabled: enabled },
        "PUT",
      );
      setFeedback(
        enabled ? "已保存：公开注册已开启" : "已保存：公开注册已关闭",
      );
    } catch (cause) {
      setFailed(true);
      setFeedback(
        cause instanceof TypeError
          ? "无法连接服务，请稍后重试"
          : (cause as Error).message,
      );
    } finally {
      setPending(false);
    }
  }
  return (
    <form className="credit-system-settings" onSubmit={save}>
      <fieldset disabled={pending}>
        <div className="credit-switch-row">
          <div>
            <Label htmlFor="registration-enabled">开放用户注册</Label>
            <p id="registration-help">
              关闭后仅管理员可创建新账号，不影响已有用户登录。
            </p>
          </div>
          <Switch
            id="registration-enabled"
            checked={enabled}
            onCheckedChange={(value) => {
              setEnabled(value);
              setFeedback("");
            }}
            aria-describedby="registration-help"
          />
        </div>
        <Button type="submit" size="sm">
          {pending ? "正在保存…" : "保存系统设置"}
        </Button>
      </fieldset>
      {feedback && (
        <p
          className={failed ? "credit-form-error" : "credit-form-feedback"}
          role={failed ? "alert" : "status"}
        >
          {feedback}
        </p>
      )}
    </form>
  );
}

export function PlanForm({ plan }: { plan: Plan }) {
  const [enabled, setEnabled] = useState(plan.enabled);
  const [pending, setPending] = useState(false);
  const [feedback, setFeedback] = useState("");
  const [failed, setFailed] = useState(false);
  async function save(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    event.stopPropagation();
    const form = event.currentTarget;
    const next = { enabled, time: String(new FormData(form).get("time")) };
    setPending(true);
    setFailed(false);
    setFeedback("");
    try {
      await request("/api/settings", next, "PUT");
      setFeedback(
        enabled
          ? `已保存：每天 ${next.time} 自动签到`
          : "已保存：每日签到已暂停",
      );
      emit(form, "credit:plan-saved", next);
    } catch (error) {
      setFailed(true);
      setFeedback(
        error instanceof TypeError
          ? "无法连接服务，请稍后重试"
          : (error as Error).message,
      );
    } finally {
      setPending(false);
    }
  }
  return (
    <form id="plan-form" className="credit-plan-form" onSubmit={save}>
      <fieldset disabled={pending}>
        <TimeField initialValue={plan.time} />
        <div className="credit-switch-row">
          <div>
            <Label htmlFor="plan-enabled">自动签到</Label>
            <p id="plan-enabled-help">对你绑定的全部微博账号生效</p>
          </div>
          <Switch
            id="plan-enabled"
            checked={enabled}
            onCheckedChange={setEnabled}
            aria-describedby="plan-enabled-help"
          />
        </div>
        <Button type="submit" className="w-full h-9 text-xs">
          {pending ? "正在保存…" : "保存签到计划"}
        </Button>
      </fieldset>
      {feedback && (
        <p
          id="plan-feedback"
          className={failed ? "credit-form-error" : "credit-form-feedback"}
          role={failed ? "alert" : "status"}
        >
          {feedback}
        </p>
      )}
    </form>
  );
}

export function LoginForm() {
  const [registrationEnabled, setRegistrationEnabled] = useState(
    () =>
      document.querySelector<HTMLMetaElement>(
        'meta[name="registration-enabled"]',
      )?.content !== "false",
  );
  const [mode, setMode] = useState("login");
  const [pending, setPending] = useState(false);
  const [error, setError] = useState("");
  const registering = mode === "register";
  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");
    const form = event.currentTarget,
      data = new FormData(form);
    if (registering && data.get("password") !== data.get("confirm-password")) {
      setError("两次密码输入不一致");
      return;
    }
    setPending(true);
    try {
      const result = await request(`/api/auth/${mode}`, {
        username: data.get("username"),
        password: data.get("password"),
      });
      location.assign(
        new URLSearchParams(location.search).get("next") === "admin" &&
          result.user.role === "admin"
          ? "/admin"
          : "/",
      );
    } catch (cause) {
      if (
        registering &&
        cause instanceof RequestError &&
        cause.code === "registration_closed"
      ) {
        setRegistrationEnabled(false);
        setMode("login");
      }
      setError(
        cause instanceof TypeError
          ? "无法连接服务，请检查网络后重试"
          : (cause as Error).message,
      );
    } finally {
      setPending(false);
    }
  }
  return (
    <>
      <span className="eyebrow">YOUR DAILY ROUTINE</span>
      <h1>{registering ? "开始你的每日计划" : "欢迎回来"}</h1>
      <p className="credit-auth-description">
        {registering
          ? "创建平台账号，再扫码连接你的微博。"
          : "登录平台，查看你的微博与签到计划。"}
      </p>
      <Tabs
        value={mode}
        onValueChange={(value) => {
          setMode(value);
          setError("");
        }}
      >
        {registrationEnabled && (
          <TabsList className="credit-auth-tabs w-full">
            <TabsTrigger value="login" disabled={pending}>
              登录
            </TabsTrigger>
            <TabsTrigger value="register" disabled={pending}>
              注册
            </TabsTrigger>
          </TabsList>
        )}
        {!registrationEnabled && (
          <p className="credit-registration-closed">
            注册已关闭，请联系管理员开通账号。
          </p>
        )}
        {(registrationEnabled ? ["login", "register"] : ["login"]).map(
          (tab) => (
            <TabsContent key={tab} value={tab}>
              <form
                id="auth-form"
                className="credit-auth-form"
                onSubmit={submit}
              >
                <fieldset disabled={pending}>
                  <div className="credit-field">
                    <Label htmlFor={`${tab}-username`}>平台用户名</Label>
                    <Input
                      id={`${tab}-username`}
                      name="username"
                      autoComplete="username"
                      required
                      minLength={3}
                      maxLength={32}
                      placeholder="输入你的用户名"
                      className="h-10 text-sm"
                    />
                  </div>
                  <div className="credit-field">
                    <Label htmlFor={`${tab}-password`}>密码</Label>
                    <Input
                      id={`${tab}-password`}
                      name="password"
                      type="password"
                      autoComplete={
                        registering ? "new-password" : "current-password"
                      }
                      required
                      minLength={registering ? 12 : 1}
                      maxLength={128}
                      placeholder="输入你的密码"
                      aria-describedby={
                        registering ? "password-hint" : undefined
                      }
                      className="h-10 text-sm"
                    />
                    {registering && (
                      <small id="password-hint">
                        12–128 位，建议混合使用字母、数字和符号
                      </small>
                    )}
                  </div>
                  {registering && (
                    <div className="credit-field">
                      <Label htmlFor="confirm-password">确认密码</Label>
                      <Input
                        id="confirm-password"
                        name="confirm-password"
                        type="password"
                        autoComplete="new-password"
                        required
                        maxLength={128}
                        placeholder="再次输入密码"
                        className="h-10 text-sm"
                      />
                    </div>
                  )}
                  {error && (
                    <div className="error-box" role="alert">
                      {error}
                    </div>
                  )}
                  <Button type="submit" className="h-10 w-full text-sm">
                    {pending
                      ? registering
                        ? "正在创建…"
                        : "正在登录…"
                      : registering
                        ? "创建账号"
                        : "登录平台 →"}
                  </Button>
                </fieldset>
              </form>
            </TabsContent>
          ),
        )}
      </Tabs>
    </>
  );
}
