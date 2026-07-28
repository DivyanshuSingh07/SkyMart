export default function Newsletter() {
  return (
    <section className="newsletter">

      <h2>
        Stay Updated
      </h2>

      <p>
        Subscribe to receive exclusive offers,
        product launches, and seasonal discounts.
      </p>

      <div className="newsletter-form">

        <input
          type="email"
          placeholder="Enter your email"
        />

        <button>
          Subscribe
        </button>

      </div>

    </section>
  );
}