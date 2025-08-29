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
                <h6>Ready to Scale Your Ecommerce Business? Let&apos;s Get Started!</h6>
                <p>Don&apos;t let your competitors take the lead. At Creasions, we provide top-tier Ecommerce marketing services in Dallas to help your business grow faster, convert more customers, and maximize revenue.</p>
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