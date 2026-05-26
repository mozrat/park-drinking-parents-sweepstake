const STATS = [
  { label: 'Teams', value: '48' },
  { label: 'Groups', value: '12 × 4' },
  { label: 'Matchdays', value: '39' },
  { label: 'Fixtures', value: '104' },
  { label: 'Knockout', value: 'Round of 32' },
]

export function FormatStrip() {
  return (
    <section
      id="format"
      className="border-y border-white/5 bg-pitch-900/60 py-10 backdrop-blur-sm"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="font-display text-xs font-bold uppercase tracking-[0.25em] text-gold-500/90">
          Tournament shape
        </h2>
        <p className="mt-2 max-w-3xl font-display text-2xl font-semibold text-white sm:text-3xl">
          Top two from every group, plus the eight best third-placed sides,
          advance to a 32-team knockout.
        </p>
        <ul className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {STATS.map((s) => (
            <li
              key={s.label}
              className="rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-5 text-center shadow-inner"
            >
              <p className="font-display text-2xl font-bold tabular-nums text-gold-400 sm:text-3xl">
                {s.value}
              </p>
              <p className="mt-1 text-xs font-medium uppercase tracking-wider text-zinc-500">
                {s.label}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
