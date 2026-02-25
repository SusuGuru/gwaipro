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
          <input
            type="email"
            placeholder="example@example.com"
          />
          <button>Join the Waitlist</button>
        </div>
      </section>

      {/* ================= ABOUT / VISION ================= */}
      <section className="about-section">

        <div className="about-grid">

          {/* LEFT */}
          <div className="about-left">
            <h2>ABOUT US</h2>

            <p>
              Our vision is to transform the global music industry by
              connecting musicians around the world and building a
              strong, supportive community.
            </p>

            <h2 className="mission-title">OUR MISSION</h2>
          </div>

          {/* RIGHT */}
          <div className="about-right">
            <p className="tagline">
              We are musicians who build for musicians
            </p>

            <h2>OUR VISION</h2>

            <p>
              Our mission is to connect musicians with clients around
              the world through a simple, seamless platform for
              bookings and collaborations.
            </p>
          </div>

        </div>

      </section>

    </div>
  );
}

export default ComingSoon;