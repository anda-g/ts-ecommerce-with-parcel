export default function NotFound(): HTMLElement {
  const element = document.createElement("div");
  element.innerHTML = "<h1>404 - Not Found</h1>";
  return element;
}
