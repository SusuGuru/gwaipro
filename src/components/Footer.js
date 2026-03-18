import "../styles/footer.css";
import logo from "../assets/gwaipro-w.png";
import { useLocation, useNavigate } from "react-router-dom";

function Footer() {
  const location = useLocation();
  const navigate = useNavigate();

  const handleLegalLink = (path) => {
    if (location.pathname === path) {
      // Already on this page — smooth scroll gives clear feedback
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      // Different page — navigate; ScrollToTop handles the instant snap on arrival
      navigate(path);
    }
  };

  return (
    <footer className="footer">

      <div className="footer-container">

        {/* LEFT SECTION - Branding & Legal */}
        <div className="footer-left">
          <img src={logo} alt="logo" className="footer-logo" />

          <p className="footer-tagline">
            Connecting Musician<br />
            Around the World.
          </p>

          <div className="socials">
            <i className="fab fa-facebook-f"></i>
            <a
              href="https://www.instagram.com/gwaipro/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-instagram"></i>
            </a>
            <a
              href="https://www.tiktok.com/@gwaipro"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-tiktok"></i>
            </a>
          </div>

          {/* Legal Links - Mobile Only */}
          <div className="footer-legal-mobile">
            <div className="legal-links-mobile">
              <button onClick={() => handleLegalLink("/privacy-policy")}>Privacy Policy</button>
              <button onClick={() => handleLegalLink("/terms-of-service")}>Terms of Service</button>
            </div>
          </div>
        </div>

        {/* RIGHT SECTION - Links */}
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

      {/* BOTTOM BAR - Desktop Only */}
      <div className="footer-bottom">
        <span className="copyright-text">© GwaiPro. All Rights Reserved 2026</span>
        <div className="footer-legal">
          <button onClick={() => handleLegalLink("/privacy-policy")}>Privacy Policy</button>
          <button onClick={() => handleLegalLink("/terms-of-service")}>Terms of Service</button>
        </div>
      </div>

      {/* COPYRIGHT - Mobile Only (Outside Grid) */}
      <div className="footer-copyright-mobile">
        <span>© GwaiPro. All Rights Reserved 2026</span>
      </div>

    </footer>
  );
}

export default Footer;