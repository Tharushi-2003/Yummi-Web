import React from "react";
import "./contact.css";

export default function Contact() {
  return (
    <div className="contact-page">
      <h1 className="page-heading">Contact Us</h1>

      <div className="contact-cards">
        <div className="card">
          <h3>📞 Call Us</h3>
          <p>Hotline: <a href="tel:+94771234567">+94 77 123 4567</a></p>
          <p>Landline: <a href="tel:+94112345678">+94 11 234 5678</a></p>
        </div>

        <div className="card">
          <h3>📧 Email Us</h3>
          <p>
            General:{" "}
            <a href="mailto:hello@yummi.com">hello@yummi.com</a>
          </p>
          <p>
            Support:{" "}
            <a href="mailto:support@yummi.com">support@yummi.com</a>
          </p>
        </div>

        <div className="card">
          <h3>📍 Visit Us</h3>
          <p>123, Example Street</p>
          <p>Colombo, Sri Lanka</p>
        </div>

        <div className="card">
          <h3>🌐 Follow Us</h3>
          <div className="social-links">
            <a href="https://facebook.com" target="_blank" rel="noreferrer">Facebook</a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer">Instagram</a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer">Twitter</a>
          </div>
        </div>
      </div>
    </div>
  );
}
