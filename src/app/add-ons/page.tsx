import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { addOns } from "@/lib/site-data"

export const metadata: Metadata = { title: "Add-ons", description: "Backdrop and event add-ons from KC Photo Booth." }

export default function AddOnsPage() {
  return <><section className="page-hero"><p className="eyebrow">Set the scene</p><h1>All the little<br /><em>extras.</em></h1><p>Add a backdrop, a sweet treat, or a spark-making finale. The details are what turn a good party into a full picture.</p></section><section className="content-section"><p className="eyebrow">Available add-ons</p><div className="addon-grid">{addOns.map((item) => <article className="addon-card" key={item.name}><div className="addon-card__image"><Image src={item.image} alt={item.name} fill sizes="(max-width: 620px) 100vw, (max-width: 900px) 50vw, 33vw" /></div><h2>{item.name}</h2><p>Starting at <span>{item.price}</span></p></article>)}</div></section><section className="final-cta"><p className="eyebrow">Have something else in mind?</p><h2>Let&apos;s build it<br /><em>your way.</em></h2><Link href="/contact" className="button button-cream">Ask about add-ons <span>↗</span></Link></section></>
}
