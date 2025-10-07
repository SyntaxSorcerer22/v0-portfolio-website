"use client"

import { useEffect, useRef, useState } from "react"

const skills = [
  { category: "Languages", items: ["HTML", "CSS", "JavaScript", "PHP", "TypeScript", "MySQL"] },
  { category: "Frameworks", items: ["Bootstrap", "Chart.js", "Git"] },
  { category: "Core Skills", items: ["Web Development", "Database Management", "UI/UX Design"] },
]

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
    <section id="about" ref={sectionRef} className="py-24 md:py-32 lg:py-40 px-6 lg:px-12 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className={`text-center mb-16 md:mb-24 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
          <h2 className="text-sm tracking-[0.3em] text-white/60 uppercase mb-4">Skills</h2>
          <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">TECHNICAL EXPERTISE</h3>
        </div>

        <div className="grid md:grid-cols-3 gap-12 md:gap-16">
          {skills.map((skillGroup, index) => (
            <div
              key={index}
              className={`space-y-6 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <h4 className="text-2xl font-bold text-yellow-500">{skillGroup.category}</h4>
              <ul className="space-y-3">
                {skillGroup.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="text-white/80 text-lg">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div
          className={`mt-20 md:mt-28 text-center max-w-3xl mx-auto ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
          style={{ animationDelay: "450ms" }}
        >
          <p className="text-xl text-white/70 leading-relaxed">
            Motivated to apply technical expertise and grow in a web development role. Committed to continuous learning
            and delivering high-quality solutions that make a difference.
          </p>
        </div>
      </div>
    </section>
  )
}
