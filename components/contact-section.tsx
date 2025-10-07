"use client"

import { useEffect, useRef, useState } from "react"
import { Mail, Linkedin, Github } from "lucide-react"
import { Button } from "@/components/ui/button"

const socialLinks = [
  {
    name: "Email",
    href: "mailto:surioraymer96@gmail.com",
    icon: Mail,
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com",
    icon: Linkedin,
  },
  {
    name: "GitHub",
    href: "https://github.com",
    icon: Github,
  },
]

export function ContactSection() {
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
    <section
      id="contact"
      ref={sectionRef}
      className="py-16 sm:py-24 md:py-32 lg:py-40 px-6 lg:px-12 bg-black border-t border-white/10"
    >
      <div className="max-w-4xl mx-auto text-center space-y-8 sm:space-y-12">
        <div className={`space-y-4 sm:space-y-6 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
          <h2 className="text-xs sm:text-sm tracking-[0.2em] sm:tracking-[0.3em] text-white/60 uppercase">
            Next Project
          </h2>
          <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight px-4">
            LET'S BUILD SOMETHING TOGETHER
          </h3>
        </div>

        <div className={`${isVisible ? "animate-scale-in" : "opacity-0"}`} style={{ animationDelay: "200ms" }}>
          <Button
            size="lg"
            asChild
            className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-yellow-500/50"
          >
            <a href="mailto:surioraymer96@gmail.com">GET IN TOUCH</a>
          </Button>
        </div>

        <div
          className={`flex items-center justify-center gap-6 sm:gap-8 pt-6 sm:pt-8 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
          style={{ animationDelay: "400ms" }}
        >
          {socialLinks.map((link, index) => (
            <a
              key={link.name}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/60 hover:text-yellow-500 transition-all duration-300 hover:scale-125"
              aria-label={link.name}
              style={{ animationDelay: `${400 + index * 100}ms` }}
            >
              <link.icon className="h-5 w-5 sm:h-6 sm:w-6" />
            </a>
          ))}
        </div>
      </div>

      <footer className="max-w-7xl mx-auto mt-16 sm:mt-24 pt-8 sm:pt-12 border-t border-white/10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 sm:gap-6">
          <div className="text-xl sm:text-2xl md:text-3xl font-bold text-white text-center md:text-left">
            Raymer
            <br />
            Surio
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 md:gap-8 text-xs sm:text-sm text-white/60 text-center">
            <span>Northern Samar, Philippines</span>
            <span className="hidden sm:inline">•</span>
            <span>0946 003 647</span>
          </div>
        </div>
        <div className="text-center mt-6 sm:mt-8 text-xs sm:text-sm text-white/40">
          © 2025 Raymer Surio. Portfolio designed with passion.
        </div>
      </footer>
    </section>
  )
}
