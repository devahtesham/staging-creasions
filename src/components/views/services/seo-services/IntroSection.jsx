import React from 'react'
import HeroBanner from '/public/services/seo-services/starbg.png'
import bglayer from '/public/services/seo-services/bg-top-layer.png'
import Image from 'next/image'

export default function IntroSection() {
  return (
    <section className="hero-banner" style={{ backgroundImage: `url(${HeroBanner.src})` }}>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="text">
              <h1>SEO<br/> Services</h1>
              <p>#1 SEO Company Dallas - Proven Strategies for Maximum Growth</p>
            </div>
          </div>
        </div>
      </div>
      <Image src={bglayer}/>
    </section>
  )
}