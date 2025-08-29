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
                <h2>Why Choose Our Internet<br/> Marketing Services in Dallas?</h2>
                <div className="experienced-grid">
                    <div className="experience-box">
                        <Image src={GreenTick}/>
                        <h6>Proven Results</h6>
                        <p>We have helped hundreds of businesses scale online.</p>
                    </div>
                    <div className="experience-box">
                        <Image src={GreenTick}/>
                        <h6>Full-Service Advertising Agency</h6>
                        <p>SEO, PPC, Social Media, Content, and more.</p>
                    </div>
                    <div className="experience-box">
                        <Image src={GreenTick}/>
                        <h6>Data-Driven Approach</h6>
                        <p>We leverage analytics to optimize campaigns.</p>
                    </div>
                    <div className="experience-box">
                        <Image src={GreenTick}/>
                        <h6>Certified Experts</h6>
                        <p>Google Ads, Facebook Ads, HubSpot, and more.</p>
                    </div>
                    <div className="experience-box">
                        <Image src={GreenTick}/>
                        <h6>Tailored Marketing Strategies</h6>
                        <p>Custom solutions for businesses of all sizes.</p>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}