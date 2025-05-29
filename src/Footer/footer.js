import React from 'react';
import './Footer.css';
import Button from '../common/Button';

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
          <div className="footer-btn-group">
            <Button to="/company-info" className="link-button">Company Info</Button>
            <Button to="/careers" className="link-button">Careers</Button>
            <Button to="/terms" className="link-button">Terms & Conditions</Button>
          </div>
        </div>
        <div>
          <h4>Customer Service</h4>
          <div className="footer-btn-group">
            <Button to="/contact" className="link-button">Contact</Button>
            <Button to="/help-center" className="link-button">Help Center</Button>
            <Button to="/returns" className="link-button">Returns</Button>
          </div>
        </div>
        <div>
          <h4>Follow Us</h4>
          <div className="footer-btn-group">
            <Button href="https://facebook.com" className="link-button">Facebook</Button>
            <Button href="https://instagram.com" className="link-button">Instagram</Button>
            <Button href="https://twitter.com" className="link-button">Twitter</Button>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} eMarket. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
