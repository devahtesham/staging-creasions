import Link from 'next/link'
import React from 'react'

export default function IntroSection({ bannerData }) {
  return (
    <section
      className="inner-title"
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="heading">
              <h1>
                {bannerData?.banner_title_heading || "Website Development Services In Dallas"}
              </h1>
              <div dangerouslySetInnerHTML={{ 
                __html: bannerData?.banner_text || 
                "Creasions offers top-notch web development services to meet diverse business needs. Web development companies in the USA specialize in creating dynamic and responsive websites that not only reflect the brand identity but also enhance overall user experience." 
              }} />
            </div>
          </div>
        </div>
      </div>
    </section>

  )
}


