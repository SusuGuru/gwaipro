const { Resend } = require("resend");

exports.handler = async (event) => {
  const resend = new Resend(process.env.RESEND_API_KEY);

  try {
    const { email } = JSON.parse(event.body);

    await resend.emails.send({
      from: "onboarding@resend.dev",
      to: email,
      subject: "You're on the Waitlist 🎵",
      html: "<h2>Thanks for joining our waitlist!</h2><p>We’ll notify you soon.</p>",
    });

    return {
      statusCode: 200,
      body: JSON.stringify({ message: "Email sent successfully!" }),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Something went wrong." }),
    };
  }
};