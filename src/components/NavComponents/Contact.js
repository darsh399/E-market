import React, { useState } from 'react';
import './Contact.css';
import Input from '../../common/Input';
import Button from '../../common/Button';

import { AiOutlinePhone, AiOutlineMail, AiOutlineEnvironment, AiOutlineClockCircle } from 'react-icons/ai';

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
            <Input
              type="input"
              name="name"
              placeholder="Enter Name"
              value={formData.name}
              onChangeInput={InputHandler}
            />
            <Input
              type="input"
              name="email"
              placeholder="Enter Email"
              value={formData.email}
              onChangeInput={InputHandler}
            />
            <Input
              name="enquiry"
              placeholder="Enter Your Message"
              value={formData.enquiry}
              onChangeInput={InputHandler}
            />
            <Button type="submit" size="large" >SEND MESSAGE</Button>
          </form>
        </div>

        <div className="contact-details-container">
          <h2>📍 Contact Information</h2>
          <p><AiOutlinePhone className="icon" /> <strong>Phone:</strong> 111-111-1111</p>
          <p><AiOutlineMail className="icon" /> <strong>Email:</strong> youremail@gmail.com</p>
          <p><AiOutlineEnvironment className="icon" /> <strong>Address:</strong> 123, Sinhgad Vrindawan, Beside Charbhuja Complex, Ambegaon, 413333</p>
          <p><AiOutlineClockCircle className="icon" /> <strong>Support Hours:</strong> Mon - Sat, 9:00 AM - 6:00 PM</p>

          <div className="map-placeholder">
            <p>🗺️ Map Location Coming Soon...</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
