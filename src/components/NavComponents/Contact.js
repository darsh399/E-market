import React, { useState } from 'react';
import './Contact.css';
import Input from '../../common/Input';
import Button from '../../common/Button';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    enquiry: ''
  });

  const InputHandler = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    console.log('Submitted:', formData);
    setFormData({ name: '', email: '', enquiry: '' });
  };

  return (
    <div className="contact-page">
      <div className="contact-header">
        <h1 className="main-heading">📩 Get in Touch</h1>
        <p className="sub-text">We’d love to help! Fill out the form and our team will get back to you shortly.</p>
      </div>

      <div className="contact-content">
        <div className="form-section">
          <form onSubmit={onSubmitHandler} className="contact-form">
            <Input type="input" name="name" placeholder="Enter Name" value={formData.name} onChangeInput={InputHandler} />
            <Input type="input" name="email" placeholder="Enter Email" value={formData.email} onChangeInput={InputHandler} />
            <Input name="enquiry" placeholder="Enter Your Message" value={formData.enquiry} onChangeInput={InputHandler} />
            <Button type="submit">SEND MESSAGE</Button>
          </form>
        </div>

        <div className="contact-details-container">
          <h2>📍 Contact Information</h2>
          <p><strong>📞 Phone:</strong> 1111111111</p>
          <p><strong>📧 Email:</strong> youremail@gmail.com</p>
          <p><strong>🏠 Address:</strong> 123, Sinhgad Vrindawan, Beside Charbhuja Complex, Ambegaon, 413333</p>
          <p><strong>🕒 Support Hours:</strong> Mon - Sat, 9:00 AM - 6:00 PM</p>

          <div className="map-placeholder">
            <p>🗺️ Map Location Coming Soon...</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
