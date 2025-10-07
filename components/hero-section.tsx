"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { ChevronDown } from "lucide-react"

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    setIsVisible(true)

    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0 parallax" style={{ transform: `translateY(${scrollY * 0.5}px)` }}>
        <Image
          src="/raymer-surio-photo.png"
          alt="Raymer Surio"
          fill
          className="object-cover object-center opacity-40"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 text-center">
        <div className={`space-y-6 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
          <h1 className="text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-bold tracking-tight text-white leading-none">
            RAYMER SURIO
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl font-light tracking-[0.2em] md:tracking-[0.3em] text-white/90 uppercase">
            Full Stack Developer
          </p>
        </div>
      </div>

      <div
        className={`absolute bottom-12 left-1/2 -translate-x-1/2 z-10 ${isVisible ? "animate-fade-in" : "opacity-0"}`}
        style={{ animationDelay: "1s" }}
      >
        <div className="flex flex-col items-center gap-2 text-white/60 animate-bounce">
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <ChevronDown className="h-5 w-5" />
        </div>
      </div>
    </section>
  )
}
