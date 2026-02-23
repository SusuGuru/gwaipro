import "../styles/contact.css";

function Contact() {
  return (
    <div className="contact-page">

      <div className="contact-container">

        {/* LEFT SIDE */}
        <div className="contact-left">
          <h1>Get In<br />Touch</h1>

          <p className="contact-description">
            We’re here to help! Whether you have a question about our services,
            need assistance with your account, or want to provide feedback,
            our team is ready to assist you.
          </p>

          <div className="contact-info">
            <p><strong>Email:</strong><br />support@gwaipro.com</p>

            <p><strong>Phone:</strong><br />(+233) 55 051 7070</p>

            <p><strong>WhatsApp:</strong><br />(+233) 55 051 7070</p>

            <span className="availability">
              Available Monday to Friday, 9AM - 9PM GMT +00
            </span>
          </div>
        </div>

        {/* RIGHT SIDE FORM */}
        <div className="contact-right">
          <form className="contact-form">

            <div className="form-row">
              <div>
                <label>First Name</label>
                <input type="text" placeholder="Enter your first name" />
              </div>

              <div>
                <label>Last Name</label>
                <input type="text" placeholder="Enter your last name" />
              </div>
            </div>

            <label>Email</label>
            <input type="email" placeholder="Enter your email" />

            <label>How can we help?</label>
            <textarea placeholder="Enter your message"></textarea>

            <button type="submit" className="send-btn">
              Send Message &gt;
            </button>

          </form>
        </div>

      </div>

    </div>
  );
}

export default Contact;