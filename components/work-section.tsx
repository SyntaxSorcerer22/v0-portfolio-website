"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"

const projects = [
  {
    id: "document-routing-system",
    title: "Document Routing System",
    category: "Full Stack Development",
    year: "2024-2025",
    image: "/project-document-routing.jpg",
    description: "Web-based system for PSA to streamline document workflows",
  },
  {
    id: "inventory-management",
    title: "Inventory Management System",
    category: "Full Stack Development",
    year: "2024-2025",
    image: "/project-inventory-management.jpg",
    description: "Complete CRUD system with real-time inventory tracking",
  },
  {
    id: "budget-wise",
    title: "Budget-Wise Application",
    category: "Full Stack Development",
    year: "2024-2025",
    image: "/project-budget-wise.jpg",
    description: "Financial tracking app with interactive charts",
  },
]

export function WorkSection() {
  const [visibleItems, setVisibleItems] = useState<number[]>([])
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const sectionRef = useRef<HTMLElement>(null)
  const headerRef = useRef<HTMLDivElement>(null)
  const itemRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target === headerRef.current) {
              setVisibleItems((prev) => (prev.includes(-1) ? prev : [-1, ...prev]))
            } else {
              const index = itemRefs.current.indexOf(entry.target as HTMLDivElement)
              if (index !== -1 && !visibleItems.includes(index)) {
                setVisibleItems((prev) => [...prev, index])
              }
            }
          }
        })
      },
      { threshold: 0.2 },
    )

    if (headerRef.current) observer.observe(headerRef.current)
    itemRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref)
    })

    return () => observer.disconnect()
  }, [visibleItems])

  return (
    <section id="work" ref={sectionRef} className="py-16 sm:py-24 md:py-32 lg:py-40 px-6 lg:px-12 bg-black">
      <div className="max-w-7xl mx-auto">
        <div
          ref={headerRef}
          className={`text-center mb-12 sm:mb-16 md:mb-24 ${visibleItems.includes(-1) ? "animate-fade-in-up" : "opacity-0"}`}
        >
          <h2 className="text-xs sm:text-sm tracking-[0.2em] sm:tracking-[0.3em] text-white/60 uppercase mb-4">
            Repertoire
          </h2>
          <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight px-4">
            RAYMER SURIO HAS BUILT MULTIPLE WEB APPLICATIONS
          </h3>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-12">
          {projects.map((project, index) => (
            <div
              key={project.id}
              ref={(el) => {
                itemRefs.current[index] = el
              }}
              className={`group cursor-pointer ${visibleItems.includes(index) ? "animate-scale-in" : "opacity-0"}`}
              style={{ animationDelay: `${index * 150}ms` }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="space-y-4 sm:space-y-6">
                <div className="relative aspect-[3/4] overflow-hidden bg-zinc-900 rounded-sm">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover transition-all duration-700 ease-out group-hover:scale-110"
                  />
                  <div
                    className={`absolute inset-0 bg-black/60 flex items-center justify-center transition-opacity duration-500 ${
                      hoveredIndex === index ? "opacity-100" : "opacity-0"
                    }`}
                  >
                    <span className="text-yellow-500 text-sm tracking-widest uppercase font-bold">View Project</span>
                  </div>
                </div>
                <div className="space-y-2">
                  <h4 className="text-lg sm:text-xl md:text-2xl font-bold text-white group-hover:text-yellow-500 transition-colors duration-300">
                    {project.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-white/70 leading-relaxed">{project.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
