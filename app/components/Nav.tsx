import Link from "next/link";

export function Nav() {
  return (
    <nav className="main">
      <div className="wrap nav-inner">
        <Link href="/" className="logo" aria-label="Love Branch home">
          <span className="logo-mark" aria-hidden="true">🌳</span>
          Love Branch
        </Link>
        <div className="nav-links">
          <Link href="/#services">Services</Link>
          <Link href="/areas-we-serve">Areas</Link>
          <Link href="/#reviews">Reviews</Link>
          <Link href="/#why">Why Us</Link>
        </div>
        <a href="tel:6193300801" className="nav-cta">
          📞 (619) 330-0801
        </a>
      </div>
    </nav>
  );
}
