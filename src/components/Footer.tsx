import { ArrowUpRight, Github } from 'lucide-react'
import { Logo } from '@/components/ui/Logo'
import { GITHUB_URL } from '@/data/site'

const columns = [
  {
    title: 'Produto',
    links: [
      { label: 'Funcionalidades', href: '#funcionalidades' },
      { label: 'Interface', href: '#preview' },
      { label: 'Roadmap', href: '#roadmap' },
      { label: 'Acompanhar o projeto', href: '#cta' },
    ],
  },
  {
    title: 'Projeto',
    links: [
      { label: 'Repositório', href: GITHUB_URL },
      { label: 'Contribuir', href: `${GITHUB_URL}#-contribuições` },
      { label: 'Issues abertas', href: `${GITHUB_URL}/issues` },
      { label: 'Licença AGPL-3.0', href: `${GITHUB_URL}/blob/main/LICENSE` },
    ],
  },
  {
    title: 'Comunidade',
    links: [
      { label: 'Reportar um bug', href: `${GITHUB_URL}/issues/new` },
      { label: 'Sugerir uma ideia', href: `${GITHUB_URL}/issues/new` },
    ],
  },
]

export function Footer() {
  return (
    <footer className="relative border-t border-line py-14">
      <div className="container-page">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_2fr]">
          <div className="max-w-sm space-y-5">
            <Logo />
            <p className="text-[0.875rem] leading-relaxed text-muted">
              Uma biblioteca só sua para anime, mangá, manhwa, manhua, webtoons e novels. Open source e em
              desenvolvimento, aberto a contribuições.
            </p>
            <div className="flex gap-2">
              <a
                href={GITHUB_URL}
                target="_blank"
                rel="noreferrer"
                className="grid size-9 place-items-center rounded-xl border border-line text-muted transition-colors hover:border-white/15 hover:text-ink"
                aria-label="Repositório no GitHub"
              >
                <Github className="size-4" />
              </a>
            </div>
          </div>

          <nav className="grid gap-8 sm:grid-cols-3" aria-label="Rodapé">
            {columns.map((column) => (
              <div key={column.title}>
                <h3 className="font-mono text-[0.625rem] uppercase tracking-[0.18em] text-faint">{column.title}</h3>
                <ul className="mt-4 space-y-2.5">
                  {column.links.map((link) => {
                    const external = link.href.startsWith('http')
                    return (
                      <li key={link.label}>
                        <a
                          href={link.href}
                          target={external ? '_blank' : undefined}
                          rel={external ? 'noreferrer' : undefined}
                          className="inline-flex items-center gap-1 text-[0.8125rem] text-muted transition-colors hover:text-ink"
                        >
                          {link.label}
                          {external && <ArrowUpRight className="size-3 opacity-50" aria-hidden="true" />}
                        </a>
                      </li>
                    )
                  })}
                </ul>
              </div>
            ))}
          </nav>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-3 border-t border-line pt-6 sm:flex-row sm:items-center">
          <p className="font-mono text-[0.6875rem] text-faint">
            © {new Date().getFullYear()} Chang&rsquo;e · Licença AGPL-3.0
          </p>
          <p className="font-mono text-[0.6875rem] text-faint">
            Feito por quem também esquece em que capítulo parou.
          </p>
        </div>
      </div>
    </footer>
  )
}
