import type { Metadata } from "next"
import Link from "next/link"
import { packages } from "@/lib/site-data"

export const metadata: Metadata = { title: "Packages & Pricing", description: "KC Photo Booth packages for weddings, corporate events, and digital drop-off service." }

export default function PackagesPage() {
  return <><section className="page-hero"><p className="eyebrow">Plan the party</p><h1>Simple packages,<br /><em>serious fun.</em></h1><p>Start with a clear baseline, then let&apos;s talk about the specific details that will make your event feel like yours.</p></section><section className="content-section content-section--sun"><p className="eyebrow">The essentials</p><div className="pricing-list">{packages.map((item, index) => <article className="pricing-card" key={item.name}><span className="pricing-card__number">0{index + 1}</span><div><h2>{item.name}</h2><p>{item.detail}</p></div><strong>{item.price}</strong></article>)}</div><div style={{ textAlign: "center", marginTop: "55px" }}><Link href="/contact" className="button button-ink">Reserve your date <span>↗</span></Link></div></section><section className="content-section content-section--ink"><p className="eyebrow" style={{ color: "var(--sun)" }}>How booking works</p><div className="process-grid"><article className="process-step"><span>01</span><h3>Consult</h3><p>Tell us about the occasion, your crowd, and the kind of energy you want in the room.</p></article><article className="process-step"><span>02</span><h3>Confirm</h3><p>Choose your experience, make your payment, and hold your date on the calendar.</p></article><article className="process-step"><span>03</span><h3>Celebrate</h3><p>We arrive prepared. You and your guests make the magic in front of the camera.</p></article></div></section></>
}
