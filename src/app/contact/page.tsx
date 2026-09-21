import type { Metadata } from "next"
import BookingForm from "@/lib/components/booking-form"
import { contact } from "@/lib/site-data"

export const metadata: Metadata = { title: "Contact", description: "Reserve a date or ask KC Photo Booth about your event." }

export default function ContactPage() {
  return <><section className="page-hero"><p className="eyebrow">Ready when you are</p><h1>Let&apos;s make<br /><em>some magic.</em></h1><p>Tell us a little about your celebration and we&apos;ll help you find the right photo booth moment for it.</p></section><section className="content-section"><div className="contact-layout"><div className="contact-details"><p className="eyebrow">Reach out</p><h2>Bring on the<br /><em>good times.</em></h2><dl><dt>Call</dt><dd><a href={contact.phoneHref}>{contact.phone}</a></dd><dt>Email</dt><dd><a href={contact.emailHref}>{contact.email}</a></dd><dt>Based in</dt><dd>Bronx, NY<br />Serving New York City &amp; the tri-state area</dd></dl><p className="eyebrow">Follow the fun</p><p style={{ marginTop: "13px" }}><a className="text-link" href={contact.instagram} target="_blank" rel="noreferrer">Instagram <span>↗</span></a></p></div><BookingForm /></div></section></>
}
