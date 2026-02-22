import bg from "../assets/bg.png";
import avatar from "../assets/avatar.png";
import "../styles/about.css";

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
            Our mission is to connect musicians with clients worldwide,
            providing a seamless platform for booking and collaboration.
          </p>
        </div>

        <div className="divider"></div>

        <div className="vision">
          <h2>The GwaiPro Vision</h2>
          <p>We connect musicians around the world</p>
        </div>
      </section>

      {/* TEAM SECTION */}
      <section className="team">
        <h2>Team GwaiPro</h2>

        <div className="team-grid">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <div key={item} className="team-card">
              <p className="role">Co-Founder and CEO</p>
              <img src={avatar} alt="team" className="avatar" />
              <h3>Mr. Donald Gwaikolo</h3>
              <p className="role">Co-Founder and CEO</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default About;