import { motion } from 'framer-motion'
import { Section } from '@/layouts/Section'
import { FeatureCard } from './FeatureCard'
import { features } from '@/data/site'
import { stagger, viewportOnce } from '@/utils/motion'

export function Features() {
  return (
    <Section
      id="funcionalidades"
      eyebrow="Funcionalidades"
      title={<>Tudo o que uma estante deveria fazer — e nada além disso.</>}
      description="Cada recurso existe para responder a uma pergunta concreta: o que eu estava lendo, onde parei, o que vem depois e o que eu achei disso."
    >
      <motion.div
        variants={stagger(0.06)}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        className="grid gap-4 md:grid-cols-2 lg:grid-cols-3"
      >
        {features.map((feature) => (
          <FeatureCard key={feature.title} feature={feature} />
        ))}
      </motion.div>
    </Section>
  )
}
