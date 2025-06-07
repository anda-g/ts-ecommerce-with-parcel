import Footer from "./components/footer";
import Header from "./components/header";

export default function Layout(children: () => HTMLElement): void {
  const app = document.getElementById("app");
  if (!app) {
    throw new Error("[!] Cannot find app.");
  }
  app.innerHTML = "";
  const header = Header();
  const main = children();
  const footer = Footer();

  app.append(header, main, footer);
}
