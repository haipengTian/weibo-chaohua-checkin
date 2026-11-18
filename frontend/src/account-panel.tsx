import { useEffect, useRef, useState } from "react";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FollowedTopics } from "./topics";
import { CheckinDay } from "./checkin-day";
import type { CalendarAccount } from "./checkin-data";
import { PlanForm, type Plan } from "./forms";
import { PortalContainer } from "./lib/portal-container";
import "./account-panel.css";

type Panel =
  | { kind: "topics"; account: CalendarAccount }
  | { kind: "day-details"; account: CalendarAccount; date: string }
  | { kind: "plan"; plan: Plan };

export function AccountPanel() {
  const dialog = useRef<HTMLDialogElement>(null);
  const trigger = useRef<HTMLElement | null>(null);
  const [panel, setPanel] = useState<Panel>();
  const [editing, setEditing] = useState({ dirty: false, saving: false });
  const [confirmClose, setConfirmClose] = useState(false);
  const [closing, setClosing] = useState(false);

  useEffect(() => {
    const open = (event: Event) => {
      if (dialog.current?.open) return;
      const { panel, opener } = (event as CustomEvent<{ panel: Panel; opener: HTMLElement }>).detail;
      trigger.current = opener;
      setEditing({ dirty: false, saving: false });
      setConfirmClose(false);
      setPanel(panel);
    };
    document.addEventListener("credit:account-panel", open);
    return () => document.removeEventListener("credit:account-panel", open);
  }, []);
  useEffect(() => {
    if (!panel) return;
    dialog.current?.showModal();
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [panel]);
  useEffect(() => {
    if (!closing) return;
    const modal = dialog.current;
    if (!modal) return;
    let cancelled = false;
    // Keep the native modal in the top layer until the exit animation finishes.
    const animations = modal.getAnimations();
    void Promise.allSettled(animations.map((animation) => animation.finished))
      .then(() => {
        if (!cancelled) modal.close();
      });
    return () => {
      cancelled = true;
    };
  }, [closing]);

  function close() {
    setClosing(true);
  }
  function requestClose() {
    if (editing.saving || closing) return;
    if (editing.dirty) setConfirmClose(true);
    else close();
  }
  const account = panel && "account" in panel ? panel.account : undefined;
  const title = panel?.kind === "topics" ? "配置签到" : "每日计划";
  return (
    <dialog
      ref={dialog}
      className="account-panel"
      data-kind={panel?.kind}
      data-state={closing ? "closing" : "open"}
      aria-labelledby="account-panel-title"
      onCancel={(event) => {
        event.preventDefault();
        requestClose();
      }}
      onClick={(event) => {
        if (event.target === event.currentTarget) requestClose();
      }}
      onClose={() => {
        setPanel(undefined);
        setClosing(false);
        setConfirmClose(false);
        const opener = trigger.current;
        // Saving a plan or refreshing the account list can replace the opening button.
        const restored = opener?.isConnected ? opener : opener && Array.from(
          document.querySelectorAll<HTMLElement>("#main button[data-action]"),
        ).find(({ dataset }) =>
          dataset.action === opener.dataset.action &&
          dataset.id === opener.dataset.id &&
          dataset.date === opener.dataset.date,
        );
        (restored ?? document.querySelector<HTMLElement>("#main h1"))
          ?.focus({ preventScroll: true });
      }}
    >
      {panel && (
        <PortalContainer.Provider value={dialog.current}>
          <div className="account-panel-layout" inert={closing}>
            {panel.kind !== "day-details" && (
              <header className="account-panel-header">
                <Button
                  type="button"
                  variant="ghost"
                  size="icon"
                  aria-label="关闭弹窗"
                  disabled={editing.saving}
                  onClick={requestClose}
                >
                  <X aria-hidden="true" />
                </Button>
                <div>
                  <h2 id="account-panel-title">{title}</h2>
                  {account ? (
                    <p>
                      {account.nickname || "微博用户"}
                      <span>UID {account.uid}</span>
                    </p>
                  ) : (
                    <p>北京时间 · 对你绑定的全部微博生效</p>
                  )}
                </div>
              </header>
            )}
            {confirmClose && (
              <div className="panel-discard" role="alert">
                <p>还有未保存的修改，是否放弃？</p>
                <div>
                  <Button
                    type="button"
                    size="sm"
                    variant="outline"
                    onClick={() => setConfirmClose(false)}
                  >
                    继续编辑
                  </Button>
                  <Button
                    type="button"
                    size="sm"
                    variant="destructive"
                    disabled={editing.saving}
                    onClick={() => {
                      if (!editing.saving) close();
                    }}
                  >
                    放弃修改
                  </Button>
                </div>
              </div>
            )}
            <div className="account-panel-body">
              {panel.kind === "topics" && (
                <FollowedTopics
                  key={panel.account.id}
                  accounts={[panel.account]}
                  configuration
                  onStateChange={setEditing}
                  onCancel={requestClose}
                  onSaved={close}
                />
              )}
              {panel.kind === "day-details" && (
                <CheckinDay account={panel.account} date={panel.date} onClose={requestClose} />
              )}
              {panel.kind === "plan" && (
                <PlanForm
                  plan={panel.plan}
                  onSaved={close}
                  onStateChange={setEditing}
                />
              )}
            </div>
          </div>
        </PortalContainer.Provider>
      )}
    </dialog>
  );
}
