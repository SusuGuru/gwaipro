import { Link, useLocation } from "react-router-dom";
import "../styles/mobileCTA.css";

function MobileCTA() {
  const location = useLocation();
  
  if (location.pathname === "/coming-soon") {
    return null;
  }

  return (
    <Link to="/coming-soon" className="mobile-floating-cta">
      Join Waitlist
    </Link>
  );
}

export default MobileCTA;
