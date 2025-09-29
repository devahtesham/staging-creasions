import Link from 'next/link'
import React from 'react'

export default function IntroSection({ bannerData }) {
  return (
    <section
      className="inner-title">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="heading">
              <h1>
                {bannerData?.banner_title_heading || "Web Design Agency In Dallas"}
              </h1>
              <div dangerouslySetInnerHTML={{ 
                __html: bannerData?.banner_text || 
                "Creasions stands out as a leading force in website design services in Dallas, playing a pivotal role in shaping the digital identity of local businesses. With a specialized focus on aesthetics, functionality, and user experience, our Dallas-based website design company seamlessly blends creativity with technical expertise to deliver exceptional web design solutions." 
              }} />
            </div>
          </div>
        </div>
      </div>
    </section>

  )
}


