import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import logo from "@/assets/logo.png";
import hero from "@/assets/hero-campus.jpg";
import dorm from "@/assets/campus-dorm.jpg";
import sports from "@/assets/campus-sports.jpg";
import surveying from "@/assets/campus-surveying.jpg";
import workshop from "@/assets/students-workshop.jpg";
import hills from "@/assets/gicumbi-hills.jpg";

export const Route = createFileRoute("/campus")({
  head: () => ({
    meta: [
      { title: "Campus Life — College Apegirubuki TSS" },
      { name: "description", content: "Boarding life, workshops, and the green Rutare campus of College Apegirubuki TSS." },
      { property: "og:title", content: "Campus Life — College Apegirubuki TSS" },
      { property: "og:description", content: "Life on a boarding TVET campus in Gicumbi, Rwanda." },
    ],
  }),
  component: CampusPage,
});

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const } },
};

function CampusPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      {/* Hero */}
      <section className="relative isolate overflow-hidden">
        <img src={hills} alt="The green hills of Gicumbi" width={1920} height={1080}
          className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-br from-deep/95 via-primary/80 to-deep/50" />
        <div className="container-x relative py-24 md:py-36 text-primary-foreground">
          <motion.div initial="hidden" animate="show" variants={fadeUp}
            className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-deep/40 px-4 py-1.5 text-xs uppercase tracking-[0.2em] text-gold">
            <span className="h-1.5 w-1.5 rounded-full bg-gold" /> Campus Life · Rutare
          </motion.div>
          <motion.h1 initial="hidden" animate="show" variants={fadeUp} transition={{ delay: 0.1 }}
            className="mt-5 font-display text-5xl md:text-7xl uppercase leading-[0.95]">
            A campus<br /><span className="text-gold">carved into the hills.</span>
          </motion.h1>
          <motion.p initial="hidden" animate="show" variants={fadeUp} transition={{ delay: 0.2 }}
            className="mt-6 max-w-xl text-primary-foreground/85 text-lg">
            Live, learn and build alongside classmates in one of Rwanda's most beautiful regions.
          </motion.p>
        </div>
      </section>

      {/* Masonry gallery */}
      <section className="container-x py-20 grid md:grid-cols-3 gap-4">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
          className="md:row-span-2 rounded-2xl overflow-hidden group">
          <img src={hero} alt="Campus exterior" width={1280} height={1600} loading="lazy"
            className="w-full h-full object-cover group-hover:scale-105 transition duration-700 aspect-[3/4]" />
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}
          className="rounded-2xl overflow-hidden group">
          <img src={workshop} alt="Workshop" width={1280} height={960} loading="lazy"
            className="w-full h-full object-cover group-hover:scale-105 transition duration-700 aspect-[4/3]" />
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }}
          className="rounded-2xl overflow-hidden group">
          <img src={surveying} alt="Surveying training" width={1280} height={960} loading="lazy"
            className="w-full h-full object-cover group-hover:scale-105 transition duration-700 aspect-[4/3]" />
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.15 }}
          className="rounded-2xl overflow-hidden group">
          <img src={dorm} alt="Dormitory" width={1280} height={960} loading="lazy"
            className="w-full h-full object-cover group-hover:scale-105 transition duration-700 aspect-[4/3]" />
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.25 }}
          className="rounded-2xl overflow-hidden group">
          <img src={sports} alt="Sports field" width={1280} height={960} loading="lazy"
            className="w-full h-full object-cover group-hover:scale-105 transition duration-700 aspect-[4/3]" />
        </motion.div>
      </section>

      {/* Day-in-the-life */}
      <section className="bg-cream py-24">
        <div className="container-x">
          <div className="text-xs font-display uppercase tracking-[0.3em] text-secondary">A day on campus</div>
          <h2 className="mt-3 font-display text-4xl md:text-5xl uppercase text-primary">From sunrise to study hall.</h2>
          <div className="mt-12 grid md:grid-cols-4 gap-5">
            {[
              ["06:00", "Wake-up", "Morning routine, prep for the day."],
              ["08:00", "Classes & workshops", "Theory in the morning, practice in the workshop."],
              ["13:00", "Lunch & rest", "Healthy meals in the shared dining hall."],
              ["19:00", "Study hall", "Quiet evening prep with mentors on hand."],
            ].map(([time, t, b], i) => (
              <motion.div key={time}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="rounded-2xl bg-background border border-border p-6 hover:border-secondary transition">
                <div className="font-display text-2xl text-gold">{time}</div>
                <div className="mt-2 font-display text-sm uppercase text-primary">{t}</div>
                <p className="mt-2 text-sm text-foreground/70">{b}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Facilities grid */}
      <section className="container-x py-24">
        <div className="flex items-end justify-between flex-wrap gap-4">
          <div>
            <div className="text-xs font-display uppercase tracking-[0.3em] text-secondary">Facilities</div>
            <h2 className="mt-3 font-display text-4xl md:text-5xl uppercase text-primary">Everything you need.</h2>
          </div>
        </div>
        <div className="mt-12 grid md:grid-cols-3 gap-5">
          {[
            ["Workshops", "Modern facilities for masonry, finishing, and surveying training."],
            ["Sports & culture", "Football, volleyball, traditional dance and student clubs."],
            ["Study halls", "Quiet, well-lit spaces for focused evening prep."],
            ["Dining", "Healthy meals served in our shared dining hall."],
            ["Health", "On-site clinic and trained staff for student welfare."],
            ["Mentorship", "Teachers, instructors and matrons supporting every student."],
          ].map(([t, b], i) => (
            <motion.div key={t}
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="rounded-2xl border border-border bg-card p-6 hover:bg-cream transition">
              <div className="h-1 w-8 bg-gold mb-4" />
              <h3 className="font-display text-lg uppercase text-primary">{t}</h3>
              <p className="mt-2 text-sm text-foreground/75">{b}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA with logo */}
      <section className="container-x pb-24">
        <div className="relative overflow-hidden rounded-2xl bg-deep text-primary-foreground p-10 md:p-14 grid md:grid-cols-[auto_1fr_auto] gap-8 items-center">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,oklch(0.78_0.12_85_/_0.18),transparent_70%)]" />
          <div className="relative rounded-full bg-cream p-2 ring-2 ring-gold/40 shadow-2xl shadow-deep/40 justify-self-center">
            <img src={logo} alt="College Apegirubuki TSS logo" width={120} height={120} className="h-24 w-24 object-contain" />
          </div>
          <div className="relative">
            <h3 className="font-display text-2xl md:text-3xl uppercase">Come see it for yourself.</h3>
            <p className="mt-2 text-primary-foreground/80">Visits are warmly welcomed — meet the trainers, walk the workshops, feel the campus.</p>
          </div>
          <Link to="/contact" className="relative rounded-md bg-gold px-6 py-3 font-display text-xs uppercase tracking-wider text-gold-foreground hover:opacity-90 justify-self-start md:justify-self-end">
            Plan a visit
          </Link>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
