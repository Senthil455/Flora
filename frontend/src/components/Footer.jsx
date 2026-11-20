import Logo3 from "../assets/pics/flora-wordmark.svg";
import Logo2 from "../assets/pics/flora-logo.svg";
import React, { useState } from "react";
import { BASE_URL } from "../constants/baseUrl";

const addSubscriber = async (email) => {

  try {
    const response = await fetch(`${BASE_URL}/subscribe`, {
      method: "POST",
      body: JSON.stringify({email}),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error("Error creating Product:", error);
    throw error;
  }
};

const Footer = () => {
  const [email, setEmail] = useState("");
  const [showPrivacy, setShowPrivacy] = useState(false);
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!email || !email.includes('@')) {
      alert('Please enter a valid email address');
      return;
    }

    setIsLoading(true);
    
    try {
      await addSubscriber(email);
      setEmail("");
      alert("Thank you for subscribing!");
    } catch (error) {
      alert(error.message || "Failed to subscribe. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-grid">
            {/* Company Info */}
            <div className="footer-column">
              <a href="#" className="footer-logo">
                <div className="logo-placeholder">
                  <img src={Logo2} alt="Flora" className="footerLogo" />
                </div>
              </a>

              <p className="footer-description">
                Bringing beauty and elegance to your special moments with
                lifelike, handcrafted floral arrangements.
              </p>
            </div>

            {/* Newsletter */}
            <div className="footer-column newsletter-column">
              <h3 className="footer-title">Stay Connected</h3>
              <p className="newsletter-text">
                Subscribe to receive special offers, floral tips, and updates on
                seasonal arrangements.
              </p>
              <div className="newsletter-form">
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="newsletter-input"
                />
                <button onClick={handleSubmit} disabled={isLoading} className="newsletter-button">
                  Subscribe
                </button>
              </div>
              <button
                onClick={() => setShowPrivacy(!showPrivacy)}
                className="privacy-link"
              >
                Privacy Policy
              </button>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="footer-bottom">
            <a
              href="https://github.com/Senthil455"
              className="footer-logo"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={Logo3} alt="Flora" className="Textlogo-placeholder" />
            </a>
            <p className="copyright">
              © {new Date().getFullYear()} Flora. All rights reserved.
            </p>
            <p className="dev-credit">
              Website developed by{" "}
              <a
                href="https://github.com/Senthil455"
                target="_blank"
                rel="noopener noreferrer"
              >
                Senthil455
              </a>
            </p>
          </div>
        </div>
      </footer>

      {/* Privacy Policy Modal */}
      {showPrivacy && (
        <div className="modal-overlay" onClick={() => setShowPrivacy(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button
              className="modal-close"
              onClick={() => setShowPrivacy(false)}
              aria-label="Close"
            >
              ×
            </button>
            <h2>Privacy Policy</h2>
            <div className="modal-body">
              <h3>Newsletter Registration</h3>
              <p>
                When you subscribe to our newsletter, we collect your email
                address to send you updates about our products, services, and
                special offers.
              </p>

              <h3>How We Use Your Information</h3>
              <p>Your email address will be used exclusively to:</p>
              <ul>
                <li>Send you our newsletter and promotional materials</li>
                <li>
                  Notify you about special offers and seasonal arrangements
                </li>
                <li>Share floral care tips and arrangement ideas</li>
              </ul>

              <h3>Data Protection</h3>
              <p>
                We are committed to protecting your personal information. Your
                email address will never be sold, shared, or distributed to
                third parties without your explicit consent.
              </p>

              <h3>Your Rights</h3>
              <p>You have the right to:</p>
              <ul>
                <li>Unsubscribe from our newsletter at any time</li>
                <li>Request deletion of your personal data</li>
                <li>Access the information we hold about you</li>
              </ul>

              <h3>Contact Us</h3>
              <p>
                If you have any questions about our privacy practices, please
                contact us through our website or social media channels.
              </p>

              <p className="last-updated">
                Last updated: {new Date().toLocaleDateString()}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Footer;
