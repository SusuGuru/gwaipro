import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import MobileCTA from "./components/MobileCTA";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./pages/Home";
import Blogs from "./pages/Blogs";
import About from "./pages/About";
import Contact from "./pages/Contact";
import ComingSoon from "./pages/ComingSoon";
import TermsOfService from "./pages/TermsOfService";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import BlogDetails from "./pages/BlogDetails";
import Admin from "./pages/Admin";
import AdminLogin from "./pages/AdminLogin";

const bgClassMap = {
  "/":                  "page-wrapper--home",
  "/blogs":             "page-wrapper--blogs",
  "/about":             "page-wrapper--about",
  "/contact":           "page-wrapper--contact",
  "/coming-soon":       "page-wrapper--coming-soon",
  "/terms-of-service":  "page-wrapper--tos",
  "/privacy-policy":    "page-wrapper--privacy",
};

function ProtectedAdmin({ children }) {
  const token = localStorage.getItem("adminToken");
  if (!token) {
    return <AdminLogin />; // show login if not logged in
  }
  return children;
}

function Layout() {
  const { pathname } = useLocation();
  const bgClass = bgClassMap[pathname] || "page-wrapper--home";

  return (
    <>
      <div className={`page-wrapper ${bgClass}`}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blogs" element={<Blogs />} /> 
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/coming-soon" element={<ComingSoon />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/blog/:id" element={<BlogDetails />} />
          <Route 
            path="/admin" 
            element={
              <ProtectedAdmin>
                <Admin />
              </ProtectedAdmin>
            } 
          />
          <Route path="/admin-login" element={<AdminLogin />} />
        </Routes>
      </div>

      <Footer />
      <MobileCTA />
    </>
  );
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Layout />
    </Router>
  );
}

export default App;