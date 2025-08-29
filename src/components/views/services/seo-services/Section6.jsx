import React from 'react'
import Image from 'next/image'
import section06img from '/public/services/seo-services/section06img.png'

export default function Section6() {
  return (
    <section className="section-06">
      <div className="container">
        <div className="row align-items-center">
            <div className="col-lg-5">
                <div className="text">
                    <h2>Work with the Best<br/> SEO Agency in Dallas!</h2>
                    <p>At Creasions, we are committed to providing expert search engine optimization in Dallas, helping businesses rank higher, drive more traffic, and achieve long-term success.</p>
                    <span>Call us today at <a href="tel:+1 469-854-3814">+1 469-854-3814</a> or <a href="#">Book a Free Consultation</a> to grow your business with top-notch SEO services in Dallas!</span>
                </div>
            </div>
          <div className="col-lg-7 justify-end">
            <Image src={section06img}/>
          </div>
        </div>
      </div>
    </section>
  )
}