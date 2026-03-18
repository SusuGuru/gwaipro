import { useState } from "react";
import "../styles/contact.css";
import checkbox from "../assets/checkbox.png";

function Contact() {
  const [showModal, setShowModal] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ firstName, lastName, email, message }),
      });

      const data = await response.json();

      if (response.ok) {
        setShowModal(true);
        setFirstName("");
        setLastName("");
        setEmail("");
        setMessage("");
      } else {
        alert(data.message);
      }
    } catch (error) {
      alert("Server error");
    }
  };

  return (
    <div className="contact-page">
      <div className="contact-container">

        {/* LEFT SIDE */}
        <div className="contact-left">
          <h1>Get In Touch</h1>

          <p className="contact-description">
            We're here to help. If you have a question,
            need help with your account, or want to share
            feedback, our team is ready to support you.
          </p>

          <div className="contact-info">
            <div className="contact-item">
              <strong>Email:</strong>
              <span>support@gwaipro.com</span>
            </div>
            <div className="contact-item">
              <strong>Phone:</strong>
              <span>(+233) 55 051 7070</span>
            </div>
            <div className="contact-item">
              <strong>WhatsApp:</strong>
              <span>(+233) 55 051 7070</span>
              <span className="availability">Available Monday to Friday, 9AM - 9PM GMT +00</span>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE FORM */}
        <div className="contact-right">
          <form className="contact-form" onSubmit={handleSubmit}>

            <div className="form-row">
              <div>
                <label>First Name</label>
                <input
                  type="text"
                  placeholder="Enter your first name"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  required
                />
              </div>
              <div>
                <label>Last Name</label>
                <input
                  type="text"
                  placeholder="Enter your last name"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  required
                />
              </div>
            </div>

            <label>Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <label>How can we help?</label>
            <textarea
              placeholder="Enter your message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            />

            <button type="submit" className="send-btn">
              Send Message &gt;
            </button>

          </form>
        </div>
      </div>

      {/* SUCCESS MODAL */}
      {showModal && (
        <div className="modal-overlay">
          <div className="success-modal">

            <div className="modal-top">
              <button className="close-btn" onClick={() => setShowModal(false)}>
                &times;
              </button>
              <img src={checkbox} alt="Success" className="success-image" />
            </div>

            <div className="modal-content">
              <h2>Success</h2>
              <p>
                Thank you for sharing your feedback with us.
                We will respond within 24 hours.
              </p>
            </div>

          </div>
        </div>
      )}

    </div>
  );
}

export default Contact;
