import { motion } from 'framer-motion'
import { Section } from '@/layouts/Section'
import { MoonPhase } from '@/components/ui/MoonPhase'
import { StatusBadge } from '@/components/StatusBadge'
import { cn } from '@/utils/cn'
import { PHASES, type Phase, type Status } from '@/data/status'
import { fadeUp, stagger, viewportOnce } from '@/utils/motion'

// Sem percentual medido, a lua indica o status: meia lua em desenvolvimento, lua nova planejada.
const moonByStatus: Record<Status, number> = {
  disponivel: 1,
  'em-desenvolvimento': 0.5,
  planejado: 0,
}

function PhaseRow({ phase, last }: { phase: Phase; last: boolean }) {
  return (
    <motion.li variants={fadeUp} className="relative grid gap-6 pb-14 last:pb-0 md:grid-cols-[auto_1fr] md:gap-10">
      <div className="relative flex md:flex-col md:items-center">
        <span className="relative z-10 grid size-12 place-items-center rounded-full border border-line bg-base">
          <MoonPhase progress={phase.progress ?? moonByStatus[phase.status]} size={26} className="text-white/25" />
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
          <span className="font-mono text-[0.6875rem] uppercase tracking-[0.18em] text-faint">Fase {String(phase.number).padStart(2, '0')}</span>
          <StatusBadge status={phase.status} className="px-2.5" />
          {phase.progress !== null && (
            <span className="font-mono text-[0.625rem] text-faint">{Math.round(phase.progress * 100)}%</span>
          )}
        </div>

        <h3 className="mt-3 text-[1.375rem] font-semibold md:text-[1.5rem]">{phase.title}</h3>
        <p className="mt-2 max-w-2xl text-[0.9375rem] leading-relaxed text-muted">{phase.description}</p>

        <ul className="mt-5 flex flex-wrap gap-2">
          {phase.items.map((item) => (
            <li
              key={item.label}
              className="flex items-center gap-1.5 rounded-lg border border-line bg-card/60 px-2.5 py-1.5 text-[0.75rem] text-muted"
            >
              <span
                className={cn(
                  'size-1.5 shrink-0 rounded-full',
                  item.status === 'planejado' ? 'border border-faint' : 'bg-primary-soft',
                )}
                aria-hidden="true"
              />
              {item.label}
              <span className="sr-only"> — {item.status === 'planejado' ? 'planejado' : 'em desenvolvimento'}</span>
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
      description="Acompanhe o andamento de cada fase pelas issues do repositório público. Sem datas inventadas — quando muda, muda no GitHub primeiro. Itens com círculo cheio estão em desenvolvimento; os vazios, planejados."
      headerClassName="max-w-3xl"
    >
      <motion.ol variants={stagger(0.14)} initial="hidden" whileInView="show" viewport={viewportOnce}>
        {PHASES.map((phase, index) => (
          <PhaseRow key={phase.number} phase={phase} last={index === PHASES.length - 1} />
        ))}
      </motion.ol>
    </Section>
  )
}
