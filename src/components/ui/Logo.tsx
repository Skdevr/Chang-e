import { cn } from '@/utils/cn'

type LogoProps = {
  className?: string
  showWordmark?: boolean
}

export function Logo({ className, showWordmark = true }: LogoProps) {
  return (
    <span className={cn('flex items-center gap-2.5', className)}>
      <span className="relative grid size-9 place-items-center rounded-xl bg-surface hairline">
        <svg viewBox="0 0 32 32" className="size-5" aria-hidden="true">
          <defs>
            <linearGradient id="logo-lit" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#9B83FF" />
              <stop offset="100%" stopColor="#5BA8FF" />
            </linearGradient>
            <mask id="logo-mask">
              <rect width="32" height="32" fill="black" />
              <circle cx="16" cy="16" r="12" fill="white" />
              <circle cx="24" cy="11" r="11" fill="black" />
            </mask>
          </defs>
          <circle cx="16" cy="16" r="12" fill="#7C5CFF" opacity="0.14" />
          <circle cx="16" cy="16" r="12" fill="url(#logo-lit)" mask="url(#logo-mask)" />
        </svg>
        <span className="absolute inset-0 rounded-xl bg-primary/25 blur-lg -z-10" aria-hidden="true" />
      </span>
      {showWordmark && (
        <span className="font-display text-[1.0625rem] font-semibold tracking-tight text-ink">
          Chang<span className="text-secondary">&rsquo;</span>e
        </span>
      )}
    </span>
  )
}
