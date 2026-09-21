import Image from "next/image"
import Link from "next/link"
import { packages } from "@/lib/site-data"

const gallery = [
  { src: "/scrape/assets/optimized/kc-red-carpet-360.jpg", alt: "KC Photo Booth 360 experience at a red carpet event", className: "gallery-wide" },
  { src: "/scrape/assets/optimized/kc-booth-setup-ballroom.jpg", alt: "KC Photo Booth setup in a ballroom", className: "gallery-tall" },
  { src: "/scrape/assets/gallery/gallery-03.jpg", alt: "Guests enjoying a KC Photo Booth event", className: "gallery-tall" },
  { src: "/scrape/assets/gallery/gallery-02.jpg", alt: "A KC Photo Booth celebration in motion", className: "gallery-wide" },
]

export default function HomePage() {
  return (
    <>
      <section className="hero-shell" aria-labelledby="hero-title">
        <div className="hero-copy" data-reveal>
          <p className="eyebrow">NYC &amp; the tri-state area</p>
          <h1 id="hero-title">A whole lot of <em>joy,</em><br />one spin at a time.</h1>
          <p className="hero-intro">360 video and digital photo booth experiences, beautifully tailored to the people in your room.</p>
          <div className="hero-actions">
            <Link className="button button-ink" href="/contact">Reserve your date <span>↗</span></Link>
            <Link className="text-link" href="/services">Meet the booths <span>↓</span></Link>
          </div>
        </div>
        <div className="hero-media" data-reveal>
          <Image src="/scrape/assets/optimized/kc-red-carpet-360.jpg" alt="KC Photo Booth 360 setup with a red carpet" fill priority sizes="(max-width: 900px) 100vw, 56vw" />
          <div className="hero-stamp" aria-hidden="true"><span>MAKE A<br />MEMORY<br />MOVE</span></div>
          <p className="image-note">360° PHOTO BOOTH · NYC</p>
        </div>
      </section>

      <section className="intro-band" data-reveal>
        <p className="eyebrow">For celebrations worth replaying</p>
        <div className="intro-grid">
          <h2>Bring the room <em>to life.</em></h2>
          <div>
            <p>KC Photo Booth is a family-run photo booth company with the energy, polish, and care to make your event feel unmistakably yours.</p>
            <Link href="/about" className="text-link">Our story <span>↗</span></Link>
          </div>
        </div>
      </section>

      <section className="showcase-section" aria-labelledby="ways-title">
        <div className="section-heading" data-reveal>
          <p className="eyebrow">Choose your experience</p>
          <h2 id="ways-title">The spotlight<br /><em>is yours.</em></h2>
        </div>
        <div className="experience-grid">
          <article className="experience-card experience-card--dark" data-reveal>
            <div className="card-number">01</div>
            <Image src="/scrape/assets/optimized/kc-booth-setup-ballroom.jpg" alt="A KC 360 photo booth set up for a ballroom celebration" fill sizes="(max-width: 760px) 100vw, 50vw" />
            <div className="experience-copy"><p className="eyebrow">The main event</p><h3>360 Photo Booth</h3><p>Guests step on, the camera circles, and your party gets a cinematic keepsake in seconds.</p><Link href="/services#360" className="circle-link" aria-label="Learn about the 360 Photo Booth">↗</Link></div>
          </article>
          <article className="experience-card experience-card--paper" data-reveal>
            <div className="card-number">02</div>
            <Image src="/scrape/assets/optimized/kc-booth-setup-day.jpg" alt="Digital photo booth at a daytime event" fill sizes="(max-width: 760px) 100vw, 50vw" />
            <div className="experience-copy"><p className="eyebrow">Easy, polished, personal</p><h3>Digital Drop-Off</h3><p>A budget-friendly booth delivered to your celebration, ready for every smile, pose, and group shot.</p><Link href="/services#digital" className="circle-link" aria-label="Learn about Digital Drop-Off">↗</Link></div>
          </article>
        </div>
      </section>

      <section className="polaroid-section" data-reveal>
        <div className="polaroid-image"><Image src="/scrape/assets/optimized/catina-lighting.jpg" alt="Catina of KC Photo Booth preparing event lighting" fill sizes="(max-width: 760px) 100vw, 40vw" /><span>BEHIND THE FLASH</span></div>
        <div className="polaroid-copy"><p className="eyebrow">The KC difference</p><h2>Not just a booth.<br /><em>Your people person.</em></h2><p>Kamar and Catina bring the camera-ready setup, the guest-facing warmth, and the little details that make everyone want one more take.</p><Link href="/about" className="button button-outline">Meet KC <span>↗</span></Link></div>
      </section>

      <section className="packages-preview" data-reveal>
        <div className="section-heading packages-heading"><p className="eyebrow">Straightforward booking</p><h2>Make room<br />for the <em>fun.</em></h2></div>
        <div className="package-list">{packages.map((item) => <Link href="/packages" className="package-row" key={item.name}><span>{item.name}</span><strong>{item.price}</strong><span className="package-arrow">↗</span></Link>)}<Link className="text-link package-cta" href="/packages">View packages &amp; pricing <span>↗</span></Link></div>
      </section>

      <section className="gallery-preview" aria-labelledby="gallery-title">
        <div className="section-heading gallery-heading" data-reveal><p className="eyebrow">Proof is in the pictures</p><h2 id="gallery-title">Good times, <em>on repeat.</em></h2><Link href="/gallery" className="text-link">See the gallery <span>↗</span></Link></div>
        <div className="gallery-collage">{gallery.map((image) => <div className={image.className} key={image.src} data-reveal><Image src={image.src} alt={image.alt} fill sizes="(max-width: 760px) 50vw, 35vw" /></div>)}</div>
      </section>

      <section className="final-cta" data-reveal><p className="eyebrow">Your date is waiting</p><h2>Let&apos;s make something<br /><em>worth sharing.</em></h2><Link href="/contact" className="button button-cream">Start your booking <span>↗</span></Link></section>
    </>
  )
}
