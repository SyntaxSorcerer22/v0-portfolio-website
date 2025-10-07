"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"

const projects = [
  {
    id: "brand-identity-studio",
    title: "Brand Identity Studio",
    category: "Branding",
    year: "2024",
    image: "/minimal-brand-identity-design-studio-workspace.jpg",
    description: "Complete brand identity system for a creative studio",
  },
  {
    id: "digital-wellness-app",
    title: "Digital Wellness App",
    category: "Product Design",
    year: "2024",
    image: "/minimal-wellness-app-interface-design.jpg",
    description: "Mobile app promoting mindful technology use",
  },
  {
    id: "sustainable-fashion",
    title: "Sustainable Fashion",
    category: "Web Design",
    year: "2023",
    image: "/elegant-sustainable-fashion-website.jpg",
    description: "E-commerce platform for ethical fashion brand",
  },
  {
    id: "architecture-portfolio",
    title: "Architecture Portfolio",
    category: "Editorial",
    year: "2023",
    image: "/minimal-architecture-portfolio-layout.jpg",
    description: "Print and digital portfolio for architecture firm",
  },
  {
    id: "meditation-experience",
    title: "Meditation Experience",
    category: "UX Design",
    year: "2023",
    image: "/calm-meditation-app-interface.jpg",
    description: "Immersive digital meditation platform",
  },
  {
    id: "artisan-marketplace",
    title: "Artisan Marketplace",
    category: "Platform Design",
    year: "2022",
    image: "/elegant-artisan-marketplace-website.jpg",
    description: "Connecting local artisans with conscious consumers",
  },
]

export function WorkSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="work" ref={sectionRef} className="py-32 md:py-40 lg:py-48 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <div className={`mb-20 md:mb-28 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-light tracking-[0.08em] mb-8">Selected Work</h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed">
            A collection of projects exploring the intersection of design, technology, and human experience
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 md:gap-16 lg:gap-20">
          {projects.map((project, index) => (
            <Link
              key={project.id}
              href={`/work/${project.id}`}
              className={`group ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="space-y-6">
                <div className="relative aspect-[3/2] overflow-hidden bg-secondary/50 rounded-sm">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="space-y-3">
                  <h3 className="text-2xl md:text-3xl font-light tracking-tight group-hover:text-accent transition-colors">
                    {project.title}
                  </h3>
                  <div className="flex items-center gap-3 text-sm text-muted-foreground">
                    <span>{project.category}</span>
                    <span>•</span>
                    <span>{project.year}</span>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">{project.description}</p>
                  <div className="flex items-center gap-2 text-sm font-light text-foreground group-hover:text-accent transition-colors pt-2">
                    <span>Discover</span>
                    <ArrowRight className="h-4 w-4" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
