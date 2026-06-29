import { useState } from "react";
import { profile } from "../data/profile";
import Logo from "./Logo";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Process", href: "#process" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-4 z-50 px-4">
      <nav className="glass-panel mx-auto flex max-w-[1240px] items-center justify-between rounded-lg px-4 py-2.5 md:px-5" aria-label="Primary">
        <a href="#home" className="logo-lockup" aria-label={`${profile.brandName} home`}>
          <Logo />
        </a>

        <button
          className="inline-grid size-10 place-items-center rounded-lg border border-line bg-white text-navy shadow-card md:hidden"
          type="button"
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((value) => !value)}
        >
          <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>

        <div className="hidden items-center gap-2 md:flex">
          {navItems.map((item, index) => (
            <a key={item.href} className={`nav-link ${index === 0 ? "nav-link-active" : ""}`} href={item.href}>
              {item.label}
            </a>
          ))}
          <a className="btn btn-small btn-primary ml-2" href="#contact">
            Let's Talk
          </a>
        </div>
      </nav>

      {open ? (
        <div id="mobile-menu" className="glass-panel mx-auto mt-2 max-w-[1240px] rounded-lg px-5 py-4 md:hidden">
          <div className="mx-auto flex max-w-[1240px] flex-col gap-3">
            {navItems.map((item) => (
              <a key={item.href} className="nav-link py-2" href={item.href} onClick={() => setOpen(false)}>
                {item.label}
              </a>
            ))}
            <a className="btn btn-primary mt-2 justify-center" href="#contact" onClick={() => setOpen(false)}>
              Let's Talk
            </a>
          </div>
        </div>
      ) : null}
    </header>
  );
}
