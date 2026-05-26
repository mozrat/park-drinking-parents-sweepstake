import { useEffect, useState } from 'react'
import { publicUrl } from '../lib/publicUrl'
import type {
  AssignmentsFile,
  EntrantsFile,
  PrizesFile,
  SweepstakeBundle,
  Team,
  WinnersFile,
} from '../types'

async function fetchJson<T>(path: string): Promise<T> {
  const res = await fetch(publicUrl(path))
  if (!res.ok) {
    throw new Error(`Failed to load ${path}: ${res.status}`)
  }
  return res.json() as Promise<T>
}

export function useSweepstakeData() {
  const [data, setData] = useState<SweepstakeBundle | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    let cancelled = false
    ;(async () => {
      try {
        const [teams, entrantsFile, assignments, prizes, winners] =
          await Promise.all([
            fetchJson<Team[]>('data/teams.json'),
            fetchJson<EntrantsFile>('data/entrants.json'),
            fetchJson<AssignmentsFile>('data/assignments.json'),
            fetchJson<PrizesFile>('data/prizes.json'),
            fetchJson<WinnersFile>('data/winners.json'),
          ])
        if (cancelled) return
        setData({
          teams,
          entrants: entrantsFile.entrants,
          assignments,
          prizes,
          winners,
        })
        setError(null)
      } catch (e) {
        if (cancelled) return
        setError(e instanceof Error ? e.message : 'Failed to load data')
      } finally {
        if (!cancelled) setLoading(false)
      }
    })()
    return () => {
      cancelled = true
    }
  }, [])

  return { data, error, loading }
}
