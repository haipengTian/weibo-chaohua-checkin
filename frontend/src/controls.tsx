import { createRoot, type Root } from "react-dom/client";
import {
  FiltersForm,
  AppearanceSettings,
  LoginForm,
  PlanForm,
  SystemSettingsForm,
  UserSearch,
  type FormProps,
} from "./forms";
import "./controls.css";
import type { CalendarAccount } from "./checkin-data";
import { CheckinFootprint } from "./checkin-footprint";
import { FollowedTopics, RunTopics } from "./topics";
import { AccountPanel } from "./account-panel";
import {
  MaiBotSettingsForm,
  type MaiBotAccount,
  type MaiBotConfig,
} from "./maibot-settings";

const roots = new Map<HTMLElement, Root>();

export function mountControls(container: ParentNode = document) {
  container
    .querySelectorAll<HTMLElement>("[data-credit-form]")
    .forEach((host) => {
      if (roots.has(host)) return;
      const root = createRoot(host);
      host.classList.add("credit-controls");
      roots.set(host, root);
      if (host.dataset.creditForm === "appearance") {
        root.render(<AppearanceSettings />);
        return;
      }
      if (host.dataset.creditForm === "account-panel") {
        root.render(<AccountPanel />);
        return;
      }
      if (host.dataset.creditForm === "login") {
        root.render(<LoginForm />);
        return;
      }
      if (host.dataset.creditForm === "maibot-settings") {
        const props = JSON.parse(host.dataset.props || "{}") as {
          config: MaiBotConfig;
          accounts: MaiBotAccount[];
        };
        root.render(
          <MaiBotSettingsForm config={props.config} accounts={props.accounts} />,
        );
        return;
      }
      if (host.dataset.creditForm === "footprint" || host.dataset.creditForm === "topics") {
        const props = JSON.parse(host.dataset.props || "{}") as {
          accounts: CalendarAccount[];
        };
        root.render(
          host.dataset.creditForm === "footprint" ? (
            <CheckinFootprint accounts={props.accounts} />
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
            accounts={props.accounts}
          />,
        );
      else if (props.kind === "users")
        root.render(<UserSearch search={props.search} />);
      else if (props.kind === "system-settings")
        root.render(<SystemSettingsForm settings={props.settings} />);
      else if (props.kind === "run-topics")
        root.render(<RunTopics runId={props.runId} embedded={props.embedded} />);
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
