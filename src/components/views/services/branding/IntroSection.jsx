import Link from 'next/link'
import React from 'react'

export default function IntroSection({ bannerData }) {
  return (
    <section className="inner-title">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="heading">
              <h1>
                {bannerData?.banner_title_heading || "Branding Services"}
              </h1>
              <div dangerouslySetInnerHTML={{ 
                __html: bannerData?.banner_text || 
                "Creasions establishes itself as a prominent digital branding agency, delivering comprehensive branding agency services in the USA. With a focus on innovation and strategic thinking, Creasions is dedicated to shaping distinctive brand identities that resonate with target audiences." 
              }} />
            </div>
          </div>
        </div>
      </div>
    </section>

  )
}


