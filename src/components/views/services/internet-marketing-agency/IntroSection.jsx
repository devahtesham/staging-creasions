import React from 'react'
import HeroBanner from '/public/services/ecommerce-marketing-agency/BannerBg.png'
import HeroBannerOverlay from '/public/services/internet-marketing-agency/HeroBannerOverlay.png'
import Image from 'next/image'

export default function IntroSection() {
  return (
    <section className="hero-banner" style={{ backgroundImage: `url(${HeroBanner.src})` }}>
      <Image src={HeroBannerOverlay}/>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="text">
              <h1>Best Internet Marketing &<br/> Advertising Agency in Dallas</h1>
              <p>Best Internet Marketing & Advertising Agency in Dallas</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
