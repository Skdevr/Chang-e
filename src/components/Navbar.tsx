import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowUpRight, Menu, X } from 'lucide-react'
import { cn } from '@/utils/cn'
import { Logo } from '@/components/ui/Logo'
import { Button } from '@/components/ui/Button'
import { useScrolled } from '@/hooks/useScrolled'
import { GITHUB_URL, navLinks } from '@/data/site'
import { easeOutQuint } from '@/utils/motion'

export function Navbar() {
  const scrolled = useScrolled(16)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <>
      <a
        href="#hero"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-100 focus:rounded-lg focus:bg-surface focus:px-4 focus:py-2 focus:text-sm"
      >
        Pular para o conteúdo
      </a>

      <header
        className={cn(
          'fixed inset-x-0 top-0 z-50 transition-all duration-300 ease-[var(--ease-out-quint)]',
          scrolled ? 'border-b border-line/80 glass' : 'border-b border-transparent',
        )}
      >
        <nav className="container-page flex h-16 items-center justify-between gap-4" aria-label="Principal">
          <a href="#hero" className="rounded-lg" aria-label="Chang'e — início">
            <Logo />
          </a>

          <ul className="hidden items-center gap-1 lg:flex">
            {navLinks.map((link) => {
              const external = link.href.startsWith('http')
              return (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target={external ? '_blank' : undefined}
                    rel={external ? 'noreferrer' : undefined}
                    className="inline-flex items-center gap-1 rounded-lg px-3 py-2 text-[0.8125rem] text-muted transition-colors duration-200 hover:text-ink"
                  >
                    {link.label}
                    {external && <ArrowUpRight className="size-3 opacity-60" aria-hidden="true" />}
                  </a>
                </li>
              )
            })}
          </ul>

          <div className="hidden items-center gap-2 lg:flex">
            <Button as="a" href="#cta" variant="ghost" size="sm">
              Entrar
            </Button>
            <Button as="a" href="#cta" size="sm">
              Começar gratuitamente
            </Button>
          </div>

          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            className="grid size-10 place-items-center rounded-xl border border-line text-muted transition-colors hover:text-ink lg:hidden"
            aria-expanded={open}
            aria-controls="menu-mobile"
            aria-label={open ? 'Fechar menu' : 'Abrir menu'}
          >
            {open ? <X className="size-4.5" /> : <Menu className="size-4.5" />}
          </button>
        </nav>

        <AnimatePresence>
          {open && (
            <motion.div
              id="menu-mobile"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.35, ease: easeOutQuint }}
              className="overflow-hidden border-t border-line glass lg:hidden"
            >
              <ul className="container-page flex flex-col gap-1 py-4">
                {navLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      onClick={() => setOpen(false)}
                      target={link.href.startsWith('http') ? '_blank' : undefined}
                      rel={link.href.startsWith('http') ? 'noreferrer' : undefined}
                      className="block rounded-lg px-2 py-3 text-[0.9375rem] text-muted transition-colors hover:text-ink"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
              <div className="container-page flex flex-col gap-2 pb-6">
                <Button as="a" href={GITHUB_URL} target="_blank" rel="noreferrer" variant="secondary" size="lg">
                  Entrar
                </Button>
                <Button as="a" href="#cta" size="lg" onClick={() => setOpen(false)}>
                  Começar gratuitamente
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  )
}
