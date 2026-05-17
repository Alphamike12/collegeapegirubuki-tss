import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import heroImg from "@/assets/admissions-hero.jpg";

export const Route = createFileRoute("/admissions")({
  head: () => ({
    meta: [
      { title: "Admissions — College Apegirubuki TSS" },
      { name: "description", content: "How to apply to College Apegirubuki TSS — requirements, process and intake information." },
      { property: "og:title", content: "Admissions — College Apegirubuki TSS" },
      { property: "og:description", content: "Apply to a leading private mixed TVET school (Day & Boarding) in Gicumbi, Rwanda." },
    ],
  }),
  component: AdmissionsPage,
});

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const } },
};

const steps = [
  { n: "01", t: "Check requirements", d: "Completion of Ordinary Level (S3) or equivalent for L3 entry. L4 and L5 require successful completion of the prior level." },
  { n: "02", t: "Prepare documents", d: "National ID or birth certificate, academic records, passport photos, and a parent/guardian contact." },
  { n: "03", t: "Submit application", d: "Apply through the school admissions office or the national TVET placement system during the official intake window." },
  { n: "04", t: "Join the campus", d: "Selected students report for boarding orientation and begin their trade journey." },
];

const faqs = [
  ["When does the next intake open?", "We follow Rwanda's national academic calendar. Contact our admissions office for the next intake window."],
  ["Is boarding required?", "We offer both Day and Boarding options. Boarding is recommended for students living far from Rutare."],
  ["What does it cost?", "School fees follow Rwanda's TSS guidelines. Contact admissions for the current schedule and payment plans."],
  ["Can girls apply?", "Yes — we are a mixed school and actively welcome girls into Building Construction and Public Works."],
];

function AdmissionsPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      {/* Hero */}
      <section className="relative isolate overflow-hidden">
        <img src={heroImg} alt="Smiling students at College Apegirubuki TSS" width={1920} height={1080}
          className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-br from-deep/95 via-primary/80 to-deep/50" />
        <div className="container-x relative py-24 md:py-36 text-primary-foreground">
          <motion.div initial="hidden" animate="show" variants={fadeUp}
            className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-deep/40 px-4 py-1.5 text-xs uppercase tracking-[0.2em] text-gold">
            <span className="h-1.5 w-1.5 rounded-full bg-gold animate-pulse" /> Admissions Open
          </motion.div>
          <motion.h1 initial="hidden" animate="show" variants={fadeUp} transition={{ delay: 0.1 }}
            className="mt-5 font-display text-5xl md:text-7xl uppercase leading-[0.95]">
            Join the<br /><span className="text-gold">next intake.</span>
          </motion.h1>
          <motion.p initial="hidden" animate="show" variants={fadeUp} transition={{ delay: 0.2 }}
            className="mt-6 max-w-xl text-primary-foreground/85 text-lg">
            A simple, transparent path into one of Northern Province's most respected TVET schools.
          </motion.p>
          <motion.div initial="hidden" animate="show" variants={fadeUp} transition={{ delay: 0.3 }}
            className="mt-8 flex flex-wrap gap-4">
            <a href="tel:+250785082307" className="rounded-md bg-gold px-6 py-3 font-display text-sm uppercase tracking-wider text-gold-foreground hover:opacity-90 transition shadow-lg shadow-deep/30">
              Call admissions
            </a>
            <Link to="/contact" className="rounded-md border border-primary-foreground/40 px-6 py-3 font-display text-sm uppercase tracking-wider hover:bg-primary-foreground/10 transition">
              Send a message
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Steps timeline */}
      <section className="container-x py-24">
        <div className="text-xs font-display uppercase tracking-[0.3em] text-secondary">How to apply</div>
        <h2 className="mt-3 font-display text-4xl md:text-5xl uppercase text-primary">Four steps to enrollment</h2>

        <div className="mt-12 relative">
          <div className="hidden md:block absolute left-0 right-0 top-12 h-px bg-gradient-to-r from-transparent via-gold/60 to-transparent" />
          <div className="grid md:grid-cols-4 gap-5">
            {steps.map((s, i) => (
              <motion.div key={s.n}
                initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative rounded-2xl border border-border bg-card p-7 hover:border-secondary hover:-translate-y-1 transition">
                <div className="relative inline-flex items-center justify-center h-12 w-12 rounded-full bg-gold text-gold-foreground font-display text-sm shadow-lg shadow-gold/30">
                  {s.n}
                </div>
                <h3 className="mt-4 font-display text-lg uppercase text-primary">{s.t}</h3>
                <p className="mt-2 text-sm text-foreground/75 leading-relaxed">{s.d}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Eligibility + CTA */}
      <section className="bg-cream py-24">
        <div className="container-x grid md:grid-cols-2 gap-12">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp}>
            <div className="text-xs font-display uppercase tracking-[0.3em] text-secondary">Eligibility</div>
            <h2 className="mt-3 font-display text-4xl uppercase text-primary">Who can apply</h2>
            <ul className="mt-6 space-y-3 text-foreground/85">
              <li className="flex gap-3"><span className="text-gold font-display">✓</span> Rwandan students who completed Ordinary Level (for L3).</li>
              <li className="flex gap-3"><span className="text-gold font-display">✓</span> Students continuing from L3 → L4 → L5 pathways.</li>
              <li className="flex gap-3"><span className="text-gold font-display">✓</span> Boys and girls motivated by hands-on learning.</li>
              <li className="flex gap-3"><span className="text-gold font-display">✓</span> Willingness to live in a boarding environment (for boarders).</li>
            </ul>
          </motion.div>
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp} transition={{ delay: 0.15 }}
            className="rounded-2xl bg-deep text-primary-foreground p-8 relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,oklch(0.78_0.12_85_/_0.25),transparent_60%)]" />
            <div className="relative">
              <h3 className="font-display text-2xl uppercase text-gold">Need guidance?</h3>
              <p className="mt-3 text-primary-foreground/80">Our admissions team is happy to walk parents and prospective students through the process.</p>
              <div className="mt-6 space-y-2 text-sm">
                <div><span className="text-gold">Phone:</span> <a href="tel:+250785082307" className="hover:underline">+250 785 082 307</a></div>
                <div><span className="text-gold">Email:</span> <a href="mailto:apegirubuki10@yahoo.com" className="hover:underline break-all">apegirubuki10@yahoo.com</a></div>
                <div><span className="text-gold">Manager:</span> Maniriho Jean de Dieu</div>
              </div>
              <Link to="/contact" className="mt-7 inline-block rounded-md bg-gold px-6 py-3 font-display text-xs uppercase tracking-wider text-gold-foreground hover:opacity-90">
                Contact admissions
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section className="container-x py-24">
        <div className="text-xs font-display uppercase tracking-[0.3em] text-secondary">FAQ</div>
        <h2 className="mt-3 font-display text-4xl md:text-5xl uppercase text-primary">Common questions</h2>
        <div className="mt-10 divide-y divide-border border-y border-border">
          {faqs.map(([q, a], i) => (
            <motion.details key={i}
              initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
              className="group py-5">
              <summary className="flex justify-between items-center cursor-pointer list-none">
                <span className="font-display text-lg uppercase text-primary">{q}</span>
                <span className="text-gold text-2xl transition group-open:rotate-45">+</span>
              </summary>
              <p className="mt-3 text-foreground/75 leading-relaxed">{a}</p>
            </motion.details>
          ))}
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
