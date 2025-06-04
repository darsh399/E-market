import React from 'react';
import './Footer.css';
import Button from '../common/Button';
import { FaFacebook, FaInstagram, FaTwitter, FaInfoCircle, FaHeadset, FaUndoAlt } from 'react-icons/fa';

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
            <Button to="/About" className="link-button"><FaInfoCircle /> Company Info</Button>
            <Button to="/careers" className="link-button"><FaInfoCircle /> Careers</Button>
            <Button to="/terms" className="link-button"><FaInfoCircle /> Terms & Conditions</Button>
          </div>
        </div>

        <div>
          <h4>Customer Service</h4>
          <div className="footer-btn-group">
            <Button to="/contact" className="link-button"><FaHeadset /> Contact</Button>
            <Button to="/help-center" className="link-button"><FaHeadset /> Help Center</Button>
            <Button to="/returns" className="link-button"><FaUndoAlt /> Returns</Button>
          </div>
        </div>

        <div>
          <h4>Follow Us</h4>
          <div className="footer-btn-group">
            <Button href="https://facebook.com" className="link-button"><FaFacebook /> Facebook</Button>
            <Button href="https://instagram.com" className="link-button"><FaInstagram /> Instagram</Button>
            <Button href="https://twitter.com" className="link-button"><FaTwitter /> Twitter</Button>
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
