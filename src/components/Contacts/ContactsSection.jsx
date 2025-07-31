import React from "react";
import "./ContactsSection.css";

const contacts = [
  {
    name: "GitHub",
    url: "https://github.com/Tokise",
    icon: "🐙",
    label: "GitHub"
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/johnrey-ablen-1452ba361/",
    icon: "💼",
    label: "LinkedIn"
  },
   {
    name: "Facebook",
    url: "https://www.facebook.com/jry.aln.06",
    icon: "📘", // Replace with actual Facebook logo if available
    label: "Facebook"
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/rei.abn/",
    icon: "📸", // Replace with actual Instagram logo if available
    label: "Instagram"
  },
  {
    name: "Gmail",
    url: "https://mail.google.com/",
    icon: "✉️",
    label: "Gmail"
  }
];

const ContactsSection = () => (
  <section className="contacts" id="contact">
    <h2>Contact</h2>
    <p>Let's connect! You can find me on these platforms:</p>
    <div className="contacts-icons">
      {contacts.map(({ name, url, icon, label }) => (
        <div key={name} className="contact-icon-wrapper">
          <a
            href={url}
            className="contact-icon"
            target="_blank"
            rel="noopener noreferrer"
            aria-label={name}
          >
            <span style={{ fontSize: 48 }}>{icon}</span>
          </a>
          <span className="contact-label">{label}</span>
        </div>
      ))}
    </div>
  </section>
);

export default ContactsSection;