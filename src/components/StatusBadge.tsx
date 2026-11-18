import { cn } from '@/utils/cn'
import { STATUS_LABEL, type Status } from '@/data/status'

// Mesmo padrão de pílula usado no Roadmap e no selo "Em breve" (mono, maiúsculas, tokens da landing).
const styles: Record<Status, string> = {
  disponivel: 'border-primary/60 bg-primary/25 text-ink',
  'em-desenvolvimento': 'border-primary/35 bg-primary/12 text-primary-soft',
  planejado: 'border-secondary/30 bg-secondary/10 text-secondary',
}

type StatusBadgeProps = {
  status: Status
  className?: string
}

export function StatusBadge({ status, className }: StatusBadgeProps) {
  return (
    <span
      className={cn(
        'rounded-full border px-2 py-0.5 font-mono text-[0.5625rem] uppercase tracking-[0.14em]',
        styles[status],
        className,
      )}
    >
      {STATUS_LABEL[status]}
    </span>
  )
}
