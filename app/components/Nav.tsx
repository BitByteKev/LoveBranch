import Link from "next/link";
import Image from "next/image";

export function Nav() {
  return (
    <nav className="main">
      <div className="wrap nav-inner">
        <Link href="/" className="logo" aria-label="Love Branch home">
          <span className="logo-mark" aria-hidden="true">
            <Image
              src="/images/logo.avif"
              alt=""
              width={36}
              height={36}
              priority
            />
          </span>
          <span className="logo-text">Love Branch</span>
        </Link>
        <div className="nav-links">
          <Link href="/#services">Services</Link>
          <Link href="/work">Work</Link>
          <Link href="/areas-we-serve">Areas</Link>
          <Link href="/#reviews">Reviews</Link>
        </div>
        <div className="nav-actions">
          <Link href="/quote" className="nav-quote">Free quote</Link>
          <a href="tel:6193300801" className="nav-cta">
            <span aria-hidden="true">📞</span>
            <span className="nav-cta-number">(619) 330-0801</span>
          </a>
        </div>
      </div>
    </nav>
  );
}
