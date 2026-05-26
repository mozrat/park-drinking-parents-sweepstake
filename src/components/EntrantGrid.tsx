import { Flag } from './Flag'
import { PlayerAvatar } from './PlayerAvatar'
import type { Assignment, Entrant, Team } from '../types'

interface EntrantGridProps {
  entrants: Entrant[]
  assignments: Assignment[]
  teamsById: Map<string, Team>
}

export function EntrantGrid({
  entrants,
  assignments,
  teamsById,
}: EntrantGridProps) {
  const byEntrant = new Map(assignments.map((a) => [a.entrantId, a]))

  return (
    <section id="entrants" className="scroll-mt-20 px-4 py-16 sm:px-6 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <h2 className="font-display text-xs font-bold uppercase tracking-[0.25em] text-gold-500/90">
          The line-up
        </h2>
        <p className="mt-2 font-display text-3xl font-bold text-white sm:text-4xl">
          24 entrants · 2 nations each
        </p>
        <p className="mt-2 max-w-2xl text-zinc-400">
          Names and avatars are driven by <code className="text-emerald-300/90">public/data/entrants.json</code>
          . Team pairs live in <code className="text-emerald-300/90">assignments.json</code> — add two{' '}
          <code className="text-emerald-300/90">teamIds</code> per person after your draw.
        </p>
        <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {entrants.map((e) => {
            const a = byEntrant.get(e.id)
            const picks = (a?.teamIds ?? [])
              .map((id) => teamsById.get(id))
              .filter(Boolean) as Team[]
            const pending = picks.length < 2

            return (
              <li
                key={e.id}
                className="flex gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-4 shadow-lg shadow-black/20"
              >
                <PlayerAvatar displayName={e.displayName} avatar={e.avatar} />
                <div className="min-w-0 flex-1 text-left">
                  <p className="truncate font-display text-lg font-semibold text-white">
                    {e.displayName}
                  </p>
                  <p className="text-xs text-zinc-500">{e.id}</p>
                  <div className="mt-3 flex flex-wrap items-center gap-2">
                    {pending ? (
                      <span className="rounded-lg border border-dashed border-white/20 px-2 py-1 text-xs text-zinc-500">
                        Awaiting draw
                      </span>
                    ) : (
                      picks.map((t) => (
                        <span
                          key={t.id}
                          className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-pitch-950/80 py-1 pl-1 pr-2.5 text-xs font-medium text-zinc-200"
                        >
                          <Flag code={t.flagCode} label={t.name} size="sm" />
                          <span className="truncate">{t.name}</span>
                        </span>
                      ))
                    )}
                  </div>
                </div>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
