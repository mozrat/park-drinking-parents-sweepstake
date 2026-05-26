export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/5 bg-pitch-950/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-x-4 gap-y-3 px-4 py-4 sm:px-6">
        <a href="#" className="group flex items-center gap-3 text-left">
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-gold-500 to-gold-600 font-display text-lg font-extrabold text-pitch-950 shadow-lg shadow-gold-500/20">
            26
          </span>
          <div>
            <p className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-gold-400/90">
              Park sweepstake
            </p>
            <p className="font-display text-base font-bold text-white sm:text-lg">
              World Cup 2026
            </p>
          </div>
        </a>
        <nav className="-mx-1 flex shrink-0 items-center gap-4 overflow-x-auto px-1 pb-1 text-sm font-medium text-zinc-400 sm:gap-6 sm:overflow-visible sm:pb-0">
          <a href="#format" className="transition hover:text-white">
            Format
          </a>
          <a href="#prizes" className="transition hover:text-white">
            Prizes
          </a>
          <a href="#entrants" className="transition hover:text-white">
            Entrants
          </a>
          <a href="#teams" className="transition hover:text-white">
            Nations
          </a>
          <a href="#winners" className="transition hover:text-white">
            Winners
          </a>
        </nav>
      </div>
    </header>
  )
}
