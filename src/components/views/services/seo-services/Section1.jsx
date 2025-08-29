import React from 'react'
import Image from 'next/image'
import sectiononeimg from '/public/services/seo-services/section-1-img.png'

export default function Section1() {
  return (
    <section className="section-01">
      <div className="container">
        <div className="row">
          <div className="col-lg-7">
            <div className="text">
              <h2 className='h6heading'>SEO Services Dallas - Boost Your Online Presence with Creasions</h2>
              <p >At Creasions, we specialize in high-impact search engine optimization in Dallas, helping businesses improve their search rankings, attract more leads, and grow their revenue. As a top SEO company in Dallas, we use data-driven strategies to maximize online visibility and drive long-term success.</p>
            </div>
          </div>
        </div>
      </div>
      <Image src={sectiononeimg}/>
    </section>
  )
}