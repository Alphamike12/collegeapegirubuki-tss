import { Link } from "@tanstack/react-router";
import { useState } from "react";

const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/programs", label: "Programs" },
  { to: "/admissions", label: "Admissions" },
  { to: "/campus", label: "Campus Life" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/85 backdrop-blur">
      <div className="container-x flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <span className="grid h-10 w-10 place-items-center rounded-md bg-primary text-primary-foreground font-display text-sm">
            AT
          </span>
          <span className="hidden sm:block leading-tight">
            <span className="block font-display text-sm uppercase tracking-wide text-primary">College Apegirubuki</span>
            <span className="block text-xs text-muted-foreground">TSS · Rutare, Gicumbi</span>
          </span>
        </Link>
        <nav className="hidden lg:flex items-center gap-7 text-sm">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="text-foreground/70 hover:text-primary transition"
              activeProps={{ className: "text-primary font-semibold" }}
              activeOptions={{ exact: n.to === "/" }}
            >
              {n.label}
            </Link>
          ))}
          <Link to="/admissions" className="rounded-md bg-primary px-4 py-2 text-primary-foreground font-display text-xs uppercase tracking-wider hover:bg-deep transition">
            Apply
          </Link>
        </nav>
        <button onClick={() => setOpen(!open)} className="lg:hidden p-2" aria-label="Menu">
          <div className="w-6 h-0.5 bg-foreground mb-1.5" />
          <div className="w-6 h-0.5 bg-foreground mb-1.5" />
          <div className="w-6 h-0.5 bg-foreground" />
        </button>
      </div>
      {open && (
        <div className="lg:hidden border-t border-border bg-background">
          <div className="container-x py-4 flex flex-col gap-3">
            {nav.map((n) => (
              <Link key={n.to} to={n.to} onClick={() => setOpen(false)} className="py-1 text-foreground/80">
                {n.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
