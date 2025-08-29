import React from 'react'
import VideoOptimizer from '@/components/ui/VideoOptimizer';
import HeroThumbnail from '/public/services/internet-marketing-agency/Section1BgOverlay.png'

export default function Section1() {
  return (
    <section className="section-01">
      <div className="videoSec">
          <VideoOptimizer
              src="/video/Secton1VideoInternet.mp4"
              poster={HeroThumbnail}
          />
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="text">
              {/* <h6>Maximize Your Digital Presence & Drive Revenue</h6> */}
              <p>In today&apos;s competitive digital landscape, having a strong internet marketing strategy is crucial for business success. As a top internet marketing company in Dallas, we offer SEO, PPC, social media marketing, content marketing, and email marketing to help businesses thrive. Whether you&apos;re a startup or an established brand, our online advertising agency in Dallas delivers tailored solutions to attract, engage, and convert your ideal audience.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}