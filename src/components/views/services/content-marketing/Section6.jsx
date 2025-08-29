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
                <h2>Why Choose Creasions<br/> for Content Marketing in Dallas?</h2>
                <h6>#1 Content Marketing Company Dallas - Build Your Brand with Powerful Content</h6>
                <div className="experienced-grid">
                    <div className="experience-box">
                        <Image src={GreenTick}/>
                        <h6>Top content marketing in Dallas</h6>
                        <p>with a team of expert strategists</p>
                    </div>
                    <div className="experience-box">
                        <Image src={GreenTick}/>
                        <h6>SEO-optimized content</h6>
                        <p>that ranks and drives organic traffic</p>
                    </div>
                    <div className="experience-box">
                        <Image src={GreenTick}/>
                        <h6>Custom content marketing strategies</h6>
                        <p>tailored to your business goals</p>
                    </div>
                    <div className="experience-box">
                        <Image src={GreenTick}/>
                        <h6>Multi-platform content solutions</h6>
                        <p>across websites, blogs, social media & more</p>
                    </div>
                    <div className="experience-box">
                        <Image src={GreenTick}/>
                        <h6>Proven track record</h6>
                        <p>of increasing engagement & conversions</p>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}