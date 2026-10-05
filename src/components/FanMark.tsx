/** Slanted blades echoing the fan in the Elgyboat logo. Used sparingly as the brand device. */
export function FanMark({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 110 120" aria-hidden="true" focusable="false" className={className}>
      <path d="M0 120 L40 10 L52 14 L22 120Z" fill="#1FA9A8" />
      <path d="M18 120 L62 24 L74 32 L40 120Z" fill="#1FA9A8" opacity=".75" />
      <path d="M36 120 L82 42 L92 52 L58 120Z" fill="#1FA9A8" opacity=".5" />
      <path d="M54 120 L100 62 L108 74 L76 120Z" fill="#1FA9A8" opacity=".3" />
    </svg>
  );
}
