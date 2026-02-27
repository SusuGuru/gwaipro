import "../styles/TermsOfService.css";

function TermsOfService() {
  return (
    <div className="tos-page">

      {/* ================= HERO ================= */}
      <section className="tos-hero">
        <h1>Terms of Service</h1>
        <p>
          Important things to know about using our service
        </p>
      </section>

      {/* ================= CONTENT ================= */}
      <section className="tos-content">
        <div className="tos-container">

          <h2>Terms of Service</h2>
          <span className="last-updated">Last Updated: 27 Feb, 2026</span>

          <p>
            Welcome to GwaiPro. By using our platform, website, or services (“Service”),
            you agree to the following terms. Please read them carefully.
          </p>

          <h3>1. Acceptance of Terms</h3>
          <p>
            By creating an account or using our Service, you agree to follow these Terms of Service.
            If you do not agree, please do not use our Service.
          </p>

          <h3>2. Who Can Use Our Service</h3>
          <p>You must:</p>
          <ul>
            <li>Be at least 18 years old (or have parental consent).</li>
            <li>Provide accurate information when creating an account.</li>
            <li>Keep your login details secure.</li>
          </ul>
          <p>You are responsible for everything that happens under your account.</p>

          <h3>3. How Our Service Works</h3>
          <p>
            GwaiPro connects musicians and clients through a simple,
            seamless platform for bookings and collaborations.
          </p>
          <p>
            We reserve the right to improve, update, or change features at any time.
          </p>

          <h3>4. User Responsibilities</h3>
          <p>You agree not to:</p>
          <ul>
            <li>Break any laws while using our Service.</li>
            <li>Post harmful, abusive, or misleading content.</li>
            <li>Attempt to hack, disrupt, or misuse the platform.</li>
            <li>Use the Service for fraud or unauthorized commercial purposes.</li>
          </ul>
          <p>
            If you violate these rules, we may suspend or terminate your account.
          </p>

          <h3>5. Payments (If Applicable)</h3>
          <p>If your Service includes payments:</p>
          <ul>
            <li>All fees must be paid as agreed.</li>
            <li>Payments may be processed through third-party providers.</li>
            <li>We are not responsible for delays caused by payment providers.</li>
          </ul>
          <p>Refund policies (if any) will be clearly stated.</p>

          <h3>6. Intellectual Property</h3>
          <p>
            All content, branding, logos, and technology on this platform belong to GwaiPro
            unless otherwise stated.
          </p>
          <p>
            You may not copy, reproduce, or distribute our materials without permission.
          </p>

          <h3>7. Privacy</h3>
          <p>
            Your use of our Service is also governed by our Privacy Policy,
            which explains how we collect and use your information.
          </p>

          <h3>8. Account Suspension or Termination</h3>
          <p>
            We may suspend or permanently remove your access if you violate these Terms
            or misuse the platform.
          </p>
          <p>You may stop using the Service at any time.</p>

          <h3>9. Limitation of Liability</h3>
          <p>
            We provide the Service “as is.” While we aim to offer a reliable experience,
            we do not guarantee uninterrupted or error-free service.
          </p>
          <p>
            To the fullest extent allowed by law, we are not liable for indirect damages,
            loss of profits, or data loss.
          </p>

          <h3>10. Changes to These Terms</h3>
          <p>
            We may update these Terms from time to time.
            If we make significant changes, we will notify users.
          </p>
          <p>
            Continued use of the Service means you accept the updated Terms.
          </p>

          <h3>11. Contact Us</h3>
          <p>If you have any questions about these Terms, contact us at:</p>
          <p>
            support@gwaipro.com <br />
            GwaiPro <br />
            Accra, Ghana
          </p>

        </div>
      </section>

    </div>
  );
}

export default TermsOfService;