"use client";

import { useState, useMemo, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

type Category = "all" | "tree" | "hillside" | "lawn" | "hardscape" | "fence";

const FILTERS: { id: Category; label: string }[] = [
  { id: "all", label: "All work" },
  { id: "tree", label: "Tree care" },
  { id: "hillside", label: "Hillside & weed" },
  { id: "lawn", label: "Lawn & turf" },
  { id: "hardscape", label: "Hardscape" },
  { id: "fence", label: "Fence & haul" },
];

type Project = {
  id: string;
  title: string;
  location: string;
  service: string;
  category: Exclude<Category, "all">;
  blurb: string;
  img: string;
  alt: string;
  size: "wide" | "tall" | "square";
};

const PROJECTS: Project[] = [
  {
    id: "encinitas-eucalyptus",
    title: "Two mature eucalyptus, gone in a day",
    location: "Encinitas",
    service: "Tree removal",
    category: "tree",
    blurb:
      "Two 60-foot blue gum eucalyptus leaning over the roofline. Rigged down in tight spots, ground out the stumps, hauled every chip.",
    img: "/images/before-after.avif",
    alt: "Before and after — two eucalyptus trees removed from a San Diego backyard",
    size: "wide",
  },
  {
    id: "del-mar-palms",
    title: "Six skinned queen palms, redefined hedge line",
    location: "Del Mar",
    service: "Hedge & palm care",
    category: "tree",
    blurb:
      "Annual palm skinning plus a complete reshape on the privet hedge along the property line. Clean cuts, healthy fronds, sharp geometry.",
    img: "/images/hedge-palm.avif",
    alt: "Freshly trimmed queen palms with crisp privet hedge line in Del Mar",
    size: "tall",
  },
  {
    id: "chula-vista-weeds",
    title: "Reclaimed a half-acre side lot",
    location: "Chula Vista",
    service: "Weed abatement",
    category: "hillside",
    blurb:
      "Owner couldn't see the back fence. Full abatement plus targeted treatment to keep it from coming back next season.",
    img: "/images/weed-abatement.avif",
    alt: "Half-acre side lot cleared of overgrown weeds in Chula Vista",
    size: "square",
  },
  {
    id: "poway-hillside",
    title: "Hillside cleared for insurance compliance",
    location: "Poway",
    service: "Hillside fire clearing",
    category: "hillside",
    blurb:
      "Insurer flagged the slope as non-compliant. We cleared the defensible-space zones and produced the documentation the policy required.",
    img: "/images/hillside-clearing.jpg",
    alt: "Cleared Poway hillside meeting CalFire defensible space requirements",
    size: "wide",
  },
  {
    id: "la-mesa-lawn",
    title: "Patchy lawn turned magazine-clean",
    location: "La Mesa",
    service: "Lawn care",
    category: "lawn",
    blurb:
      "Three rounds of aeration, fertilization, and edge work. Now on a bi-weekly maintenance program — the neighbors keep asking.",
    img: "/images/lawn-care.jpg",
    alt: "Newly maintained green lawn with crisp edging in La Mesa front yard",
    size: "tall",
  },
  {
    id: "carlsbad-turf",
    title: "1,800 sq ft of premium turf",
    location: "Carlsbad",
    service: "Turf install",
    category: "lawn",
    blurb:
      "Replaced an old sod lawn with premium pet-rated turf. Heavy compaction, weed barrier, decomposed-granite border, no maintenance ever again.",
    img: "/images/turf-sod.jpg",
    alt: "Premium artificial turf install in a Carlsbad backyard",
    size: "square",
  },
  {
    id: "north-park-pavers",
    title: "Paver path, DG border, drought ground cover",
    location: "North Park",
    service: "Hardscape",
    category: "hardscape",
    blurb:
      "Rebuilt the front walk in charcoal pavers, framed with decomposed granite and drought-tolerant ground cover. Low water, high curb appeal.",
    img: "/images/hardscaping.jpg",
    alt: "Charcoal paver walkway with decomposed granite border in North Park",
    size: "wide",
  },
  {
    id: "el-cajon-fence",
    title: "120-foot redwood privacy fence",
    location: "El Cajon",
    service: "Fence install",
    category: "fence",
    blurb:
      "Tore out an aging chain-link, set new concrete footings, ran 120 feet of dog-eared redwood. Crisp line, clean caps, no gaps.",
    img: "/images/fence.jpg",
    alt: "New redwood privacy fence installed along an El Cajon property line",
    size: "tall",
  },
  {
    id: "santee-haul",
    title: "Cleared a decade of yard debris in one day",
    location: "Santee",
    service: "Junk hauling",
    category: "fence",
    blurb:
      "Old trampoline, half a fence, two pallets of bricks, and a mountain of green waste. Two truckloads, same day, gone.",
    img: "/images/junk-hauling.jpg",
    alt: "Truckload of yard debris and old fencing hauled from a Santee property",
    size: "square",
  },
  {
    id: "oceanside-removal",
    title: "Storm-damaged ficus, emergency call",
    location: "Oceanside",
    service: "Tree removal",
    category: "tree",
    blurb:
      "Called at 8pm after a wind storm split a 40-foot ficus over the driveway. On site by 9am the next morning. Driveway and gutter intact.",
    img: "/images/tree-removal.jpg",
    alt: "Storm-damaged ficus tree removed from an Oceanside driveway",
    size: "wide",
  },
];

export default function WorkPage() {
  const [active, setActive] = useState<Category>("all");
  const [open, setOpen] = useState<Project | null>(null);

  const filtered = useMemo(
    () => (active === "all" ? PROJECTS : PROJECTS.filter((p) => p.category === active)),
    [active]
  );

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(null);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <>
      <section className="work-hero">
        <div className="wrap">
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <Link href="/">Love Branch</Link>
            <span aria-hidden="true">/</span>
            <span aria-current="page">Recent Work</span>
          </nav>
          <span className="eyebrow hero-eyebrow">
            <span className="dot"></span>
            From the last twelve months
          </span>
          <h1 className="reveal">
            A small field guide to our <em>recent work</em>.
          </h1>
          <p className="lede reveal delay-1">
            Snapshots from yards, hillsides, and properties across San Diego County. The crew
            you see in these photos is the crew that will show up at your door.
          </p>
        </div>
      </section>

      <section className="work-body">
        <div className="wrap">
          <div className="work-controls" role="tablist" aria-label="Filter projects">
            {FILTERS.map((f) => (
              <button
                key={f.id}
                type="button"
                role="tab"
                aria-selected={active === f.id}
                className={`work-chip ${active === f.id ? "is-on" : ""}`}
                onClick={() => setActive(f.id)}
              >
                {f.label}
              </button>
            ))}
          </div>

          <div className="work-grid">
            {filtered.map((p, i) => (
              <article
                key={p.id}
                className={`work-card work-${p.size} reveal delay-${(i % 4) + 1}`}
              >
                <button
                  type="button"
                  className="work-card-trigger"
                  onClick={() => setOpen(p)}
                  aria-label={`Open project: ${p.title}`}
                >
                  <div className="work-photo">
                    <Image
                      src={p.img}
                      alt={p.alt}
                      width={900}
                      height={p.size === "tall" ? 1200 : p.size === "wide" ? 600 : 900}
                      sizes="(max-width: 720px) 100vw, (max-width: 1100px) 50vw, 33vw"
                    />
                    <span className="work-tag">{p.service}</span>
                  </div>
                  <div className="work-meta">
                    <span className="work-location">
                      <svg viewBox="0 0 16 16" width="11" height="11" aria-hidden="true">
                        <path d="M8 1.5C5.2 1.5 3 3.7 3 6.5c0 3.6 5 8 5 8s5-4.4 5-8c0-2.8-2.2-5-5-5zm0 7a2 2 0 110-4 2 2 0 010 4z" fill="currentColor" />
                      </svg>
                      {p.location}
                    </span>
                    <h2>{p.title}</h2>
                  </div>
                </button>
              </article>
            ))}
          </div>

          {filtered.length === 0 && (
            <p className="work-empty">No projects in this category yet — check back soon.</p>
          )}
        </div>
      </section>

      <section className="work-cta">
        <div className="wrap work-cta-inner">
          <div>
            <span className="section-kicker on-dark">Your yard, next</span>
            <h2>
              Want your place in <em>the next batch</em>?
            </h2>
            <p>Tell us about the job — we&apos;ll quote it fast.</p>
          </div>
          <div className="work-cta-actions">
            <Link href="/quote" className="btn btn-primary">
              Get free quote →
            </Link>
            <a href="tel:6193300801" className="btn btn-secondary work-cta-btn-light">
              📞 (619) 330-0801
            </a>
          </div>
        </div>
      </section>

      {open && (
        <div
          className="work-lightbox"
          role="dialog"
          aria-modal="true"
          aria-labelledby="work-lightbox-title"
          onClick={(e) => {
            if (e.target === e.currentTarget) setOpen(null);
          }}
        >
          <div className="work-lightbox-inner">
            <button
              type="button"
              className="work-lightbox-close"
              aria-label="Close"
              onClick={() => setOpen(null)}
            >
              ×
            </button>
            <div className="work-lightbox-photo">
              <Image
                src={open.img}
                alt={open.alt}
                width={1400}
                height={1000}
                sizes="100vw"
                priority
              />
            </div>
            <div className="work-lightbox-body">
              <span className="work-lightbox-tag">{open.service}</span>
              <h3 id="work-lightbox-title">{open.title}</h3>
              <p className="work-lightbox-location">
                <svg viewBox="0 0 16 16" width="12" height="12" aria-hidden="true">
                  <path d="M8 1.5C5.2 1.5 3 3.7 3 6.5c0 3.6 5 8 5 8s5-4.4 5-8c0-2.8-2.2-5-5-5zm0 7a2 2 0 110-4 2 2 0 010 4z" fill="currentColor" />
                </svg>
                {open.location}, CA
              </p>
              <p className="work-lightbox-blurb">{open.blurb}</p>
              <div className="work-lightbox-actions">
                <Link href="/quote" className="btn btn-primary" onClick={() => setOpen(null)}>
                  Quote my project →
                </Link>
                <a href="tel:6193300801" className="btn btn-secondary">
                  📞 Call us
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
