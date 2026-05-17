import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import hero from "@/assets/gicumbi-hills.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — College Apegirubuki TSS" },
      { name: "description", content: "Mission, vision and story of College Apegirubuki TSS, a private mixed TVET school (Day & Boarding) in Rutare, Gicumbi District, Rwanda." },
      { property: "og:title", content: "About — College Apegirubuki TSS" },
      { property: "og:description", content: "Private mixed boarding TVET school in Gicumbi, Rwanda." },
    ],
  }),
  component: AboutPage,
});

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const } },
};

function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      <section className="relative isolate overflow-hidden">
        <img src={hero} alt="Gicumbi hills" width={1920} height={1080}
          className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-br from-deep/95 via-primary/80 to-deep/60" />
        <div className="container-x relative py-24 md:py-36 text-primary-foreground">
          <motion.div initial="hidden" animate="show" variants={fadeUp}
            className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-deep/40 px-4 py-1.5 text-xs uppercase tracking-[0.2em] text-gold">
            <span className="h-1.5 w-1.5 rounded-full bg-gold" /> About us
          </motion.div>
          <motion.h1 initial="hidden" animate="show" variants={fadeUp} transition={{ delay: 0.1 }}
            className="mt-5 font-display text-5xl md:text-7xl uppercase leading-[0.95] max-w-4xl">
            We train the hands<br /><span className="text-gold">that build a nation.</span>
          </motion.h1>
          <motion.p initial="hidden" animate="show" variants={fadeUp} transition={{ delay: 0.2 }}
            className="mt-6 max-w-2xl text-primary-foreground/85 text-lg">
            College Apegirubuki TSS is a private mixed Technical Secondary School (Day & Boarding) in Rutare, Gicumbi District, dedicated to producing skilled, disciplined and confident TVET graduates.
          </motion.p>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-cream border-b border-border">
        <div className="container-x grid grid-cols-2 md:grid-cols-4 gap-8 py-12 text-center">
          {[
            ["L3–L5", "TVET pathway"],
            ["2", "Specialized trades"],
            ["Mixed", "Boys & girls"],
            ["Day + Boarding", "Flexible attendance"],
          ].map(([k, v], i) => (
            <motion.div key={v}
              initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}>
              <div className="font-display text-3xl md:text-4xl text-primary">{k}</div>
              <div className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">{v}</div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="container-x py-24 grid md:grid-cols-2 gap-16">
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp}>
          <div className="text-xs font-display uppercase tracking-[0.3em] text-secondary">Mission</div>
          <h2 className="mt-3 font-display text-3xl md:text-4xl uppercase text-primary">Empower for the labor market.</h2>
          <p className="mt-5 text-foreground/80 leading-relaxed">
            We prepare young Rwandans with the technical skills, work ethic and entrepreneurial mindset required to thrive in employment or self-employment in Rwanda's growing construction sector.
          </p>
        </motion.div>
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp} transition={{ delay: 0.15 }}>
          <div className="text-xs font-display uppercase tracking-[0.3em] text-secondary">Vision</div>
          <h2 className="mt-3 font-display text-3xl md:text-4xl uppercase text-primary">A reference TSS in the North.</h2>
          <p className="mt-5 text-foreground/80 leading-relaxed">
            To be Northern Province's leading center for excellence in Building Construction and Public Works education — known for craft, character and impact.
          </p>
        </motion.div>
      </section>

      <section className="bg-cream py-24">
        <div className="container-x">
          <div className="text-xs font-display uppercase tracking-[0.3em] text-secondary">Our values</div>
          <h2 className="mt-3 font-display text-4xl md:text-5xl uppercase text-primary max-w-3xl">Built like a wall — every block matters.</h2>
          <div className="mt-12 grid md:grid-cols-4 gap-5">
            {[
              ["Discipline", "Boarding life builds focus, structure, and respect."],
              ["Craftsmanship", "We train the hand and the mind together."],
              ["Service", "Skills exist to serve communities and the nation."],
              ["Excellence", "We chase mastery, not just completion."],
            ].map(([t, b], i) => (
              <motion.div key={t}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="bg-background border border-border rounded-2xl p-6 hover:-translate-y-1 hover:border-secondary transition">
                <div className="h-1 w-8 bg-gold mb-4" />
                <h3 className="font-display text-lg uppercase text-primary">{t}</h3>
                <p className="mt-2 text-sm text-foreground/75">{b}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="container-x py-24">
        <div className="text-xs font-display uppercase tracking-[0.3em] text-secondary">Leadership</div>
        <h2 className="mt-3 font-display text-4xl md:text-5xl uppercase text-primary">Led with purpose.</h2>
        <div className="mt-10 rounded-2xl bg-deep text-primary-foreground p-8 md:p-12 grid md:grid-cols-[auto_1fr] gap-8 items-center relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,oklch(0.78_0.12_85_/_0.18),transparent_60%)]" />
          <div className="relative h-28 w-28 rounded-full bg-gold/20 ring-2 ring-gold/40 flex items-center justify-center font-display text-3xl text-gold">
            MJ
          </div>
          <div className="relative">
            <div className="text-xs font-display uppercase tracking-[0.3em] text-gold">School Manager</div>
            <div className="mt-2 font-display text-3xl uppercase">Maniriho Jean de Dieu</div>
            <p className="mt-3 text-primary-foreground/80 max-w-2xl">
              "Our promise is simple — every student who passes through this campus leaves with a trade, a discipline, and a future. Come build it with us."
            </p>
          </div>
        </div>
      </section>

      <section className="container-x py-24 text-center">
        <h2 className="font-display text-4xl md:text-5xl uppercase text-primary">Ready to join us?</h2>
        <p className="mt-4 text-foreground/70 max-w-xl mx-auto">Admissions are open for L3, L4 and L5. Take the first step today.</p>
        <Link to="/admissions" className="inline-block mt-8 rounded-md bg-primary px-8 py-4 font-display text-sm uppercase tracking-wider text-primary-foreground hover:bg-deep transition shadow-lg shadow-deep/20">
          See Admissions
        </Link>
      </section>
      <SiteFooter />
    </div>
  );
}
