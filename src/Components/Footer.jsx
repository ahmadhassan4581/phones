// src/components/Footer.jsx
import React from 'react';
import '../styles/footer.css';

const Footer = () => (
  <footer className="footer full-width-section">
    <div className="footer-sections">
      <div className="footer-column">
        <h4>SHOP GO TROLLY</h4>
        <ul>
          <li>Chargers</li>
          <li>Wire</li>
          <li>Cables</li>
          <li>Accessories</li>
          <li>Parts</li>
          <li>Terms of Service</li>
          <li>Refund Policy</li>
        </ul>
      </div>

      <div className="footer-column">
        <h4>CHECK THIS OUT</h4>
        <ul>
          <li>Customer Pics</li>
          <li>Reviews</li>
          <li>Testimonials</li>
          <li>Partnerships</li>
          <li>About Us</li>
        </ul>
      </div>

      <div className="footer-column">
        <h4>CUSTOMER SERVICE</h4>
        <ul>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Warranty</li>
          <li>Shipping</li>
          <li>Returns & Exchanges</li>
          <li>FAQs</li>
        </ul>
      </div>

      <div className="footer-column">
        <h4>CONTACT US</h4>
        <ul>
          <li>Call: 000-987-433-668</li>
          <li>Email: gotrolly@gmail.com</li>
        </ul>
      </div>
    </div>

    <div className="footer-bottom">
      <p>© 2023 GO TROLLY – All rights reserved.</p>
    </div>
  </footer>
);

export default Footer;
