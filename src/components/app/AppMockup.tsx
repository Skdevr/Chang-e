import { motion } from 'framer-motion'
import { ChevronRight, Command, Search } from 'lucide-react'
import { cn } from '@/utils/cn'
import { Logo } from '@/components/ui/Logo'
import { MoonPhase } from '@/components/ui/MoonPhase'
import { CoverTile } from './CoverTile'
import { libraryEntries, sidebarItems } from '@/data/site'
import { easeOutQuint } from '@/utils/motion'

const activityBars = [38, 62, 45, 88, 54, 71, 96, 60, 42, 78, 51, 84]

function WindowChrome() {
  return (
    <div className="flex items-center gap-3 border-b border-line/80 bg-card/70 px-4 py-3">
      <div className="flex gap-1.5" aria-hidden="true">
        <span className="size-2.5 rounded-full bg-white/12" />
        <span className="size-2.5 rounded-full bg-white/12" />
        <span className="size-2.5 rounded-full bg-white/12" />
      </div>
      <div className="mx-auto flex h-7 w-full max-w-[15rem] items-center gap-2 rounded-lg border border-line bg-base/70 px-2.5">
        <Search className="size-3 text-faint" aria-hidden="true" />
        <span className="truncate font-mono text-[0.625rem] text-faint">buscar na biblioteca</span>
        <kbd className="ml-auto flex items-center gap-0.5 rounded border border-line px-1 font-mono text-[0.5625rem] text-faint">
          <Command className="size-2" aria-hidden="true" />K
        </kbd>
      </div>
      <div className="size-6 rounded-full bg-gradient-to-br from-primary to-secondary opacity-80" aria-hidden="true" />
    </div>
  )
}

function Sidebar() {
  return (
    <aside className="hidden w-[11.5rem] shrink-0 flex-col gap-1 border-r border-line/70 bg-base/40 p-3 sm:flex">
      <Logo className="mb-4 px-1.5 pt-1" />
      {sidebarItems.map((item, index) => (
        <span
          key={item.label}
          className={cn(
            'flex items-center gap-2.5 rounded-lg px-2.5 py-[0.4rem] text-[0.6875rem] transition-colors',
            index === 1 ? 'bg-primary/12 text-ink' : 'text-muted',
          )}
        >
          <item.icon className={cn('size-3.5', index === 1 ? 'text-primary-soft' : 'text-faint')} aria-hidden="true" />
          {item.label}
          {item.badge && (
            <span className="ml-auto font-mono text-[0.5625rem] text-faint">{item.badge}</span>
          )}
        </span>
      ))}

      <div className="mt-auto rounded-xl border border-line bg-card/60 p-3">
        <p className="font-mono text-[0.5625rem] uppercase tracking-[0.16em] text-faint">Sequência</p>
        <p className="mt-1 font-display text-lg font-semibold leading-none">42 dias</p>
        <div className="mt-2 flex gap-[3px]" aria-hidden="true">
          {Array.from({ length: 14 }, (_, index) => (
            <span
              key={index}
              className="h-4 flex-1 rounded-[2px]"
              style={{
                background: index > 10 ? 'rgba(255,255,255,0.08)' : `rgba(124,92,255,${0.25 + index * 0.05})`,
              }}
            />
          ))}
        </div>
      </div>
    </aside>
  )
}

function ContinuePanel() {
  const current = libraryEntries[0]

  return (
    <div className="rounded-xl border border-line bg-card/70 p-3.5">
      <div className="flex items-center justify-between">
        <p className="font-mono text-[0.5625rem] uppercase tracking-[0.16em] text-faint">Continuar de onde parou</p>
        <ChevronRight className="size-3 text-faint" aria-hidden="true" />
      </div>
      <div className="mt-3 flex items-center gap-3">
        <MoonPhase progress={current.progress} size={34} className="text-white/30" />
        <div className="min-w-0">
          <p className="truncate text-[0.8125rem] font-medium">{current.title}</p>
          <p className="font-mono text-[0.625rem] text-faint">
            {current.chapter} · restam 32 capítulos
          </p>
        </div>
        <span className="ml-auto hidden rounded-lg bg-primary px-2.5 py-1.5 text-[0.6875rem] font-medium text-white md:inline-flex">
          Retomar
        </span>
      </div>
    </div>
  )
}

function ActivityPanel() {
  return (
    <div className="rounded-xl border border-line bg-card/70 p-3.5">
      <div className="flex items-baseline justify-between">
        <p className="font-mono text-[0.5625rem] uppercase tracking-[0.16em] text-faint">Capítulos por mês</p>
        <p className="font-mono text-[0.625rem] text-secondary">+18%</p>
      </div>
      <div className="mt-3 flex h-16 items-end gap-1" aria-hidden="true">
        {activityBars.map((height, index) => (
          <motion.span
            key={index}
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.5 + index * 0.045, ease: easeOutQuint }}
            className="flex-1 origin-bottom rounded-[3px] bg-gradient-to-t from-primary/25 to-secondary/70"
            style={{ height: `${height}%` }}
          />
        ))}
      </div>
    </div>
  )
}

export function AppMockup({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        'relative w-full overflow-hidden rounded-2xl border border-line bg-base/90 shadow-[0_40px_120px_-40px_rgba(0,0,0,0.9)] backdrop-blur-xl',
        className,
      )}
      role="img"
      aria-label="Prévia da interface do Chang'e com biblioteca, progresso de leitura e estatísticas"
    >
      <div className="pointer-events-none absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent" />
      <WindowChrome />

      <div className="flex min-h-[24rem]">
        <Sidebar />

        <div className="flex-1 space-y-4 p-4">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div>
              <h3 className="font-display text-base font-semibold">Biblioteca</h3>
              <p className="font-mono text-[0.625rem] text-faint">318 obras · 6 formatos</p>
            </div>
            <div className="flex gap-1.5">
              {['Todos', 'Lendo', 'Assistindo', 'Pausados'].map((chip, index) => (
                <span
                  key={chip}
                  className={cn(
                    'rounded-md px-2 py-1 text-[0.625rem]',
                    index === 1 ? 'bg-white/10 text-ink' : 'text-faint',
                  )}
                >
                  {chip}
                </span>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-4 gap-2.5 lg:grid-cols-5">
            {libraryEntries.slice(0, 5).map((entry, index) => (
              <motion.div
                key={entry.title}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.35 + index * 0.07, ease: easeOutQuint }}
                className={index === 4 ? 'hidden lg:block' : undefined}
              >
                <CoverTile entry={entry} />
              </motion.div>
            ))}
          </div>

          <div className="grid gap-3 md:grid-cols-2">
            <ContinuePanel />
            <ActivityPanel />
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 rounded-2xl shadow-[inset_0_1px_0_0_rgba(255,255,255,0.06)]" />
    </div>
  )
}
