import { ChevronLeft, Filter, MoreHorizontal, Search, Settings2 } from 'lucide-react'
import { cn } from '@/utils/cn'
import { MoonPhase } from '@/components/ui/MoonPhase'
import { CoverTile } from './CoverTile'
import { coverFor } from '@/utils/cover'
import { libraryEntries } from '@/data/site'

const weekly = [
  { day: 'Seg', value: 0.35 },
  { day: 'Ter', value: 0.62 },
  { day: 'Qua', value: 0.48 },
  { day: 'Qui', value: 0.9 },
  { day: 'Sex', value: 0.55 },
  { day: 'Sáb', value: 1 },
  { day: 'Dom', value: 0.78 },
]

const genres = [
  { name: 'Xianxia', share: 0.34 },
  { name: 'Seinen', share: 0.26 },
  { name: 'Romance', share: 0.19 },
  { name: 'Isekai', share: 0.13 },
]

export function DesktopScreen({ className }: { className?: string }) {
  return (
    <div className={cn('flex h-full flex-col gap-4 bg-base p-5', className)}>
      <div className="flex items-center justify-between">
        <div>
          <p className="font-mono text-[0.5625rem] uppercase tracking-[0.16em] text-faint">Estatísticas · 2026</p>
          <h4 className="mt-1 font-display text-lg font-semibold">Ritmo de leitura</h4>
        </div>
        <span className="flex items-center gap-1.5 rounded-lg border border-line px-2.5 py-1.5 text-[0.625rem] text-muted">
          <Settings2 className="size-3" aria-hidden="true" />
          Últimos 7 dias
        </span>
      </div>

      <div className="grid flex-1 gap-4 lg:grid-cols-[1.6fr_1fr]">
        <div className="rounded-xl border border-line bg-card/60 p-4">
          <div className="flex h-36 items-end gap-2.5">
            {weekly.map((entry) => (
              <div key={entry.day} className="flex flex-1 flex-col items-center gap-2">
                <div className="flex w-full flex-1 items-end">
                  <div
                    className="w-full rounded-md bg-gradient-to-t from-primary/20 to-primary"
                    style={{ height: `${entry.value * 100}%` }}
                  />
                </div>
                <span className="font-mono text-[0.5625rem] text-faint">{entry.day}</span>
              </div>
            ))}
          </div>
          <div className="mt-4 flex items-center justify-between border-t border-line pt-3">
            <span className="font-mono text-[0.625rem] text-faint">184 capítulos · 22 h de anime</span>
            <span className="font-mono text-[0.625rem] text-secondary">melhor semana do mês</span>
          </div>
        </div>

        <div className="space-y-3 rounded-xl border border-line bg-card/60 p-4">
          <p className="font-mono text-[0.5625rem] uppercase tracking-[0.16em] text-faint">Gêneros dominantes</p>
          {genres.map((genre) => (
            <div key={genre.name} className="space-y-1.5">
              <div className="flex justify-between text-[0.6875rem]">
                <span className="text-muted">{genre.name}</span>
                <span className="font-mono text-faint">{Math.round(genre.share * 100)}%</span>
              </div>
              <div className="h-1 rounded-full bg-white/6">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-primary to-secondary"
                  style={{ width: `${genre.share * 100}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-6 gap-2">
        {libraryEntries.slice(0, 6).map((entry) => (
          <CoverTile key={entry.title} entry={entry} compact />
        ))}
      </div>
    </div>
  )
}

export function TabletScreen({ className }: { className?: string }) {
  return (
    <div className={cn('flex h-full flex-col gap-3 bg-base p-4', className)}>
      <div className="flex items-center gap-2">
        <div className="flex h-8 flex-1 items-center gap-2 rounded-lg border border-line bg-card/70 px-2.5">
          <Search className="size-3 text-faint" aria-hidden="true" />
          <span className="font-mono text-[0.5625rem] text-faint">tag: reler em 2027</span>
        </div>
        <span className="grid size-8 place-items-center rounded-lg border border-line text-faint">
          <Filter className="size-3" aria-hidden="true" />
        </span>
      </div>

      <div className="grid grid-cols-3 gap-2">
        {libraryEntries.slice(0, 6).map((entry) => (
          <CoverTile key={entry.title} entry={entry} />
        ))}
      </div>

      <div className="mt-auto rounded-xl border border-line bg-card/70 p-3">
        <p className="font-mono text-[0.5625rem] uppercase tracking-[0.16em] text-faint">Nota do capítulo 148</p>
        <p className="mt-1.5 text-[0.6875rem] leading-relaxed text-muted">
          O arco fecha o conflito da corte sem pressa. Reler os capítulos 130–140 antes da próxima temporada.
        </p>
      </div>
    </div>
  )
}

export function MobileScreen({ className }: { className?: string }) {
  const entry = libraryEntries[1]
  const cover = coverFor(entry.title)

  return (
    <div className={cn('flex h-full flex-col bg-base', className)}>
      <div className="relative h-32 shrink-0" style={{ background: cover.background }}>
        <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-base to-transparent" />
        <div className="flex items-center justify-between p-3">
          <span className="grid size-7 place-items-center rounded-lg bg-black/40 text-white/80 backdrop-blur-sm">
            <ChevronLeft className="size-3.5" aria-hidden="true" />
          </span>
          <span className="grid size-7 place-items-center rounded-lg bg-black/40 text-white/80 backdrop-blur-sm">
            <MoreHorizontal className="size-3.5" aria-hidden="true" />
          </span>
        </div>
      </div>

      <div className="-mt-6 flex-1 space-y-3 px-3.5">
        <div>
          <h4 className="font-display text-base font-semibold">{entry.title}</h4>
          <p className="font-mono text-[0.5625rem] uppercase tracking-[0.16em] text-faint">
            {entry.format} · em andamento
          </p>
        </div>

        <div className="flex items-center gap-3 rounded-xl border border-line bg-card/70 p-3">
          <MoonPhase progress={entry.progress} size={30} className="text-white/30" />
          <div>
            <p className="text-[0.6875rem] font-medium">{entry.chapter} de 141</p>
            <p className="font-mono text-[0.5625rem] text-faint">44% concluído</p>
          </div>
        </div>

        <div className="space-y-1.5">
          {['Cap. 63 — A ponte de pedra', 'Cap. 64 — Chuva fora de época', 'Cap. 65 — O selo quebrado'].map(
            (chapter, index) => (
              <div
                key={chapter}
                className="flex items-center gap-2 rounded-lg border border-line/70 bg-card/50 px-2.5 py-2"
              >
                <span
                  className={cn(
                    'size-1.5 rounded-full',
                    index === 0 ? 'bg-secondary' : 'bg-white/15',
                  )}
                  aria-hidden="true"
                />
                <span className="truncate text-[0.625rem] text-muted">{chapter}</span>
              </div>
            ),
          )}
        </div>
      </div>

      <div className="m-3.5 rounded-xl bg-primary py-2.5 text-center text-[0.6875rem] font-medium text-white">
        Continuar leitura
      </div>
    </div>
  )
}
