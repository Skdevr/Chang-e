import { motion } from 'framer-motion'
import { ArrowUpRight, GitFork, Scale, Server, ShieldCheck } from 'lucide-react'
import { Section } from '@/layouts/Section'
import { Button } from '@/components/ui/Button'
import { GITHUB_URL, stack } from '@/data/site'
import { fadeUp, stagger, viewportOnce } from '@/utils/motion'

const guarantees = [
  {
    icon: ShieldCheck,
    title: 'Seus dados são seus',
    description: 'Exportação completa em JSON a qualquer momento. Sem venda de dados, sem rastreadores de terceiros.',
  },
  {
    icon: Server,
    title: 'Rode no seu servidor',
    description: 'Um docker compose up sobe a stack inteira: API, banco, cache e interface.',
  },
  {
    icon: Scale,
    title: 'Licença AGPL-3.0',
    description: 'Qualquer versão hospedada precisa devolver o código à comunidade. A garantia vale também para nós.',
  },
]

export function OpenSource() {
  return (
    <Section
      id="open-source"
      eyebrow="Open Source"
      title={<>O código inteiro está aberto — inclusive o que roda em produção.</>}
      description="Chang’e é desenvolvido em público. Você pode auditar, hospedar, adaptar ou contribuir. A mesma base que serve a versão hospedada é a que você baixa."
    >
      <motion.div
        variants={stagger(0.08)}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        className="grid gap-4 lg:grid-cols-[1.15fr_1fr]"
      >
        <motion.div
          variants={fadeUp}
          className="relative overflow-hidden rounded-2xl border border-line bg-card/55 p-6 md:p-8"
        >
          <div className="pointer-events-none absolute inset-0 grid-field opacity-30" aria-hidden="true" />
          <div className="relative">
            <p className="font-mono text-[0.6875rem] uppercase tracking-[0.18em] text-faint">Stack</p>
            <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4">
              {stack.map((item) => (
                <div
                  key={item.name}
                  className="rounded-xl border border-line bg-base/60 p-3 transition-colors duration-300 hover:border-white/12"
                >
                  <span className="font-mono text-[0.8125rem] text-primary-soft">{item.glyph}</span>
                  <p className="mt-2 text-[0.8125rem] font-medium">{item.name}</p>
                  <p className="mt-0.5 text-[0.6875rem] leading-snug text-faint">{item.role}</p>
                </div>
              ))}
            </div>

            <div className="mt-7 overflow-hidden rounded-xl border border-line bg-base/80">
              <div className="flex items-center gap-2 border-b border-line px-3.5 py-2">
                <GitFork className="size-3 text-faint" aria-hidden="true" />
                <span className="font-mono text-[0.625rem] text-faint">bash — subir localmente</span>
              </div>
              <pre className="overflow-x-auto px-3.5 py-3 font-mono text-[0.6875rem] leading-relaxed text-muted">
<span className="text-faint">$</span> git clone https://github.com/change-app/change{'\n'}
<span className="text-faint">$</span> cd change && cp .env.example .env{'\n'}
<span className="text-faint">$</span> docker compose up -d{'\n'}
<span className="text-secondary">✓</span> chang&rsquo;e disponível em http://localhost:8080
              </pre>
            </div>

            <Button
              as="a"
              href={GITHUB_URL}
              target="_blank"
              rel="noreferrer"
              variant="secondary"
              size="lg"
              className="mt-6 group"
            >
              Abrir o repositório
              <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Button>
          </div>
        </motion.div>

        <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
          {guarantees.map((item) => (
            <motion.article
              key={item.title}
              variants={fadeUp}
              className="rounded-2xl border border-line bg-card/55 p-6"
            >
              <span className="grid size-10 place-items-center rounded-xl border border-line bg-surface text-secondary">
                <item.icon className="size-4.5" aria-hidden="true" />
              </span>
              <h3 className="mt-4 text-[0.9375rem] font-semibold">{item.title}</h3>
              <p className="mt-2 text-[0.875rem] leading-relaxed text-muted">{item.description}</p>
            </motion.article>
          ))}
        </div>
      </motion.div>
    </Section>
  )
}
