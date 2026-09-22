import Image from "next/image"
import Link from "next/link"
import { clients, packages } from "@/lib/site-data"

const gallery = [
  { src: "/assets/gallery/gallery-03.jpg", alt: "Wedding guests celebrating with KC Photo Booth", note: "ONE MORE FOR THE CAMERA", width: 720, height: 1280 },
  { src: "/assets/optimized/kc-booth-setup-day.jpg", alt: "KC digital photo booth at a daytime event", note: "READY WHEN YOU ARE", width: 650, height: 1200 },
  { src: "/assets/optimized/catina-lighting.jpg", alt: "Catina preparing KC Photo Booth lighting", note: "BEHIND THE FLASH", width: 650, height: 1200 },
]

const clientNotes = [
  "A photo booth experience that your guests can't forget.",
  "Your guests should feel welcomed, comfortable, and ready to make a memory.",
  "A photo booth experience curated to your event.",
]

export default function HomePage() {
  return (
    <>
      <section className="hero-shell" aria-labelledby="hero-title">
        <Image className="hero-media" src="/assets/optimized/kc-red-carpet-360.jpg" alt="KC Photo Booth set up for a red carpet event" fill priority sizes="100vw" />
        <div className="hero-copy" data-reveal>
          <p className="eyebrow">360° video &amp; digital photo booth · Bronx, NY</p>
          <h1 id="hero-title"><span>KC</span><span>PHOTO<br />BOOTH</span></h1>
          <div className="hero-footnote"><p>Bring your favorite people. We&apos;ll bring the reason to step in front of the camera.</p><Link className="text-link" href="/contact">Reserve your date <span>↗</span></Link></div>
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
            <Image className="parallax-media" src="/assets/optimized/kc-booth-setup-ballroom.jpg" alt="A KC 360 photo booth set up for a ballroom celebration" fill sizes="(max-width: 760px) 100vw, 50vw" />
            <div className="experience-copy"><p className="eyebrow">The main event</p><h3>360 Photo Booth</h3><p>Guests step on, the camera circles, and your party gets a cinematic keepsake in seconds.</p><Link href="/services#360" className="circle-link" aria-label="Learn about the 360 Photo Booth">↗</Link></div>
          </article>
          <article className="experience-card experience-card--paper" data-reveal>
            <div className="card-number">02</div>
            <Image className="parallax-media" src="/assets/optimized/kc-booth-setup-day.jpg" alt="Digital photo booth at a daytime event" fill sizes="(max-width: 760px) 100vw, 50vw" />
            <div className="experience-copy"><p className="eyebrow">Easy, polished, personal</p><h3>Digital Drop-Off</h3><p>A budget-friendly booth delivered to your celebration, ready for every smile, pose, and group shot.</p><Link href="/services#digital" className="circle-link" aria-label="Learn about Digital Drop-Off">↗</Link></div>
          </article>
        </div>
      </section>

      <section className="polaroid-section" data-reveal>
        <div className="people-collage" aria-label="Behind the scenes at KC Photo Booth">
          <figure className="people-collage__primary"><Image className="parallax-media" src="/assets/optimized/catina-lighting.jpg" alt="Catina of KC Photo Booth preparing event lighting" fill sizes="(max-width: 760px) 72vw, 33vw" /><figcaption>BEHIND THE FLASH</figcaption></figure>
          <figure className="people-collage__detail"><Image src="/assets/gallery/gallery-03.jpg" alt="Wedding guests celebrating with KC Photo Booth" fill sizes="(max-width: 760px) 42vw, 18vw" /></figure>
          <figure className="people-collage__booth"><Image src="/assets/optimized/kc-booth-setup-day.jpg" alt="KC digital photo booth ready for an event" fill sizes="(max-width: 760px) 38vw, 15vw" /></figure>
        </div>
        <div className="polaroid-copy"><p className="eyebrow">The KC difference</p><h2>Not just a booth.<br /><em>Your people person.</em></h2><p>Kamar and Catina bring the camera-ready setup, the guest-facing warmth, and the little details that make everyone want one more take.</p><Link href="/about" className="button button-outline">Meet KC <span>↗</span></Link></div>
      </section>

      <section className="packages-preview" data-reveal>
        <div className="section-heading packages-heading"><p className="eyebrow">Straightforward booking</p><h2>Make room<br />for the <em>fun.</em></h2></div>
        <div className="package-list">{packages.map((item) => <Link href="/packages" className="package-row" key={item.name}><span>{item.name}</span><strong>{item.price}</strong><span className="package-arrow">↗</span></Link>)}<Link className="text-link package-cta" href="/packages">View packages &amp; pricing <span>↗</span></Link></div>
      </section>

      <section className="client-proof" aria-labelledby="clients-title">
        <div className="client-proof__heading" data-reveal><p className="eyebrow">Our clients</p><h2 id="clients-title">In good<br /><em>company.</em></h2><p>A few of the organizations and people who have celebrated with KC.</p></div>
        <ul className="client-list" aria-label="KC Photo Booth clients">
          {clients.map((client) => <li className="client-logo" key={client.name}><Image src={client.image} alt={client.name} width={500} height={500} sizes="(max-width: 760px) 132px, 18vw" /></li>)}
        </ul>
      </section>

      <section className="reviews-section" aria-labelledby="reviews-title">
        <div className="reviews-heading" data-reveal><p className="eyebrow">Testimonials</p><h2 id="reviews-title">Happy clients,<br /><em>beautiful results.</em></h2></div>
        <div className="reviews-grid">{clientNotes.map((note, index) => <article className="review-card" data-reveal key={note}><span>0{index + 1}</span><blockquote>“{note}”</blockquote><p>KC PHOTO BOOTH</p></article>)}</div>
      </section>

      <section className="gallery-preview" aria-labelledby="gallery-title">
        <div className="section-heading gallery-heading" data-reveal><p className="eyebrow">Proof is in the pictures</p><h2 id="gallery-title">Good times,<br /><em>on repeat.</em></h2><p>Three little scenes from the kind of night you&apos;ll want to remember.</p><Link href="/gallery" className="text-link">See the gallery <span>↗</span></Link></div>
        <div className="gallery-collage">{gallery.map((image, index) => <figure className={`gallery-frame gallery-frame--${index + 1}`} key={image.src} data-reveal><Image className="parallax-media" src={image.src} alt={image.alt} width={image.width} height={image.height} sizes="(max-width: 700px) 70vw, 20vw" /><figcaption>{image.note}</figcaption></figure>)}</div>
      </section>

      <section className="final-cta" data-reveal><p className="eyebrow">Your date is waiting</p><h2>Let&apos;s make something<br /><em>worth sharing.</em></h2><Link href="/contact" className="button button-cream">Start your booking <span>↗</span></Link></section>
    </>
  )
}
