import { motion } from 'framer-motion'
import { ArrowRight, Github } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { MoonPhase } from '@/components/ui/MoonPhase'
import { GITHUB_URL} from '@/data/site'
import { fadeUp, stagger, viewportOnce } from '@/utils/motion'

const phases = [0, 0.2, 0.4, 0.6, 0.8, 1]

export function CTA() {
  return (
    <section id="cta" className="relative py-24 md:py-32">
      <div className="container-page">
        <motion.div
          variants={stagger(0.1)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="relative overflow-hidden rounded-3xl border border-line bg-card/50 px-6 py-16 text-center md:px-16 md:py-24"
        >
          <div className="pointer-events-none absolute inset-0" aria-hidden="true">
            <div className="absolute inset-0 grid-field mask-fade-b opacity-40" />
            <div className="absolute -top-40 left-1/2 size-[34rem] -translate-x-1/2 rounded-full bg-primary/22 blur-[130px]" />
          </div>

          <motion.div variants={fadeUp} className="relative flex justify-center gap-3" aria-hidden="true">
            {phases.map((phase) => (
              <MoonPhase key={phase} progress={phase} size={22} className="text-white/20" />
            ))}
          </motion.div>

          <motion.h2
            variants={fadeUp}
            className="relative mx-auto mt-8 max-w-3xl text-[clamp(2rem,5vw,3.4rem)] font-semibold leading-[1.06]"
          >
            Acompanhe a construção da sua estante — <span className="text-gradient">e nunca mais perca o fio.</span>
          </motion.h2>

          <motion.p variants={fadeUp} className="relative mx-auto mt-5 max-w-xl text-[1.0625rem] leading-relaxed text-muted">
            O Chang&rsquo;e ainda está em desenvolvimento. Siga o roadmap, acompanhe as issues no GitHub ou contribua:
            a importação de listas do MyAnimeList, do AniList e do Mihon está planejada.
          </motion.p>

          <motion.div variants={fadeUp} className="relative mt-10 flex flex-col justify-center gap-3 sm:flex-row">
            <Button as="a" href="#roadmap" size="lg" className="group">
              Ver o roadmap
              <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5" />
            </Button>
            <Button as="a" href={GITHUB_URL} target="_blank" rel="noreferrer" variant="secondary" size="lg">
              <Github className="size-4" />
              Acompanhar no GitHub
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
