import type { ReactNode } from 'react'
import { motion } from 'framer-motion'
import { cn } from '@/utils/cn'
import { Eyebrow } from '@/components/ui/Eyebrow'
import { fadeUp, stagger, viewportOnce } from '@/utils/motion'

type SectionProps = {
  id: string
  eyebrow?: string
  title?: ReactNode
  description?: ReactNode
  children: ReactNode
  className?: string
  align?: 'left' | 'center'
  headerClassName?: string
}

export function Section({
  id,
  eyebrow,
  title,
  description,
  children,
  className,
  align = 'center',
  headerClassName,
}: SectionProps) {
  const centered = align === 'center'

  return (
    <section id={id} className={cn('relative py-24 md:py-32', className)}>
      <div className="container-page">
        {(eyebrow || title || description) && (
          <motion.header
            variants={stagger(0.1)}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className={cn(
              'flex flex-col gap-5',
              centered ? 'items-center text-center' : 'items-start text-left',
              headerClassName,
            )}
          >
            {eyebrow && (
              <motion.div variants={fadeUp}>
                <Eyebrow>{eyebrow}</Eyebrow>
              </motion.div>
            )}
            {title && (
              <motion.h2
                variants={fadeUp}
                className="max-w-3xl text-[clamp(1.9rem,4.4vw,3.15rem)] font-semibold leading-[1.08]"
              >
                {title}
              </motion.h2>
            )}
            {description && (
              <motion.p
                variants={fadeUp}
                className={cn('max-w-2xl text-[0.975rem] leading-relaxed text-muted md:text-[1.0625rem]')}
              >
                {description}
              </motion.p>
            )}
          </motion.header>
        )}

        <div className={cn(eyebrow || title ? 'mt-14 md:mt-20' : '')}>{children}</div>
      </div>
    </section>
  )
}
