"use client"

import { useEffect, useRef, useState } from "react"

const manifestoItems = [
  {
    title: "Design is storytelling",
    description:
      "Every project tells a story. I believe in creating narratives that resonate deeply with audiences, transforming abstract ideas into tangible, emotional experiences.",
  },
  {
    title: "Simplicity reveals truth",
    description:
      "The most powerful designs are often the simplest. By removing the unnecessary, we reveal what truly matters and create clarity in a complex world.",
  },
  {
    title: "Details define excellence",
    description:
      "Excellence lives in the details. From typography to transitions, every element is carefully considered to create cohesive, refined experiences.",
  },
]

export function ManifestoSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="manifesto" ref={sectionRef} className="py-24 md:py-32 lg:py-40 px-6 lg:px-12 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <div className={`mb-16 md:mb-24 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-light tracking-tight mb-6">Design Philosophy</h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed">
            Three principles that guide every creative decision
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12 md:gap-8 lg:gap-12">
          {manifestoItems.map((item, index) => (
            <div
              key={index}
              className={`space-y-4 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="text-sm font-mono text-accent">0{index + 1}</div>
              <h3 className="text-2xl md:text-3xl font-light tracking-tight leading-tight">{item.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
