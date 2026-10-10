import { ContactForm } from "@/components/contact-form";

export default function ContactPage() {
  return (
    <section className="min-h-[calc(100svh-74px)] bg-[#1f493d] py-20 text-[#f4efe5] sm:py-28">
      <div className="container-shell grid gap-16 lg:grid-cols-[.85fr_1.15fr]">
        <div>
          <p className="eyebrow text-[#d6a950]">Contact</p>
          <h1 className="display mt-7 text-[clamp(4.5rem,10vw,8.7rem)] leading-[.78] tracking-[-.065em]">Let’s make<br />something<br /><em>warm.</em></h1>
          <p className="mt-9 max-w-sm text-sm leading-7 text-white/60">This page demonstrates a polished contact experience for a fictional brand. There is no physical café, public email, or operating business behind this concept.</p>
        </div>
        <div className="self-center border border-white/25 p-6 sm:p-10 lg:p-14">
          <div className="flex items-start justify-between gap-5"><div><p className="text-xs font-bold uppercase tracking-[.16em] text-[#d6a950]">Write a note</p><h2 className="display mt-3 text-4xl sm:text-5xl">Start a conversation.</h2></div><span className="display text-5xl text-white/20">↗</span></div>
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
