import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
    { name: "Contact Us", href: "/contact" },
  ];

  const socialLinks = [
    { name: "LinkedIn", href: "https://linkedin.com" },
    { name: "GitHub", href: "https://github.com" },
  ];

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3 className="footer-logo">YourBrand</h3>
          <p>Building the future of the web, one component at a time.</p>
        </div>

        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            {footerLinks.map((link) => (
              <li key={link.name}>
                <a href={link.href}>{link.name}</a>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer-section">
          <h4>Follow Us</h4>
          <div className="social-icons">
            {socialLinks.map((social) => (
              <a key={social.name} href={social.href} target="_blank" rel="noreferrer">
                {social.name}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {currentYear} YourBrand Inc. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;