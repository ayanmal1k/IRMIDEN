import { Navbar } from '@/components/navbar'
import { HeroSection } from '@/components/hero-section'
import { AboutSection } from '@/components/about-section'
import { RoadmapSection } from '@/components/roadmap-section'
import { TokenomicsSocialSection } from '@/components/tokenomics-social-section'
import { FaqSection } from '@/components/faq-section'
import { FooterSection } from '@/components/footer-section'

export default function HomePage() {
  return (
    <main className="min-h-screen bg-black">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <RoadmapSection />
      <TokenomicsSocialSection />
      <FaqSection />
      <FooterSection />
    </main>
  )
}



