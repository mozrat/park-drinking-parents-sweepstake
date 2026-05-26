export interface Team {
  id: string
  name: string
  group: string
  flagCode: string
}

export interface Entrant {
  id: string
  displayName: string
  avatar: string | null
}

export interface EntrantsFile {
  entrants: Entrant[]
  note?: string
}

export interface Assignment {
  entrantId: string
  teamIds: string[]
}

export interface AssignmentsFile {
  drawnAt: string | null
  description?: string
  assignments: Assignment[]
}

export interface PrizeItem {
  id: string
  title: string
  subtitle: string
  amount: number
  percent: number
}

export interface PrizesFile {
  currency: string
  currencySymbol: string
  potTotal: number
  description?: string
  items: PrizeItem[]
}

export interface WinnerCategory {
  prizeId: string
  entrantId?: string | null
  entrantIds?: string[] | null
  teamId?: string | null
  detail?: string | null
}

export interface WinnersFile {
  updatedAt: string | null
  description?: string
  categories: WinnerCategory[]
}

export interface SweepstakeBundle {
  teams: Team[]
  entrants: Entrant[]
  assignments: AssignmentsFile
  prizes: PrizesFile
  winners: WinnersFile
}
