import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import hero from "@/assets/hero-campus.jpg";
import construction from "@/assets/program-construction.jpg";
import publicworks from "@/assets/program-publicworks.jpg";
import students from "@/assets/students-life.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "College Apegirubuki TSS — Private Mixed TVET, Gicumbi" },
      { name: "description", content: "Public boarding Technical Secondary School in Rutare, Gicumbi. TVET in Building Construction & Public Works (L3–L5)." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      {/* Hero */}
      <section className="relative isolate overflow-hidden">
        <img src={hero} alt="College Apegirubuki TSS campus" width={1920} height={1280}
          className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-br from-deep/95 via-primary/80 to-deep/60" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,oklch(0.78_0.12_85_/_0.25),transparent_60%)]" />
        <div className="container-x relative py-28 md:py-40 text-primary-foreground">
          <div className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-deep/40 px-4 py-1.5 text-xs uppercase tracking-[0.2em] text-gold">
            <span className="h-1.5 w-1.5 rounded-full bg-gold animate-pulse" />
            Private Mixed TSS · Day & Boarding
          </div>
          <h1 className="mt-6 font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl uppercase leading-[0.95]">
            Build Rwanda.<br />
            <span className="text-gold">Build Yourself.</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg text-primary-foreground/85">
            College Apegirubuki TSS trains the next generation of construction and public works professionals — hands-on, residential, and rooted in the green hills of Rutare.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link to="/admissions" className="rounded-md bg-gold px-7 py-3.5 font-display text-sm uppercase tracking-wider text-gold-foreground hover:opacity-90 transition shadow-lg shadow-deep/40">
              Apply Now
            </Link>
            <Link to="/programs" className="rounded-md border border-primary-foreground/40 bg-primary-foreground/5 backdrop-blur px-7 py-3.5 font-display text-sm uppercase tracking-wider hover:bg-primary-foreground/10 transition">
              Explore Programs
            </Link>
          </div>

          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-px bg-primary-foreground/15 border border-primary-foreground/15 rounded-xl overflow-hidden max-w-3xl">
            {[
              ["L3 – L5", "TVET Levels"],
              ["2", "Core Trades"],
              ["100%", "Boarding"],
              ["Public", "Government School"],
            ].map(([k, v]) => (
              <div key={v} className="bg-deep/70 p-5">
                <div className="font-display text-2xl text-gold">{k}</div>
                <div className="mt-1 text-xs uppercase tracking-wider text-primary-foreground/70">{v}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="container-x py-24 grid md:grid-cols-12 gap-10">
        <div className="md:col-span-5">
          <div className="text-xs font-display uppercase tracking-[0.3em] text-secondary">Our School</div>
          <h2 className="mt-3 font-display text-4xl md:text-5xl uppercase leading-tight text-primary">
            A campus where craft meets character.
          </h2>
        </div>
        <div className="md:col-span-7 text-lg text-foreground/80 leading-relaxed">
          <p>
            Located in the Rutare sector of Gicumbi District, Northern Province, College Apegirubuki TSS is a private mixed Technical Secondary School (Day & Boarding) committed to empowering young Rwandans with practical skills, discipline, and a pathway to meaningful work.
          </p>
          <p className="mt-5">
            Our students don't just learn — they build. From foundations to finishing, every classroom opens onto a workshop, every workshop opens onto the labor market.
          </p>
        </div>
      </section>

      {/* Programs grid */}
      <section className="bg-cream py-24">
        <div className="container-x">
          <div className="flex items-end justify-between gap-6 flex-wrap">
            <div>
              <div className="text-xs font-display uppercase tracking-[0.3em] text-secondary">Programs</div>
              <h2 className="mt-3 font-display text-4xl md:text-5xl uppercase text-primary">Trades we teach</h2>
            </div>
            <Link to="/programs" className="font-display text-sm uppercase tracking-wider text-primary hover:text-secondary">
              All programs →
            </Link>
          </div>

          <div className="mt-12 grid md:grid-cols-2 gap-6">
            <ProgramCard
              img={construction}
              eyebrow="Building Construction"
              title="From blueprint to skyline."
              levels="L3 · L4 · L5"
              body="Master masonry, structural systems, finishing, and site management with hands-on workshop training."
            />
            <ProgramCard
              img={publicworks}
              eyebrow="Public Works (PWO)"
              title="Roads, bridges, infrastructure."
              levels="L3 · L4 · L5"
              body="Surveying, road construction, drainage, and the public infrastructure that shapes communities."
            />
          </div>
        </div>
      </section>

      {/* Why us — bento */}
      <section className="container-x py-24">
        <div className="text-xs font-display uppercase tracking-[0.3em] text-secondary">Why Apegirubuki</div>
        <h2 className="mt-3 font-display text-4xl md:text-5xl uppercase text-primary max-w-2xl">An education that works as hard as you do.</h2>

        <div className="mt-12 grid md:grid-cols-6 gap-5">
          <Feature span="md:col-span-2" title="Hands-on first" body="Workshops, not just whiteboards. Real tools, real projects." />
          <Feature span="md:col-span-2" title="Residential" body="Boarding facilities focus students on growth, study and brotherhood." />
          <Feature span="md:col-span-2" title="Public & accessible" body="Government-funded, open to determined learners across Rwanda." />
          <Feature span="md:col-span-3" title="Pathway to employment" body="Built around the labor market — graduates leave ready for jobs or self-employment." />
          <Feature span="md:col-span-3" title="Rooted in Gicumbi" body="A green campus in Rutare's hills — calm, focused, and proudly Northern Province." />
        </div>
      </section>

      {/* CTA */}
      <section className="container-x pb-24">
        <div className="relative overflow-hidden rounded-2xl bg-deep text-primary-foreground p-10 md:p-16 grid md:grid-cols-2 gap-10 items-center">
          <img src={students} alt="Students at Apegirubuki" width={1280} height={960} loading="lazy"
            className="absolute inset-0 h-full w-full object-cover opacity-20" />
          <div className="relative">
            <h3 className="font-display text-3xl md:text-5xl uppercase leading-tight">
              Your trade.<br /><span className="text-gold">Your future.</span>
            </h3>
            <p className="mt-4 text-primary-foreground/80 max-w-md">
              Admissions are open for L3, L4 and L5. Find out how to join the next intake.
            </p>
          </div>
          <div className="relative md:justify-self-end flex flex-wrap gap-4">
            <Link to="/admissions" className="rounded-md bg-gold px-7 py-3.5 font-display text-sm uppercase tracking-wider text-gold-foreground hover:opacity-90">
              Start Application
            </Link>
            <Link to="/contact" className="rounded-md border border-primary-foreground/30 px-7 py-3.5 font-display text-sm uppercase tracking-wider hover:bg-primary-foreground/10">
              Talk to us
            </Link>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}

function ProgramCard({ img, eyebrow, title, levels, body }: { img: string; eyebrow: string; title: string; levels: string; body: string }) {
  return (
    <article className="group overflow-hidden rounded-2xl bg-background border border-border hover:border-secondary transition">
      <div className="aspect-[4/3] overflow-hidden">
        <img src={img} alt={eyebrow} width={1280} height={960} loading="lazy"
          className="h-full w-full object-cover group-hover:scale-105 transition duration-700" />
      </div>
      <div className="p-7">
        <div className="flex items-center justify-between text-xs font-display uppercase tracking-wider">
          <span className="text-secondary">{eyebrow}</span>
          <span className="text-gold-foreground bg-gold px-2 py-0.5 rounded">{levels}</span>
        </div>
        <h3 className="mt-3 font-display text-2xl uppercase text-primary leading-tight">{title}</h3>
        <p className="mt-3 text-foreground/75">{body}</p>
      </div>
    </article>
  );
}

function Feature({ span, title, body }: { span: string; title: string; body: string }) {
  return (
    <div className={`${span} rounded-2xl border border-border bg-card p-7 hover:bg-cream transition`}>
      <div className="h-1 w-10 bg-gold mb-5" />
      <h3 className="font-display text-xl uppercase text-primary">{title}</h3>
      <p className="mt-2 text-foreground/75 text-sm leading-relaxed">{body}</p>
    </div>
  );
}
