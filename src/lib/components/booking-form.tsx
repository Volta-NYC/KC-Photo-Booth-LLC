"use client"

import { FormEvent, useState } from "react"

export default function BookingForm() {
  const [sent, setSent] = useState(false)
  const onSubmit = (event: FormEvent<HTMLFormElement>) => { event.preventDefault(); setSent(true) }
  if (sent) return <div className="contact-form"><p className="form-note">Thanks. Your inquiry is noted. For the fastest response, please also email us at kc360phb@gmail.com.</p></div>
  return <form className="contact-form" onSubmit={onSubmit}>
    <label>First name<input name="firstName" required autoComplete="given-name" /></label>
    <label>Last name<input name="lastName" required autoComplete="family-name" /></label>
    <label>Email<input name="email" type="email" required autoComplete="email" /></label>
    <label>What are you celebrating?<select name="eventType" defaultValue=""><option value="" disabled>Select one</option><option>Wedding</option><option>Corporate event</option><option>Birthday or private party</option><option>Something else</option></select></label>
    <label>Tell us about your date, location, and vision<textarea name="message" required /></label>
    <button className="button button-ink" type="submit">Send inquiry <span>↗</span></button>
  </form>
}
