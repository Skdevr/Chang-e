// src/data/status.ts
// Fonte única de verdade dos status da landing.
// Espelha as tabelas "Funcionalidades e status" e "Roadmap" do README.md.
// Regra: só use "disponivel" para o que já existe no código do repositório.

export const REPO_URL = "https://github.com/Skdevr/Chang-e";
export const SITE_URL = "https://chang-e-eight.vercel.app";

export type Status = "disponivel" | "em-desenvolvimento" | "planejado";

export const STATUS_LABEL: Record<Status, string> = {
  disponivel: "Disponível",
  "em-desenvolvimento": "Em desenvolvimento",
  planejado: "Planejado",
};

export interface Feature {
  id: string;
  title: string;
  description: string;
  status: Status;
  phase: 1 | 2 | 3 | 4 | 5;
}

export const FEATURES: Feature[] = [
  {
    id: "biblioteca-unificada",
    title: "Biblioteca unificada",
    description:
      "Anime, mangá, manhwa, manhua, light novel e web novel na mesma estante. Uma obra, um registro — sem duplicar entradas entre formatos.",
    status: "em-desenvolvimento",
    phase: 1,
  },
  {
    id: "progresso-leitura",
    title: "Progresso de leitura",
    description:
      "Marque o capítulo em que parou. O Chang'e calcula quanto falta e mostra a próxima leitura.",
    status: "em-desenvolvimento",
    phase: 1,
  },
  {
    id: "progresso-episodios",
    title: "Progresso de episódios",
    description: "Temporadas e episódios assistidos, por obra.",
    status: "em-desenvolvimento",
    phase: 1,
  },
  {
    id: "notas-capitulo",
    title: "Notas por capítulo",
    description:
      "Escreva anotações ancoradas em um capítulo ou episódio específico. Nada se perde entre releituras.",
    status: "em-desenvolvimento",
    phase: 1,
  },
  {
    id: "favoritos",
    title: "Favoritos e coleções",
    description: "Fixe as obras que importam no topo da biblioteca e monte listas próprias.",
    status: "em-desenvolvimento",
    phase: 1,
  },
  {
    id: "tags",
    title: "Tags livres",
    description:
      "Crie sua própria taxonomia: “reler em 2027”, “dropei no arco ruim”, o que fizer sentido.",
    status: "em-desenvolvimento",
    phase: 1,
  },
  {
    id: "busca",
    title: "Busca na biblioteca",
    // Removido "abaixo de 50 ms": só volte a citar número depois de medir.
    description: "Busque por título, autor, tag ou nota.",
    status: "em-desenvolvimento",
    phase: 1,
  },
  {
    id: "pwa",
    title: "PWA instalável",
    description: "Instale como aplicativo no celular ou no computador.",
    status: "em-desenvolvimento",
    phase: 1,
  },
  {
    id: "tema-escuro",
    title: "Tema escuro nativo",
    description: "Projetado primeiro para o escuro, para leitura noturna sem ofuscar.",
    status: "em-desenvolvimento",
    phase: 1,
  },
  {
    id: "exportacao-json",
    title: "Exportação dos seus dados",
    description: "Exportação completa em JSON a qualquer momento.",
    status: "planejado",
    phase: 1,
  },
  {
    id: "importacao-listas",
    title: "Importação de listas",
    description: "Traga sua lista do MyAnimeList, AniList ou Mihon.",
    status: "planejado",
    phase: 2,
  },
  {
    id: "catalogos-externos",
    title: "Catálogos externos",
    description: "Metadados e descoberta de obras via AniList e MangaDex.",
    status: "planejado",
    phase: 2,
  },
  {
    id: "leitor",
    title: "Leitor integrado",
    description: "Leia dentro do Chang'e, com os seus próprios arquivos.",
    status: "planejado",
    phase: 3,
  },
  {
    id: "armazenamento",
    title: "Armazenamento próprio",
    description: "Arquivos no seu servidor, NAS ou Google Drive.",
    status: "planejado",
    phase: 4,
  },
  {
    id: "sincronizacao",
    title: "Sincronização",
    description: "A mesma biblioteca no celular, no notebook e no tablet.",
    status: "planejado",
    phase: 4,
  },
  {
    id: "estatisticas",
    title: "Estatísticas",
    description:
      "Capítulos por mês, horas de anime, gêneros dominantes e sequências de leitura.",
    status: "planejado",
    phase: 5,
  },
  {
    id: "recomendacoes",
    title: "Recomendações explicadas",
    description:
      "Sugestões a partir do seu histórico real de leitura, com o porquê de cada indicação.",
    status: "planejado",
    phase: 5,
  },
  {
    id: "resumos-sem-spoiler",
    title: "Resumos sem spoiler",
    description: "Um recap do que você já leu, sem revelar o que vem depois.",
    status: "planejado",
    phase: 5,
  },
];

export interface Phase {
  number: 1 | 2 | 3 | 4 | 5;
  title: string;
  description: string;
  status: Status;
  // Percentual calculado a partir das issues fechadas do milestone no GitHub.
  // Use null enquanto não houver cálculo real: o componente não exibe número.
  progress: number | null;
}

export const PHASES: Phase[] = [
  {
    number: 1,
    title: "Fundação e Biblioteca",
    description: "A base da plataforma: biblioteca, progresso, notas, API e autenticação.",
    status: "em-desenvolvimento",
    progress: null,
  },
  {
    number: 2,
    title: "Descoberta e Integrações",
    description: "Catálogos externos, importação de listas e catálogo unificado.",
    status: "planejado",
    progress: null,
  },
  {
    number: 3,
    title: "Reader e Experiência de Mídia",
    description: "Ler dentro do Chang'e, com os seus próprios arquivos.",
    status: "planejado",
    progress: null,
  },
  {
    number: 4,
    title: "Armazenamento e Sincronização",
    description: "Biblioteca em vários ambientes: local, NAS, nuvem e self-hosted.",
    status: "planejado",
    progress: null,
  },
  {
    number: 5,
    title: "Inteligência e Ecossistema",
    description: "Recomendações explicadas, resumos sem spoiler e recursos sociais.",
    status: "planejado",
    progress: null,
  },
];
