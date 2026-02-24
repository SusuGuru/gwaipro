import "../styles/footer.css";
import logo from "../assets/gwaipro-w.png";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        {/* LEFT SECTION */}
        <div className="footer-left">
          <img src={logo} alt="logo" className="footer-logo" />

          <p className="tagline">
            Connecting Musician<br />
            Around the World.
          </p>

          <div className="socials">

            {/* Facebook (not linked) */}
            <i className="fab fa-facebook-f"></i>

            {/* Instagram */}
            <a
              href="https://www.instagram.com/gwaipro/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-instagram"></i>
            </a>

            {/* TikTok */}
            <a
              href="https://www.tiktok.com/@gwaipro"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-tiktok"></i>
            </a>

          </div>
        </div>

        {/* RIGHT SECTION */}
        <div className="footer-right">

          <div className="footer-column">
            <h4>Our App</h4>
            <p>Download on App Store</p>
            <p>Download from Play Store</p>
          </div>

          <div className="footer-column">
            <h4>Resources</h4>
            <a href="/blogs"><p>Blogs</p></a>
          </div>

          <div className="footer-column">
            <h4>Company</h4>
            <a href="/about"><p>About Us</p></a>
            <a href="/contact"><p>Contact Us</p></a>
          </div>

        </div>

      </div>

      {/* BOTTOM BAR */}
      <div className="footer-bottom">
        <span>©GwaiPro. All Rights Reserved 2026</span>

        <div className="footer-legal">
          <span>Privacy Policy</span>
          <span>Terms of Service</span>
        </div>
      </div>

    </footer>
  );
}

export default Footer;