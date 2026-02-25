import { Link } from "react-router-dom";
import "../styles/navbar.css";
import logo from "../assets/gwaipro.png";

function Navbar() {
  return (
    <nav className="navbar">
    <div className="logo">
  <img src={logo} alt="GwaiPro Logo" />
</div>

      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/blogs">Blogs</Link>
        <Link to="/about">About Us</Link>
        <Link to="/contact">Contact Us</Link>
      </div>

      <Link to="/coming-soon" className="download-btn">
  Join the Waitlist
</Link>
    </nav>
  );
}

export default Navbar;