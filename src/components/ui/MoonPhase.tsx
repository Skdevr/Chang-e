import { useId } from 'react'
import { cn } from '@/utils/cn'

type MoonPhaseProps = {
  progress: number
  size?: number
  className?: string
  label?: string
}

export function MoonPhase({ progress, size = 20, className, label }: MoonPhaseProps) {
  const id = useId()
  const clamped = Math.min(Math.max(progress, 0), 1)
  const r = 12
  const offset = -2 * r * clamped

  return (
    <svg
      viewBox="0 0 32 32"
      width={size}
      height={size}
      className={cn('shrink-0', className)}
      role={label ? 'img' : 'presentation'}
      aria-label={label}
      aria-hidden={label ? undefined : true}
    >
      <defs>
        <linearGradient id={`lit-${id}`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="var(--color-primary-soft)" />
          <stop offset="100%" stopColor="var(--color-secondary)" />
        </linearGradient>
        <mask id={`mask-${id}`}>
          <rect width="32" height="32" fill="black" />
          <circle cx="16" cy="16" r={r} fill="white" />
          <circle cx={16 + offset} cy="16" r={r} fill="black" />
        </mask>
      </defs>
      <circle cx="16" cy="16" r={r} fill="none" stroke="currentColor" strokeOpacity="0.28" strokeWidth="1.5" />
      <circle cx="16" cy="16" r={r} fill={`url(#lit-${id})`} mask={`url(#mask-${id})`} />
    </svg>
  )
}
