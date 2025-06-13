import Layout from "./layout";
import Home from "./pages/home";
import NotFound from "./pages/notFound";
import ProductDetail from "./pages/productDetail";
import Service from "./pages/service";
import Shop from "./pages/shop";

export default function initRouter(): void {
  window.addEventListener("popstate", renderPage);
  window.addEventListener("hashchange", renderPage);
  window.addEventListener("load", renderPage);
}

const staticRoutes: Record<string, () => HTMLElement> = {
  "/": Home,
  "/shop": Shop,
  "/service": Service,
};

function renderPage(): void {
  const path = window.location.hash.slice(1) || "/";

  // Check for static routes first
  if (staticRoutes[path]) {
    Layout(() => staticRoutes[path]());
    return;
  }

  // Check for dynamic routes (like /shop/:id)
  const dynamicRouteMatch = path.match(/^\/shop\/([^\/]+)$/);
  if (dynamicRouteMatch) {
    const productId = dynamicRouteMatch[1];
    Layout(() => ProductDetail(productId));
    return;
  }

  // If no route matches, show 404
  Layout(() => NotFound());
}
