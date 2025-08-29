"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import RightArrow from '/public/right-arrow.webp';
export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('');
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');
    try {
      const response = await fetch('/api/newsletter', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });
      const result = await response.json();
      if (response.ok) {
        setStatus('Subscribed successfully!');
        setEmail('');
      } else {
        setStatus(result.error || 'Subscription failed.');
      }
    } catch (error) {
      setStatus('Something went wrong.');
    }
  };
  return (
    <section className="home-sec-09 test" id="form-sec">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 col-md-12">
            <div className="text">
              <h3>LET&apos;S CREATE TOMORROW TODAY.</h3>
            </div>
          </div>
          <div className="col-lg-4 col-md-12">
            <div className="text">
              <h5>Work inquiries</h5>
              <p>Interested in working with us?</p>
              <a href="mailto:connect@creasions.com">connect@creasions.com</a>
              <h6>Sign up for the newsletter</h6>
              <form onSubmit={handleSubmit}>
                <input
                  type="email"
                  placeholder="Email Address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <button type="submit" className="submit-btn">
                  <span>Send Now</span>
                  <Image quality={100} src={RightArrow} alt="right arrow" />
                </button>
              </form>
              {status && <p className="text-center mail-status">{status}</p>}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}