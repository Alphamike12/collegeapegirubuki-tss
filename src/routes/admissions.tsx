import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

export const Route = createFileRoute("/admissions")({
  head: () => ({
    meta: [
      { title: "Admissions — College Apegirubuki TSS" },
      { name: "description", content: "How to apply to College Apegirubuki TSS — requirements, process and intake information." },
      { property: "og:title", content: "Admissions — College Apegirubuki TSS" },
      { property: "og:description", content: "Apply to a leading public boarding TVET school in Gicumbi, Rwanda." },
    ],
  }),
  component: AdmissionsPage,
});

const steps = [
  { n: "01", t: "Check requirements", d: "Completion of Ordinary Level (S3) or equivalent for L3 entry. L4 and L5 require successful completion of the prior level." },
  { n: "02", t: "Prepare documents", d: "National ID or birth certificate, academic records, passport photos, and a parent/guardian contact." },
  { n: "03", t: "Submit application", d: "Apply through the school admissions office or the national TVET placement system during the official intake window." },
  { n: "04", t: "Join the campus", d: "Selected students report for boarding orientation and begin their trade journey." },
];

function AdmissionsPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <section className="bg-deep text-primary-foreground">
        <div className="container-x py-20">
          <div className="text-xs font-display uppercase tracking-[0.3em] text-gold">Admissions</div>
          <h1 className="mt-3 font-display text-5xl md:text-7xl uppercase leading-[0.95]">Join the next intake.</h1>
          <p className="mt-6 max-w-xl text-primary-foreground/80 text-lg">
            A simple, transparent path into one of Northern Province's most respected TVET schools.
          </p>
        </div>
      </section>

      <section className="container-x py-20">
        <div className="grid md:grid-cols-2 gap-5">
          {steps.map(s => (
            <div key={s.n} className="rounded-2xl border border-border bg-card p-7 hover:border-secondary transition">
              <div className="font-display text-5xl text-gold">{s.n}</div>
              <h3 className="mt-3 font-display text-2xl uppercase text-primary">{s.t}</h3>
              <p className="mt-2 text-foreground/75">{s.d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-cream py-20">
        <div className="container-x grid md:grid-cols-2 gap-12">
          <div>
            <div className="text-xs font-display uppercase tracking-[0.3em] text-secondary">Eligibility</div>
            <h2 className="mt-3 font-display text-4xl uppercase text-primary">Who can apply</h2>
            <ul className="mt-6 space-y-3 text-foreground/80">
              <li className="flex gap-3"><span className="text-gold font-display">✓</span> Rwandan students who completed Ordinary Level (for L3).</li>
              <li className="flex gap-3"><span className="text-gold font-display">✓</span> Students continuing from L3 → L4 → L5 pathways.</li>
              <li className="flex gap-3"><span className="text-gold font-display">✓</span> Boys and girls motivated by hands-on learning.</li>
              <li className="flex gap-3"><span className="text-gold font-display">✓</span> Willingness to live in a boarding environment.</li>
            </ul>
          </div>
          <div className="rounded-2xl bg-deep text-primary-foreground p-8">
            <h3 className="font-display text-2xl uppercase text-gold">Need guidance?</h3>
            <p className="mt-3 text-primary-foreground/80">Our admissions team is happy to walk parents and prospective students through the process.</p>
            <Link to="/contact" className="mt-6 inline-block rounded-md bg-gold px-6 py-3 font-display text-xs uppercase tracking-wider text-gold-foreground hover:opacity-90">
              Contact admissions
            </Link>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
