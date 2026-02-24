import "../styles/footer.css";
import logo from "../assets/gwaipro-w.png";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        {/* LEFT SECTION */}
        <div className="footer-left">
          <img src={logo} alt="logo" className="footer-logo" />
          <h3>GwaiPro</h3>
          <p className="tagline">
            Connecting Musician<br />
            Around the World.
          </p>

          <div className="socials">
            <i className="fab fa-facebook-f"></i>
            <i className="fab fa-instagram"></i>
            <i className="fab fa-tiktok"></i>
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
            <p>Blogs</p>
          </div>

          <div className="footer-column">
            <h4>Company</h4>
            <p>About Us</p>
            <p>Contact Us</p>
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