import { cn } from '@/utils/cn'
import { coverFor, initials } from '@/utils/cover'
import { MoonPhase } from '@/components/ui/MoonPhase'
import type { LibraryEntry } from '@/data/site'

type CoverTileProps = {
  entry: LibraryEntry
  className?: string
  compact?: boolean
}

export function CoverTile({ entry, className, compact = false }: CoverTileProps) {
  const cover = coverFor(entry.title)

  return (
    <article
      className={cn(
        'group/tile relative overflow-hidden rounded-lg border border-white/[0.06] transition-transform duration-300 ease-[var(--ease-out-quint)] hover:-translate-y-0.5',
        className,
      )}
    >
      <div className="relative aspect-[3/4] w-full" style={{ background: cover.background }}>
        <div
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage:
              'repeating-linear-gradient(115deg, rgba(255,255,255,0.06) 0px, rgba(255,255,255,0.06) 1px, transparent 1px, transparent 9px)',
          }}
        />
        <span
          className="absolute bottom-3 left-3 font-display text-2xl font-semibold leading-none opacity-70"
          style={{ color: cover.accent }}
        >
          {initials(entry.title)}
        </span>
        <span className="absolute right-2 top-2 rounded-md bg-black/45 px-1.5 py-0.5 font-mono text-[0.5rem] uppercase tracking-widest text-white/70 backdrop-blur-sm">
          {entry.format}
        </span>
        <div className="absolute inset-x-0 bottom-0 h-14 bg-gradient-to-t from-black/70 to-transparent" />
      </div>

      {!compact && (
        <div className="space-y-1.5 bg-card/90 px-2.5 py-2">
          <p className="truncate text-[0.6875rem] font-medium text-ink">{entry.title}</p>
          <div className="flex items-center gap-1.5">
            <MoonPhase progress={entry.progress} size={11} className="text-white/40" />
            <span className="font-mono text-[0.5625rem] text-faint">{entry.chapter}</span>
          </div>
        </div>
      )}
    </article>
  )
}
