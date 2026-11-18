// src/components/StatusBadge.tsx
import { STATUS_LABEL, type Status } from "../data/status";

const STYLES: Record<Status, { pill: string; dot: string }> = {
  disponivel: {
    pill: "border-emerald-400/30 bg-emerald-400/10 text-emerald-200",
    dot: "bg-emerald-400",
  },
  "em-desenvolvimento": {
    pill: "border-indigo-400/30 bg-indigo-400/10 text-indigo-200",
    dot: "bg-indigo-400",
  },
  planejado: {
    pill: "border-white/15 bg-white/5 text-zinc-300",
    // Anel vazio: o estado "planejado" se distingue pela forma, não só pela cor.
    dot: "border border-zinc-400 bg-transparent",
  },
};

interface Props {
  status: Status;
  className?: string;
}

export function StatusBadge({ status, className = "" }: Props) {
  const s = STYLES[status];
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border px-2 py-0.5 text-xs font-medium ${s.pill} ${className}`}
    >
      <span aria-hidden="true" className={`h-1.5 w-1.5 rounded-full ${s.dot}`} />
      {STATUS_LABEL[status]}
    </span>
  );
}
