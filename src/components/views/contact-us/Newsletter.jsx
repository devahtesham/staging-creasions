"use client";
import React from 'react';
import Image from 'next/image';
import RightArrow from '/public/right-arrow.webp';

export default function Newsletter() {
  const email = 'Connect@creasions.com';

  const handleEmailClick = (e) => {
    e.preventDefault();
    const mailtoLink = email.replace(/AT/, '@').replace(/DOT/, '.');
    window.location.href = `mailto:${mailtoLink}`;
  };

  return (
    <section className="home-sec-09" id="form-sec">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 col-md-12">
            <div className="text">
              <h3>
                LET&apos;S CREATE
                TOMORROW 
                TODAY.
              </h3>
            </div>
          </div>
          <div className="col-lg-4 col-md-12">
            <div className="text">
              <h5>Work inquiries</h5>
              <p>Interested in working with us?</p>
              <a href="mailto:connect@creasions.com" onClick={handleEmailClick}>
                {email}
              </a>
              <h6>Sign up for the newsletter</h6>
              <form>
                <input type="email" placeholder="Email Address" required />
                <button type="submit" className="submit-btn">
                  Send Now <Image src={RightArrow} alt="right arrow" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}