import {
  Bell,
  BookMarked,
  BookOpen,
  Clock3,
  Database,
  Download,
  EyeOff,
  FileJson,
  FileText,
  Globe,
  HardDrive,
  Heart,
  LayoutGrid,
  Library,
  LineChart,
  Moon,
  RefreshCw,
  Search,
  Sparkles,
  Tags,
  Tv,
  type LucideIcon,
} from 'lucide-react'
import { FEATURES, REPO_URL, type Status } from '@/data/status'

export const GITHUB_URL = REPO_URL

export type NavLink = { label: string; href: string }

export const navLinks: NavLink[] = [
  { label: 'Funcionalidades', href: '#funcionalidades' },
  { label: 'Roadmap', href: '#roadmap' },
  { label: 'Open Source', href: '#open-source' },
  { label: 'GitHub', href: GITHUB_URL },
]

export type Feature = {
  icon: LucideIcon
  title: string
  description: string
  status: Status
  span?: boolean
}

// Texto e status vêm de src/data/status.ts (espelho do README). Aqui só entram ícone e layout.
const featureIcons: Record<string, LucideIcon> = {
  'biblioteca-unificada': Library,
  'progresso-leitura': BookOpen,
  'progresso-episodios': Tv,
  'notas-capitulo': FileText,
  favoritos: Heart,
  tags: Tags,
  busca: Search,
  pwa: Download,
  'tema-escuro': Moon,
  'exportacao-json': FileJson,
  'importacao-listas': Database,
  'catalogos-externos': Globe,
  leitor: BookMarked,
  armazenamento: HardDrive,
  sincronizacao: RefreshCw,
  estatisticas: LineChart,
  recomendacoes: Sparkles,
  'resumos-sem-spoiler': EyeOff,
}

const wideFeatures = new Set(['biblioteca-unificada', 'estatisticas'])

export const features: Feature[] = FEATURES.map((feature) => ({
  icon: featureIcons[feature.id],
  title: feature.title,
  description: feature.description,
  status: feature.status,
  span: wideFeatures.has(feature.id),
}))

export type Stat = {
  value: number
  suffix: string
  label: string
  detail: string
}

// Só números que podem ser verificados no README e no roadmap.
export const stats: Stat[] = [
  { value: 7, suffix: '', label: 'Formatos de mídia', detail: 'Uma base, sem duplicar obras' },
  { value: 5, suffix: '', label: 'Fases de roadmap', detail: 'Acompanhadas no GitHub' },
  { value: 2, suffix: '', label: 'Catálogos externos', detail: 'AniList e MangaDex (planejado)' },
  { value: 100, suffix: '%', label: 'Código aberto', detail: 'Licença AGPL-3.0' },
]

export type StackItem = {
  name: string
  role: string
  glyph: string
}

export const stack: StackItem[] = [
  { name: 'FastAPI', role: 'API assíncrona', glyph: '{ }' },
  { name: 'Python', role: 'Domínio e regras de negócio', glyph: 'py' },
  { name: 'PostgreSQL', role: 'Dados e persistência', glyph: 'SQL' },
  { name: 'SQLAlchemy', role: 'ORM e migrações (Alembic)', glyph: '::' },
  { name: 'Docker', role: 'Deploy reproduzível', glyph: '[ ]' },
  { name: 'React', role: 'Interface', glyph: '<>' },
  { name: 'TypeScript', role: 'Contratos de tipo', glyph: 'TS' },
  { name: 'GitHub', role: 'Código e revisão abertos', glyph: '⌥' },
]

export const stackEvaluating = 'Redis (cache e filas), pgvector e ONNX Runtime'

export type LibraryEntry = {
  title: string
  format: 'Mangá' | 'Manhwa' | 'Anime' | 'Novel' | 'Manhua'
  progress: number
  chapter: string
}

export const libraryEntries: LibraryEntry[] = [
  { title: 'Jade Lantern', format: 'Manhwa', progress: 0.82, chapter: 'Cap. 148' },
  { title: 'Osmanthus Court', format: 'Mangá', progress: 0.44, chapter: 'Cap. 62' },
  { title: 'Silent Rabbit', format: 'Anime', progress: 0.31, chapter: 'Ep. 07' },
  { title: 'Nine Rivers', format: 'Novel', progress: 0.95, chapter: 'Cap. 902' },
  { title: 'Cold Palace', format: 'Manhua', progress: 0.18, chapter: 'Cap. 21' },
  { title: 'Elixir Route', format: 'Manhwa', progress: 0.6, chapter: 'Cap. 88' },
  { title: 'Tide of Ashes', format: 'Mangá', progress: 0.12, chapter: 'Cap. 09' },
  { title: 'Lunar Exile', format: 'Novel', progress: 0.7, chapter: 'Cap. 411' },
]

export type SidebarItem = { icon: LucideIcon; label: string; badge?: string }

export const sidebarItems: SidebarItem[] = [
  { icon: LayoutGrid, label: 'Visão geral' },
  { icon: Library, label: 'Biblioteca', badge: '318' },
  { icon: Clock3, label: 'Continuar' },
  { icon: BookMarked, label: 'Listas' },
  { icon: LineChart, label: 'Estatísticas' },
  { icon: Bell, label: 'Lançamentos', badge: '4' },
  { icon: Database, label: 'Importar' },
]
