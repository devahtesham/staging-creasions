'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import RightArrow from '/public/right-arrow.webp';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    service: '',
    budget: '',
    details: ''
  });

  const [status, setStatus] = useState('');

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
    setStatus('Sending...');

    const updatedFormData = {
      ...formData,
      page: window.location.href,  // Set current page URL
    };

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
        window.location.href = window.location.origin + "/thankyou";
      } else {
        setStatus(result.error || 'Failed to send message.');
      }
    } catch (error) {
      setStatus('An error occurred.');
    }
  };

  return (
    <section className="home-sec-10">
      <div className="container">
        <div className="row">
          <form onSubmit={handleSubmit}>
            <div className="col-lg-4 col-md-6">
              <div className="input-box">
                <label htmlFor="name">Name <span aria-hidden="true">*</span></label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  aria-required="true"
                />
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="input-box">
                <label htmlFor="company">Company <span aria-hidden="true">*</span></label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  placeholder="Your company name"
                  value={formData.company}
                  onChange={handleChange}
                  required
                  aria-required="true"
                />
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="input-box">
                <label htmlFor="email">Email <span aria-hidden="true">*</span></label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Your working email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  aria-required="true"
                />
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="input-box">
                <label htmlFor="phone">Phone</label>
                <input
                  type="number"
                  id="phone"
                  name="phone"
                  placeholder="Your actual phone number"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="input-box">
                <label htmlFor="service">Service <span aria-hidden="true">*</span></label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                  aria-required="true"
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
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="input-box">
                <label htmlFor="budget">Choose a Budget (USD) <span aria-hidden="true">*</span></label>
                <select
                  id="budget"
                  name="budget"
                  value={formData.budget}
                  onChange={handleChange}
                  required
                  aria-required="true"
                >
                  <option value="">—Please choose an option—</option>
                  <option value="2k">2k</option>
                  <option value="5k">5k</option>
                  <option value="10k">10k</option>
                  <option value="25k">25k</option>
                </select>
              </div>
            </div>
            <div className="col-lg-12 col-md-12">
              <div className="input-box">
                <label htmlFor="details">Project details</label>
                <textarea
                  id="details"
                  name="details"
                  value={formData.details}
                  onChange={handleChange}
                  placeholder="Describe your project"
                />
              </div>
              <div className="btn-box">
                <button type="submit" className="submit-btn">
                  Submit Now <Image src={RightArrow} alt="Submit" />
                </button>
              </div>
            </div>
            {status && <p className='text-center mail-status'>{status}</p>}
          </form>
        </div>
      </div>
    </section>
  );
}
