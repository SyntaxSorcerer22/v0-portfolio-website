"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }
  }, [isOpen])

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-background/80 backdrop-blur-md border-b border-border" : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between h-20">
            <Link
              href="/"
              className="text-sm font-light tracking-[0.2em] uppercase hover:opacity-70 transition-opacity"
            >
              Index
            </Link>

            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              className="relative z-50"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>
      </nav>

      {/* Overlay Menu */}
      <div
        className={`fixed inset-0 z-40 bg-background transition-all duration-500 ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <div className="flex items-center justify-center min-h-screen px-6">
          <nav className="text-center space-y-6">
            <Link
              href="/"
              onClick={() => setIsOpen(false)}
              className="block text-3xl md:text-5xl font-light tracking-tight hover:text-accent transition-colors"
            >
              <span className="text-sm text-muted-foreground mr-4">(A)</span>
              Index
            </Link>
            <Link
              href="/#work"
              onClick={() => setIsOpen(false)}
              className="block text-3xl md:text-5xl font-light tracking-tight hover:text-accent transition-colors"
            >
              <span className="text-sm text-muted-foreground mr-4">(1)</span>
              Work
            </Link>
            <Link
              href="/#about"
              onClick={() => setIsOpen(false)}
              className="block text-3xl md:text-5xl font-light tracking-tight hover:text-accent transition-colors"
            >
              <span className="text-sm text-muted-foreground mr-4">(2)</span>
              About
            </Link>
            <Link
              href="/#contact"
              onClick={() => setIsOpen(false)}
              className="block text-3xl md:text-5xl font-light tracking-tight hover:text-accent transition-colors"
            >
              <span className="text-sm text-muted-foreground mr-4">(3)</span>
              Contact
            </Link>
          </nav>
        </div>
      </div>
    </>
  )
}
