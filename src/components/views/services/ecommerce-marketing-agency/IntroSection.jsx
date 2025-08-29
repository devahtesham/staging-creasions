import React from 'react'
import HeroBanner from '/public/services/ecommerce-marketing-agency/BannerBg.png'
import HeroBannerOverlay from '/public/services/ecommerce-marketing-agency/HeroBannerOverlay.png'
import Image from 'next/image'

export default function IntroSection() {
  return (
    <section className="hero-banner" style={{ backgroundImage: `url(${HeroBanner.src})` }}>
      <Image src={HeroBannerOverlay}/>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="text">
              {/* <h1>Ecommerce <br/>Marketing Agency</h1> */}
              <h1>Ecommerce Marketing<br/> Services in Dallas</h1>
              <p>Drive More Sales, Increase Conversions & Scale Your Online Store</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}