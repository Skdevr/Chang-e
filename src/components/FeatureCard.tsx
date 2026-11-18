import { motion } from 'framer-motion'
import { cn } from '@/utils/cn'
import { fadeUp } from '@/utils/motion'
import { StatusBadge } from '@/components/StatusBadge'
import type { Feature } from '@/data/site'

type FeatureCardProps = {
  feature: Feature
  className?: string
}

export function FeatureCard({ feature, className }: FeatureCardProps) {
  const { icon: Icon, title, description, status, span } = feature

  return (
    <motion.article
      variants={fadeUp}
      className={cn(
        'group relative overflow-hidden rounded-2xl border border-line bg-card/60 p-6 transition-colors duration-300 hover:border-white/12',
        span && 'md:col-span-2',
        className,
      )}
    >
      <div
        className="pointer-events-none absolute -top-24 left-1/2 size-48 -translate-x-1/2 rounded-full bg-primary/20 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100"
        aria-hidden="true"
      />

      <div className="relative flex items-start gap-4">
        <span className="grid size-10 shrink-0 place-items-center rounded-xl border border-line bg-surface text-primary-soft transition-colors duration-300 group-hover:text-secondary">
          <Icon className="size-4.5" aria-hidden="true" />
        </span>

        <div className="min-w-0 space-y-2">
          <h3 className="flex flex-wrap items-center gap-2 text-[0.9375rem] font-semibold">
            {title}
            <StatusBadge status={status} />
          </h3>
          <p className="text-[0.875rem] leading-relaxed text-muted">{description}</p>
        </div>
      </div>
    </motion.article>
  )
}
