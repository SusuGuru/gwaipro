import "../styles/home.css";
import photo1 from "../assets/photo1.png";
import photo2 from "../assets/photo2.png";
import photo3 from "../assets/photo3.png";
import blog from "../assets/blog.png";

function Home() {
  return (
    <div className="home">
      <section className="hero">
  <h1>The Home of Value for Musicians</h1>
  <p>We connect musicians around the world</p>
</section>

<section className="how">
  ...
</section>

      {/* HOW IT WORKS */}
      <section className="how">

        <div className="how-left">
          <h2>How It <br /> Works</h2>
          <p>We connect musicians around the world</p>
        </div>

        <div className="how-right">
          <div className="phones">
            <div className="phone first">
  <img src={photo1} alt="step1" />
  <span className="step-text">Step 1</span>
</div>

            <img src={photo2} alt="step2" className="phone second" />
            <img src={photo3} alt="step3" className="phone third" />
          </div>
        </div>

      </section>

 {/* BLOGS */}
<section className="blogs">

  <div className="blogs-left">
    <h2>Blogs</h2>
    <p>We connect musicians around the world</p>

    {/* One card under text */}
    <div className="blog-card left-card">
      <img src={blog} alt="blog" />
    </div>
  </div>

  <div className="blogs-right">
    {[1,2,3,4].map((item) => (
      <div key={item} className="blog-card">
        <img src={blog} alt="blog" />
      </div>
    ))}
  </div>

</section>

    </div>
  );
}

export default Home;