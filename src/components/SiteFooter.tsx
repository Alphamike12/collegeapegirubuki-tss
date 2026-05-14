import { Link } from "@tanstack/react-router";
import logo from "@/assets/logo.png";

export function SiteFooter() {
  return (
    <footer className="mt-24 bg-deep text-primary-foreground">
      <div className="container-x py-16 grid gap-10 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-4">
            <img src={logo} alt="College Apegirubuki TSS logo" width={64} height={64} className="h-16 w-16 rounded-lg object-contain bg-cream p-1" />
            <div className="font-display text-2xl uppercase">College Apegirubuki TSS</div>
          </div>
          <p className="mt-3 text-sm text-primary-foreground/70 max-w-md">
            A private mixed Technical Secondary School (Day & Boarding) in Rutare, Gicumbi District — building Rwanda's next generation of construction and public works professionals.
          </p>
          <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-gold/40 px-4 py-1.5 text-xs uppercase tracking-wider text-gold">
            <span className="h-1.5 w-1.5 rounded-full bg-gold" /> TVET · L3 – L5 · Day & Boarding
          </div>
        </div>
        <div>
          <div className="font-display text-xs uppercase tracking-wider text-gold mb-3">Explore</div>
          <ul className="space-y-2 text-sm">
            <li><Link to="/about" className="hover:text-gold">About</Link></li>
            <li><Link to="/programs" className="hover:text-gold">Programs</Link></li>
            <li><Link to="/admissions" className="hover:text-gold">Admissions</Link></li>
            <li><Link to="/campus" className="hover:text-gold">Campus Life</Link></li>
          </ul>
        </div>
        <div>
          <div className="font-display text-xs uppercase tracking-wider text-gold mb-3">Visit</div>
          <ul className="space-y-2 text-sm text-primary-foreground/80">
            <li>Rutare Sector</li>
            <li>Gicumbi District</li>
            <li>Northern Province, Rwanda</li>
            <li className="pt-2"><Link to="/contact" className="text-gold hover:underline">Contact us →</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-primary-foreground/10">
        <div className="container-x py-5 text-xs text-primary-foreground/60 flex flex-wrap items-center justify-between gap-2">
          <span>© {new Date().getFullYear()} College Apegirubuki TSS. All rights reserved.</span>
          <span>Empowering youth · Building Rwanda</span>
        </div>
      </div>
    </footer>
  );
}
