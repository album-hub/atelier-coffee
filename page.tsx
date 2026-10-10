import Link from "next/link";
import { CoffeeArt } from "@/components/coffee-art";

const values = [
  ["01", "Clarity", "We let the coffee speak: clean flavors, considered recipes, no unnecessary noise."],
  ["02", "Seasonality", "The menu moves with harvests and ingredients, keeping curiosity at the center."],
  ["03", "Hospitality", "Care lives in the details—from an easy welcome to the final pour."],
];

export default function AboutPage() {
  return (
    <>
      <section className="grain bg-[#f4efe5] py-20 sm:py-28">
        <div className="container-shell grid gap-14 lg:grid-cols-[1.1fr_.9fr] lg:items-end">
          <div>
            <p className="eyebrow text-[#b65537]">The story</p>
            <h1 className="display mt-8 text-[clamp(4.3rem,10vw,9rem)] leading-[.78] tracking-[-.065em]">Built around<br /><em>attention.</em></h1>
          </div>
          <p className="max-w-lg border-l border-black/25 pl-6 text-lg leading-8 text-black/65">Atelier Coffee is a fictional brand concept founded on one idea: everyday things become meaningful when we pay attention to them.</p>
        </div>
      </section>

      <section className="py-20 sm:py-28">
        <div className="container-shell grid gap-12 lg:grid-cols-[.9fr_1.1fr] lg:items-center">
          <CoffeeArt variant="cup" className="aspect-[35/38] w-full max-w-[610px]" />
          <div className="lg:px-14">
            <p className="eyebrow text-[#1f493d]">Why an atelier?</p>
            <h2 className="display mt-6 text-[clamp(3rem,6vw,5.5rem)] leading-[.9] tracking-[-.045em]">A workshop for the <em>everyday.</em></h2>
            <div className="mt-8 space-y-5 leading-7 text-black/60">
              <p>In a traditional atelier, materials are studied, tools are respected, and each object carries the maker’s touch. We bring that same mindset to coffee.</p>
              <p>Our imagined bar changes through the year, but the approach stays constant: source thoughtfully, brew precisely, serve warmly.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#1f493d] py-20 text-[#f4efe5] sm:py-28">
        <div className="container-shell">
          <p className="eyebrow text-[#d6a950]">What guides us</p>
          <div className="mt-14 grid border-t border-white/25 md:grid-cols-3">
            {values.map(([n, title, body]) => (
              <article key={n} className="border-b border-white/25 py-9 md:border-r md:px-8 first:pl-0 last:border-r-0">
                <p className="text-xs font-bold text-[#d6a950]">{n}</p>
                <h3 className="display mt-8 text-4xl">{title}</h3>
                <p className="mt-4 text-sm leading-7 text-white/60">{body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 text-center sm:py-32">
        <p className="eyebrow text-[#b65537]">Taste the idea</p>
        <h2 className="display mx-auto mt-7 max-w-3xl text-[clamp(3.2rem,6vw,5.7rem)] leading-[.9]">See what’s on the <em>workbench.</em></h2>
        <Link href="/menu" className="button-primary mt-9">Browse the menu</Link>
      </section>
    </>
  );
}
