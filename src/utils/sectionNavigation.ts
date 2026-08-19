import type { MouseEvent as ReactMouseEvent } from "react";
import { navigationItems } from "../data/navigation";

// Prevent the browser from restoring a saved scroll position on load/refresh.
// This must run before the browser performs scroll restoration, so it is set at
// module scope (before React renders) rather than inside a mount effect.
window.history.scrollRestoration = "manual";

type SectionNavigationOptions = {
  readonly focusTarget?: boolean;
  readonly onNavigate?: () => void;
};

const recognizedSectionHashes = new Set([
  ...navigationItems.map((item) => item.href),
  "#main-content",
]);

const getRootLocation = () => `${window.location.pathname}${window.location.search}`;

const getScrollBehavior = (): ScrollBehavior =>
  window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth";

export const handleSectionNavigation = (
  event: ReactMouseEvent<HTMLAnchorElement>,
  options: SectionNavigationOptions = {},
) => {
  if (
    event.defaultPrevented ||
    event.button !== 0 ||
    event.metaKey ||
    event.ctrlKey ||
    event.shiftKey ||
    event.altKey
  ) {
    return;
  }

  const destination = new URL(event.currentTarget.href, window.location.href);
  const isCurrentDocument =
    destination.origin === window.location.origin &&
    destination.pathname === window.location.pathname &&
    destination.search === window.location.search;
  const targetId = decodeURIComponent(destination.hash.slice(1));
  const target = targetId ? document.getElementById(targetId) : null;

  if (!isCurrentDocument || !target) return;

  event.preventDefault();
  options.onNavigate?.();
  window.history.replaceState(window.history.state, "", getRootLocation());

  if (options.focusTarget) {
    target.focus({ preventScroll: true });
  }

  if (targetId === "home") {
    window.scrollTo({ top: 0, left: 0, behavior: getScrollBehavior() });
    return;
  }

  target.scrollIntoView({ behavior: getScrollBehavior(), block: "start" });
};

export const initializeRootScroll = () => {
  const isRootDocument =
    window.location.pathname === "/" || window.location.pathname.endsWith("/index.html");
  const hasRecognizedHash = recognizedSectionHashes.has(window.location.hash);
  let initialResetFrame: number | undefined;

  if (isRootDocument && (!window.location.hash || hasRecognizedHash)) {
    if (hasRecognizedHash) {
      window.history.replaceState(window.history.state, "", getRootLocation());
    }

    initialResetFrame = window.requestAnimationFrame(() => {
      window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    });
  }

  return () => {
    if (initialResetFrame !== undefined) {
      window.cancelAnimationFrame(initialResetFrame);
    }
  };
};
