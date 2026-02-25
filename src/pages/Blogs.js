import { useState } from "react";
import "../styles/blogs.css";
import innovation from "../assets/innovation.png";
import blogImg from "../assets/blog.png";
import authorImg from "../assets/avatar.png";

function Blogs() {
  const [sortOption, setSortOption] = useState("Newest");
  const [currentPage, setCurrentPage] = useState(1);

  const blogsPerPage = 6;

  // Dummy blog data (same blogs repeated for now)
  const blogs = Array.from({ length: 18 }, (_, i) => ({
    id: i + 1,
    title: "The Psychology of Money",
    author: "Morgan Housel",
    date: "14 Jan, 2026",
  }));

  // Sorting (for now result looks same but logic works)
  const sortedBlogs = [...blogs].sort((a, b) => {
    if (sortOption === "Oldest") return a.id - b.id;
    return b.id - a.id;
  });

  // Pagination logic
  const indexOfLast = currentPage * blogsPerPage;
  const indexOfFirst = indexOfLast - blogsPerPage;
  const currentBlogs = sortedBlogs.slice(indexOfFirst, indexOfLast);

  const totalPages = Math.ceil(blogs.length / blogsPerPage);

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
            <select
              className="sort-btn"
              value={sortOption}
              onChange={(e) => setSortOption(e.target.value)}
            >
              <option value="Newest">Newest</option>
              <option value="Oldest">Oldest</option>
            </select>
          </div>
        </div>

        {/* ================= BLOG GRID ================= */}
        <div className="blog-grid">
          {currentBlogs.map((blog) => (
            <div key={blog.id} className="blog-card">

              <div className="blog-image">
                <img src={blogImg} alt="The Psychology of Money" />
              </div>

              <h3>{blog.title}</h3>

              <div className="blog-meta">
                <span>Author: {blog.author}</span>
                <span> | </span>
                <span>Published on {blog.date}</span>
              </div>

              <p>
                This book is about the need to understand how money works
                for musicians so that they don’t end up being broke.
                You will realize that wealth is not about income but
                about behavior and long-term discipline.
              </p>

              <button className="read-btn">Read Now</button>

            </div>
          ))}
        </div>

        {/* ================= PAGINATION ================= */}
        <div className="pagination">

          <span
            className="nav"
            onClick={() =>
              setCurrentPage((prev) => (prev > 1 ? prev - 1 : prev))
            }
          >
            &lt;
          </span>

          {[...Array(totalPages)].map((_, index) => (
            <span
              key={index}
              className={`page ${currentPage === index + 1 ? "active" : ""}`}
              onClick={() => setCurrentPage(index + 1)}
            >
              {index + 1}
            </span>
          ))}

          <span
            className="nav"
            onClick={() =>
              setCurrentPage((prev) =>
                prev < totalPages ? prev + 1 : prev
              )
            }
          >
            &gt;
          </span>

        </div>

      </section>
    </div>
  );
}

export default Blogs;