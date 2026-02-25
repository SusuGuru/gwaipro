import bg from "../assets/bg.png";
import "../styles/about.css";
import divider from "../assets/divider.png";

function About() {
  return (
    <div
      className="about-wrapper"
      style={{
        backgroundImage: `url(${bg})`,
      }}
    >
      {/* HERO SECTION */}
      <section className="about-hero">
        <h1>About GwaiPro</h1>
        <p>We connect musicians around the world</p>
      </section>

      {/* MISSION & VISION */}
      <section className="mission-vision">
        <div className="mission">
          <h2>The GwaiPro Mission</h2>
          <p>
            Our mission is to connect musicians with clients around the world
            through a simple, seamless platform for bookings and collaborations.
          </p>
        </div>

        <img src={divider} alt="divider" className="about-divider" />

        <div className="vision">
          <h2>The GwaiPro Vision</h2>
          <p>
            Our vision is to transform the global music industry by connecting
            musicians around the world and building a strong, supportive
            community.
          </p>
        </div>
      </section>

      {/* TEAM SECTION */}
      <section className="team">
        <h2>Team GwaiPro</h2>

        <p
          style={{
            maxWidth: "800px",
            margin: "0 auto",
            fontSize: "16px",
            lineHeight: "1.8",
            color: "#0e5f59",
          }}
        >
          Team GwaiPro is a small team of inspired musicians working full-time
          in music, software development, design, and marketing who have come
          together with a common goal of solving problems in the music space,
          and creating value for musicians.
          <br />
          <br />
          <strong>GwaiPro is built by musicians, for musicians.</strong>
        </p>
      </section>
    </div>
  );
}

export default About;