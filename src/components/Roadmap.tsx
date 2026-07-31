import { motion } from 'framer-motion'
import { Check } from 'lucide-react'
import { Section } from '@/layouts/Section'
import { MoonPhase } from '@/components/ui/MoonPhase'
import { cn } from '@/utils/cn'
import { roadmap, type RoadmapPhase } from '@/data/site'
import { fadeUp, stagger, viewportOnce } from '@/utils/motion'

const statusStyles: Record<RoadmapPhase['status'], string> = {
  'Em desenvolvimento': 'border-primary/35 bg-primary/12 text-primary-soft',
  Planejado: 'border-secondary/30 bg-secondary/10 text-secondary',
  Explorando: 'border-line bg-surface text-muted',
}

function PhaseRow({ phase, last }: { phase: RoadmapPhase; last: boolean }) {
  return (
    <motion.li variants={fadeUp} className="relative grid gap-6 pb-14 last:pb-0 md:grid-cols-[auto_1fr] md:gap-10">
      <div className="relative flex md:flex-col md:items-center">
        <span className="relative z-10 grid size-12 place-items-center rounded-full border border-line bg-base">
          <MoonPhase progress={phase.progress} size={26} className="text-white/25" />
        </span>
        {!last && (
          <span
            className="absolute left-6 top-12 hidden h-[calc(100%-1rem)] w-px bg-gradient-to-b from-line to-transparent md:block"
            aria-hidden="true"
          />
        )}
      </div>

      <div className="min-w-0">
        <div className="flex flex-wrap items-center gap-3">
          <span className="font-mono text-[0.6875rem] uppercase tracking-[0.18em] text-faint">{phase.phase}</span>
          <span
            className={cn(
              'rounded-full border px-2.5 py-0.5 font-mono text-[0.5625rem] uppercase tracking-[0.14em]',
              statusStyles[phase.status],
            )}
          >
            {phase.status}
          </span>
          <span className="font-mono text-[0.625rem] text-faint">{Math.round(phase.progress * 100)}%</span>
        </div>

        <h3 className="mt-3 text-[1.375rem] font-semibold md:text-[1.5rem]">{phase.title}</h3>
        <p className="mt-2 max-w-2xl text-[0.9375rem] leading-relaxed text-muted">{phase.description}</p>

        <ul className="mt-5 flex flex-wrap gap-2">
          {phase.items.map((item) => (
            <li
              key={item}
              className="flex items-center gap-1.5 rounded-lg border border-line bg-card/60 px-2.5 py-1.5 text-[0.75rem] text-muted"
            >
              <Check
                className={cn('size-3', phase.status === 'Em desenvolvimento' ? 'text-primary-soft' : 'text-faint')}
                aria-hidden="true"
              />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </motion.li>
  )
}

export function Roadmap() {
  return (
    <Section
      id="roadmap"
      align="left"
      eyebrow="Roadmap"
      title={<>Construído em fases, à vista de todos.</>}
      description="O progresso de cada fase é medido pelas issues fechadas no repositório público. Sem datas inventadas — quando muda, muda no GitHub primeiro."
      headerClassName="max-w-3xl"
    >
      <motion.ol variants={stagger(0.14)} initial="hidden" whileInView="show" viewport={viewportOnce}>
        {roadmap.map((phase, index) => (
          <PhaseRow key={phase.phase} phase={phase} last={index === roadmap.length - 1} />
        ))}
      </motion.ol>
    </Section>
  )
}
