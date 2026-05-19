export function CTASection() {
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
          Call now for a free quote — most calls answered live, even on weekends.
        </p>
        <a href="tel:6193300801" className="cta-phone reveal delay-2">
          (619) 330-0801
        </a>
        <div className="cta-hours">Mon–Sun 6am–9pm · Same-day quotes</div>
      </div>
    </section>
  );
}
