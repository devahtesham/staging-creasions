import React from 'react'
import Image from 'next/image'
import section5img from '/public/services/seo-services/section05bg.png'
import section05arrow from '/public/services/seo-services/section05arrow.png'

export default function Section5() {
  return (
    <section className="section-05" style={{backgroundImage: `url(${section5img.src})`}}>
      <div className="container">
        <div className="row">
            <div className="col-lg-6"></div>
          <div className="col-lg-6">
            <div className="text">
                <h2>Unleash Hidden Opportunities with Our SEO Audit!</h2>
                <div className="link-box">
                    <h6>Connect</h6>
                    <Image src={section05arrow}/>
                    <a href="/services/seo-services/search-engine-marketing-ebook.pdf" className='btn t-btn' target="_blank">Download Profile</a>
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}