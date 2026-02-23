import "../styles/blogs.css";
import innovation from "../assets/innovation.png";
import blogImg from "../assets/blog.png";
import authorImg from "../assets/avatar.png"

function Blogs() {
  return (
    <div className="blogs-page">

      {/* ================= HERO SECTION ================= */}
      <section className="blog-hero">
        <img src={innovation} alt="Innovation Book" className="innovation-img" />

        <div className="hero-overlay">
          <div className="hero-left">
            <h1>How Innovation Works</h1>
            <p>
              This blog is about making innovative decisions in music,
              never gets old...
            </p>
            <button className="hero-btn">Read Now</button>
          </div>

          <div className="hero-right">
            <div className="author">
              <img src={authorImg} alt="Author" className="author-img" />
              <div>
                <h4>Josiah Sarbah</h4>
                <span>24 Jan 2026 • 10 min read</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= BLOG SECTION ================= */}
      <section className="blogs-section">

        <div className="blogs-header">
          <div className="header-left">
            <h2>Blogs</h2>
            <p>
              Get exciting news from our blogs all year round and keep in
              touch with every update.
            </p>
          </div>

          <div className="sort">
            <span>Sort By</span>
            <button className="sort-btn">
              Newest <span className="arrow">▾</span>
            </button>
          </div>
        </div>

        {/* ================= BLOG GRID ================= */}
        <div className="blog-grid">

          {/* BLOG CARD */}
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <div key={item} className="blog-card">

              <div className="blog-image">
                <img src={blogImg} alt="The Psychology of Money" />
              </div>

              <div className="blog-content">
                <h3>The Psychology of Money</h3>

                <div className="blog-meta">
                  <span>Author: Morgan Housel</span>
                  <span> | </span>
                  <span>Published on 14 Jan, 2026</span>
                </div>

                <p>
                  This book is about the need to understand how money works
                  for musicians so that they don’t end up being broke.
                  You will realize that wealth is not about income but
                  about behavior and long-term discipline.
                </p>

                <button className="read-btn">Read Now</button>
              </div>

            </div>
          ))}

        </div>

        {/* ================= PAGINATION ================= */}
        <div className="pagination">
          <span className="nav">&lt;</span>
          <span className="page active">1</span>
          <span className="page">2</span>
          <span className="page">3</span>
          <span className="nav">&gt;</span>
        </div>

      </section>
    </div>
  );
}

export default Blogs;