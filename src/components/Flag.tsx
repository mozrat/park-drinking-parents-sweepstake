import { useState } from 'react'

const FLAG_SIZES = { sm: 24, md: 40, lg: 56 } as const

type FlagSize = keyof typeof FLAG_SIZES

interface FlagProps {
  code: string
  label: string
  size?: FlagSize
  className?: string
}

export function Flag({ code, label, size = 'md', className = '' }: FlagProps) {
  const w = FLAG_SIZES[size]
  const [broken, setBroken] = useState(false)
  const src = `https://flagcdn.com/w${w * 2}/${code}.png`

  if (broken) {
    return (
      <span
        className={`inline-flex items-center justify-center rounded-md border border-white/10 bg-white/5 font-semibold text-white/70 ${className}`}
        style={{ width: w, height: Math.round((w * 3) / 4) }}
        title={label}
        aria-hidden
      >
        <span className="text-[10px]">{code.slice(0, 2).toUpperCase()}</span>
      </span>
    )
  }

  return (
    <img
      src={src}
      srcSet={`https://flagcdn.com/w${w}/${code}.png 1x, https://flagcdn.com/w${w * 2}/${code}.png 2x`}
      width={w}
      height={Math.round((w * 3) / 4)}
      alt=""
      title={label}
      loading="lazy"
      decoding="async"
      className={`rounded-md object-cover shadow-lg shadow-black/40 ring-1 ring-white/10 ${className}`}
      onError={() => setBroken(true)}
    />
  )
}
