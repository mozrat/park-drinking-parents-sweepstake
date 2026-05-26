import { Flag } from './Flag'
import type { Team } from '../types'

interface TeamsMarqueeProps {
  teams: Team[]
}

export function TeamsMarquee({ teams }: TeamsMarqueeProps) {
  const sorted = [...teams].sort((a, b) => {
    if (a.group !== b.group) return a.group.localeCompare(b.group)
    return a.name.localeCompare(b.name)
  })

  const row = [...sorted, ...sorted]

  return (
    <section id="teams" className="scroll-mt-20 border-y border-white/5 bg-pitch-900/40 py-12">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="text-center font-display text-xs font-bold uppercase tracking-[0.25em] text-gold-500/90">
          All 48 qualified nations
        </h2>
        <p className="mx-auto mt-2 max-w-2xl text-center text-sm text-zinc-500">
          Flags via{' '}
          <a
            href="https://flagcdn.com"
            className="text-emerald-400 underline-offset-2 hover:underline"
            target="_blank"
            rel="noreferrer"
          >
            flagcdn
          </a>
          . Group labels follow the official draw.
        </p>
      </div>
      <div className="relative mt-8 overflow-hidden">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-pitch-950 to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-pitch-950 to-transparent" />
        <div className="flex w-max animate-[marquee_80s_linear_infinite] gap-3 px-4">
          {row.map((t, i) => (
            <div
              key={`${t.id}-${i}`}
              className="flex w-36 shrink-0 flex-col items-center gap-2 rounded-2xl border border-white/10 bg-white/[0.04] px-3 py-4"
            >
              <Flag code={t.flagCode} label={t.name} size="lg" />
              <p className="w-full truncate text-center text-xs font-medium text-zinc-300">
                {t.name}
              </p>
              <span className="rounded-md bg-emerald-500/15 px-2 py-0.5 text-[10px] font-bold text-emerald-300">
                Group {t.group}
              </span>
            </div>
          ))}
        </div>
      </div>
      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  )
}
