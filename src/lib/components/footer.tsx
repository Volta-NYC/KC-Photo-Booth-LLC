import Link from "next/link"
import { contact } from "@/lib/site-data"

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-top"><div><p className="eyebrow">Make a little noise</p><h2>See you<br /><em>on the floor.</em></h2></div><Link href="/contact" className="circle-link circle-link--large" aria-label="Start a booking">↗</Link></div>
      <div className="footer-grid">
        <div><Link className="footer-brand" href="/"><span>KC</span><i>✦</i><small>PHOTO BOOTH</small></Link><p>360 video and digital photo booth experiences made for your favorite people.</p></div>
        <div><p className="footer-label">Explore</p><Link href="/services">Experiences</Link><Link href="/packages">Packages</Link><Link href="/add-ons">Add-ons</Link><Link href="/gallery">Gallery</Link></div>
        <div><p className="footer-label">Get in touch</p><a href={contact.phoneHref}>{contact.phone}</a><a href={contact.emailHref}>{contact.email}</a><span>Bronx, NY · Serving NYC</span></div>
        <div><p className="footer-label">Follow along</p><a href={contact.instagram} target="_blank" rel="noreferrer">Instagram ↗</a><a href={contact.tiktok} target="_blank" rel="noreferrer">TikTok ↗</a><a href={contact.facebook} target="_blank" rel="noreferrer">Facebook ↗</a></div>
      </div>
      <div className="footer-bottom"><span>© {new Date().getFullYear()} KC Photo Booth LLC</span><Link href="https://novusnyc.org" target="_blank" rel="noreferrer">Made by Novus</Link></div>
    </footer>
  )
}
