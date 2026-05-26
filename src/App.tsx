import { useMemo } from 'react'
import { useSweepstakeData } from './hooks/useSweepstakeData'
import { EntrantGrid } from './components/EntrantGrid'
import { FormatStrip } from './components/FormatStrip'
import { Hero } from './components/Hero'
import { PrizeGrid } from './components/PrizeGrid'
import { SiteFooter } from './components/SiteFooter'
import { SiteHeader } from './components/SiteHeader'
import { TeamsMarquee } from './components/TeamsMarquee'
import { WinnersSection } from './components/WinnersSection'

function App() {
  const { data, error, loading } = useSweepstakeData()

  const teamsById = useMemo(() => {
    if (!data) return new Map()
    return new Map(data.teams.map((t) => [t.id, t]))
  }, [data])

  const entrantsById = useMemo(() => {
    if (!data) return new Map()
    return new Map(data.entrants.map((e) => [e.id, e]))
  }, [data])

  if (loading) {
    return (
      <div className="flex min-h-svh flex-col items-center justify-center gap-4 bg-pitch-950 px-6 text-center">
        <div className="h-12 w-12 animate-spin rounded-full border-2 border-emerald-500 border-t-transparent" />
        <p className="font-display text-sm font-medium text-zinc-400">
          Loading sweepstake…
        </p>
      </div>
    )
  }

  if (error || !data) {
    return (
      <div className="flex min-h-svh flex-col items-center justify-center gap-4 bg-pitch-950 px-6 text-center">
        <p className="font-display text-lg font-semibold text-red-400">
          Could not load data
        </p>
        <p className="max-w-md text-sm text-zinc-500">{error}</p>
      </div>
    )
  }

  return (
    <div className="min-h-svh">
      <SiteHeader />
      <main>
        <Hero />
        <FormatStrip />
        <PrizeGrid
          currencySymbol={data.prizes.currencySymbol}
          potTotal={data.prizes.potTotal}
          description={data.prizes.description}
          items={data.prizes.items}
        />
        <EntrantGrid
          entrants={data.entrants}
          assignments={data.assignments.assignments}
          teamsById={teamsById}
        />
        <TeamsMarquee teams={data.teams} />
        <WinnersSection
          currencySymbol={data.prizes.currencySymbol}
          prizeItems={data.prizes.items}
          categories={data.winners.categories}
          entrantsById={entrantsById}
          teamsById={teamsById}
        />
      </main>
      <SiteFooter />
    </div>
  )
}

export default App
