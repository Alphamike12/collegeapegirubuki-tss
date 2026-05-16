import { createFileRoute } from "@tanstack/react-router";
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

function ContactPage() {
  const [sent, setSent] = useState(false);
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <section className="bg-deep text-primary-foreground">
        <div className="container-x py-20">
          <div className="text-xs font-display uppercase tracking-[0.3em] text-gold">Contact</div>
          <h1 className="mt-3 font-display text-5xl md:text-7xl uppercase leading-[0.95]">Let's talk.</h1>
          <p className="mt-6 max-w-xl text-primary-foreground/80 text-lg">
            Questions about admissions, partnerships, or visiting our campus? We'd love to hear from you.
          </p>
        </div>
      </section>

      <section className="container-x py-20 grid md:grid-cols-5 gap-12">
        <div className="md:col-span-2 space-y-8">
          <Info label="Address" lines={["College Apegirubuki TSS", "Rutare Sector", "Gicumbi District", "Northern Province, Rwanda"]} />
          <Info label="Phone" lines={["+250 785 082 307", "Manager: Maniriho Jean de Dieu"]} />
          <Info label="Email" lines={["apegirubuki10@yahoo.com"]} />
          <Info label="School Office" lines={["Open Mon – Fri", "08:00 – 17:00 CAT"]} />
        </div>
        <form
          onSubmit={(e) => { e.preventDefault(); setSent(true); }}
          className="md:col-span-3 rounded-2xl border border-border bg-card p-8 space-y-5"
        >
          <Field label="Full name" name="name" required />
          <Field label="Email" name="email" type="email" required />
          <Field label="Subject" name="subject" />
          <div>
            <label className="block text-xs font-display uppercase tracking-wider text-primary mb-2">Message</label>
            <textarea required rows={5} className="w-full rounded-md border border-border bg-background px-4 py-3 focus:outline-none focus:border-secondary" />
          </div>
          <button type="submit" className="rounded-md bg-primary px-6 py-3 font-display text-xs uppercase tracking-wider text-primary-foreground hover:bg-deep">
            {sent ? "Message sent ✓" : "Send message"}
          </button>
        </form>
      </section>

      <section className="container-x pb-24">
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
        <div className="overflow-hidden rounded-2xl border border-border shadow-lg shadow-deep/10">
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
        className="w-full rounded-md border border-border bg-background px-4 py-3 focus:outline-none focus:border-secondary" />
    </div>
  );
}
