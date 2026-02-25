import "../styles/ComingSoon.css";

function ComingSoon() {
  return (
    <div className="coming-page">

      {/* ================= HERO ================= */}
      <section className="coming-hero">
        <h1>COMING SOON</h1>

        <p className="hero-sub">
          Discover a better way to <br />
          connect with talented musicians!
        </p>

        <p className="hero-small">
          Sign up now to join our waitlist and be among the first to
          access exclusive features.
        </p>

        <div className="waitlist-form">
  <div className="input-wrapper">
    <span className="input-label">email address</span>
    <input type="email" placeholder="example@example.com" />
  </div>
  <button>Join the Waitlist</button>
</div>
      </section>

      <section className="about-section">
  <div className="about-grid">

    {/* ROW 1 */}
    <h2 className="big-title">ABOUT US</h2>
    <p className="tagline">
      We are musicians who build for musicians
    </p>

    {/* ROW 2 */}
    <p className="body-text">
      Our vision is to transform the global music industry by
      connecting musicians around the world and building a strong,
      supportive community.
    </p>
    <h2 className="big-title">OUR VISION</h2>

    {/* ROW 3 */}
    <h2 className="big-title">OUR MISSION</h2>
    <p className="body-text">
      Our mission is to connect musicians with clients around
      the world through a simple, seamless platform for
      bookings and collaborations.
    </p>

  </div>
</section>

    </div>
  );
}

export default ComingSoon;