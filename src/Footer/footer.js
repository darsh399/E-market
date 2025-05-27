import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-top">
        <h2 className="footer-logo">eMarket</h2>
        <p>Your one-stop shop for everything!</p>
      </div>

      <div className="footer-links">
        <div>
          <h4>About Us</h4>
          <ul>
            <li>Company Info</li>
            <li>Careers</li>
            <li>Terms & Conditions</li>
          </ul>
        </div>
        <div>
          <h4>Customer Service</h4>
          <ul>
            <li>Contact</li>
            <li>Help Center</li>
            <li>Returns</li>
          </ul>
        </div>
        <div>
          <h4>Follow Us</h4>
          <ul>
            <li>Facebook</li>
            <li>Instagram</li>
            <li>Twitter</li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} eMarket. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
