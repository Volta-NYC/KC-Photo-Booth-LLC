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
    })

    const frame = window.requestAnimationFrame(() => targets.forEach((target) => observer.observe(target)))
    return () => {
      window.cancelAnimationFrame(frame)
      observer.disconnect()
    }
  }, [pathname])

  return null
}
