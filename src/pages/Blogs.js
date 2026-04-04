import { useState, useEffect } from "react";
import "../styles/blogs.css";
import innovation from "../assets/innovation.png";
import authorImg from "../assets/avatar.png";

function Blogs() {
  const [sortOption, setSortOption] = useState("Newest");
  const [currentPage, setCurrentPage] = useState(1);
  const [blogs, setBlogs] = useState([]);

  const blogsPerPage = 6;

  useEffect(() => {
    fetch("http://13.50.252.177:3000/blog")
      .then((res) => res.json())
      .then((data) => {
        console.log("Backend response:", data);

        // Handle backend response safely
        let blogArray = [];
        if (Array.isArray(data)) {
          blogArray = data;
        } else if (data.blogs && Array.isArray(data.blogs)) {
          blogArray = data.blogs;
        } else if (data.data && Array.isArray(data.data)) {
          blogArray = data.data;
        }

        setBlogs(blogArray);
      })
      .catch((err) => console.error("Fetch error:", err));
  }, []);

  // ✅ SORTING
  const sortedBlogs = [...blogs].sort((a, b) => {
    const dateA = new Date(a.date || a.createdAt || 0);
    const dateB = new Date(b.date || b.createdAt || 0);

    return sortOption === "Oldest" ? dateA - dateB : dateB - dateA;
  });

  // ✅ PAGINATION
  const indexOfLast = currentPage * blogsPerPage;
  const indexOfFirst = indexOfLast - blogsPerPage;
  const currentBlogs = sortedBlogs.slice(indexOfFirst, indexOfLast);
  const totalPages = Math.ceil(blogs.length / blogsPerPage);

  return (
    <div className="blogs-page">
      {/* HERO SECTION */}
      <section className="blog-hero">
        <img src={innovation} alt="Innovation Book" className="innovation-img" />
        <div className="hero-overlay">
          <div className="hero-left">
            <h1>How Innovation Works</h1>
            <p>Blog section...</p>
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

      {/* BLOG GRID */}
      <section className="blogs-section">
        <div className="blog-grid">
          {currentBlogs.map((blog) => (
            <div key={blog._id || blog.id} className="blog-card">
              <div className="blog-image">
                <img src={blog.image || innovation} alt="blog" />
              </div>
              <h3>{blog.title}</h3>
              <div className="blog-meta">
                <span>{blog.authorName}</span>
              </div>
              <p>{blog.content?.replace(/<[^>]*>/g, "").slice(0, 120)}...</p>
              <button className="read-btn">Read Now</button>
            </div>
          ))}
        </div>

        {/* PAGINATION */}
        <div className="pagination">
          <span onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}>
            &lt;
          </span>

          {[...Array(totalPages)].map((_, i) => (
            <span
              key={i}
              className={currentPage === i + 1 ? "active" : ""}
              onClick={() => setCurrentPage(i + 1)}
            >
              {i + 1}
            </span>
          ))}

          <span onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}>
            &gt;
          </span>
        </div>
      </section>
    </div>
  );
}

export default Blogs;