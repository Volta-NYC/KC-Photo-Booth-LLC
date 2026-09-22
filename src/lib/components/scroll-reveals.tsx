"use client"

import { useEffect } from "react"
import { usePathname } from "next/navigation"

const revealSelector = [
  ".page-hero",
  ".intro-band",
  ".section-heading",
  ".experience-card",
  ".polaroid-section",
  ".packages-preview",
  ".final-cta",
  ".service-detail",
  ".pricing-card",
  ".process-step",
  ".addon-card",
  ".client-proof__heading",
  ".reviews-heading",
  ".review-card",
  ".masonry-item",
  ".about-founder-photos",
  ".about-story__copy",
  ".contact-details",
  ".contact-form",
  "[data-reveal]",
].join(", ")

export default function ScrollReveals() {
  const pathname = usePathname()

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return

    document.documentElement.classList.add("reveal-ready")
    const targets = Array.from(document.querySelectorAll<HTMLElement>(revealSelector))
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return
          entry.target.classList.add("is-visible")
          observer.unobserve(entry.target)
        })
      },
      { rootMargin: "0px 0px -8%", threshold: 0.12 },
    )

    targets.forEach((target, index) => {
      target.classList.remove("is-visible")
      target.classList.add("reveal-target")
      target.style.setProperty("--reveal-delay", `${(index % 4) * 70}ms`)
      target.style.setProperty("--reveal-x", index % 2 ? "26px" : "-26px")
    })

    const parallaxTargets = Array.from(document.querySelectorAll<HTMLElement>(".parallax-media"))
    let parallaxFrame = 0
    const updateParallax = () => {
      parallaxFrame = 0
      parallaxTargets.forEach((target) => {
        const bounds = target.getBoundingClientRect()
        if (bounds.bottom < 0 || bounds.top > window.innerHeight) return
        const offset = Math.max(-18, Math.min(18, (window.innerHeight / 2 - (bounds.top + bounds.height / 2)) * 0.045))
        target.style.setProperty("--parallax-y", `${offset.toFixed(1)}px`)
      })
    }
    const requestParallax = () => {
      if (!parallaxFrame) parallaxFrame = window.requestAnimationFrame(updateParallax)
    }
    window.addEventListener("scroll", requestParallax, { passive: true })
    window.addEventListener("resize", requestParallax)
    requestParallax()

    const frame = window.requestAnimationFrame(() => targets.forEach((target) => observer.observe(target)))
    return () => {
      window.cancelAnimationFrame(frame)
      window.cancelAnimationFrame(parallaxFrame)
      window.removeEventListener("scroll", requestParallax)
      window.removeEventListener("resize", requestParallax)
      observer.disconnect()
    }
  }, [pathname])

  return null
}
