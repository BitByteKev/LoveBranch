"use client";

import { useState, FormEvent } from "react";
import Link from "next/link";

const SERVICE_OPTIONS = [
  { slug: "tree-removal", label: "Tree removal & trimming", icon: "🌳" },
  { slug: "hedge-palm", label: "Hedge & palm care", icon: "🌿" },
  { slug: "hillside-fire", label: "Hillside fire clearing", icon: "🔥" },
  { slug: "weed-abatement", label: "Weed abatement", icon: "🌾" },
  { slug: "lawn-care", label: "Lawn care", icon: "✂️" },
  { slug: "hardscaping", label: "Hardscaping", icon: "🪨" },
  { slug: "turf-sod", label: "Turf & sod install", icon: "🟢" },
  { slug: "fence", label: "Fence install", icon: "🪵" },
  { slug: "junk-hauling", label: "Junk hauling", icon: "🚛" },
  { slug: "other", label: "Something else", icon: "✦" },
];

const PROPERTY_OPTIONS = [
  { value: "residential", label: "Residential" },
  { value: "hoa", label: "HOA / multi-unit" },
  { value: "commercial", label: "Commercial" },
  { value: "property-mgr", label: "Property manager" },
];

const URGENCY_OPTIONS = [
  { value: "emergency", label: "Emergency", sub: "Today / tonight" },
  { value: "this-week", label: "This week", sub: "Quote ASAP" },
  { value: "this-month", label: "This month", sub: "Planning ahead" },
  { value: "flexible", label: "Flexible", sub: "Whenever fits" },
];

export default function QuotePage() {
  const [selected, setSelected] = useState<Set<string>>(new Set());
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  function toggle(slug: string) {
    setSelected((prev) => {
      const next = new Set(prev);
      if (next.has(slug)) next.delete(slug);
      else next.add(slug);
      return next;
    });
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    const formData = new FormData(e.currentTarget);
    const payload = {
      services: Array.from(selected),
      ...Object.fromEntries(formData.entries()),
    };
    console.log("[Love Branch quote request]", payload);
    await new Promise((r) => setTimeout(r, 500));
    setSubmitting(false);
    setSubmitted(true);
  }

  return (
    <>
      <section className="quote-hero">
        <div className="wrap">
          <nav className="breadcrumb breadcrumb-light" aria-label="Breadcrumb">
            <Link href="/">Love Branch</Link>
            <span aria-hidden="true">/</span>
            <span aria-current="page">Free Quote</span>
          </nav>
          <div className="quote-hero-grid">
            <div>
              <span className="eyebrow hero-eyebrow">
                <span className="dot"></span>
                Quotes back within 2 hours
              </span>
              <h1 className="reveal">
                Tell us about the job — we&apos;ll <em>quote it fast</em>.
              </h1>
              <p className="lede reveal delay-1">
                Free, no-pressure quote for any tree or yard work across San Diego County.
                Prefer to talk it through?
                {" "}
                <a href="tel:6193300801" className="quote-hero-tel">
                  Call (619) 330-0801
                </a>
                {" "}— we answer live.
              </p>
            </div>
            <aside className="quote-stamp-aside" aria-hidden="true">
              <div className="hero-stamp">
                <div className="hero-stamp-ring">
                  <span className="hero-stamp-mark">★</span>
                  <span className="hero-stamp-title">Licensed</span>
                  <span className="hero-stamp-title">Insured</span>
                  <span className="hero-stamp-title">Bonded</span>
                  <span className="hero-stamp-num">#1146955</span>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section className="quote-body">
        <div className="wrap">
          <div className="quote-layout">
            <main className="quote-main">
              {submitted ? (
                <div className="quote-success quote-success-large reveal" role="status">
                  <span className="quote-success-mark" aria-hidden="true">✓</span>
                  <strong>Thanks — we got it.</strong>
                  <p>
                    A team member will be in touch within a couple of hours during business
                    hours. For anything urgent, please call{" "}
                    <a href="tel:6193300801">(619) 330-0801</a>.
                  </p>
                  <Link href="/" className="btn btn-secondary" style={{ marginTop: 24 }}>
                    ← Back to home
                  </Link>
                </div>
              ) : (
                <form className="quote-form-page" onSubmit={handleSubmit} noValidate>
                  {/* STEP 1: SERVICE */}
                  <div className="quote-step">
                    <header className="quote-step-head">
                      <span className="quote-step-num">01</span>
                      <div>
                        <h2>What do you need?</h2>
                        <p>Pick one or more — we can quote a whole package.</p>
                      </div>
                    </header>

                    <fieldset className="quote-service-grid">
                      <legend className="sr-only">Select a service</legend>
                      {SERVICE_OPTIONS.map((s) => {
                        const isOn = selected.has(s.slug);
                        return (
                          <label key={s.slug} className={`quote-service-card ${isOn ? "is-on" : ""}`}>
                            <input
                              type="checkbox"
                              name="services-input"
                              value={s.slug}
                              checked={isOn}
                              onChange={() => toggle(s.slug)}
                            />
                            <span className="quote-service-icon" aria-hidden="true">{s.icon}</span>
                            <span className="quote-service-label">{s.label}</span>
                            <span className="quote-service-tick" aria-hidden="true">
                              <svg viewBox="0 0 16 16" width="12" height="12">
                                <path d="M3 8l3.2 3L13 5" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
                              </svg>
                            </span>
                          </label>
                        );
                      })}
                    </fieldset>
                  </div>

                  {/* STEP 2: PROPERTY */}
                  <div className="quote-step">
                    <header className="quote-step-head">
                      <span className="quote-step-num">02</span>
                      <div>
                        <h2>About the property.</h2>
                        <p>A little context helps us send the right crew.</p>
                      </div>
                    </header>

                    <div className="quote-field-block">
                      <span className="quote-field-label">Property type</span>
                      <div className="quote-pill-group" role="radiogroup" aria-label="Property type">
                        {PROPERTY_OPTIONS.map((p) => (
                          <label key={p.value} className="quote-pill">
                            <input type="radio" name="property" value={p.value} />
                            <span>{p.label}</span>
                          </label>
                        ))}
                      </div>
                    </div>

                    <div className="quote-field-block">
                      <span className="quote-field-label">How urgent?</span>
                      <div className="quote-urgency-group" role="radiogroup" aria-label="Urgency">
                        {URGENCY_OPTIONS.map((u) => (
                          <label key={u.value} className="quote-urgency">
                            <input type="radio" name="urgency" value={u.value} />
                            <span className="quote-urgency-card">
                              <strong>{u.label}</strong>
                              <small>{u.sub}</small>
                            </span>
                          </label>
                        ))}
                      </div>
                    </div>

                    <label className="quote-field quote-field-full quote-field-light">
                      <span>Tell us about the job <em>(optional)</em></span>
                      <textarea
                        name="message"
                        rows={4}
                        placeholder="e.g. Two palm trees in the backyard need trimming, plus a hedge along the fence. Hillside is about 30 feet wide."
                      />
                    </label>
                  </div>

                  {/* STEP 3: CONTACT */}
                  <div className="quote-step quote-step-final">
                    <header className="quote-step-head">
                      <span className="quote-step-num">03</span>
                      <div>
                        <h2>Where do we send the quote?</h2>
                        <p>We&apos;ll text or call — your choice.</p>
                      </div>
                    </header>

                    <div className="quote-row">
                      <label className="quote-field quote-field-light">
                        <span>Name</span>
                        <input type="text" name="name" required autoComplete="name" placeholder="Your name" />
                      </label>
                      <label className="quote-field quote-field-light">
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
                      <label className="quote-field quote-field-light">
                        <span>Email <em>(optional)</em></span>
                        <input type="email" name="email" autoComplete="email" placeholder="you@example.com" />
                      </label>
                      <label className="quote-field quote-field-light">
                        <span>Address or area <em>(optional)</em></span>
                        <input type="text" name="address" autoComplete="street-address" placeholder="City, ZIP, or full address" />
                      </label>
                    </div>

                    <button type="submit" className="quote-submit quote-submit-light" disabled={submitting}>
                      {submitting ? "Sending…" : "Request my free quote →"}
                    </button>
                    <p className="quote-note quote-note-light">
                      We answer fast. By submitting you agree to be contacted about your request — no spam, no list-selling, ever.
                    </p>
                  </div>
                </form>
              )}
            </main>

            <aside className="quote-rail" aria-label="What happens next">
              <div className="quote-rail-card">
                <span className="section-kicker">What happens next</span>
                <ol className="quote-rail-steps">
                  <li>
                    <span className="quote-rail-num">1</span>
                    <div>
                      <strong>We text back fast.</strong>
                      <p>Most quotes go out within 2 business hours.</p>
                    </div>
                  </li>
                  <li>
                    <span className="quote-rail-num">2</span>
                    <div>
                      <strong>Free walk-through.</strong>
                      <p>We come look at the work and give you a fixed written price.</p>
                    </div>
                  </li>
                  <li>
                    <span className="quote-rail-num">3</span>
                    <div>
                      <strong>Schedule &amp; done.</strong>
                      <p>Most jobs on the calendar within the week. Spotless cleanup.</p>
                    </div>
                  </li>
                </ol>
              </div>

              <a href="tel:6193300801" className="quote-rail-call">
                <span className="quote-rail-call-eyebrow">Or call us live</span>
                <span className="quote-rail-call-num">(619) 330-0801</span>
                <span className="quote-rail-call-hours">Mon–Sun · 6am–9pm</span>
              </a>

              <div className="quote-rail-trust">
                <div className="quote-rail-trust-row">
                  <div className="stars" aria-hidden="true">★★★★★</div>
                  <strong>5.0 · 150+ reviews</strong>
                </div>
                <div className="quote-rail-trust-row">
                  <span className="quote-rail-trust-label">License</span>
                  <strong>CSLB&nbsp;#1146955</strong>
                </div>
                <div className="quote-rail-trust-row">
                  <span className="quote-rail-trust-label">First-time discount</span>
                  <strong>$100 off jobs $500+</strong>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}
