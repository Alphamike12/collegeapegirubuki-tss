import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — College Apegirubuki TSS" },
      { name: "description", content: "Mission, vision and story of College Apegirubuki TSS, a private mixed TVET school (Day & Boarding) in Rutare, Gicumbi District, Rwanda." },
      { property: "og:title", content: "About — College Apegirubuki TSS" },
      { property: "og:description", content: "Public boarding TVET school in Gicumbi, Rwanda." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <section className="bg-deep text-primary-foreground">
        <div className="container-x py-20 md:py-28">
          <div className="text-xs font-display uppercase tracking-[0.3em] text-gold">About</div>
          <h1 className="mt-3 font-display text-5xl md:text-7xl uppercase leading-[0.95] max-w-4xl">
            We train the hands<br />that build a nation.
          </h1>
          <p className="mt-6 max-w-2xl text-primary-foreground/80 text-lg">
            College Apegirubuki TSS is a private mixed Technical Secondary School (Day & Boarding) in Rutare, Gicumbi District, dedicated to producing skilled, disciplined and confident TVET graduates.
          </p>
        </div>
      </section>

      <section className="container-x py-20 grid md:grid-cols-2 gap-16">
        <div>
          <div className="text-xs font-display uppercase tracking-[0.3em] text-secondary">Mission</div>
          <h2 className="mt-3 font-display text-3xl md:text-4xl uppercase text-primary">Empower for the labor market.</h2>
          <p className="mt-5 text-foreground/80 leading-relaxed">
            We prepare young Rwandans with the technical skills, work ethic and entrepreneurial mindset required to thrive in employment or self-employment in Rwanda's growing construction sector.
          </p>
        </div>
        <div>
          <div className="text-xs font-display uppercase tracking-[0.3em] text-secondary">Vision</div>
          <h2 className="mt-3 font-display text-3xl md:text-4xl uppercase text-primary">A reference TSS in the North.</h2>
          <p className="mt-5 text-foreground/80 leading-relaxed">
            To be Northern Province's leading center for excellence in Building Construction and Public Works education — known for craft, character and impact.
          </p>
        </div>
      </section>

      <section className="bg-cream py-20">
        <div className="container-x">
          <div className="text-xs font-display uppercase tracking-[0.3em] text-secondary">Our values</div>
          <h2 className="mt-3 font-display text-4xl md:text-5xl uppercase text-primary max-w-3xl">Built like a wall — every block matters.</h2>
          <div className="mt-12 grid md:grid-cols-4 gap-5">
            {[
              ["Discipline", "Boarding life builds focus, structure, and respect."],
              ["Craftsmanship", "We train the hand and the mind together."],
              ["Service", "Skills exist to serve communities and the nation."],
              ["Excellence", "We chase mastery, not just completion."],
            ].map(([t, b]) => (
              <div key={t} className="bg-background border border-border rounded-2xl p-6">
                <div className="h-1 w-8 bg-gold mb-4" />
                <h3 className="font-display text-lg uppercase text-primary">{t}</h3>
                <p className="mt-2 text-sm text-foreground/75">{b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container-x py-20 text-center">
        <h2 className="font-display text-4xl md:text-5xl uppercase text-primary">Ready to join us?</h2>
        <Link to="/admissions" className="inline-block mt-8 rounded-md bg-primary px-8 py-4 font-display text-sm uppercase tracking-wider text-primary-foreground hover:bg-deep">
          See Admissions
        </Link>
      </section>
      <SiteFooter />
    </div>
  );
}
