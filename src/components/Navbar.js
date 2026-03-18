import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import "../styles/navbar.css";
import logo from "../assets/gwaipro.png";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    if (isMenuOpen) {
      // Save scroll position then freeze the body in place (fixes iOS Safari scroll-through)
      const scrollY = window.scrollY;
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = '100%';
      document.body.style.overflow = 'hidden';
    } else {
      // Restore body and scroll position
      const scrollY = document.body.style.top;
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
      document.body.style.overflow = '';
      window.scrollTo(0, parseInt(scrollY || '0') * -1);
    }

    return () => {
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  return (
    <>
      <nav className="navbar">
        <div className="logo">
          <img src={logo} alt="GwaiPro Logo" />
        </div>

        <div className={`nav-links ${isMenuOpen ? "active" : ""}`}>
          <div className="nav-menu-header">
            <button 
              className="nav-close-btn"
              onClick={closeMenu}
              aria-label="Close menu"
            >
              ×
            </button>
          </div>

          <div className="nav-menu-content">
            <nav className="nav-main-links">
              <Link to="/" onClick={closeMenu}>Home</Link>
              <Link to="/blogs" onClick={closeMenu}>Blogs</Link>
              <Link to="/about" onClick={closeMenu}>About Us</Link>
              <Link to="/contact" onClick={closeMenu}>Contact Us</Link>
            </nav>

            <Link to="/coming-soon" className="mobile-cta-link" onClick={closeMenu}>
              Join the Waitlist
            </Link>

            <div className="nav-footer">
              <p className="nav-tagline">
                Connecting Musicians<br />
                Around the World.
              </p>

              <div className="nav-socials">
                <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="https://www.instagram.com/gwaipro/" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="https://www.tiktok.com/@gwaipro" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-tiktok"></i>
                </a>
              </div>

              <div className="nav-legal-links">
                <Link to="/privacy-policy" onClick={closeMenu}>Privacy Policy</Link>
                <Link to="/terms-of-service" onClick={closeMenu}>Terms of Service</Link>
              </div>

              <span className="nav-copyright">© GwaiPro. All Rights Reserved 2026</span>
            </div>
          </div>
        </div>

        <Link to="/coming-soon" className="download-btn desktop-cta">
          Join the Waitlist
        </Link>

        <button 
          className={`hamburger ${isMenuOpen ? "active" : ""}`}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </nav>

      {isMenuOpen && (
        <div className="menu-overlay" onClick={closeMenu}></div>
      )}
    </>
  );
}

export default Navbar;