import { createContext } from "react";

// Keep popovers inside a native modal dialog's top layer and focus boundary.
export const PortalContainer = createContext<HTMLElement | null>(null);
