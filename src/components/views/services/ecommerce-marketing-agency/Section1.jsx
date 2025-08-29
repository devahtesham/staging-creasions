import React from 'react'
import VideoOptimizer from '@/components/ui/VideoOptimizer';
import HeroThumbnail from '/public/services/ecommerce-marketing-agency/Section1BgOverlay.png'

export default function Section1() {
  return (
    <section className="section-01">
      <div className="videoSec">
          <VideoOptimizer
              src="/video/Secton1VideoEcommerce.mp4"
              poster={HeroThumbnail}
          />
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="text">
              {/* <h6>Drive More Sales, Increase Conversions & Scale Your Online Store</h6> */}
              <p>At Creasions, we specialize in high-impact Ecommerce marketing strategies in Dallas designed to increase your online revenue, optimize conversion rates, and drive more customers to your store. Whether you&apos;re a startup or an established online retailer, our Ecommerce marketing agency in Dallas delivers customized, data-driven solutions to help your business grow.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}