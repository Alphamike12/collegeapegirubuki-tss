import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { motion, useScroll, useSpring } from "motion/react";
import logo from "@/assets/logo.png";

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
  const [scrolled, setScrolled] = useState(false);
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.2 });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`sticky top-0 z-50 border-b transition-all ${scrolled ? "border-border/80 bg-background/90 shadow-sm" : "border-transparent bg-background/70"} backdrop-blur`}>
      <div className="container-x flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-3 group">
          <img src={logo} alt="College Apegirubuki TSS logo" width={44} height={44} className="h-11 w-11 rounded-md object-contain bg-cream p-0.5 ring-1 ring-border group-hover:ring-gold transition" />
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
              className="text-foreground/70 hover:text-primary transition relative py-1"
              activeProps={{ className: "text-primary font-semibold" }}
              activeOptions={{ exact: n.to === "/" }}
            >
              {n.label}
            </Link>
          ))}
          <Link to="/admissions" className="rounded-md bg-primary px-4 py-2 text-primary-foreground font-display text-xs uppercase tracking-wider hover:bg-deep transition shadow-md shadow-deep/20">
            Apply
          </Link>
        </nav>
        <button onClick={() => setOpen(!open)} className="lg:hidden p-2" aria-label="Menu">
          <div className={`w-6 h-0.5 bg-foreground mb-1.5 transition ${open ? "rotate-45 translate-y-2" : ""}`} />
          <div className={`w-6 h-0.5 bg-foreground mb-1.5 transition ${open ? "opacity-0" : ""}`} />
          <div className={`w-6 h-0.5 bg-foreground transition ${open ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>
      {open && (
        <div className="lg:hidden border-t border-border bg-background">
          <div className="container-x py-4 flex flex-col gap-3">
            {nav.map((n) => (
              <Link key={n.to} to={n.to} onClick={() => setOpen(false)} className="py-1 text-foreground/80 hover:text-primary"
                activeProps={{ className: "text-primary font-semibold" }}
                activeOptions={{ exact: n.to === "/" }}>
                {n.label}
              </Link>
            ))}
            <Link to="/admissions" onClick={() => setOpen(false)} className="mt-2 rounded-md bg-primary px-4 py-2.5 text-primary-foreground font-display text-xs uppercase tracking-wider text-center">
              Apply
            </Link>
          </div>
        </div>
      )}
      <motion.div className="h-[2px] bg-gold origin-left" style={{ scaleX: progress }} />
    </header>
  );
}
