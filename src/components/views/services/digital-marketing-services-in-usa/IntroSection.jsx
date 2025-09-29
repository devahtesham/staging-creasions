import Link from 'next/link'
import React from 'react'

export default function IntroSection({ bannerData }) {
  return (
    <section className="inner-title">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="heading">
              <h1>{bannerData?.banner_title_heading || "Digital Marketing Services In Dallas"}</h1>
              <div dangerouslySetInnerHTML={{ 
                __html: bannerData?.banner_text || 
                "Creasions excels as a comprehensive digital marketing services provider and advertising agency, offering a suite of solutions designed to amplify online visibility and drive business growth. Renowned for its strategic approach, Creasions leverages cutting-edge digital marketing techniques to enhance brand reach and engagement." 
              }} />
            </div>
          </div>
        </div>
      </div>
    </section>

  )
}


