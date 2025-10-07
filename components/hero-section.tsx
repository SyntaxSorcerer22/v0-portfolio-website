"use client"

import { useEffect, useState } from "react"
import { ChevronDown } from "lucide-react"

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const scrollToNext = () => {
    const manifestoSection = document.getElementById("manifesto")
    manifestoSection?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 lg:px-12">
      <div className="max-w-5xl mx-auto text-center space-y-12">
        <div className={`space-y-8 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-light leading-[1.1] tracking-[0.15em] uppercase">
            Creative Designer
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl font-light text-muted-foreground max-w-3xl mx-auto leading-relaxed tracking-wide">
            Crafting meaningful experiences through thoughtful design and storytelling
          </p>
        </div>

        <button
          onClick={scrollToNext}
          className={`absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce ${
            isVisible ? "animate-fade-in" : "opacity-0"
          }`}
          aria-label="Scroll to content"
        >
          <ChevronDown className="h-8 w-8 text-muted-foreground hover:text-foreground transition-colors" />
        </button>
      </div>
    </section>
  )
}
