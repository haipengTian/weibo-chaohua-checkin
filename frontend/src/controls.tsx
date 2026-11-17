import { createRoot, type Root } from "react-dom/client";
import {
  FiltersForm,
  LoginForm,
  PlanForm,
  SystemSettingsForm,
  UserSearch,
  type FormProps,
} from "./forms";
import "./controls.css";
import { CheckinCalendar } from "./checkin-calendar";
import type { CalendarAccount } from "./checkin-calendar";
import { FollowedTopics, RunTopics } from "./topics";

const roots = new Map<HTMLElement, Root>();

export function mountControls(container: ParentNode = document) {
  container
    .querySelectorAll<HTMLElement>("[data-credit-form]")
    .forEach((host) => {
      if (roots.has(host)) return;
      const root = createRoot(host);
      host.classList.add("credit-controls");
      roots.set(host, root);
      if (host.dataset.creditForm === "login") {
        root.render(<LoginForm />);
        return;
      }
      if (
        host.dataset.creditForm === "calendar" ||
        host.dataset.creditForm === "topics"
      ) {
        const props = JSON.parse(host.dataset.props || "{}") as {
          accounts: CalendarAccount[];
        };
        root.render(
          host.dataset.creditForm === "calendar" ? (
            <CheckinCalendar accounts={props.accounts} />
          ) : (
            <FollowedTopics accounts={props.accounts} />
          ),
        );
        return;
      }
      const props = JSON.parse(host.dataset.props || "{}") as FormProps;
      if (props.kind === "plan") root.render(<PlanForm plan={props.plan} />);
      else if (props.kind === "filters")
        root.render(
          <FiltersForm
            admin={props.admin}
            values={props.values}
            statuses={props.statuses}
          />,
        );
      else if (props.kind === "users")
        root.render(<UserSearch search={props.search} />);
      else if (props.kind === "system-settings")
        root.render(<SystemSettingsForm settings={props.settings} />);
      else if (props.kind === "run-topics")
        root.render(<RunTopics runId={props.runId} />);
    });
}

export function unmountControls(container: Node) {
  for (const [host, root] of roots) {
    if (container.contains(host)) {
      root.unmount();
      roots.delete(host);
    }
  }
}

mountControls();
