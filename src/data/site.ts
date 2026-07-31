import {
  Bell,
  BookMarked,
  BookOpen,
  Clock3,
  Database,
  Download,
  FileText,
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

export const GITHUB_URL = 'https://github.com/change-app/change'
export const DISCORD_URL = 'https://discord.gg/change'

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
  soon?: boolean
  span?: boolean
}

export const features: Feature[] = [
  {
    icon: Library,
    title: 'Biblioteca unificada',
    description:
      'Anime, mangá, manhwa, manhua, light novel e web novel na mesma estante. Uma obra, um registro — sem duplicar entradas entre formatos.',
    span: true,
  },
  {
    icon: BookOpen,
    title: 'Progresso de leitura',
    description: 'Marque o capítulo em que parou. O Chang’e calcula o quanto falta e mostra a próxima leitura.',
  },
  {
    icon: Tv,
    title: 'Progresso de episódios',
    description: 'Temporadas, episódios assistidos e o que entra no ar esta semana, por obra.',
  },
  {
    icon: FileText,
    title: 'Notas por capítulo',
    description: 'Escreva anotações ancoradas em um capítulo ou episódio específico. Nada se perde entre releituras.',
  },
  {
    icon: Heart,
    title: 'Favoritos',
    description: 'Fixe as obras que importam no topo da biblioteca e monte listas próprias.',
  },
  {
    icon: Tags,
    title: 'Tags livres',
    description: 'Crie sua própria taxonomia: “reler em 2027”, “dropei no arco ruim”, o que fizer sentido.',
  },
  {
    icon: Search,
    title: 'Busca instantânea',
    description: 'Busca por título, autor, tag ou nota. Resposta abaixo de 50 ms com índice full-text.',
  },
  {
    icon: RefreshCw,
    title: 'Sincronização',
    description: 'A mesma biblioteca no celular, no notebook e no tablet, com resolução de conflitos offline-first.',
  },
  {
    icon: LineChart,
    title: 'Estatísticas',
    description: 'Capítulos por mês, horas de anime, gêneros dominantes e sequências de leitura em gráficos limpos.',
    span: true,
  },
  {
    icon: Download,
    title: 'PWA instalável',
    description: 'Instale como aplicativo e continue navegando pela biblioteca sem conexão.',
  },
  {
    icon: Moon,
    title: 'Dark mode nativo',
    description: 'Projetado no escuro primeiro, para leitura noturna sem ofuscar.',
  },
  {
    icon: Sparkles,
    title: 'Recomendações por IA',
    description: 'Sugestões a partir do seu histórico real de leitura, com explicação do porquê de cada indicação.',
    soon: true,
  },
]

export type Stat = {
  value: number
  suffix: string
  label: string
  detail: string
}

export const stats: Stat[] = [
  { value: 50000, suffix: '+', label: 'Obras catalogadas', detail: 'Seis formatos, uma base' },
  { value: 500, suffix: '+', label: 'Editoras e estúdios', detail: 'Metadados normalizados' },
  { value: 2400000, suffix: '+', label: 'Capítulos indexados', detail: 'Atualização diária' },
  { value: 50, suffix: 'ms', label: 'Busca full-text', detail: 'p95 medido em produção' },
]

export type RoadmapPhase = {
  phase: string
  status: 'Em desenvolvimento' | 'Planejado' | 'Explorando'
  title: string
  description: string
  progress: number
  items: string[]
}

export const roadmap: RoadmapPhase[] = [
  {
    phase: 'Fase 01',
    status: 'Em desenvolvimento',
    title: 'MVP — a estante funciona',
    description: 'O núcleo do produto: cadastrar, acompanhar e anotar. Tudo o que já dá para usar todo dia.',
    progress: 0.72,
    items: ['Biblioteca', 'Anime', 'Mangá', 'Manhwa', 'Notas por capítulo', 'PWA'],
  },
  {
    phase: 'Fase 02',
    status: 'Planejado',
    title: 'Inteligência e comunidade',
    description: 'A biblioteca passa a sugerir e a conversar. Recomendações explicáveis e perfis públicos.',
    progress: 0.24,
    items: ['Motor de recomendação', 'Resumos sem spoiler', 'Perfis públicos', 'Listas compartilhadas'],
  },
  {
    phase: 'Fase 03',
    status: 'Explorando',
    title: 'Leitor integrado',
    description: 'Ler dentro do Chang’e, com os seus próprios arquivos e no seu próprio servidor.',
    progress: 0.06,
    items: ['Reader integrado', 'Google Drive', 'Upload de arquivos', 'Self-hosted'],
  },
]

export type StackItem = {
  name: string
  role: string
  glyph: string
}

export const stack: StackItem[] = [
  { name: 'FastAPI', role: 'API assíncrona', glyph: '{ }' },
  { name: 'Python', role: 'Domínio e workers', glyph: 'py' },
  { name: 'PostgreSQL', role: 'Dados e full-text', glyph: 'SQL' },
  { name: 'Redis', role: 'Cache e filas', glyph: '::' },
  { name: 'Docker', role: 'Deploy reproduzível', glyph: '[ ]' },
  { name: 'React', role: 'Interface', glyph: '<>' },
  { name: 'TypeScript', role: 'Contratos de tipo', glyph: 'TS' },
  { name: 'GitHub', role: 'CI e revisão aberta', glyph: '⌥' },
]

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
