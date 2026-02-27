import "../styles/ComingSoon.css";
import { useState } from "react";
import checkbox from "../assets/checkbox.png";

function ComingSoon() {
  /* ================= STATE ================= */
  const [email, setEmail] = useState("");
  const [showModal, setShowModal] = useState(false);

  /* ================= HANDLER ================= */
  const handleJoinWaitlist = (e) => {
    e.preventDefault();

    if (!email) return;

    // later connect API here

    setShowModal(true);
    setEmail("");
  };

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

        {/* WAITLIST FORM */}
        <form className="waitlist-form" onSubmit={handleJoinWaitlist}>

          <div className="input-wrapper">
            <span className="input-label">email address</span>

            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <button type="submit">
            Join the Waitlist
          </button>

        </form>

      </section>

      {/* ================= ABOUT ================= */}
      <section className="about-section">
        <div className="about-grid">

          <h2 className="big-title">ABOUT US</h2>
          <p className="tagline">
            We are musicians who build for musicians
          </p>

          <p className="body-text">
            Our vision is to transform the global music industry by
            connecting musicians around the world and building a strong,
            supportive community.
          </p>

          <h2 className="big-title">OUR VISION</h2>

          <h2 className="big-title">OUR MISSION</h2>
          <p className="body-text">
            Our mission is to connect musicians with clients around
            the world through a simple, seamless platform for
            bookings and collaborations.
          </p>

        </div>
      </section>

      {/* ================= SUCCESS MODAL ================= */}
      {showModal && (
        <div className="modal-overlay">

          <div className="success-modal">

            {/* Close Button */}
            <button
              className="modal-close"
              onClick={() => setShowModal(false)}
            >
              ×
            </button>

            {/* Top Green Section */}
            <div className="modal-top">
              <img src={checkbox} alt="Success" />
            </div>

            {/* Bottom White Section */}
            <div className="modal-body">
              <h3>Success</h3>
              <p>
                Congratulations! You’ve successfully joined our waitlist.
                We’ll notify you as soon as we launch.
              </p>
            </div>

          </div>

        </div>
      )}

    </div>
  );
}

export default ComingSoon;