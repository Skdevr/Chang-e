import { motion } from 'framer-motion'
import { Section } from '@/layouts/Section'
import { DesktopScreen, MobileScreen, TabletScreen } from '@/components/app/PreviewScreens'
import { fadeUp, scaleIn, stagger, viewportOnce } from '@/utils/motion'

function DeviceLabel({ children }: { children: string }) {
  return (
    <span className="font-mono text-[0.625rem] uppercase tracking-[0.18em] text-faint">{children}</span>
  )
}

export function Preview() {
  return (
    <Section
      id="preview"
      eyebrow="Interface"
      title={<>A mesma biblioteca, no formato de cada tela.</>}
      description="Protótipo da interface prevista: no desktop você compara, no tablet você organiza, no celular você lê. As telas são conceito e podem mudar durante o desenvolvimento."
    >
      <motion.div
        variants={stagger(0.12)}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        className="grid items-end gap-8 lg:grid-cols-[1.9fr_1fr] lg:gap-6"
      >
        <motion.figure variants={scaleIn} className="space-y-3">
          <div className="relative overflow-hidden rounded-2xl border border-line bg-card/40 p-2 shadow-[0_40px_100px_-40px_rgba(0,0,0,0.9)]">
            <div className="flex items-center gap-1.5 px-2 pb-2 pt-1" aria-hidden="true">
              <span className="size-2 rounded-full bg-white/10" />
              <span className="size-2 rounded-full bg-white/10" />
              <span className="size-2 rounded-full bg-white/10" />
            </div>
            <div className="overflow-hidden rounded-xl border border-line">
              <DesktopScreen className="min-h-[26rem]" />
            </div>
          </div>
          <figcaption className="flex items-center justify-between">
            <DeviceLabel>Desktop · 1440 px</DeviceLabel>
            <DeviceLabel>Painel de estatísticas</DeviceLabel>
          </figcaption>
        </motion.figure>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-1">
          <motion.figure variants={fadeUp} className="space-y-3">
            <div className="overflow-hidden rounded-2xl border border-line bg-card/40 p-2 shadow-[0_30px_80px_-40px_rgba(0,0,0,0.9)]">
              <div className="overflow-hidden rounded-xl border border-line">
                <TabletScreen className="min-h-[19rem]" />
              </div>
            </div>
            <figcaption>
              <DeviceLabel>Tablet · 834 px</DeviceLabel>
            </figcaption>
          </motion.figure>

          <motion.figure variants={fadeUp} className="space-y-3">
            <div className="mx-auto w-[13.5rem] overflow-hidden rounded-[1.75rem] border border-line bg-card/40 p-1.5 shadow-[0_30px_80px_-40px_rgba(0,0,0,0.9)]">
              <div className="relative overflow-hidden rounded-[1.4rem] border border-line">
                <span
                  className="absolute left-1/2 top-1.5 z-10 h-1 w-10 -translate-x-1/2 rounded-full bg-white/15"
                  aria-hidden="true"
                />
                <MobileScreen className="min-h-[23rem]" />
              </div>
            </div>
            <figcaption className="text-center">
              <DeviceLabel>Mobile · 390 px</DeviceLabel>
            </figcaption>
          </motion.figure>
        </div>
      </motion.div>
    </Section>
  )
}
