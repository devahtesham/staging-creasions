import React from 'react'
import HeroBanner from '/public/services/email-marketing/hero-banner.png'

export default function IntroSection() {
  return (
    <section className="hero-banner" style={{ backgroundImage: `url(${HeroBanner.src})` }}>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="text">
              <h1>Email <br/>Marketing Dallas</h1>
              <p>Boost Engagement, Drive Conversions & Maximize ROI with Targeted<br/> Email Marketing</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}