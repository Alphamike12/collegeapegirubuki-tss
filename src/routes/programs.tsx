import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import construction from "@/assets/program-construction.jpg";
import publicworks from "@/assets/program-publicworks.jpg";

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

const programs = [
  {
    img: construction,
    name: "Building Construction",
    code: "BCO",
    levels: ["L3", "L4", "L5"],
    intro: "From the foundation block to the finishing trowel — students master every stage of constructing safe, modern buildings.",
    skills: ["Masonry & concrete", "Structural reading", "Finishing & joinery", "Site safety", "Cost estimation", "Team supervision"],
  },
  {
    img: publicworks,
    name: "Public Works",
    code: "PWO",
    levels: ["L3", "L4", "L5"],
    intro: "The infrastructure that connects Rwanda — roads, bridges, drainage and surveying for the public good.",
    skills: ["Surveying", "Road construction", "Drainage systems", "Material testing", "Public project management", "Site logistics"],
  },
];

function ProgramsPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <section className="bg-deep text-primary-foreground">
        <div className="container-x py-20">
          <div className="text-xs font-display uppercase tracking-[0.3em] text-gold">Programs</div>
          <h1 className="mt-3 font-display text-5xl md:text-7xl uppercase leading-[0.95]">Trades that build careers.</h1>
          <p className="mt-6 max-w-xl text-primary-foreground/80 text-lg">
            We offer two specialized TVET pathways at L3, L4 and L5 levels — each designed around real labor-market demand.
          </p>
        </div>
      </section>

      <section className="container-x py-20 space-y-16">
        {programs.map((p, i) => (
          <article key={p.code} className={`grid md:grid-cols-12 gap-10 items-center ${i % 2 ? "md:[&>div:first-child]:order-2" : ""}`}>
            <div className="md:col-span-6">
              <div className="rounded-2xl overflow-hidden border border-border">
                <img src={p.img} alt={p.name} width={1280} height={960} loading="lazy" className="w-full h-full object-cover" />
              </div>
            </div>
            <div className="md:col-span-6">
              <div className="flex items-center gap-2">
                <span className="text-xs font-display uppercase tracking-[0.3em] text-secondary">{p.code}</span>
                {p.levels.map(l => (
                  <span key={l} className="text-xs font-display bg-gold text-gold-foreground rounded px-2 py-0.5">{l}</span>
                ))}
              </div>
              <h2 className="mt-4 font-display text-4xl md:text-5xl uppercase text-primary leading-tight">{p.name}</h2>
              <p className="mt-4 text-foreground/80 leading-relaxed text-lg">{p.intro}</p>
              <div className="mt-6 grid grid-cols-2 gap-2">
                {p.skills.map(s => (
                  <div key={s} className="flex items-center gap-2 text-sm">
                    <span className="h-1.5 w-1.5 rounded-full bg-gold" />
                    {s}
                  </div>
                ))}
              </div>
              <Link to="/admissions" className="mt-8 inline-block rounded-md bg-primary px-6 py-3 font-display text-xs uppercase tracking-wider text-primary-foreground hover:bg-deep">
                Apply for {p.code}
              </Link>
            </div>
          </article>
        ))}
      </section>

      <SiteFooter />
    </div>
  );
}
