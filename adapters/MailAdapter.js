const nodemailer = require("nodemailer");
require("dotenv").config();

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

async function sendWelcomeEmail(to, name) {
  const subject = "Welcome to E-Commerce!";
  const text = `Hello ${name},\n\nWelcome to E-Commerce! Thank you for registering.`;

  try {
    await sendMail(to, subject, text);
    console.log("Welcome email sent successfully.");
  } catch (error) {
    console.error("Error sending welcome email:", error);
  }
}

async function sendLoginNotification(to) {
  const subject = "Login Notification";
  const text =
    "You have successfully logged in. If this wasn't you, please contact us immediately.";

  try {
    await sendMail(to, subject, text);
    console.log("Login notification email sent successfully.");
  } catch (error) {
    console.error("Error sending login notification email:", error);
  }
}

async function sendMail(to, subject, text) {
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to,
    subject,
    text,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log("Email sent successfully.");
  } catch (error) {
    console.error("Error sending email:", error);
    throw error;
  }
}

module.exports = {
  sendWelcomeEmail,
  sendLoginNotification,
};
