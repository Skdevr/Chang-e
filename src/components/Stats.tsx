import { motion } from 'framer-motion'
import { useCountUp } from '@/hooks/useCountUp'
import { stats, type Stat } from '@/data/site'
import { fadeUp, stagger, viewportOnce } from '@/utils/motion'

function formatValue(value: number): string {
  if (value >= 1_000_000) return `${(value / 1_000_000).toFixed(1).replace('.', ',')} mi`
  if (value >= 1_000) return `${Math.round(value / 1_000)} mil`
  return String(value)
}

function StatCard({ stat }: { stat: Stat }) {
  const { ref, value } = useCountUp(stat.value)

  return (
    <motion.div
      variants={fadeUp}
      className="relative flex flex-col gap-1.5 bg-[#0c0e14] px-6 py-9 md:px-8"
    >
      <span className="font-display text-[clamp(2rem,4.2vw,2.9rem)] font-semibold leading-none tracking-tight">
        <span ref={ref}>{formatValue(value)}</span>
        <span className="text-primary-soft">{stat.suffix}</span>
      </span>
      <span className="text-[0.875rem] font-medium text-ink/90">{stat.label}</span>
      <span className="font-mono text-[0.6875rem] uppercase tracking-[0.14em] text-faint">{stat.detail}</span>
    </motion.div>
  )
}

export function Stats() {
  return (
    <section id="numeros" className="relative py-16 md:py-20" aria-label="Números da plataforma">
      <div className="container-page">
        <div className="relative overflow-hidden rounded-3xl border border-line bg-card/45">
          <div className="pointer-events-none absolute inset-0 grid-field opacity-40" aria-hidden="true" />
          <div
            className="pointer-events-none absolute -left-20 top-1/2 size-72 -translate-y-1/2 rounded-full bg-primary/14 blur-[100px]"
            aria-hidden="true"
          />

          <motion.div
            variants={stagger(0.09)}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="relative grid gap-px bg-line/70 sm:grid-cols-2 lg:grid-cols-4"
          >
            {stats.map((stat) => (
              <StatCard key={stat.label} stat={stat} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
