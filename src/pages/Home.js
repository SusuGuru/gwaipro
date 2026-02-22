import "../styles/home.css";

function Home() {
  return (
    <div>
      <section className="hero">
        <h1>The Home of Value for Musicians</h1>
        <p>We connect musicians around the world</p>
      </section>

      <section className="how-section">
        <div className="how-text">
          <h2>How It Works</h2>
          <p>We connect musicians around the world</p>
        </div>

        <div className="phone-mockups">
          <div className="mock"></div>
          <div className="mock"></div>
          <div className="mock"></div>
        </div>
      </section>

      <section className="blog-preview">
        <h2>Blogs</h2>
        <div className="blog-grid">
          {[1,2,3,4,5,6].map((item) => (
            <div key={item} className="blog-card"></div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Home;