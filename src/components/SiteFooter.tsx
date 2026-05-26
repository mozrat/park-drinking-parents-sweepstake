export function SiteFooter() {
  return (
    <footer className="border-t border-white/5 bg-pitch-900/80 px-4 py-12 sm:px-6">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-display text-sm font-semibold text-white">
            World Cup 2026 sweepstake
          </p>
          <p className="mt-1 max-w-md text-sm text-zinc-500">
            Fan site for a private competition — not affiliated with FIFA. Data
            files in the repo power this page; push to <code className="text-zinc-400">main</code> to publish via GitHub Pages.
          </p>
        </div>
        <p className="text-xs text-zinc-600">
          Built with React, Vite &amp; Tailwind CSS.
        </p>
      </div>
    </footer>
  )
}
