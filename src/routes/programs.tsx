import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import construction from "@/assets/program-construction.jpg";
import publicworks from "@/assets/program-publicworks.jpg";
import heroImg from "@/assets/programs-hero.jpg";

export const Route = createFileRoute("/programs")({
  head: () => ({
    meta: [
      { title: "Programs — College Apegirubuki TSS" },
      { name: "description", content: "TVET programs at College Apegirubuki TSS: Building Construction and Public Works (L3–L5)." },
      { property: "og:title", content: "Programs — College Apegirubuki TSS" },
      { property: "og:description", content: "Building Construction & Public Works at L3, L4 and L5 levels." },
    ],
  }),
  component: ProgramsPage,
});

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const } },
};

const programs = [
  {
    img: construction,
    name: "Building Construction",
    code: "BCO",
    levels: ["L3", "L4", "L5"],
    intro: "From the foundation block to the finishing trowel — students master every stage of constructing safe, modern buildings.",
    skills: ["Masonry & concrete", "Structural reading", "Finishing & joinery", "Site safety", "Cost estimation", "Team supervision"],
    careers: ["Site supervisor", "Mason / contractor", "Finisher", "Construction technician"],
  },
  {
    img: publicworks,
    name: "Public Works",
    code: "PWO",
    levels: ["L3", "L4", "L5"],
    intro: "The infrastructure that connects Rwanda — roads, bridges, drainage and surveying for the public good.",
    skills: ["Surveying", "Road construction", "Drainage systems", "Material testing", "Public project management", "Site logistics"],
    careers: ["Land surveyor", "Road technician", "Site engineer assistant", "Infrastructure inspector"],
  },
];

function ProgramsPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      {/* Hero with parallax */}
      <section className="relative isolate overflow-hidden">
        <img src={heroImg} alt="Apegirubuki TSS students on construction site" width={1920} height={1080}
          className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-br from-deep/95 via-primary/80 to-deep/60" />
        <div className="container-x relative py-24 md:py-36 text-primary-foreground">
          <motion.div initial="hidden" animate="show" variants={fadeUp}
            className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-deep/40 px-4 py-1.5 text-xs uppercase tracking-[0.2em] text-gold">
            <span className="h-1.5 w-1.5 rounded-full bg-gold" /> 2 Trades · L3 – L5
          </motion.div>
          <motion.h1 initial="hidden" animate="show" variants={fadeUp} transition={{ delay: 0.1 }}
            className="mt-5 font-display text-5xl md:text-7xl uppercase leading-[0.95]">
            Trades that<br /><span className="text-gold">build careers.</span>
          </motion.h1>
          <motion.p initial="hidden" animate="show" variants={fadeUp} transition={{ delay: 0.2 }}
            className="mt-6 max-w-xl text-primary-foreground/85 text-lg">
            Two specialized TVET pathways — each designed around real labor-market demand in Rwanda's construction sector.
          </motion.p>
        </div>
      </section>

      {/* Quick stats strip */}
      <section className="bg-cream border-y border-border">
        <div className="container-x grid grid-cols-2 md:grid-cols-4 gap-8 py-10 text-center">
          {[
            ["2", "Trades offered"],
            ["3", "RTB levels"],
            ["100%", "Hands-on workshops"],
            ["Both", "Day & Boarding"],
          ].map(([k, v]) => (
            <motion.div key={v} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <div className="font-display text-3xl md:text-4xl text-primary">{k}</div>
              <div className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">{v}</div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="container-x py-24 space-y-24">
        {programs.map((p, i) => (
          <motion.article key={p.code}
            initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
            className={`grid md:grid-cols-12 gap-10 items-center ${i % 2 ? "md:[&>div:first-child]:order-2" : ""}`}>
            <div className="md:col-span-6">
              <div className="relative rounded-2xl overflow-hidden border border-border shadow-2xl shadow-deep/20 group">
                <img src={p.img} alt={p.name} width={1280} height={960} loading="lazy"
                  className="w-full h-full object-cover transition duration-[1.2s] group-hover:scale-105" />
                <div className="absolute top-4 left-4 bg-gold text-gold-foreground rounded-md px-3 py-1 font-display text-xs uppercase tracking-wider shadow-lg">
                  {p.code}
                </div>
              </div>
            </div>
            <div className="md:col-span-6">
              <div className="flex items-center gap-2 flex-wrap">
                <span className="text-xs font-display uppercase tracking-[0.3em] text-secondary">{p.name}</span>
                {p.levels.map(l => (
                  <span key={l} className="text-xs font-display bg-gold text-gold-foreground rounded px-2 py-0.5">{l}</span>
                ))}
              </div>
              <h2 className="mt-4 font-display text-4xl md:text-5xl uppercase text-primary leading-tight">{p.name}</h2>
              <p className="mt-4 text-foreground/80 leading-relaxed text-lg">{p.intro}</p>

              <div className="mt-7">
                <div className="text-xs font-display uppercase tracking-wider text-secondary mb-3">What you'll learn</div>
                <div className="grid grid-cols-2 gap-2">
                  {p.skills.map(s => (
                    <div key={s} className="flex items-center gap-2 text-sm">
                      <span className="h-1.5 w-1.5 rounded-full bg-gold" />
                      {s}
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-7">
                <div className="text-xs font-display uppercase tracking-wider text-secondary mb-3">Career paths</div>
                <div className="flex flex-wrap gap-2">
                  {p.careers.map(c => (
                    <span key={c} className="text-xs rounded-full border border-border bg-cream px-3 py-1 text-foreground/80">{c}</span>
                  ))}
                </div>
              </div>

              <Link to="/admissions" className="mt-8 inline-block rounded-md bg-primary px-6 py-3 font-display text-xs uppercase tracking-wider text-primary-foreground hover:bg-deep transition shadow-lg shadow-deep/20">
                Apply for {p.code}
              </Link>
            </div>
          </motion.article>
        ))}
      </section>

      {/* Pathway visual */}
      <section className="bg-deep text-primary-foreground py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,oklch(0.78_0.12_85_/_0.18),transparent_60%)]" />
        <div className="container-x relative">
          <div className="text-xs font-display uppercase tracking-[0.3em] text-gold">The pathway</div>
          <h2 className="mt-3 font-display text-4xl md:text-5xl uppercase">L3 → L4 → L5 → Career</h2>
          <p className="mt-4 max-w-2xl text-primary-foreground/80">
            Each level deepens the trade and opens new options — from skilled worker to site supervisor and onward to polytechnic studies.
          </p>
          <div className="mt-12 grid md:grid-cols-4 gap-px bg-primary-foreground/10 rounded-xl overflow-hidden border border-primary-foreground/15">
            {[
              ["L3", "Foundations", "Core tools, materials, safety, basics of the trade."],
              ["L4", "Application", "Real projects, blueprints, advanced workshop techniques."],
              ["L5", "Mastery", "Supervision, planning, estimation, leadership on site."],
              ["Career", "Launch", "Employment, self-employment, or onward studies."],
            ].map(([k, t, b]) => (
              <div key={k} className="bg-deep/70 p-7">
                <div className="font-display text-3xl text-gold">{k}</div>
                <div className="mt-2 font-display text-sm uppercase tracking-wider">{t}</div>
                <p className="mt-2 text-sm text-primary-foreground/70">{b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
