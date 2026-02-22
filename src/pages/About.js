import "../styles/about.css";

function About() {
  return (
    <div className="about-page">
      <section className="about-hero">
        <h1>About GwaiPro</h1>
        <p>We connect musicians around the world</p>
      </section>

      <section className="mission-vision">
        <div>
          <h2>The GwaiPro Mission</h2>
          <p>
            Our mission is to connect musicians with clients worldwide,
            providing a seamless platform for booking and collaboration.
          </p>
        </div>

        <div>
          <h2>The GwaiPro Vision</h2>
          <p>We connect musicians around the world</p>
        </div>
      </section>

      <section className="team">
        <h2>Team GwaiPro</h2>
        <div className="team-grid">
          {[1,2,3,4,5,6].map((item) => (
            <div key={item} className="team-card">
              <div className="avatar"></div>
              <h3>Mr. Donald Gwaikolo</h3>
              <p>Co-Founder and CEO</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default About;