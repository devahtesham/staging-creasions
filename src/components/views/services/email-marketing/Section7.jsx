import React from 'react'
import section7bg from '/public/services/email-marketing/section-07-bg.png'
import outlineanimation from '/public/services/email-marketing/outline-animation.png'
import Image from 'next/image'

export default function Section7() {
  return (
    <section className="section-07" style={{backgroundImage: `url(${section7bg.src})`}}>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="text text-center">
                <h6>Ready to Skyrocket Your Business with Email Marketing in Dallas?</h6>
                <p>Don’t let your competitors take the lead. At Creasions, we craft data-driven, personalized email marketing campaigns that boost engagement, drive sales, and help your brand stay top-of-mind, right in your customers’ inbox.</p>
                <a href="tel:+1 469-854-3814" className='t-btn'>Schedule a Free Strategy Call</a>
            </div>
            <div className="bg-circle-animation">
                <div class="animation-component">
                  <Image src={outlineanimation} className='outline-image-01'/>
                  <Image src={outlineanimation} className='outline-image-02'/>
                  <Image src={outlineanimation} className='outline-image-03'/>
                  <Image src={outlineanimation} className='outline-image-04'/>
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}