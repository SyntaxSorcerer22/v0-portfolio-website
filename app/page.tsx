import { HeroSection } from "@/components/hero-section"
import { ManifestoSection } from "@/components/manifesto-section"
import { TimelineSection } from "@/components/timeline-section"
import { WorkSection } from "@/components/work-section"
import { ContactSection } from "@/components/contact-section"

export default function HomePage() {
  return (
    <main className="min-h-screen bg-black">
      <HeroSection />
      <ManifestoSection />
      <TimelineSection />
      <WorkSection />
      <ContactSection />
    </main>
  )
}
