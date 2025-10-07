import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"

const projects = {
  "brand-identity-studio": {
    title: "Brand Identity Studio",
    category: "Branding",
    year: "2024",
    client: "Creative Studio Co.",
    role: "Lead Designer",
    duration: "3 months",
    hero: "/minimal-brand-identity-design-studio-workspace-her.jpg",
    overview:
      "A comprehensive brand identity system designed for a boutique creative studio. The project encompassed logo design, typography, color palette, and brand guidelines to establish a cohesive visual language that reflects the studio's commitment to thoughtful, human-centered design.",
    challenge:
      "The studio needed a brand identity that would resonate with discerning clients while standing out in a crowded creative market. The challenge was to create something timeless yet contemporary, sophisticated yet approachable.",
    solution:
      "We developed a minimal identity system built on principles of clarity and restraint. The wordmark uses a custom typeface with subtle geometric refinements, paired with a muted color palette that emphasizes quality and craftsmanship. The system is flexible enough to work across digital and print applications while maintaining strong brand recognition.",
    results: [
      "40% increase in qualified client inquiries",
      "Featured in 3 major design publications",
      "Successful rollout across all touchpoints",
    ],
    images: [
      "/brand-identity-logo-variations.jpg",
      "/brand-identity-palette-typography.png",
      "/brand-identity-business-cards-and-stationery.jpg",
      "/brand-identity-website-mockup.jpg",
    ],
  },
  "digital-wellness-app": {
    title: "Digital Wellness App",
    category: "Product Design",
    year: "2024",
    client: "Mindful Tech Inc.",
    role: "Product Designer",
    duration: "4 months",
    hero: "/minimal-wellness-app-interface-design-hero.jpg",
    overview:
      "A mobile application designed to help users develop healthier relationships with technology. The app provides insights into screen time, encourages mindful breaks, and offers guided exercises for digital detox.",
    challenge:
      "Creating an app about reducing screen time presents an inherent paradox. How do we design a digital product that encourages less digital engagement? The interface needed to be calming, non-addictive, and genuinely helpful.",
    solution:
      "We designed a minimal interface with generous white space and calming colors. The app uses gentle notifications rather than aggressive alerts, and features a unique 'sunset mode' that gradually reduces functionality as bedtime approaches. All interactions are designed to be quick and purposeful.",
    results: [
      "4.8 star rating on App Store",
      "Users report 30% reduction in screen time",
      "Featured by Apple in 'Apps We Love'",
    ],
    images: [
      "/wellness-app-home-screen-interface.jpg",
      "/wellness-app-statistics-and-insights.jpg",
      "/wellness-app-meditation-timer.jpg",
      "/wellness-app-settings-and-customization.jpg",
    ],
  },
  "sustainable-fashion": {
    title: "Sustainable Fashion",
    category: "Web Design",
    year: "2023",
    client: "Ethical Threads",
    role: "Creative Director",
    duration: "5 months",
    hero: "/elegant-sustainable-fashion-website-hero.jpg",
    overview:
      "An e-commerce platform for a sustainable fashion brand committed to ethical production and transparent supply chains. The website needed to communicate the brand's values while providing a seamless shopping experience.",
    challenge:
      "Sustainable fashion often struggles with perception issues around style and desirability. The challenge was to create a premium shopping experience that emphasizes both ethics and aesthetics.",
    solution:
      "We designed a clean, editorial-style website that treats each product as a story worth telling. Large imagery showcases the craftsmanship, while detailed product pages explain the materials, production process, and environmental impact. The checkout experience is streamlined and trustworthy.",
    results: [
      "60% increase in conversion rate",
      "Average session duration increased by 2 minutes",
      "Won Awwwards Site of the Day",
    ],
    images: [
      "/placeholder.svg?height=800&width=1200",
      "/placeholder.svg?height=800&width=1200",
      "/placeholder.svg?height=800&width=1200",
      "/placeholder.svg?height=800&width=1200",
    ],
  },
  "architecture-portfolio": {
    title: "Architecture Portfolio",
    category: "Editorial",
    year: "2023",
    client: "Studio Architecture",
    role: "Art Director",
    duration: "2 months",
    hero: "/placeholder.svg?height=1000&width=1600",
    overview:
      "A comprehensive portfolio system for an award-winning architecture firm, including both a printed book and digital platform. The design needed to showcase their work with the same attention to detail they bring to their buildings.",
    challenge:
      "Architecture portfolios often become overwhelming catalogs. The challenge was to create a narrative structure that guides viewers through the work while allowing the projects to speak for themselves.",
    solution:
      "We developed a grid-based layout system that provides structure without rigidity. Each project is introduced with a full-bleed image and minimal text, followed by detailed documentation. The typography is restrained, using a single typeface family to maintain focus on the architecture.",
    results: [
      "Portfolio led to 5 major project commissions",
      "Featured in Architectural Digest",
      "Digital version has 50k+ views",
    ],
    images: [
      "/placeholder.svg?height=800&width=1200",
      "/placeholder.svg?height=800&width=1200",
      "/placeholder.svg?height=800&width=1200",
      "/placeholder.svg?height=800&width=1200",
    ],
  },
  "meditation-experience": {
    title: "Meditation Experience",
    category: "UX Design",
    year: "2023",
    client: "Calm Collective",
    role: "UX/UI Designer",
    duration: "3 months",
    hero: "/placeholder.svg?height=1000&width=1600",
    overview:
      "An immersive digital meditation platform that combines guided sessions with ambient soundscapes and visual experiences. The project focused on creating a truly calming digital environment.",
    challenge:
      "Most meditation apps feel clinical or overly spiritual. The challenge was to create an experience that feels genuine, accessible, and actually helps users achieve a meditative state.",
    solution:
      "We designed a multi-sensory experience that engages sight, sound, and touch. The interface uses slow, deliberate animations and a carefully crafted color palette that shifts based on time of day. Haptic feedback provides gentle guidance without being intrusive.",
    results: [
      "Users complete 70% more sessions than industry average",
      "4.9 star rating with 10k+ reviews",
      "Partnerships with 3 major wellness brands",
    ],
    images: [
      "/placeholder.svg?height=800&width=1200",
      "/placeholder.svg?height=800&width=1200",
      "/placeholder.svg?height=800&width=1200",
      "/placeholder.svg?height=800&width=1200",
    ],
  },
  "artisan-marketplace": {
    title: "Artisan Marketplace",
    category: "Platform Design",
    year: "2022",
    client: "Local Makers Co.",
    role: "Lead Product Designer",
    duration: "6 months",
    hero: "/placeholder.svg?height=1000&width=1600",
    overview:
      "A digital marketplace connecting local artisans with conscious consumers. The platform needed to work for both makers (selling their products) and buyers (discovering unique items).",
    challenge:
      "Creating a two-sided marketplace that serves both artisans and customers equally well. The platform needed to be easy for makers to use while providing buyers with a curated, trustworthy shopping experience.",
    solution:
      "We designed separate but connected experiences for makers and buyers. The maker dashboard is straightforward and efficient, while the buyer experience emphasizes discovery and storytelling. Each product listing includes the maker's story, creating emotional connections.",
    results: [
      "200+ artisans onboarded in first 3 months",
      "Average order value 40% higher than competitors",
      "85% customer satisfaction rating",
    ],
    images: [
      "/placeholder.svg?height=800&width=1200",
      "/placeholder.svg?height=800&width=1200",
      "/placeholder.svg?height=800&width=1200",
      "/placeholder.svg?height=800&width=1200",
    ],
  },
}

export function generateStaticParams() {
  return Object.keys(projects).map((slug) => ({
    slug,
  }))
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = projects[params.slug as keyof typeof projects]

  if (!project) {
    notFound()
  }

  return (
    <main className="min-h-screen pt-20">
      {/* Back Button */}
      <div className="px-6 lg:px-12 py-8">
        <Link href="/#work">
          <Button variant="ghost" className="group">
            <ArrowLeft className="h-4 w-4 mr-2 transition-transform group-hover:-translate-x-1" />
            Back to Work
          </Button>
        </Link>
      </div>

      {/* Hero Image */}
      <div className="relative aspect-[16/9] md:aspect-[21/9] w-full mb-16 md:mb-24">
        <Image src={project.hero || "/placeholder.svg"} alt={project.title} fill className="object-cover" priority />
      </div>

      {/* Project Header */}
      <div className="px-6 lg:px-12 mb-16 md:mb-24">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-12 md:gap-16">
            <div className="md:col-span-2 space-y-6">
              <div className="space-y-4">
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-light tracking-tight">{project.title}</h1>
                <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">{project.overview}</p>
              </div>
            </div>
            <div className="space-y-6 text-sm">
              <div>
                <div className="text-muted-foreground mb-1">Category</div>
                <div className="font-medium">{project.category}</div>
              </div>
              <div>
                <div className="text-muted-foreground mb-1">Year</div>
                <div className="font-medium">{project.year}</div>
              </div>
              <div>
                <div className="text-muted-foreground mb-1">Client</div>
                <div className="font-medium">{project.client}</div>
              </div>
              <div>
                <div className="text-muted-foreground mb-1">Role</div>
                <div className="font-medium">{project.role}</div>
              </div>
              <div>
                <div className="text-muted-foreground mb-1">Duration</div>
                <div className="font-medium">{project.duration}</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Challenge & Solution */}
      <div className="px-6 lg:px-12 mb-16 md:mb-24 bg-secondary/30 py-16 md:py-24">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-light tracking-tight">The Challenge</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">{project.challenge}</p>
          </div>
          <div className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-light tracking-tight">The Solution</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">{project.solution}</p>
          </div>
        </div>
      </div>

      {/* Project Images */}
      <div className="px-6 lg:px-12 mb-16 md:mb-24">
        <div className="max-w-6xl mx-auto space-y-8 md:space-y-12">
          {project.images.map((image, index) => (
            <div key={index} className="relative aspect-[4/3] w-full rounded-sm overflow-hidden bg-secondary/50">
              <Image
                src={image || "/placeholder.svg"}
                alt={`${project.title} - Image ${index + 1}`}
                fill
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Results */}
      <div className="px-6 lg:px-12 mb-24 md:mb-32">
        <div className="max-w-4xl mx-auto space-y-8">
          <h2 className="text-2xl md:text-3xl font-light tracking-tight">Results</h2>
          <ul className="space-y-4">
            {project.results.map((result, index) => (
              <li key={index} className="flex items-start gap-4">
                <span className="text-accent font-mono text-sm mt-1">→</span>
                <span className="text-lg text-muted-foreground leading-relaxed">{result}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Next Project CTA */}
      <div className="px-6 lg:px-12 py-16 md:py-24 bg-secondary/30">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-light tracking-tight">Explore More Work</h2>
          <Link href="/#work">
            <Button size="lg" className="mt-4">
              View All Projects
            </Button>
          </Link>
        </div>
      </div>
    </main>
  )
}
