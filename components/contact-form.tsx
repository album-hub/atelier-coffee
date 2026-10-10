"use client";

import { FormEvent, useState } from "react";

export function ContactForm() {
  const [status, setStatus] = useState("");
  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("Demo complete — your message was not transmitted or stored.");
  }
  return (
    <form onSubmit={submit} className="mt-9 grid gap-6" aria-describedby="demo-note">
      <div className="grid gap-6 sm:grid-cols-2">
        <label className="text-xs font-bold uppercase tracking-[.13em] text-white/60">Name<input className="field normal-case tracking-normal" name="name" placeholder="Your name" required /></label>
        <label className="text-xs font-bold uppercase tracking-[.13em] text-white/60">Email<input className="field normal-case tracking-normal" name="email" type="email" placeholder="you@example.com" required /></label>
      </div>
      <label className="text-xs font-bold uppercase tracking-[.13em] text-white/60">Subject<select className="field normal-case tracking-normal" name="subject" defaultValue=""><option value="" disabled className="text-black">Choose a subject</option><option className="text-black">General hello</option><option className="text-black">Brand collaboration</option><option className="text-black">Wholesale enquiry</option></select></label>
      <label className="text-xs font-bold uppercase tracking-[.13em] text-white/60">Message<textarea className="field min-h-28 resize-y normal-case tracking-normal" name="message" placeholder="Tell us what is on your mind…" required /></label>
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center"><button className="min-h-13 bg-[#d6a950] px-7 text-xs font-extrabold uppercase tracking-[.15em] text-[#1e1b18] transition hover:bg-[#f4efe5]" type="submit">Preview submission</button><p id="demo-note" className="text-xs leading-5 text-white/50">Portfolio demo only. This form does not send or store data.</p></div>
      {status && <p role="status" className="border-l-2 border-[#d6a950] py-2 pl-4 text-sm text-[#f4efe5]">{status}</p>}
    </form>
  );
}
