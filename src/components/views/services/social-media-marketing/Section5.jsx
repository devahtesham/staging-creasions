import React from 'react'
import Image from 'next/image'
import section5img from '/public/services/social-media-marketing/section05bg.png'
import mobileimage from '/public/services/social-media-marketing/mobile-image.png'
import section05arrow from '/public/services/seo-services/section05arrow.png'

export default function Section5() {
  return (
    <section className="section-05" style={{backgroundImage: `url(${section5img.src})`}}>
      <div className="container">
        <div className="row">
            <div className="col-lg-6">
              <Image src={mobileimage} className='mobile-image'/>
            </div>
          <div className="col-lg-6">
            <div className="text">
                <h2>Unleash Hidden Opportunities with Our Social Media Audit!</h2>
                <div className="link-box">
                    <h6>Connect</h6>
                    <Image src={section05arrow}/>
                    <a href="/services/social-media-marketing/social-media-marketing-ebook.pdf" className='btn t-btn' target="_blank">Download Profile</a>
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}