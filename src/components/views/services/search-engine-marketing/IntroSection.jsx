import React from 'react'
import HeroThumbnail from '/public/services/search-engine-marketing/banner-overlay.png'

export default function IntroSection() {
  return (
    <section className="hero-banner" style={{ backgroundImage: `url(${HeroThumbnail.src})` }}>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="text">
              <h1>Search <br/>Marketing Dallas</h1>
              <p>Search Engine Marketing (SEM) & Pay-Per-Click (PPC) Services in Dallas</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}