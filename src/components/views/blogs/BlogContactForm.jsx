'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function BlogContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    service: '',  
    details: ''
  });

  const [status, setStatus] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus('Sending...');

    const updatedFormData = {
      ...formData,
      page: window.location.href,  // Set current page URL
      source: 'Blog Contact Form'  // Add source identifier
    };
    console.log('[updatedFormData]', updatedFormData);

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedFormData),
      });

      const result = await response.json();

      if (response.ok) {
        setStatus('Message sent successfully!');
        setTimeout(() => {
          window.location.href = window.location.origin + "/thankyou";
        }, 1500);
      } else {
        setStatus(result.error || 'Failed to send message.');
        setIsSubmitting(false);
      }
    } catch (error) {
      setStatus('An error occurred. Please try again.');
      setIsSubmitting(false);
    }
  };

  return (
    <motion.div 
      className="blog-contact-form"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="blog-contact-container">
        <motion.div 
          className="blog-contact-header"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h3>Ready to Start Your Project?</h3>
          <p>Let's discuss how we can help bring your ideas to life. Get a free consultation today!</p>
        </motion.div>

        <motion.form 
          onSubmit={handleSubmit}
          className="blog-contact-form-grid"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="form-row">
            <div className="input-group">
              <label htmlFor="blog-name">Name <span className="required">*</span></label>
              <input
                type="text"
                id="blog-name"
                name="name"
                placeholder="Your name"
                value={formData.name}
                onChange={handleChange}
                required
                disabled={isSubmitting}
              />
            </div>
            <div className="input-group">
              <label htmlFor="blog-company">Company <span className=""></span></label>
              <input
                type="text"
                id="blog-company"
                name="company"
                placeholder="Your company name"
                value={formData.company}
                onChange={handleChange}
                disabled={isSubmitting}
              />
            </div>
          </div>

          <div className="form-row">
            <div className="input-group">
              <label htmlFor="blog-email">Email <span className="required">*</span></label>
              <input
                type="email"
                id="blog-email"
                name="email"
                placeholder="Your working email"
                value={formData.email}
                onChange={handleChange}
                required
                disabled={isSubmitting}
              />
            </div>
            <div className="input-group">
              <label htmlFor="blog-phone">Phone</label>
              <input
                type="tel"
                id="blog-phone"
                name="phone"
                placeholder="Your phone number"
                value={formData.phone}
                onChange={handleChange}
                disabled={isSubmitting}
              />
            </div>
          </div>

          <div className="form-row">
            <div className="input-group">
              <label htmlFor="blog-service">Service <span className="required">*</span></label>
              <select
                id="blog-service"
                name="service"
                value={formData.service}
                onChange={handleChange}
                required
                disabled={isSubmitting}
              >
                <option value="">—Please choose a service—</option>
                <option value="Website Development">Website Development</option>
                <option value="Website Design">Website Design</option>
                <option value="Digital Marketing">Digital Marketing</option>
                <option value="Branding Design">Branding Design</option>
                <option value="Software Development">Software Development</option>
                <option value="Application Development">Application Development</option>
              </select>
            </div>
            {/* <div className="input-group">
              <label htmlFor="blog-budget">Budget (USD) <span className="required">*</span></label>
              <select
                id="blog-budget"
                name="budget"
                value={formData.budget}
                onChange={handleChange}
                required
                disabled={isSubmitting}
              >
                <option value="">—Please choose an option—</option>
                <option value="2k">$2,000</option>
                <option value="5k">$5,000</option>
                <option value="10k">$10,000</option>
                <option value="25k">$25,000+</option>
              </select>
            </div> */}
          </div>

          <div className="form-row full-width">
            <div className="input-group">
              <label htmlFor="blog-details">Project Details</label>
              <textarea
                id="blog-details"
                name="details"
                value={formData.details}
                onChange={handleChange}
                placeholder="Tell us about your project requirements, goals, and timeline..."
                rows="4"
                disabled={isSubmitting}
              />
            </div>
          </div>

          <div className="form-row full-width">
            <motion.button 
              type="submit" 
              className={`blog-submit-btn ${isSubmitting ? 'submitting' : ''}`}
              disabled={isSubmitting}
              whileTap={{ scale: 0.98 }}
              whileHover={{ scale: 1.02 }}
            >
              {isSubmitting ? (
                <>
                  <span className="spinner"></span>
                  Sending...
                </>
              ) : (
                <>
                  Get Free Consultation
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </>
              )}
            </motion.button>
          </div>

          {status && (
            <motion.div 
              className={`status-message ${status.includes('success') ? 'success' : 'error'}`}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
            >
              {status}
            </motion.div>
          )}
        </motion.form>
      </div>
    </motion.div>
  );
}
