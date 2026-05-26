import { useState } from 'react'
import { initialsFromName } from '../lib/initials'
import { publicUrl } from '../lib/publicUrl'

interface PlayerAvatarProps {
  displayName: string
  avatar: string | null
  className?: string
}

function PlayerAvatarInner({
  displayName,
  avatar,
  className = 'h-14 w-14 shrink-0',
}: PlayerAvatarProps) {
  const [imgFailed, setImgFailed] = useState(false)
  const showImage = Boolean(avatar) && !imgFailed

  return (
    <div
      className={`relative flex shrink-0 items-center justify-center overflow-hidden rounded-2xl border border-white/15 bg-gradient-to-br from-emerald-600/35 to-pitch-900 shadow-inner ${className}`}
    >
      {showImage ? (
        <img
          src={publicUrl(`avatars/${avatar}`)}
          alt=""
          className="h-full w-full object-cover"
          onError={() => setImgFailed(true)}
        />
      ) : (
        <span
          className="font-display text-lg font-bold tracking-tight text-gold-400"
          aria-hidden
        >
          {initialsFromName(displayName)}
        </span>
      )}
    </div>
  )
}

export function PlayerAvatar(props: PlayerAvatarProps) {
  return (
    <PlayerAvatarInner
      key={`${props.avatar ?? ''}-${props.displayName}`}
      {...props}
    />
  )
}
