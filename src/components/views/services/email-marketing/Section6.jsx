import React from 'react'
import Image from 'next/image'
import section4img01 from '/public/services/email-marketing/section4-img-01.png'
import section4img03 from '/public/services/email-marketing/section4-img-03.png'
import section4img04 from '/public/services/email-marketing/section4-img-04.png'
import section6img02 from '/public/services/email-marketing/section6-img-02.png'
import section6img05 from '/public/services/email-marketing/section6-img-05.png'
import section6img06 from '/public/services/email-marketing/section6-img-06.png'
import section6img07 from '/public/services/email-marketing/section6-img-07.png'
import section6img08 from '/public/services/email-marketing/section6-img-08.png'
import section6img09 from '/public/services/email-marketing/section6-img-09.png'
import section6img10 from '/public/services/email-marketing/section6-img-10.png'
import GreenTick from '/public/services/email-marketing/GreenTick.png'

export default function Section6() {
  return (
    <section className="section-06" >
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="text text-center">
                <h2>Work With Certified <br/>Email Marketing Experts in Dallas</h2>
                <p>As a top email marketing company in Dallas, we specialize in email automation, lead nurturing, drip campaigns, and retention marketing to help businesses boost engagement and revenue. Our team is certified in industry-leading email marketing platforms, ensuring you receive data-driven strategies that maximize ROI.</p>
                <div className="img-box">
                    <Image src={section4img04} />
                    <Image src={section6img02} />
                    <Image src={section4img01} />
                    <Image src={section4img03} />
                    <Image src={section6img05} />
                    <Image src={section6img06} />
                    <Image src={section6img07} />
                    <Image src={section6img08} />
                    <Image src={section6img09} />
                    <Image src={section6img10} />
                </div>
                <h6>Certified & Experienced in:</h6>
                <div className="experienced-grid">
                    <div className="experience-box">
                        <Image src={GreenTick}/>
                        <h6>Email Automation & Drip Campaigns</h6>
                    </div>
                    <div className="experience-box">
                        <Image src={GreenTick}/>
                        <h6>Lead Nurturing & Customer Retention</h6>
                    </div>
                    <div className="experience-box">
                        <Image src={GreenTick}/>
                        <h6>eCommerce Email Marketing (Klaviyo, Shopify)</h6>
                    </div>
                    <div className="experience-box">
                        <Image src={GreenTick}/>
                        <h6>Segmentation & Personalized Email Strategies</h6>
                    </div>
                    <div className="experience-box">
                        <Image src={GreenTick}/>
                        <h6>AI-Powered Email Analytics & Optimization</h6>
                    </div>
                    <div className="experience-box">
                        <Image src={GreenTick}/>
                        <h6>SMS & Omnichannel Marketing Integration</h6>
                    </div>
                </div>
                <p>Boost Engagement, Increase Sales & Strengthen Customer Loyalty with Our Dallas Email Marketing Experts!</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}