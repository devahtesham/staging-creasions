import React from 'react'
import Image from 'next/image'
import section2img from '/public/services/seo-services/section2img.png'
import section2img2 from '/public/services/seo-services/section2img2.png'
import section2img3 from '/public/services/seo-services/section2img3.png'
import section2img4 from '/public/services/seo-services/section2img4.png'
import section2img5 from '/public/services/seo-services/section2img5.png'

export default function Section5() {
  return (
    <section className="section-02">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="text text-center">
                <h2>Why Choose Creasions<br/> for SEO Services in Dallas?</h2>
                <div className="seo-service-grid">
                    <div className="seo-box">
                        <Image src={section2img}/>
                        <h5>Top SEO company in Dallas</h5>
                        <p>Top SEO company in Dallas with expert digital marketers</p>
                    </div>
                    <div className="seo-box">
                        <Image src={section2img2}/>
                        <h5>Data-driven SEO strategies</h5>
                        <p>Data-driven SEO strategies tailored to your business</p>
                    </div>
                    <div className="seo-box">
                        <Image src={section2img3}/>
                        <h5>Transparent reporting</h5>
                        <p>Transparent reporting and measurable results</p>
                    </div>
                    <div className="seo-box">
                        <Image src={section2img4}/>
                        <h5>Customized SEO solutions</h5>
                        <p>Customized SEO solutions for businesses of all sizes</p>
                    </div>
                    <div className="seo-box">
                        <Image src={section2img5}/>
                        <h5>100% proven results</h5>
                        <p>100% proven results in driving organic traffic and conversions</p>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}