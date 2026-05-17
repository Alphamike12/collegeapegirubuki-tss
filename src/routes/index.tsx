import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import hero from "@/assets/hero-campus.jpg";
import construction from "@/assets/program-construction.jpg";
import publicworks from "@/assets/program-publicworks.jpg";
import workshop from "@/assets/students-workshop.jpg";
import hills from "@/assets/gicumbi-hills.jpg";
import alumni1 from "@/assets/alumni-1.jpg";
import alumni2 from "@/assets/alumni-2.jpg";
import alumni3 from "@/assets/alumni-3.jpg";
import logo from "@/assets/logo.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "College Apegirubuki TSS — Rwanda's Premier TVET in Gicumbi" },
      { name: "description", content: "Private mixed Technical Secondary School (Day & Boarding) in Rutare, Gicumbi. Hands-on TVET in Building Construction & Public Works (L3–L5). Admissions open." },
    ],
  }),
  component: Index,
});

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const } },
};

function Index() {
  return (
    <div className="min-h-screen bg-background">
      {/* Announcement marquee */}
      <div className="bg-deep text-gold border-b border-gold/20 overflow-hidden">
        <div className="container-x flex items-center gap-3 py-2 text-xs font-display uppercase tracking-[0.25em]">
          <span className="h-1.5 w-1.5 rounded-full bg-gold animate-pulse shrink-0" />
          <div className="flex-1 overflow-hidden whitespace-nowrap">
            <motion.div
              className="inline-flex gap-12"
              animate={{ x: ["0%", "-50%"] }}
              transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
            >
              {Array.from({ length: 2 }).map((_, i) => (
                <span key={i} className="inline-flex gap-12">
                  <span>Admissions open · L3 · L4 · L5</span>
                  <span>Day & Boarding places available</span>
                  <span>Rutare · Gicumbi · Northern Province</span>
                  <span>Building Construction · Public Works</span>
                  <span>Call +250 785 082 307</span>
                </span>
              ))}
            </motion.div>
          </div>
        </div>
      </div>

      <SiteHeader />

      {/* Hero */}
      <section className="relative isolate overflow-hidden">
        <img src={hero} alt="College Apegirubuki TSS campus in Rutare, Gicumbi" width={1920} height={1280}
          className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-br from-deep/95 via-primary/80 to-deep/60" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,oklch(0.78_0.12_85_/_0.28),transparent_60%)]" />
        <div className="container-x relative py-28 md:py-40 text-primary-foreground">
          <motion.div initial="hidden" animate="show" variants={fadeUp}
            className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-deep/40 px-4 py-1.5 text-xs uppercase tracking-[0.2em] text-gold">
            <span className="h-1.5 w-1.5 rounded-full bg-gold animate-pulse" />
            Private Mixed TSS · Day & Boarding
          </motion.div>
          <motion.h1 initial="hidden" animate="show" variants={fadeUp} transition={{ delay: 0.1 }}
            className="mt-6 font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl uppercase leading-[0.95]">
            Build Rwanda.<br />
            <span className="text-gold">Build Yourself.</span>
          </motion.h1>
          <motion.p initial="hidden" animate="show" variants={fadeUp} transition={{ delay: 0.2 }}
            className="mt-6 max-w-xl text-lg text-primary-foreground/90">
            College Apegirubuki TSS trains the next generation of construction and public works professionals — hands-on, residential, and rooted in the green hills of Rutare.
          </motion.p>
          <motion.div initial="hidden" animate="show" variants={fadeUp} transition={{ delay: 0.3 }}
            className="mt-10 flex flex-wrap gap-4">
            <Link to="/admissions" className="rounded-md bg-gold px-7 py-3.5 font-display text-sm uppercase tracking-wider text-gold-foreground hover:opacity-90 transition shadow-lg shadow-deep/40">
              Apply Now
            </Link>
            <Link to="/programs" className="rounded-md border border-primary-foreground/40 bg-primary-foreground/5 backdrop-blur px-7 py-3.5 font-display text-sm uppercase tracking-wider hover:bg-primary-foreground/10 transition">
              Explore Programs
            </Link>
            <a href="tel:+250785082307" className="rounded-md px-7 py-3.5 font-display text-sm uppercase tracking-wider text-primary-foreground/80 hover:text-gold transition">
              Call us →
            </a>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5, duration: 0.8 }}
            className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-px bg-primary-foreground/15 border border-primary-foreground/15 rounded-xl overflow-hidden max-w-3xl">
            {[
              ["L3 – L5", "TVET Levels"],
              ["2", "Core Trades"],
              ["Mixed", "Day & Boarding"],
              ["Private", "Technical School"],
            ].map(([k, v]) => (
              <div key={v} className="bg-deep/70 p-5">
                <div className="font-display text-2xl text-gold">{k}</div>
                <div className="mt-1 text-xs uppercase tracking-wider text-primary-foreground/70">{v}</div>
              </div>
            ))}
          </motion.div>
        </div>
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 text-primary-foreground/70 text-xs uppercase tracking-widest">
          <span>Scroll</span>
          <motion.div className="h-8 w-px bg-gold/60" animate={{ scaleY: [0.3, 1, 0.3] }} transition={{ duration: 2, repeat: Infinity }} style={{ originY: 0 }} />
        </div>
      </section>

      {/* Intro */}
      <section className="container-x py-24 grid md:grid-cols-12 gap-10">
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.4 }} variants={fadeUp} className="md:col-span-5">
          <div className="text-xs font-display uppercase tracking-[0.3em] text-secondary">Our School</div>
          <h2 className="mt-3 font-display text-4xl md:text-5xl uppercase leading-tight text-primary">
            A campus where craft meets character.
          </h2>
        </motion.div>
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.4 }} variants={fadeUp} transition={{ delay: 0.15 }} className="md:col-span-7 text-lg text-foreground/80 leading-relaxed">
          <p>
            Located in the Rutare sector of Gicumbi District, Northern Province, College Apegirubuki TSS is a private mixed Technical Secondary School (Day & Boarding) committed to empowering young Rwandans with practical skills, discipline, and a pathway to meaningful work.
          </p>
          <p className="mt-5">
            Our students don't just learn — they build. From foundations to finishing, every classroom opens onto a workshop, every workshop opens onto the labor market.
          </p>
          <div className="mt-8 flex flex-wrap gap-x-8 gap-y-3 text-sm font-display uppercase tracking-wider text-primary">
            <span className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-gold" /> RTB-aligned curriculum</span>
            <span className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-gold" /> Industry-led workshops</span>
            <span className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-gold" /> Pathway to employment</span>
          </div>
        </motion.div>
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

      {/* Workshop split — outcomes */}
      <section className="container-x py-24 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div initial={{ opacity: 0, scale: 0.96 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.8 }}
          className="relative overflow-hidden rounded-3xl shadow-2xl shadow-deep/20">
          <img src={workshop} alt="Apegirubuki students working hands-on in the construction workshop" width={1600} height={1200} loading="lazy"
            className="w-full h-full object-cover aspect-[4/3]" />
          <div className="absolute bottom-4 left-4 right-4 bg-deep/85 backdrop-blur px-5 py-3 rounded-xl text-primary-foreground text-sm">
            <span className="text-gold font-display uppercase tracking-wider text-xs">On campus</span>
            <p className="mt-1">Workshops run every day — real bricks, real tools, real projects.</p>
          </div>
        </motion.div>
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.4 }} variants={fadeUp}>
          <div className="text-xs font-display uppercase tracking-[0.3em] text-secondary">Outcomes</div>
          <h2 className="mt-3 font-display text-4xl md:text-5xl uppercase text-primary leading-tight">A graduate ready for the site, not just the certificate.</h2>
          <p className="mt-6 text-foreground/80 text-lg leading-relaxed">
            We measure success by what our students can do on day one of the job — read a plan, set out a foundation, run a level, finish a wall, run a small crew.
          </p>
          <div className="mt-8 grid grid-cols-2 gap-4">
            {[
              ["Employment", "Construction firms, public works, NGOs."],
              ["Self-employment", "Small contracting, masonry, finishing crews."],
              ["Continued studies", "IPRC, RP & polytechnic pathways."],
              ["Apprenticeships", "Industrial attachment & internships."],
            ].map(([t, b]) => (
              <div key={t} className="rounded-xl bg-cream/60 border border-border p-5">
                <div className="font-display text-sm uppercase text-primary tracking-wider">{t}</div>
                <p className="mt-1.5 text-sm text-foreground/70">{b}</p>
              </div>
            ))}
          </div>
          <Link to="/admissions" className="inline-block mt-8 rounded-md bg-primary px-7 py-3.5 font-display text-sm uppercase tracking-wider text-primary-foreground hover:bg-deep">
            Join the next intake
          </Link>
        </motion.div>
      </section>

      {/* Voices / testimonials */}
      <section className="bg-deep text-primary-foreground py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,oklch(0.78_0.12_85_/_0.18),transparent_60%)]" />
        <div className="container-x relative">
          <div className="flex items-end justify-between flex-wrap gap-4">
            <div>
              <div className="text-xs font-display uppercase tracking-[0.3em] text-gold">Voices from campus</div>
              <h2 className="mt-3 font-display text-4xl md:text-5xl uppercase">What our community says.</h2>
            </div>
          </div>

          <div className="mt-14 grid md:grid-cols-3 gap-6">
            {[
              {
                img: alumni1,
                name: "Jean-Paul, L5 Construction",
                quote: "I came knowing nothing. I left running a small site crew. The workshops here are real work.",
              },
              {
                img: alumni2,
                name: "Diane, L4 Public Works",
                quote: "Being a girl in PWO felt big at first. The school made me feel like a surveyor from day one.",
              },
              {
                img: alumni3,
                name: "Eric, Alumni · Site Engineer",
                quote: "Apegirubuki gave me discipline and a trade. Both have paid me back every month since.",
              },
            ].map((t) => (
              <motion.figure key={t.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6 }}
                className="rounded-2xl border border-primary-foreground/15 bg-primary-foreground/5 backdrop-blur p-7">
                <div className="flex items-center gap-4">
                  <img src={t.img} alt={t.name} width={64} height={64} loading="lazy"
                    className="h-14 w-14 rounded-full object-cover ring-2 ring-gold/40" />
                  <figcaption className="font-display text-sm uppercase tracking-wider text-gold">{t.name}</figcaption>
                </div>
                <blockquote className="mt-5 text-primary-foreground/90 leading-relaxed">
                  "{t.quote}"
                </blockquote>
              </motion.figure>
            ))}
          </div>
        </div>
      </section>

      {/* Why us — bento */}
      <section className="container-x py-24">
        <div className="text-xs font-display uppercase tracking-[0.3em] text-secondary">Why Apegirubuki</div>
        <h2 className="mt-3 font-display text-4xl md:text-5xl uppercase text-primary max-w-2xl">An education that works as hard as you do.</h2>

        <div className="mt-12 grid md:grid-cols-6 gap-5">
          <Feature span="md:col-span-2" title="Hands-on first" body="Workshops, not just whiteboards. Real tools, real projects." />
          <Feature span="md:col-span-2" title="Day & Boarding" body="Boarding facilities for focus; day attendance for nearby students." />
          <Feature span="md:col-span-2" title="Mixed school" body="Boys and girls learning side by side, building Rwanda together." />
          <Feature span="md:col-span-3" title="Pathway to employment" body="Built around the labor market — graduates leave ready for jobs or self-employment." />
          <Feature span="md:col-span-3" title="Rooted in Gicumbi" body="A green campus in Rutare's hills — calm, focused, and proudly Northern Province." />
        </div>
      </section>

      {/* Visit — Gicumbi */}
      <section className="relative isolate overflow-hidden">
        <img src={hills} alt="The green hills of Gicumbi District where the campus sits" width={1920} height={1080} loading="lazy"
          className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-deep via-deep/70 to-deep/20" />
        <div className="container-x relative py-32 text-primary-foreground">
          <div className="max-w-2xl">
            <div className="text-xs font-display uppercase tracking-[0.3em] text-gold">Visit us</div>
            <h2 className="mt-3 font-display text-4xl md:text-6xl uppercase leading-[0.95]">A campus in the<br />hills of <span className="text-gold">Gicumbi.</span></h2>
            <p className="mt-6 text-primary-foreground/85 text-lg">
              Come walk the campus, meet the trainers, and see the workshops. Rutare is a short drive north — and the hills are worth the trip.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link to="/contact" className="rounded-md bg-gold px-7 py-3.5 font-display text-sm uppercase tracking-wider text-gold-foreground hover:opacity-90">
                Plan a visit
              </Link>
              <Link to="/campus" className="rounded-md border border-primary-foreground/40 px-7 py-3.5 font-display text-sm uppercase tracking-wider hover:bg-primary-foreground/10">
                See campus life
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container-x py-24">
        <div className="relative overflow-hidden rounded-2xl bg-deep text-primary-foreground p-10 md:p-16 grid md:grid-cols-[1fr_auto_1fr] gap-10 items-center">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,oklch(0.78_0.12_85_/_0.18),transparent_70%)]" />
          <div className="relative">
            <h3 className="font-display text-3xl md:text-5xl uppercase leading-tight">
              Your trade.<br /><span className="text-gold">Your future.</span>
            </h3>
            <p className="mt-4 text-primary-foreground/80 max-w-md">
              Admissions are open for L3, L4 and L5. Find out how to join the next intake.
            </p>
          </div>
          <div className="relative hidden md:flex items-center justify-center">
            <div className="rounded-full bg-cream p-3 ring-2 ring-gold/40 shadow-2xl shadow-deep/50">
              <img src={logo} alt="College Apegirubuki TSS logo" width={160} height={160} className="h-32 w-32 lg:h-40 lg:w-40 object-contain" />
            </div>
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
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6 }}
      className="group overflow-hidden rounded-2xl bg-background border border-border hover:border-secondary transition">
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
    </motion.article>
  );
}

function Feature({ span, title, body }: { span: string; title: string; body: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.5 }}
      className={`${span} rounded-2xl border border-border bg-card p-7 hover:bg-cream transition`}>
      <div className="h-1 w-10 bg-gold mb-5" />
      <h3 className="font-display text-xl uppercase text-primary">{title}</h3>
      <p className="mt-2 text-foreground/75 text-sm leading-relaxed">{body}</p>
    </motion.div>
  );
}
