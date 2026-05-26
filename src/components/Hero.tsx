export function Hero() {
  return (
    <section className="relative overflow-hidden px-4 pb-16 pt-12 sm:px-6 sm:pb-24 sm:pt-16">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.12]"
        style={{
          backgroundImage: `repeating-linear-gradient(
            90deg,
            transparent,
            transparent 52px,
            rgba(255,255,255,0.06) 52px,
            rgba(255,255,255,0.06) 54px
          ),
          repeating-linear-gradient(
            0deg,
            transparent,
            transparent 52px,
            rgba(255,255,255,0.06) 52px,
            rgba(255,255,255,0.06) 54px
          )`,
        }}
      />
      <div className="relative mx-auto max-w-6xl">
        <p className="mb-3 inline-flex items-center gap-2 rounded-full border border-emerald-500/25 bg-emerald-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-emerald-300">
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
          11 June – 19 July 2026 · Canada, Mexico &amp; USA
        </p>
        <h1 className="font-display text-4xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl">
          Forty-eight nations.
          <span className="mt-1 block bg-gradient-to-r from-gold-400 via-gold-500 to-amber-200 bg-clip-text text-transparent">
            Twenty-four friends. One pot.
          </span>
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-zinc-400">
          Everyone draws two teams at random. Follow the group stage, the
          eight best third-placed finishers, and the new Round of 32 — then cheer
          (or commiserate) as prizes land from the wooden spoon to the trophy.
        </p>
        <div className="mt-10 flex flex-wrap gap-4">
          <a
            href="#entrants"
            className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-emerald-500 to-emerald-600 px-6 py-3 font-display font-semibold text-white shadow-lg shadow-emerald-500/25 transition hover:brightness-110"
          >
            See the draw
          </a>
          <a
            href="#prizes"
            className="inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/5 px-6 py-3 font-display font-semibold text-white transition hover:bg-white/10"
          >
            Prize breakdown
          </a>
        </div>
      </div>
    </section>
  )
}
