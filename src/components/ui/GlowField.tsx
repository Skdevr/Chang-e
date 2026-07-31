import { useMemo } from 'react'
import { cn } from '@/utils/cn'
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion'

type GlowFieldProps = {
  className?: string
  particles?: number
  grid?: boolean
}

type Particle = {
  left: string
  top: string
  size: number
  delay: string
  duration: string
  opacity: number
}

function buildParticles(count: number): Particle[] {
  return Array.from({ length: count }, (_, index) => {
    const golden = (index * 137.508) % 100
    const vertical = ((index * 61.803) % 100)
    return {
      left: `${golden.toFixed(2)}%`,
      top: `${vertical.toFixed(2)}%`,
      size: index % 5 === 0 ? 2 : 1,
      delay: `${((index * 0.73) % 6).toFixed(2)}s`,
      duration: `${(9 + (index % 7)).toFixed(0)}s`,
      opacity: 0.18 + ((index % 4) * 0.12),
    }
  })
}

export function GlowField({ className, particles = 28, grid = true }: GlowFieldProps) {
  const reduced = usePrefersReducedMotion()
  const dots = useMemo(() => buildParticles(particles), [particles])

  return (
    <div className={cn('pointer-events-none absolute inset-0 overflow-hidden', className)} aria-hidden="true">
      {grid && <div className="absolute inset-0 grid-field mask-fade-b opacity-70" />}

      <div
        className="absolute -top-40 left-1/2 size-[42rem] -translate-x-1/2 rounded-full bg-primary/22 blur-[140px]"
        style={reduced ? undefined : { animation: 'orbit-drift 22s ease-in-out infinite' }}
      />
      <div
        className="absolute -right-32 top-1/3 size-[32rem] rounded-full bg-secondary/12 blur-[130px]"
        style={reduced ? undefined : { animation: 'orbit-drift 28s ease-in-out infinite reverse' }}
      />
      <div className="absolute -left-40 bottom-0 size-[28rem] rounded-full bg-primary/10 blur-[120px]" />

      {dots.map((dot, index) => (
        <span
          key={index}
          className="absolute rounded-full bg-white"
          style={{
            left: dot.left,
            top: dot.top,
            width: dot.size,
            height: dot.size,
            opacity: dot.opacity,
            animation: reduced ? undefined : `orbit-drift ${dot.duration} ease-in-out ${dot.delay} infinite`,
          }}
        />
      ))}

      <div className="absolute inset-0 noise opacity-[0.035] mix-blend-soft-light" />
    </div>
  )
}
