import { createFileRoute } from "@tanstack/react-router";
import { motion } from "motion/react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { useState } from "react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — College Apegirubuki TSS" },
      { name: "description", content: "Get in touch with College Apegirubuki TSS in Rutare, Gicumbi District, Northern Province, Rwanda." },
      { property: "og:title", content: "Contact — College Apegirubuki TSS" },
      { property: "og:description", content: "Reach our school office, admissions, and campus." },
    ],
  }),
  component: ContactPage,
});

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const } },
};

function ContactPage() {
  const [sent, setSent] = useState(false);
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      {/* Hero */}
      <section className="relative isolate overflow-hidden bg-deep text-primary-foreground">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,oklch(0.78_0.12_85_/_0.25),transparent_60%)]" />
        <div className="container-x relative py-20 md:py-28">
          <motion.div initial="hidden" animate="show" variants={fadeUp}
            className="inline-flex items-center gap-2 rounded-full border border-gold/40 px-4 py-1.5 text-xs uppercase tracking-[0.2em] text-gold">
            <span className="h-1.5 w-1.5 rounded-full bg-gold" /> We're here to help
          </motion.div>
          <motion.h1 initial="hidden" animate="show" variants={fadeUp} transition={{ delay: 0.1 }}
            className="mt-5 font-display text-5xl md:text-7xl uppercase leading-[0.95]">
            Let's <span className="text-gold">talk.</span>
          </motion.h1>
          <motion.p initial="hidden" animate="show" variants={fadeUp} transition={{ delay: 0.2 }}
            className="mt-6 max-w-xl text-primary-foreground/85 text-lg">
            Questions about admissions, partnerships, or visiting our campus? We'd love to hear from you.
          </motion.p>
        </div>
      </section>

      {/* Quick contact cards */}
      <section className="container-x -mt-10 relative z-10 grid md:grid-cols-3 gap-5 mb-16">
        {[
          { label: "Call us", value: "+250 785 082 307", href: "tel:+250785082307", sub: "Manager: Maniriho Jean de Dieu" },
          { label: "Email", value: "apegirubuki10@yahoo.com", href: "mailto:apegirubuki10@yahoo.com", sub: "We reply within 1–2 working days" },
          { label: "Visit", value: "Rutare, Gicumbi", href: "#location", sub: "Northern Province, Rwanda" },
        ].map((c, i) => (
          <motion.a key={c.label} href={c.href}
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="rounded-2xl border border-border bg-card p-6 hover:border-secondary hover:-translate-y-1 transition shadow-lg shadow-deep/5 block">
            <div className="text-xs font-display uppercase tracking-[0.3em] text-secondary">{c.label}</div>
            <div className="mt-2 font-display text-lg text-primary break-all">{c.value}</div>
            <div className="mt-1 text-sm text-foreground/65">{c.sub}</div>
          </motion.a>
        ))}
      </section>

      <section className="container-x pb-20 grid md:grid-cols-5 gap-12">
        <div className="md:col-span-2 space-y-8">
          <Info label="Address" lines={["College Apegirubuki TSS", "Rutare Sector", "Gicumbi District", "Northern Province, Rwanda"]} />
          <Info label="School Office" lines={["Open Mon – Fri", "08:00 – 17:00 CAT"]} />
          <Info label="School type" lines={["Private mixed TSS", "Day & Boarding", "TVET · L3 – L5"]} />
        </div>
        <motion.form
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          onSubmit={(e) => { e.preventDefault(); setSent(true); }}
          className="md:col-span-3 rounded-2xl border border-border bg-card p-8 space-y-5 shadow-xl shadow-deep/5"
        >
          <div className="text-xs font-display uppercase tracking-[0.3em] text-secondary">Send a message</div>
          <Field label="Full name" name="name" required />
          <Field label="Email" name="email" type="email" required />
          <Field label="Subject" name="subject" />
          <div>
            <label className="block text-xs font-display uppercase tracking-wider text-primary mb-2">Message</label>
            <textarea required rows={5} className="w-full rounded-md border border-border bg-background px-4 py-3 focus:outline-none focus:border-secondary focus:ring-2 focus:ring-secondary/20 transition" />
          </div>
          <button type="submit" className="rounded-md bg-primary px-6 py-3 font-display text-xs uppercase tracking-wider text-primary-foreground hover:bg-deep transition shadow-lg shadow-deep/20">
            {sent ? "Message sent ✓" : "Send message"}
          </button>
        </motion.form>
      </section>

      <section id="location" className="container-x pb-24">
        <div className="flex items-end justify-between gap-6 flex-wrap mb-6">
          <div>
            <div className="text-xs font-display uppercase tracking-[0.3em] text-secondary">Find us</div>
            <h2 className="mt-2 font-display text-3xl md:text-4xl uppercase text-primary">Campus location</h2>
          </div>
          <a
            href="https://www.google.com/maps/place/photo+apegirubuki+tss/@-1.7277344,30.1780986,17z"
            target="_blank"
            rel="noopener noreferrer"
            className="font-display text-sm uppercase tracking-wider text-primary hover:text-secondary"
          >
            Open in Google Maps →
          </a>
        </div>
        <div className="overflow-hidden rounded-2xl border border-border shadow-2xl shadow-deep/10">
          <iframe
            title="College Apegirubuki TSS location"
            src="https://www.google.com/maps?q=-1.7277344,30.1780986&z=17&output=embed"
            width="100%"
            height="450"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="block w-full h-[450px] border-0"
          />
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}

function Info({ label, lines }: { label: string; lines: string[] }) {
  return (
    <div>
      <div className="text-xs font-display uppercase tracking-[0.3em] text-secondary">{label}</div>
      <div className="mt-3 space-y-1 text-foreground/85">
        {lines.map(l => <div key={l}>{l}</div>)}
      </div>
    </div>
  );
}

function Field({ label, name, type = "text", required }: { label: string; name: string; type?: string; required?: boolean }) {
  return (
    <div>
      <label htmlFor={name} className="block text-xs font-display uppercase tracking-wider text-primary mb-2">{label}</label>
      <input id={name} name={name} type={type} required={required}
        className="w-full rounded-md border border-border bg-background px-4 py-3 focus:outline-none focus:border-secondary focus:ring-2 focus:ring-secondary/20 transition" />
    </div>
  );
}
