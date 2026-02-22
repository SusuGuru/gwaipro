import "../styles/blogs.css";
import innovation from "../assets/innovation.png";
import blogImg from "../assets/blog.png";

function Blogs() {
  return (
    <div className="blogs-page">
      <div className="blog-hero">
        <div className="blog-hero">
  <img src={innovation} alt="Innovation" className="innovation-img" />

  <div className="hero-overlay">
    <h1>How Innovation Works</h1>
    <button>Read Now</button>
  </div>
</div>
        <h1>How Innovation Works</h1>
        <button>Read Now</button>
      </div>

      <div className="container">
        <h2>Blogs</h2>

        <div className="blog-list">
          {[1,2,3,4,5,6].map((item) => (
            <div key={item} className="blog-item">
              <div className="blog-image"></div>
              <img src={blogImg} alt="Blog" className="blog-image" />
              <h3>The Psychology of Money</h3>
              <p>This book is about how money works...</p>
              <button className="read-btn">Read Now</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Blogs;