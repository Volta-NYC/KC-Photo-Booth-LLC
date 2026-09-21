"use client"

import Link from "next/link"
import { useEffect, useState } from "react"

const links = [
  { href: "/services", label: "Experiences" }, { href: "/packages", label: "Packages" }, { href: "/add-ons", label: "Add-ons" }, { href: "/gallery", label: "Gallery" }, { href: "/about", label: "About" },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  useEffect(() => { const close = () => setOpen(false); window.addEventListener("resize", close); return () => window.removeEventListener("resize", close) }, [])
  return (
    <header className="site-header">
      <div className="site-ticker" aria-label="KC Photo Booth announcement"><div><span>NYC&apos;S 360 PHOTO BOOTH · LET&apos;S MAKE A MEMORY ·</span><span>NYC&apos;S 360 PHOTO BOOTH · LET&apos;S MAKE A MEMORY ·</span><span>NYC&apos;S 360 PHOTO BOOTH · LET&apos;S MAKE A MEMORY ·</span></div></div>
      <nav className="site-nav" aria-label="Main navigation">
        <Link className="brand" href="/" onClick={() => setOpen(false)} aria-label="KC Photo Booth home"><span>KC</span><i>✦</i><small>PHOTO BOOTH</small></Link>
        <div className="desktop-links">{links.map((link) => <Link href={link.href} key={link.href}>{link.label}</Link>)}</div>
        <Link className="nav-book" href="/contact">Book now <span>↗</span></Link>
        <button className="menu-button" type="button" onClick={() => setOpen(!open)} aria-expanded={open} aria-controls="mobile-menu"><span>{open ? "Close" : "Menu"}</span><b>{open ? "×" : "+"}</b></button>
      </nav>
      <div id="mobile-menu" className={`mobile-menu ${open ? "mobile-menu--open" : ""}`}>
        {links.map((link) => <Link href={link.href} key={link.href} onClick={() => setOpen(false)}>{link.label}<span>↗</span></Link>)}
        <Link href="/contact" onClick={() => setOpen(false)} className="button button-ink">Reserve your date <span>↗</span></Link>
      </div>
    </header>
  )
}
