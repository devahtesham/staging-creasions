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
                <h2>Why Choose Creasions for<br/> Social Media Marketing in Dallas?</h2>
                <h6>#1 SMM Company in Dallas – Drive Results with Strategic Social Media Marketing</h6>
                <div className="experienced-grid">
                    <div className="experience-box">
                        <Image src={GreenTick}/>
                        <h6>Top SMM company in Dallas</h6>
                        <p>with expert digital marketers</p>
                    </div>
                    <div className="experience-box">
                        <Image src={GreenTick}/>
                        <h6>Customized social media strategies</h6>
                        <p>tailored to your business</p>
                    </div>
                    <div className="experience-box">
                        <Image src={GreenTick}/>
                        <h6>Custom content marketing strategies</h6>
                        <p>to maximize engagement and ROI</p>
                    </div>
                    <div className="experience-box">
                        <Image src={GreenTick}/>
                        <h6>Multi-platform content solutions</h6>
                        <p>on Facebook, Instagram, LinkedIn & more</p>
                    </div>
                    <div className="experience-box">
                        <Image src={GreenTick}/>
                        <h6>Proven track record</h6>
                        <p>and real-time performance tracking</p>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}