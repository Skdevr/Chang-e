import { motion } from 'framer-motion'
import { ArrowUpRight, GitFork, Scale, Server, ShieldCheck } from 'lucide-react'
import { Section } from '@/layouts/Section'
import { Button } from '@/components/ui/Button'
import { StatusBadge } from '@/components/StatusBadge'
import { GITHUB_URL, stack, stackEvaluating } from '@/data/site'
import type { Status } from '@/data/status'
import { fadeUp, stagger, viewportOnce } from '@/utils/motion'

const guarantees: { icon: typeof ShieldCheck; title: string; description: string; status?: Status }[] = [
  {
    icon: ShieldCheck,
    title: 'Seus dados são seus',
    description: 'Exportação completa em JSON a qualquer momento.',
    status: 'planejado',
  },
  {
    icon: Server,
    title: 'Rode no seu servidor',
    description: 'Implantação própria com docker compose, em servidor local ou NAS.',
    status: 'planejado',
  },
  {
    icon: Scale,
    title: 'Licença AGPL-3.0',
    description:
      'Versões modificadas disponibilizadas como serviço pela rede precisam oferecer o código-fonte aos usuários. A garantia vale também para nós.',
  },
]

export function OpenSource() {
  return (
    <Section
      id="open-source"
      eyebrow="Open Source"
      title={<>Código aberto, desenvolvido em público desde o começo.</>}
      description="Chang’e é desenvolvido em público, sob a licença AGPL-3.0. Você pode acompanhar, auditar, adaptar ou contribuir. O que está pronto e o que ainda é plano aparece marcado em cada seção."
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
            <p className="mt-4 text-[0.75rem] leading-relaxed text-faint">Em avaliação: {stackEvaluating}.</p>

            <div className="mt-7 overflow-hidden rounded-xl border border-line bg-base/80">
              <div className="flex items-center gap-2 border-b border-line px-3.5 py-2">
                <GitFork className="size-3 text-faint" aria-hidden="true" />
                <span className="font-mono text-[0.625rem] text-faint">bash — rodar a landing localmente</span>
              </div>
              <pre className="overflow-x-auto px-3.5 py-3 font-mono text-[0.6875rem] leading-relaxed text-muted">
<span className="text-faint">$</span> git clone {GITHUB_URL}{'\n'}
<span className="text-faint">$</span> cd Chang-e && npm install{'\n'}
<span className="text-faint">$</span> npm run dev{'\n'}
<span className="text-secondary">✓</span> landing disponível em http://localhost:5173
              </pre>
            </div>
            <p className="mt-3 flex flex-wrap items-center gap-2 text-[0.75rem] text-faint">
              Implantação completa da plataforma com docker compose
              <StatusBadge status="planejado" />
            </p>

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
              <h3 className="mt-4 flex flex-wrap items-center gap-2 text-[0.9375rem] font-semibold">
                {item.title}
                {item.status && <StatusBadge status={item.status} />}
              </h3>
              <p className="mt-2 text-[0.875rem] leading-relaxed text-muted">{item.description}</p>
            </motion.article>
          ))}
        </div>
      </motion.div>
    </Section>
  )
}
