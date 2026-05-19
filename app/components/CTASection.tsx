"use client";

import { useState, FormEvent } from "react";

const SERVICES = [
  "Tree Removal",
  "Hedge & Palm Care",
  "Hillside Fire Clearing",
  "Weed Abatement",
  "Lawn Care",
  "Hardscaping",
  "Turf & Sod Installation",
  "Fence Installation",
  "Junk Hauling",
  "Something else",
];

export function CTASection() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    const formData = new FormData(e.currentTarget);
    const payload = Object.fromEntries(formData.entries());
    console.log("[Love Branch quote request]", payload);
    await new Promise((r) => setTimeout(r, 400));
    setSubmitting(false);
    setSubmitted(true);
  }

  return (
    <section className="cta" id="contact">
      <div className="wrap cta-inner">
        <span
          className="eyebrow"
          style={{
            background: "rgba(244, 194, 101, 0.15)",
            color: "#f4c265",
            borderColor: "rgba(244, 194, 101, 0.3)",
          }}
        >
          <span className="dot"></span>
          Open Right Now
        </span>
        <h2 className="reveal">
          Ready for a <em>better-looking yard?</em>
        </h2>
        <p className="reveal delay-1">
          Tell us what you need and we&apos;ll get back to you the same day — or call us live, even on weekends.
        </p>

        <a href="tel:6193300801" className="cta-phone reveal delay-2">
          (619) 330-0801
        </a>
        <div className="cta-hours">Mon–Sun 6am–9pm · Same-day quotes</div>

        <div className="cta-divider reveal delay-2" aria-hidden="true">
          <span>or request a quote</span>
        </div>

        {submitted ? (
          <div className="quote-success reveal" role="status">
            <strong>Thanks — we got it.</strong>
            <p>We&apos;ll be in touch shortly. For anything urgent, please call (619) 330-0801.</p>
          </div>
        ) : (
          <form className="quote-form reveal delay-3" onSubmit={handleSubmit} noValidate>
            <div className="quote-row">
              <label className="quote-field">
                <span>Name</span>
                <input type="text" name="name" required autoComplete="name" placeholder="Your name" />
              </label>
              <label className="quote-field">
                <span>Phone</span>
                <input
                  type="tel"
                  name="phone"
                  required
                  autoComplete="tel"
                  placeholder="(619) 555-0123"
                  inputMode="tel"
                />
              </label>
            </div>
            <div className="quote-row">
              <label className="quote-field">
                <span>Email <em>(optional)</em></span>
                <input type="email" name="email" autoComplete="email" placeholder="you@example.com" />
              </label>
              <label className="quote-field">
                <span>Service</span>
                <select name="service" defaultValue="">
                  <option value="" disabled>
                    Choose a service…
                  </option>
                  {SERVICES.map((s) => (
                    <option key={s} value={s}>
                      {s}
                    </option>
                  ))}
                </select>
              </label>
            </div>
            <label className="quote-field quote-field-full">
              <span>Tell us about the job <em>(optional)</em></span>
              <textarea
                name="message"
                rows={4}
                placeholder="e.g. Two palm trees in the backyard need trimming, plus a hedge along the fence."
              />
            </label>
            <label className="quote-field quote-field-full">
              <span>Property address or area <em>(optional)</em></span>
              <input
                type="text"
                name="address"
                autoComplete="street-address"
                placeholder="City or ZIP is fine"
              />
            </label>
            <button type="submit" className="quote-submit" disabled={submitting}>
              {submitting ? "Sending…" : "Request Free Quote"}
            </button>
            <p className="quote-note">
              We answer fast. By submitting you agree to be contacted about your request — no spam, ever.
            </p>
          </form>
        )}
      </div>
    </section>
  );
}
