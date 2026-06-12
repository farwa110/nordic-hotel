export default function AuroraLogo() {
  return (
    <div className="group flex items-center gap-2">
      <svg width="38" height="38" viewBox="10 5 44 56" fill="none" className="aurora-mark shrink-0">
        <defs>
          <linearGradient id="auroraGradient" x1="10" y1="54" x2="54" y2="8">
            <stop stopColor="#38BDF8" />
            <stop offset="0.45" stopColor="#34D399" />
            <stop offset="0.75" stopColor="#A78BFA" />
            <stop offset="1" stopColor="#D4AF37" />
          </linearGradient>

          <filter id="softGlow">
            <feGaussianBlur stdDeviation="2.5" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Outer Triangle */}
        <path d="M32 7L52 57H12L32 7Z" className="fill-white/5 stroke-white/70" strokeWidth="2" strokeLinejoin="round" strokeLinecap="round" />

        {/* Aurora Animation */}
        <path d="M25 49C24 38 29 28 32 16C35 28 40 38 39 49" stroke="url(#auroraGradient)" strokeWidth="4" strokeLinecap="round" filter="url(#softGlow)" className="aurora-wave" />

        <path d="M18 45C25 37 30 31 32 14C34 31 39 37 46 45" stroke="url(#auroraGradient)" strokeWidth="3" strokeLinecap="round" filter="url(#softGlow)" className="aurora-wave aurora-wave-delay" />

        {/* Mountain / A Shape */}
        <path d="M23 44L32 30L41 44" className="stroke-white/80" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>

      <span className="aurora-text font-(--font-playfair) text-xl tracking-[0.08em] text-white sm:text-2xl">AURORA HAVEN</span>
    </div>
  );
}
