export function CoffeeArt({ variant = "hero", className = "" }: { variant?: "hero" | "cup" | "beans"; className?: string }) {
  if (variant === "cup") return (
    <svg viewBox="0 0 700 760" className={className} role="img" aria-label="Abstract coffee cup still life">
      <rect width="700" height="760" fill="#d9a96d" />
      <circle cx="558" cy="118" r="76" fill="#b65537" />
      <path d="M0 506 700 320v440H0Z" fill="#6c8068" />
      <ellipse cx="333" cy="546" rx="220" ry="52" fill="#1e1b18" opacity=".18" />
      <path d="M184 259h297v297c0 92-66 146-148 146s-149-54-149-146Z" fill="#f4efe5" />
      <path d="M479 337h43c72 0 72 132 0 132h-43" fill="none" stroke="#f4efe5" strokeWidth="37" />
      <ellipse cx="333" cy="264" rx="149" ry="42" fill="#f9f5ec" />
      <ellipse cx="333" cy="269" rx="126" ry="29" fill="#5f3828" />
      <path d="M309 260c23-27 61-21 72 3-17 31-59 30-72-3Z" fill="#d8b68a" opacity=".9" />
      <path d="M268 176c-25-35 35-50 7-92M349 168c-24-39 37-49 11-97" fill="none" stroke="#f4efe5" strokeWidth="8" strokeLinecap="round" opacity=".65" />
    </svg>
  );
  if (variant === "beans") return (
    <svg viewBox="0 0 820 600" className={className} role="img" aria-label="Abstract coffee beans and leaves composition">
      <rect width="820" height="600" fill="#244f42" />
      <path d="M-40 152C150 82 261 169 311 381 102 400-18 302-40 152Z" fill="#86a282" />
      <path d="M856 492C658 548 553 451 519 236c211-25 323 83 337 256Z" fill="#d6a950" />
      <g fill="#b65537"><ellipse cx="358" cy="196" rx="93" ry="132" transform="rotate(-27 358 196)" /><ellipse cx="481" cy="367" rx="102" ry="143" transform="rotate(32 481 367)" /></g>
      <g fill="none" stroke="#f4efe5" strokeWidth="6" opacity=".8"><path d="M318 85c77 86 85 164 45 232" /><path d="M530 253c-89 92-103 175-53 253" /></g>
      <circle cx="675" cy="103" r="42" fill="#efe3ca" opacity=".9" />
    </svg>
  );
  return (
    <svg viewBox="0 0 800 930" className={className} role="img" aria-label="Editorial coffee cup composition">
      <rect width="800" height="930" fill="#1f493d" />
      <circle cx="665" cy="166" r="116" fill="#d6a950" />
      <path d="M-80 676 800 376v554H-80Z" fill="#b65537" />
      <ellipse cx="397" cy="656" rx="266" ry="66" fill="#1e1b18" opacity=".24" />
      <path d="M211 340h347v278c0 113-74 186-173 186s-174-73-174-186Z" fill="#f4efe5" />
      <path d="M556 418h53c91 0 91 159 0 159h-53" fill="none" stroke="#f4efe5" strokeWidth="45" />
      <ellipse cx="384" cy="344" rx="173" ry="49" fill="#fffaf1" />
      <ellipse cx="384" cy="351" rx="145" ry="34" fill="#5b3425" />
      <path d="M341 348c35-36 86-28 103 2-24 40-83 42-103-2Z" fill="#d9b784" />
      <path d="M302 239c-34-47 46-66 9-128M414 230c-31-51 50-65 16-132" fill="none" stroke="#f4efe5" strokeWidth="10" strokeLinecap="round" opacity=".7" />
      <text x="54" y="86" fill="#f4efe5" fontFamily="Arial" fontSize="17" letterSpacing="6">ROASTED WITH INTENTION</text>
    </svg>
  );
}
