import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"

export const metadata: Metadata = { title: "Experiences", description: "Explore KC Photo Booth's 360 video booth and digital drop-off photo booth experiences." }

const services = [
  { id: "360", number: "01", label: "The main event", title: "360 Photo Booth", accent: "in motion.", image: "/assets/optimized/kc-red-carpet-360.jpg", alt: "KC 360 Photo Booth experience with a red carpet", description: "A full-scale, 360-degree video moment for guests who are ready to step in, spin, and shine. We bring the platform, lighting, camera setup, and friendly on-site support so your group can simply have fun.", features: ["Personalized event experience", "360-degree photos and videos", "Professional on-site booth operation"] },
  { id: "digital", number: "02", label: "Easy and polished", title: "Digital Photo Booth", accent: "on demand.", image: "/assets/optimized/kc-booth-setup-day.jpg", alt: "KC digital photo booth set up at an event", description: "Want the photo booth feeling with a simpler footprint? Our digital drop-off service is an affordable, ready-to-enjoy option for celebrations of every size. We deliver it ready for the good stuff.", features: ["Flexible drop-off service", "A great fit for any budget", "Designed for smiles, group shots, and easy sharing"] },
]

export default function ServicesPage() {
  return <><section className="page-hero"><p className="eyebrow">Find your frame</p><h1>More ways to<br /><em>make a moment.</em></h1><p>Whether your event calls for a full 360 experience or an effortless digital booth, KC makes the camera part feel easy.</p></section><div className="service-stack">{services.map((service) => <section className="service-detail" id={service.id} key={service.id}><div className="service-detail__media"><Image src={service.image} alt={service.alt} fill sizes="(max-width: 620px) 100vw, 50vw" /></div><div className="service-detail__copy"><p className="eyebrow">{service.number} · {service.label}</p><h2>{service.title}<br /><em>{service.accent}</em></h2><p>{service.description}</p><ul>{service.features.map((feature) => <li key={feature}>{feature}</li>)}</ul><Link href="/contact" className="button button-outline">Ask about this booth <span>↗</span></Link></div></section>)}</div></>
}
