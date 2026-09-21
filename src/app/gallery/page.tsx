import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"

export const metadata: Metadata = { title: "Gallery", description: "See KC Photo Booth in action across New York City celebrations." }

const images = Array.from({ length: 18 }, (_, index) => `/scrape/assets/gallery/gallery-${String(index + 1).padStart(2, "0")}.jpg`)

export default function GalleryPage() {
  return <><section className="page-hero"><p className="eyebrow">Captured with KC</p><h1>Remember it<br /><em>like this.</em></h1><p>A few scenes from the celebrations, spin sessions, and picture-perfect chaos we&apos;ve had the joy of joining.</p></section><section className="masonry" aria-label="KC Photo Booth gallery">{images.map((src, index) => <div className="masonry-item" key={src}><Image src={src} alt={`KC Photo Booth event gallery image ${index + 1}`} width={1080} height={1920} sizes="(max-width: 620px) 45vw, (max-width: 900px) 30vw, 23vw" /></div>)}</section><section className="final-cta"><p className="eyebrow">Next photo, yours</p><h2>Let&apos;s fill your<br /><em>camera roll.</em></h2><Link href="/contact" className="button button-cream">Reserve your date <span>↗</span></Link></section></>
}
