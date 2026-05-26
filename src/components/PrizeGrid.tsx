import type { PrizeItem } from '../types'

interface PrizeGridProps {
  currencySymbol: string
  potTotal: number
  description?: string
  items: PrizeItem[]
}

export function PrizeGrid({
  currencySymbol,
  potTotal,
  description,
  items,
}: PrizeGridProps) {
  return (
    <section id="prizes" className="scroll-mt-20 px-4 py-16 sm:px-6 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="font-display text-xs font-bold uppercase tracking-[0.25em] text-gold-500/90">
              Prize pot
            </h2>
            <p className="mt-2 font-display text-3xl font-bold text-white sm:text-4xl">
              {currencySymbol}
              {potTotal.toFixed(0)} total
            </p>
            {description ? (
              <p className="mt-2 max-w-xl text-zinc-400">{description}</p>
            ) : null}
          </div>
          <p className="rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-zinc-400">
            Percentages are of the pot; amounts are fixed for this edition.
          </p>
        </div>
        <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((p, i) => (
            <li
              key={p.id}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.07] to-transparent p-5 transition hover:border-emerald-500/30"
            >
              <span className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-gold-500/10 blur-2xl transition group-hover:bg-gold-500/20" />
              <div className="relative flex items-start justify-between gap-3">
                <div>
                  <p className="font-display text-lg font-bold text-white">
                    {p.title}
                  </p>
                  <p className="mt-1 text-sm leading-snug text-zinc-500">
                    {p.subtitle}
                  </p>
                </div>
                <span className="rounded-lg bg-pitch-950/80 px-2 py-1 font-mono text-xs text-zinc-500">
                  #{String(i + 1).padStart(2, '0')}
                </span>
              </div>
              <div className="relative mt-5 flex items-baseline justify-between border-t border-white/10 pt-4">
                <p className="font-display text-2xl font-bold tabular-nums text-gold-400">
                  {currencySymbol}
                  {p.amount % 1 === 0 ? p.amount.toFixed(0) : p.amount.toFixed(2)}
                </p>
                <p className="text-sm font-semibold text-emerald-400/90">
                  {p.percent}%
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
