const sections = [
  {
    number: "01", title: "Espresso", note: "Every drink can be prepared with oat milk at no extra charge.",
    items: [
      ["Espresso", "balanced, syrupy, rotating house coffee", "4"],
      ["Long Black", "espresso, filtered water", "4.5"],
      ["Flat White", "double espresso, textured milk", "5.5"],
      ["Orange Blossom Flat White", "espresso, oat milk, orange blossom", "6.5"],
    ],
  },
  {
    number: "02", title: "Slow Bar", note: "Brewed to order. Ask about today’s origin and tasting notes.",
    items: [
      ["Seasonal Filter", "hand-brewed single origin", "7"],
      ["Flash Brew", "bright, chilled, aromatic", "7"],
      ["Coffee for Two", "shared hand brew, two cups", "12"],
    ],
  },
  {
    number: "03", title: "House Creations", note: "Original recipes built around the season.",
    items: [
      ["Black Sesame Cloud", "cold brew, sesame cream, sea salt", "7.5"],
      ["Golden Hour", "espresso, citrus tonic, rosemary", "7"],
      ["Cacao Husk Fizz", "cacao tea, soda, lemon", "6.5"],
    ],
  },
  {
    number: "04", title: "Something Small", note: "A concise pastry counter, imagined fresh each morning.",
    items: [
      ["Miso Caramel Financier", "brown butter, white miso", "4.5"],
      ["Citrus Olive Oil Cake", "seasonal citrus, crème fraîche", "6"],
      ["Sourdough Morning Bun", "demerara sugar, warm spice", "5"],
    ],
  },
];

export default function MenuPage() {
  return (
    <>
      <section className="grain bg-[#d9a96d] py-20 sm:py-28">
        <div className="container-shell grid gap-10 lg:grid-cols-[1fr_.65fr] lg:items-end">
          <div><p className="eyebrow text-[#1f493d]">The menu</p><h1 className="display mt-7 text-[clamp(4.7rem,12vw,10rem)] leading-[.75] tracking-[-.07em]">Drink<br /><em>seasonally.</em></h1></div>
          <div className="border-l border-black/25 pl-6 text-sm leading-7 text-black/65"><p>This is a fictional sample menu created for the Atelier Coffee portfolio concept.</p><p className="mt-3 font-bold text-black">Prices shown in USD for presentation only.</p></div>
        </div>
      </section>
      <section className="py-20 sm:py-28">
        <div className="container-shell space-y-24">
          {sections.map((section) => (
            <section key={section.number} className="grid gap-8 lg:grid-cols-[.55fr_1.45fr]">
              <div><p className="text-xs font-bold text-[#b65537]">{section.number}</p><h2 className="display mt-3 text-5xl sm:text-6xl">{section.title}</h2><p className="mt-5 max-w-xs text-sm leading-6 text-black/50">{section.note}</p></div>
              <div className="border-t border-black/25">
                {section.items.map(([name, detail, price]) => (
                  <article key={name} className="grid grid-cols-[1fr_auto] gap-4 border-b border-black/20 py-6 sm:grid-cols-[1fr_1fr_auto] sm:items-center">
                    <h3 className="display text-2xl sm:text-3xl">{name}</h3><p className="col-start-1 text-sm text-black/50 sm:col-auto">{detail}</p><p className="display row-start-1 text-2xl sm:col-auto">${price}</p>
                  </article>
                ))}
              </div>
            </section>
          ))}
        </div>
      </section>
      <section className="bg-[#b65537] py-14 text-[#f4efe5]"><div className="container-shell flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between"><p className="display text-3xl sm:text-4xl">Ask, taste, stay curious.</p><p className="max-w-lg text-sm leading-6 text-white/70">Menu and ingredient descriptions are creative content for this fictional brand demonstration.</p></div></section>
    </>
  );
}
