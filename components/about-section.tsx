"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"

export function AboutSection() {
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
    <section id="about" ref={sectionRef} className="py-24 md:py-32 lg:py-40 px-6 lg:px-12 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 lg:gap-24 items-center">
          <div className={`space-y-6 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-light tracking-tight">About</h2>
            <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
              <p>
                I'm a designer who believes that great work emerges from the intersection of curiosity, craft, and
                collaboration. With over a decade of experience, I've had the privilege of working with brands and
                individuals who share a commitment to thoughtful, meaningful design.
              </p>
              <p>
                My approach is rooted in listening—understanding not just what clients want, but why they want it. This
                empathy-driven process allows me to create work that resonates on both emotional and functional levels.
              </p>
              <p>
                When I'm not designing, you'll find me exploring art galleries, reading philosophy, or experimenting
                with analog photography. These pursuits inform my work, reminding me that the best design often comes
                from unexpected places.
              </p>
            </div>
            <div className="pt-4 space-y-2">
              <div className="text-sm text-muted-foreground">Currently based in</div>
              <div className="text-xl font-light">San Francisco, California</div>
            </div>
          </div>

          <div
            className={`relative aspect-[3/4] rounded-sm overflow-hidden bg-secondary ${
              isVisible ? "animate-fade-in-up" : "opacity-0"
            }`}
            style={{ animationDelay: "200ms" }}
          >
            <Image src="/professional-portrait-photo-minimal-aesthetic.jpg" alt="Portrait" fill className="object-cover" />
          </div>
        </div>
      </div>
    </section>
  )
}
