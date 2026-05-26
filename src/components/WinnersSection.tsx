import type { Entrant, PrizeItem, Team, WinnerCategory } from '../types'

interface WinnersSectionProps {
  currencySymbol: string
  prizeItems: PrizeItem[]
  categories: WinnerCategory[]
  entrantsById: Map<string, Entrant>
  teamsById: Map<string, Team>
}

function resolveName(
  w: WinnerCategory,
  entrantsById: Map<string, Entrant>,
  teamsById: Map<string, Team>,
): string {
  if (w.entrantIds?.length) {
    const names = w.entrantIds
      .map((id) => entrantsById.get(id)?.displayName)
      .filter(Boolean)
    if (names.length) return names.join(' · ')
  }
  if (w.entrantId) {
    return entrantsById.get(w.entrantId)?.displayName ?? '—'
  }
  if (w.teamId) {
    return teamsById.get(w.teamId)?.name ?? '—'
  }
  return 'To be decided'
}

export function WinnersSection({
  currencySymbol,
  prizeItems,
  categories,
  entrantsById,
  teamsById,
}: WinnersSectionProps) {
  const prizeById = new Map(prizeItems.map((p) => [p.id, p]))

  return (
    <section id="winners" className="scroll-mt-20 px-4 py-16 sm:px-6 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <h2 className="font-display text-xs font-bold uppercase tracking-[0.25em] text-gold-500/90">
          Honours board
        </h2>
        <p className="mt-2 font-display text-3xl font-bold text-white sm:text-4xl">
          Winners &amp; side bets
        </p>
        <p className="mt-2 max-w-2xl text-zinc-400">
          Update <code className="text-emerald-300/90">public/data/winners.json</code> as results land.
          Each row shows the purse until you fill in entrant or team ids.
        </p>

        <ul className="mt-10 space-y-3">
          {categories.map((c) => {
            const prize = prizeById.get(c.prizeId)
            const title = prize?.title ?? c.prizeId
            const amount = prize?.amount
            const name = resolveName(c, entrantsById, teamsById)
            const decided =
              Boolean(c.entrantId && entrantsById.has(c.entrantId)) ||
              Boolean(c.teamId && teamsById.has(c.teamId)) ||
              Boolean(c.entrantIds?.some((id) => entrantsById.has(id)))

            return (
              <li
                key={c.prizeId}
                className="flex flex-col gap-2 rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-4 sm:flex-row sm:items-center sm:justify-between"
              >
                <div>
                  <p className="font-display font-semibold text-white">{title}</p>
                  <p
                    className={`text-sm ${decided ? 'text-emerald-300' : 'text-zinc-500'}`}
                  >
                    {name}
                  </p>
                  {c.detail ? (
                    <p className="mt-1 text-xs text-zinc-600">{c.detail}</p>
                  ) : null}
                </div>
                {amount != null ? (
                  <p className="shrink-0 font-display text-lg font-bold tabular-nums text-gold-400">
                    {currencySymbol}
                    {amount % 1 === 0 ? amount.toFixed(0) : amount.toFixed(2)}
                  </p>
                ) : null}
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
