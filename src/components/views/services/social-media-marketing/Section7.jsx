import React from 'react'
import section7bg from '/public/services/email-marketing/section-07-bg.png'
import outlineanimation from '/public/services/email-marketing/outline-animation.png'
import Image from 'next/image'

export default function Section7({ aboutUsData }) {
  const sectionSpan = aboutUsData?.section_span || "Partner with the Best SMM Company in Dallas!";
  const sectionHeading = aboutUsData?.section_heading || "At Creasions, we provide expert social media marketing in Dallas that enhances engagement, drives leads, and grows your brand.";
  const buttonText = aboutUsData?.button_text || "Schedule a Free Strategy Call";
  const buttonUrl = aboutUsData?.button_url || "tel:+1 469-854-3814";
  const backgroundImage = aboutUsData?.section_background || section7bg.src;

  return (
    <section className="section-07" style={{backgroundImage: `url(${backgroundImage})`}}>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="text text-center">
                <h6>{sectionSpan}</h6>
                <p>{sectionHeading}</p>
                <a href={buttonUrl} className='t-btn'>{buttonText}</a>
            </div>
            <div className="bg-circle-animation">
                <div className="animation-component">
                  <Image src={outlineanimation} className='outline-image-01' alt="Animation" />
                  <Image src={outlineanimation} className='outline-image-02' alt="Animation" />
                  <Image src={outlineanimation} className='outline-image-03' alt="Animation" />
                  <Image src={outlineanimation} className='outline-image-04' alt="Animation" />
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}