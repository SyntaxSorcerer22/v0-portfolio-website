"use client"

import { useEffect, useRef, useState } from "react"

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
    <section id="manifesto" ref={sectionRef} className="py-16 sm:py-24 md:py-32 lg:py-40 px-6 lg:px-12 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 md:gap-16 lg:gap-24">
          <div className={`${isVisible ? "animate-slide-in-left" : "opacity-0"}`}>
            <h2 className="text-xs sm:text-sm tracking-[0.2em] sm:tracking-[0.3em] text-white/60 uppercase mb-4 sm:mb-6">
              Biography & Awards
            </h2>
            <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6 sm:mb-8">
              ONE OF THE RISING FULL STACK WEB DEVELOPERS
            </h3>
          </div>

          <div
            className={`space-y-4 sm:space-y-6 text-sm sm:text-base text-white/80 leading-relaxed ${isVisible ? "animate-slide-in-right" : "opacity-0"}`}
            style={{ animationDelay: "200ms" }}
          >
            <p className="transition-smooth hover:text-white">
              Raymer Surio is a recent BSIT graduate with hands-on experience in full stack web development and system
              design. His journey began at the University of Eastern Philippines, where he developed a passion for
              creating responsive web applications and intuitive user interfaces.
            </p>
            <p className="transition-smooth hover:text-white">
              Throughout his academic career, Raymer has demonstrated exceptional skills in building complete systems,
              from database architecture to front-end interfaces. His capstone project, a Document Routing System for
              PSA, showcased his ability to streamline complex workflows through elegant technical solutions.
            </p>
            <p className="transition-smooth hover:text-white">
              With expertise in HTML, CSS, JavaScript, PHP, TypeScript, and MySQL, combined with frameworks like
              Bootstrap and Chart.js, Raymer brings a comprehensive skill set to every project. His internship at the
              National Irrigation Administration - Region VIII further refined his professional development skills and
              team collaboration abilities.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
