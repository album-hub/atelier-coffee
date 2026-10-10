import Link from "next/link";
import { CoffeeArt } from "@/components/coffee-art";

const featured = [
  ["01", "Orange Blossom Flat White", "espresso · oat milk · orange blossom", "$6.5"],
  ["02", "Stone Fruit Filter", "seasonal single origin · hand brewed", "$7"],
  ["03", "Black Sesame Cloud", "cold brew · sesame cream · sea salt", "$7.5"],
];

export default function Home() {
  return (
    <>
      <section className="grain overflow-hidden bg-[#f4efe5]">
        <div className="container-shell grid min-h-[calc(100svh-74px)] items-center gap-12 py-14 lg:grid-cols-[1.05fr_.95fr] lg:py-20">
          <div className="relative z-10">
            <p className="eyebrow rise text-[#b65537]">Small batch · Slow mornings</p>
            <h1 className="display rise rise-delay-1 mt-7 max-w-[760px] text-[clamp(4.2rem,10vw,8.7rem)] font-medium leading-[.78] tracking-[-.065em]">
              Coffee for<br /><span className="italic text-[#b65537]">the curious.</span>
            </h1>
            <div className="rise rise-delay-2 mt-10 grid max-w-2xl gap-7 border-t border-black/20 pt-6 sm:grid-cols-[1fr_auto] sm:items-end">
              <p className="max-w-md text-[.95rem] leading-7 text-black/65">A fictional specialty coffee studio pairing precise craft with warm, unhurried hospitality.</p>
              <Link href="/menu" className="button-primary">Explore the menu</Link>
            </div>
          </div>
          <div className="rise rise-delay-3 relative mx-auto w-full max-w-[560px] lg:mr-0">
            <div className="absolute -left-5 top-16 z-10 grid h-24 w-24 place-items-center rounded-full border border-black/20 bg-[#f4efe5] text-center text-[.6rem] font-bold uppercase leading-4 tracking-[.13em] sm:-left-12 sm:h-28 sm:w-28">Made<br />with care<br />daily</div>
            <CoffeeArt className="aspect-[4/4.65] w-full shadow-[24px_28px_0_#d6a950]" />
          </div>
        </div>
      </section>

      <section className="border-y border-black/15 bg-[#1e1b18] py-4 text-[#f4efe5]">
        <div className="container-shell flex flex-wrap justify-between gap-x-8 gap-y-3 text-[.66rem] font-bold uppercase tracking-[.18em]">
          <span>Thoughtful sourcing</span><span className="text-[#d6a950]">✦</span><span>Season-led menu</span><span className="text-[#d6a950]">✦</span><span>Precise brewing</span><span className="text-[#d6a950]">✦</span><span>Open curiosity</span>
        </div>
      </section>

      <section className="py-24 sm:py-32">
        <div className="container-shell">
          <div className="grid gap-8 lg:grid-cols-[.65fr_1.35fr] lg:items-end">
            <p className="eyebrow text-[#1f493d]">This season</p>
            <h2 className="display max-w-4xl text-[clamp(3.3rem,7vw,6.5rem)] leading-[.9] tracking-[-.045em]">Familiar forms,<br /><em>unexpected notes.</em></h2>
          </div>
          <div className="mt-16 border-t border-black/20">
            {featured.map(([n, name, detail, price]) => (
              <div key={n} className="group grid gap-2 border-b border-black/20 py-7 transition hover:bg-[#f4efe5] sm:grid-cols-[64px_1fr_1fr_auto] sm:items-center sm:px-4">
                <span className="text-xs font-bold text-[#b65537]">{n}</span>
                <h3 className="display text-3xl sm:text-4xl">{name}</h3>
                <p className="text-sm text-black/55">{detail}</p>
                <span className="display text-2xl">{price}</span>
              </div>
            ))}
          </div>
          <div className="mt-8 text-right"><Link href="/menu" className="link-arrow">View full menu <span>→</span></Link></div>
        </div>
      </section>

      <section className="bg-[#d9a96d] py-20 sm:py-28">
        <div className="container-shell grid gap-10 lg:grid-cols-2 lg:items-center">
          <CoffeeArt variant="beans" className="aspect-[41/30] w-full" />
          <div className="lg:px-12">
            <p className="eyebrow text-[#1f493d]">Our point of view</p>
            <h2 className="display mt-6 text-[clamp(3.2rem,6vw,5.7rem)] leading-[.9] tracking-[-.045em]">Less routine.<br />More <em>ritual.</em></h2>
            <p className="mt-8 max-w-lg leading-7 text-black/65">We imagine coffee as a daily material: shaped by origin, water, temperature, and the hands that bring it together. Atelier is where those small decisions become something memorable.</p>
            <Link href="/about" className="button-ghost mt-9">Read our story</Link>
          </div>
        </div>
      </section>

      <section className="py-28 text-center sm:py-36">
        <div className="container-shell">
          <p className="text-xs font-bold uppercase tracking-[.2em] text-[#b65537]">Come as you are</p>
          <h2 className="display mx-auto mt-6 max-w-4xl text-[clamp(3.2rem,7vw,6.8rem)] leading-[.88] tracking-[-.05em]">Good coffee makes room for <em>good company.</em></h2>
          <Link href="/contact" className="button-primary mt-10">Say hello</Link>
        </div>
      </section>
    </>
  );
}
