import Layout from "./layout";
import Home from "./pages/home";
import NotFound from "./pages/notFound";
import Service from "./pages/service";
import Shop from "./pages/shop";

export default function initRouter(): void {
  window.addEventListener("popstate", renderPage);
  window.addEventListener("hashchange", renderPage);
  window.addEventListener("load", renderPage);
}

const routes: Record<string, HTMLElement> = {
  "/": Home(),
  "/shop": Shop(),
  "/service": Service(),
};

function renderPage(): void {
  const path = window.location.hash.slice(1) || "/";
  const page: HTMLElement = routes[path] || NotFound();
  Layout(() => page);
}
