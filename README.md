# Chang'e — Landing Page

Landing page oficial do Chang'e. React 19 + Vite 6 + TypeScript + Tailwind CSS 4 + Framer Motion + Lucide.

## Rodar

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # build de produção em dist/
npm run preview  # servir o build
```

## Estrutura

```
src/
├── components/
│   ├── ui/            Button, Logo, Eyebrow, MoonPhase, GlowField
│   ├── app/           AppMockup, CoverTile, PreviewScreens
│   ├── Navbar.tsx     Hero.tsx      Features.tsx   FeatureCard.tsx
│   ├── Stats.tsx      Preview.tsx   Roadmap.tsx    OpenSource.tsx
│   └── CTA.tsx        Footer.tsx
├── layouts/Section.tsx
├── hooks/             useScrolled, useCountUp, usePrefersReducedMotion
├── utils/             cn, motion (variants), cover (capas geradas)
├── data/site.ts       Todo o conteúdo em um único lugar
├── styles/globals.css Tokens do design system (@theme do Tailwind 4)
├── App.tsx  main.tsx
```

## Decisões de design

**Elemento-assinatura: a fase da lua como barra de progresso.** Chang'e é a deusa da lua, e o produto mede
progresso o tempo todo (capítulos lidos, episódios assistidos, fases do roadmap). O componente `MoonPhase`
transforma um número de 0 a 1 em uma lua parcialmente iluminada e reaparece em quatro contextos: nas capas da
biblioteca, no painel "continuar de onde parou", nos nós da timeline do roadmap e no CTA final. É o único
ornamento que se repete — todo o resto é contido.

**Tipografia.** Sora para display (geométrica, com um leve tom aeroespacial), Inter para corpo, JetBrains Mono
para eyebrows, rótulos de dados e números. O mono é o que traz a personalidade de IDE/dashboard pedida no
briefing sem cair em estética "site de anime".

**Numeração.** O roadmap usa `Fase 01/02/03` porque ali a ordem carrega informação real (uma fase depende da
anterior). As funcionalidades **não** são numeradas — não há sequência entre elas.

**Zero imagens.** Todas as capas são geradas por CSS a partir de um hash do título (`utils/cover.ts`), com matiz
restrita a 212°–272° para manter a paleta coesa. As três telas de preview são componentes React reais.

## Acessibilidade e performance

- Skip link, `focus-visible` em todos os alvos, `aria-label` em ícones e regiões
- `prefers-reduced-motion` respeitado no CSS e nos hooks (parallax, contadores, partículas)
- Code splitting: Preview, Roadmap, OpenSource, CTA e Footer carregam sob demanda
- Meta tags completas, Open Graph, Twitter Card, JSON-LD `SoftwareApplication`, manifest e robots.txt
- CSS final: ~8.7 kB gzip

## Conteúdo

Textos, números e obras de exemplo ficam em `src/data/site.ts`. Os títulos da biblioteca são fictícios, então
podem ser trocados por dados reais sem tocar em nenhum componente. `GITHUB_URL` e `DISCORD_URL` também estão lá.
