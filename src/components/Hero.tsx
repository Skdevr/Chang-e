import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowRight, Github } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { Eyebrow } from '@/components/ui/Eyebrow'
import { GlowField } from '@/components/ui/GlowField'
import { AppMockup } from '@/components/app/AppMockup'
import { GITHUB_URL } from '@/data/site'
import { fadeUp, stagger } from '@/utils/motion'
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion'

const formats = ['Anime', 'Mangá', 'Manhwa', 'Manhua', 'Webtoon', 'Light novel', 'Web novel']

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null)
  const reduced = usePrefersReducedMotion()
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start start', 'end start'] })
  const mockupY = useTransform(scrollYProgress, [0, 1], [0, reduced ? 0 : -60])
  const mockupOpacity = useTransform(scrollYProgress, [0, 0.85], [1, reduced ? 1 : 0.35])

  return (
    <section
      id="hero"
      ref={sectionRef}
      className="relative flex min-h-[100svh] items-center overflow-hidden pt-28 pb-20 lg:pt-32"
    >
      <GlowField />

      <div className="container-page relative">
        <motion.div
          variants={stagger(0.09, 0.1)}
          initial="hidden"
          animate="show"
          className="grid items-center gap-14 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)] lg:gap-12 xl:gap-16"
        >
          <div className="max-w-2xl">
            <motion.div variants={fadeUp}>
              <Eyebrow>Open source · AGPL-3.0</Eyebrow>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="mt-6 text-[clamp(2.4rem,6.2vw,4.25rem)] font-semibold leading-[1.02]"
            >
              Seu universo de mídias asiáticas{' '}
              <span className="text-gradient">em um único lugar.</span>
            </motion.h1>

            <motion.p variants={fadeUp} className="mt-6 max-w-xl text-[1.0625rem] leading-relaxed text-muted">
              O Chang&rsquo;e é uma plataforma open source, em desenvolvimento, para reunir tudo o que você lê e
              assiste em uma biblioteca só sua: progresso por capítulo e notas ancoradas agora, e estatísticas,
              sincronização e recomendações explicadas nas próximas fases.
            </motion.p>

            <motion.div variants={fadeUp} className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Button as="a" href="#cta" size="lg" className="group">
                Acompanhar o projeto
                <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5" />
              </Button>
              <Button as="a" href={GITHUB_URL} target="_blank" rel="noreferrer" variant="secondary" size="lg">
                <Github className="size-4" />
                Ver no GitHub
              </Button>
            </motion.div>

            <motion.ul variants={fadeUp} className="mt-10 flex flex-wrap items-center gap-x-5 gap-y-2">
              {formats.map((format) => (
                <li key={format} className="font-mono text-[0.6875rem] uppercase tracking-[0.14em] text-faint">
                  {format}
                </li>
              ))}
            </motion.ul>
          </div>

          <motion.div
            variants={fadeUp}
            style={{ y: mockupY, opacity: mockupOpacity }}
            className="relative lg:-mr-6 xl:-mr-16"
          >
            <div className="absolute -inset-8 rounded-[2.5rem] bg-primary/12 blur-3xl" aria-hidden="true" />
            <AppMockup className="relative" />
          </motion.div>
        </motion.div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-base to-transparent" />
    </section>
  )
}
