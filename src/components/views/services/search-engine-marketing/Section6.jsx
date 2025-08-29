import React from 'react'
import Image from 'next/image'
import GreenTick from '/public/services/email-marketing/GreenTick.png'

export default function Section6() {
  return (
    <section className="section-06" >
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="text text-center">
                <h2>Why Choose Creasions<br/> for SEM & PPC Services in Dallas?</h2>
                <h6>#1 SEM & PPC Company in Dallas - Generate More Leads & Sales</h6>
                <div className="experienced-grid">
                    <div className="experience-box">
                        <Image src={GreenTick}/>
                        <h6>Top-rated SEM agency in Dallas</h6>
                        <p>with Google-certified PPC experts</p>
                    </div>
                    <div className="experience-box">
                        <Image src={GreenTick}/>
                        <h6>Custom SEM strategies</h6>
                        <p>tailored to your business goals</p>
                    </div>
                    <div className="experience-box">
                        <Image src={GreenTick}/>
                        <h6>AdWords management</h6>
                        <p>& PPC optimization for maximum ROI</p>
                    </div>
                    <div className="experience-box">
                        <Image src={GreenTick}/>
                        <h6>Transparent reporting</h6>
                        <p>with real-time analytics</p>
                    </div>
                    <div className="experience-box">
                        <Image src={GreenTick}/>
                        <h6>Competitive bidding strategies</h6>
                        <p>to reduce ad spend & increase conversions</p>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}