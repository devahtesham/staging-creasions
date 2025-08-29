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
                <h2>Why Choose Creasions for<br/> Ecommerce Marketing in Dallas?</h2>
                <div className="experienced-grid">
                    <div className="experience-box">
                        <Image src={GreenTick}/>
                        <h6>Top-rated</h6>
                        <p>Top-rated Ecommerce marketing agency in Dallas</p>
                    </div>
                    <div className="experience-box">
                        <Image src={GreenTick}/>
                        <h6>Data-driven strategies</h6>
                        <p>Data-driven strategies tailored to your business</p>
                    </div>
                    <div className="experience-box">
                        <Image src={GreenTick}/>
                        <h6>Proven success</h6>
                        <p>Proven success in growing Ecommerce brands</p>
                    </div>
                    <div className="experience-box">
                        <Image src={GreenTick}/>
                        <h6>Full-service</h6>
                        <p>Full-service approach: SEO, PPC, social media & content marketing</p>
                    </div>
                    <div className="experience-box">
                        <Image src={GreenTick}/>
                        <h6>Expert team</h6>
                        <p>Expert team dedicated to your online success</p>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}