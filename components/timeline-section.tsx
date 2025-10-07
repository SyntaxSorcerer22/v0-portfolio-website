"use client"

import { useEffect, useRef, useState } from "react"

const timelineEvents = [
  {
    year: "2021",
    title: "STARTED BSIT PROGRAM",
    subtitle: "UNIVERSITY OF EASTERN PHILIPPINES",
    description: "Began Bachelor of Science in Information Technology, focusing on web development and system design",
  },
  {
    year: "2024",
    title: "PROPERTY UNIT SYSTEM",
    subtitle: "UI/UX DESIGN PROJECT",
    description: "Designed and implemented user interface for internal property management system",
  },
  {
    year: "2024",
    title: "INVENTORY MANAGEMENT SYSTEM",
    subtitle: "FULL STACK DEVELOPMENT",
    description: "Built complete CRUD system with real-time tracking and responsive interface",
  },
  {
    year: "2024",
    title: "BUDGET-WISE APPLICATION",
    subtitle: "TYPESCRIPT & CHART.JS",
    description: "Developed financial tracking app with interactive visualizations",
  },
  {
    year: "2025",
    title: "DOCUMENT ROUTING SYSTEM",
    subtitle: "CAPSTONE PROJECT FOR PSA",
    description: "Created web-based system to streamline document workflows",
  },
  {
    year: "2025",
    title: "IT INTERN AT NIA REGION VIII",
    subtitle: "PROFESSIONAL EXPERIENCE",
    description: "Supported IT systems, developed web interfaces, and provided technical support",
  },
]

export function TimelineSection() {
  const [visibleItems, setVisibleItems] = useState<number[]>([])
  const sectionRef = useRef<HTMLElement>(null)
  const itemRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = itemRefs.current.indexOf(entry.target as HTMLDivElement)
            if (index !== -1 && !visibleItems.includes(index)) {
              setVisibleItems((prev) => [...prev, index])
            }
          }
        })
      },
      { threshold: 0.2 },
    )

    itemRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref)
    })

    return () => observer.disconnect()
  }, [visibleItems])

  return (
    <section ref={sectionRef} className="py-16 sm:py-24 md:py-32 lg:py-40 px-6 lg:px-12 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 md:gap-12 lg:gap-16">
          {timelineEvents.map((event, index) => (
            <div
              key={index}
              ref={(el) => {
                itemRefs.current[index] = el
              }}
              className={`space-y-4 transition-smooth ${
                visibleItems.includes(index) ? "animate-fade-in-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${(index % 3) * 100}ms` }}
            >
              <div className="text-4xl sm:text-5xl md:text-6xl font-bold text-yellow-500 transition-smooth hover:scale-110 hover:text-yellow-400">
                {event.year}
              </div>
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white leading-tight">{event.title}</h3>
              <p className="text-xs sm:text-sm text-yellow-500 tracking-wide">{event.subtitle}</p>
              <p className="text-sm sm:text-base text-white/70 leading-relaxed">{event.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
