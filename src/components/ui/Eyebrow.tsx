import type { ReactNode } from 'react'
import { cn } from '@/utils/cn'

type EyebrowProps = {
  children: ReactNode
  className?: string
}

export function Eyebrow({ children, className }: EyebrowProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-2 rounded-full border border-line bg-card/60 px-3 py-1 font-mono text-[0.6875rem] uppercase tracking-[0.18em] text-muted backdrop-blur-sm',
        className,
      )}
    >
      <span className="size-1.5 rounded-full bg-secondary shadow-[0_0_8px_2px_rgba(91,168,255,0.6)]" aria-hidden="true" />
      {children}
    </span>
  )
}
