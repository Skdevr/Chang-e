import { lazy, Suspense } from 'react'
import { Navbar } from '@/components/Navbar'
import { Hero } from '@/components/Hero'
import { Features } from '@/components/Features'
import { Stats } from '@/components/Stats'

const Preview = lazy(() => import('@/components/Preview').then((m) => ({ default: m.Preview })))
const Roadmap = lazy(() => import('@/components/Roadmap').then((m) => ({ default: m.Roadmap })))
const OpenSource = lazy(() => import('@/components/OpenSource').then((m) => ({ default: m.OpenSource })))
const CTA = lazy(() => import('@/components/CTA').then((m) => ({ default: m.CTA })))
const Footer = lazy(() => import('@/components/Footer').then((m) => ({ default: m.Footer })))

function SectionFallback() {
  return <div className="min-h-[40vh]" aria-hidden="true" />
}

export default function App() {
  return (
    <div className="relative min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Stats />
        <Suspense fallback={<SectionFallback />}>
          <Preview />
          <Roadmap />
          <OpenSource />
          <CTA />
        </Suspense>
      </main>
      <Suspense fallback={<SectionFallback />}>
        <Footer />
      </Suspense>
    </div>
  )
}
