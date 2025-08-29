import React from 'react'
import VideoOptimizer from '@/components/ui/VideoOptimizer';
import HeroThumbnail from '/public/services/social-media-marketing/banner-overlay.png'

export default function IntroSection() {
  return (
    <section className="hero-banner" >
        <div className="banner-video">
            <VideoOptimizer
                src="/video/services-banner.mp4"
                poster={HeroThumbnail}
            />
        </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="text">
              <h1>Social Media <br/>Marketing Dallas</h1>
              <p>Social Media Marketing Dallas - Elevate Your Brand with Creasions</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}