import Link from "next/link";
import Image from "next/image";

export function Footer() {
  return (
    <footer>
      <div className="wrap">
        <div className="foot-grid">
          <div className="foot foot-brand">
            <Link href="/" className="logo" style={{ color: "var(--cream)" }}>
              <span className="logo-mark" aria-hidden="true">
                <Image src="/images/logo.avif" alt="" width={36} height={36} />
              </span>
              <span className="logo-text">Love Branch</span>
            </Link>
            <p>
              San Diego&apos;s trusted tree and yard care team. Licensed, insured, and proud to
              serve all of San Diego County.
            </p>
          </div>
          <div className="foot">
            <h4>Services</h4>
            <ul>
              <li><Link href="/services/tree-removal">Tree Removal</Link></li>
              <li><Link href="/services/hillside-fire-clearing">Hillside Clearing</Link></li>
              <li><Link href="/services/weed-abatement">Weed Abatement</Link></li>
              <li><Link href="/services/lawn-care">Lawn Care</Link></li>
              <li><Link href="/services/turf-sod-installation">Turf & Sod</Link></li>
              <li><Link href="/services/fence-installation">Fence Install</Link></li>
            </ul>
          </div>
          <div className="foot">
            <h4>Areas</h4>
            <ul>
              <li><Link href="/areas-we-serve">All Service Areas</Link></li>
              <li>Chula Vista</li>
              <li>Poway</li>
              <li>El Cajon</li>
              <li>La Mesa</li>
              <li>Carlsbad</li>
            </ul>
          </div>
          <div className="foot">
            <h4>Contact</h4>
            <ul>
              <li><a href="tel:6193300801">(619) 330-0801</a></li>
              <li><a href="mailto:info@lovebranchsd.com">info@lovebranchsd.com</a></li>
              <li>770 1st Ave, Ste 250</li>
              <li>San Diego, CA 92101</li>
              <li>License #1146955</li>
            </ul>
          </div>
        </div>
        <div className="foot-bottom">
          © {new Date().getFullYear()} Love Branch Tree & Yard. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
