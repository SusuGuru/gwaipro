import { useState } from "react";
import "../styles/contact.css";
import checkbox from "../assets/checkbox.png";

function Contact() {
  const [showModal, setShowModal] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault(); // stop mailto reload
    setShowModal(true);
    e.target.reset(); // clear form
  };

  return (
    <div className="contact-page">
      <div className="contact-container">

        {/* LEFT SIDE */}
        <div className="contact-left">
          <h1>
            Get In<br />Touch
          </h1>

          <p className="contact-description">
            We’re here to help! Whether you have a question about our services,
            need assistance with your account, or want to provide feedback,
            our team is ready to assist you.
          </p>

          <div className="contact-info">
            <p>
              <strong>Email:</strong><br />
              support@gwaipro.com
            </p>

            <p>
              <strong>Phone:</strong><br />
              (+233) 55 051 7070
            </p>

            <p>
              <strong>WhatsApp:</strong><br />
              (+233) 55 051 7070
            </p>

            <span className="availability">
              Available Monday to Friday, 9AM - 9PM GMT +00
            </span>
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
                  required
                />
              </div>

              <div>
                <label>Last Name</label>
                <input
                  type="text"
                  placeholder="Enter your last name"
                  required
                />
              </div>
            </div>

            <label>Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              required
            />

            <label>How can we help?</label>
            <textarea
              placeholder="Enter your message"
              required
            ></textarea>

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
              <img
  src={checkbox}
  alt="Success"
  className="success-image"
/>
              <button
                className="close-btn"
                onClick={() => setShowModal(false)}
              >
                ×
              </button>
            </div>

            <div className="modal-content">
              <h2>Success</h2>
              <p>
                Thank you for sharing your feedback with us.
                We will respond within 24 hours
              </p>
            </div>

          </div>
        </div>
      )}

    </div>
  );
}

export default Contact;