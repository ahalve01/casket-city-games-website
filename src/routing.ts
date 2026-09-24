import { useLayoutEffect, useRef, useState, type MouseEvent } from "react";

const supportedPaths = new Set(["/", "/events", "/buyback"]);
const normalizePath = (path: string) => path.replace(/\/+$/, "") || "/";

/** History API routing for the site's pages and homepage anchors. */
export function useSiteRouting() {
  const [location, setLocation] = useState(() => ({ path: normalizePath(window.location.pathname), hash: window.location.hash }));
  const previousPath = useRef(location.path);
  useLayoutEffect(() => {
    const update = () => setLocation({ path: normalizePath(window.location.pathname), hash: window.location.hash });
    window.addEventListener("popstate", update);
    window.addEventListener("hashchange", update);
    return () => {
      window.removeEventListener("popstate", update);
      window.removeEventListener("hashchange", update);
    };
  }, []);
  useLayoutEffect(() => {
    const changed = previousPath.current !== location.path;
    previousPath.current = location.path;
    document.title = (location.path === "/events" ? "Events | " : location.path === "/buyback" ? "Buyback Policy | " : "") + "Casket City Games | Batesville, Indiana";
    if (changed) document.querySelector<HTMLElement>("main")?.focus({ preventScroll: true });
    if (location.hash) {
      let id = location.hash.slice(1);
      try { id = decodeURIComponent(id); } catch { /* Keep malformed hashes harmless. */ }
      document.getElementById(id)?.scrollIntoView();
    } else {
      window.scrollTo({ top: 0, behavior: "instant" });
    }
  }, [location]);
  function onNavigate(event: MouseEvent<HTMLDivElement>) {
    if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    const link = (event.target as Element).closest<HTMLAnchorElement>("a[href]");
    if (!link || (link.target && link.target !== "_self") || link.hasAttribute("download")) return;
    const url = new URL(link.href);
    const path = normalizePath(url.pathname);
    if (url.origin !== window.location.origin || !supportedPaths.has(path)) return;
    event.preventDefault();
    if (url.href !== window.location.href) window.history.pushState(null, "", url);
    setLocation({ path, hash: url.hash });
  }
  return { path: location.path, onNavigate };
}
