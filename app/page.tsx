import { HeroSection } from '@/components/hero-section'
import { AboutSection } from '@/components/about-section'

export default function HomePage() {
  return (
    <main className="min-h-screen bg-black">
      <HeroSection />
      <AboutSection />
    </main>
  )
}
