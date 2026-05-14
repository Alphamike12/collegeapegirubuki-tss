import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import students from "@/assets/students-life.jpg";
import hero from "@/assets/hero-campus.jpg";

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

function CampusPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <section className="bg-deep text-primary-foreground">
        <div className="container-x py-20">
          <div className="text-xs font-display uppercase tracking-[0.3em] text-gold">Campus Life</div>
          <h1 className="mt-3 font-display text-5xl md:text-7xl uppercase leading-[0.95]">A campus carved into the hills.</h1>
          <p className="mt-6 max-w-xl text-primary-foreground/80 text-lg">
            Live, learn and build alongside classmates in one of Rwanda's most beautiful regions.
          </p>
        </div>
      </section>

      <section className="container-x py-20 grid md:grid-cols-2 gap-6">
        <div className="md:row-span-2 rounded-2xl overflow-hidden">
          <img src={hero} alt="Campus" width={1920} height={1280} loading="lazy" className="w-full h-full object-cover" />
        </div>
        <div className="rounded-2xl bg-cream p-8">
          <h3 className="font-display text-2xl uppercase text-primary">Boarding</h3>
          <p className="mt-3 text-foreground/80">Comfortable dormitories, supervised study time, and a structured day-to-day rhythm that supports growth.</p>
        </div>
        <div className="rounded-2xl overflow-hidden">
          <img src={students} alt="Students" width={1280} height={960} loading="lazy" className="w-full h-full object-cover" />
        </div>
      </section>

      <section className="bg-cream py-20">
        <div className="container-x grid md:grid-cols-3 gap-5">
          {[
            ["Workshops", "Modern facilities for masonry, finishing, and surveying training."],
            ["Sports & culture", "Football, volleyball, traditional dance and student clubs."],
            ["Study halls", "Quiet, well-lit spaces for focused evening prep."],
            ["Dining", "Healthy meals served in our shared dining hall."],
            ["Health", "On-site clinic and trained staff for student welfare."],
            ["Mentorship", "Teachers, instructors and matrons supporting every student."],
          ].map(([t, b]) => (
            <div key={t} className="rounded-2xl border border-border bg-background p-6">
              <div className="h-1 w-8 bg-gold mb-4" />
              <h3 className="font-display text-lg uppercase text-primary">{t}</h3>
              <p className="mt-2 text-sm text-foreground/75">{b}</p>
            </div>
          ))}
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
