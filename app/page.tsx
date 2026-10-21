import { HeroSection } from '@/components/hero-section'
import { AboutSection } from '@/components/about-section'
import { TokenomicsSocialSection } from '@/components/tokenomics-social-section'
import { RoadmapSection } from '@/components/roadmap-section'
import { FaqSection } from '@/components/faq-section'

export default function HomePage() {
  return (
    <main className="min-h-screen bg-black">
      <HeroSection />
      <AboutSection />
      <RoadmapSection />
      <TokenomicsSocialSection />
      <FaqSection />
    </main>
  )
}



