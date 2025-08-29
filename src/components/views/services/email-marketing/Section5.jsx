import React from 'react'
import Image from 'next/image'
import section5bg from '/public/services/email-marketing/section5bg.png'
import section5img01 from '/public/services/email-marketing/section5img01.png'
import section5img02 from '/public/services/email-marketing/section5img02.png'
import section5img03 from '/public/services/email-marketing/section5img03.png'
import section5img04 from '/public/services/email-marketing/section5img04.png'
import section5img05 from '/public/services/email-marketing/section5img05.png'

export default function Section5() {
  return (
    <section className="section-05" style={{backgroundImage:`url(${section5bg.src})` }}>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="text">
                <h2>Why Choose Us as Your Email <br/>Marketing Agency in Dallas?</h2>
                <div className="email-agency-grid">
                    <div className="agency-box">
                        <Image src={section5img01}/>
                        <h5>Proven Track <br/>Record</h5>
                        <p>Hundreds of successful campaigns across industries.</p>
                    </div>
                    <div className="agency-box">
                        <Image src={section5img02}/>
                        <h5>Certified Email <br/>Marketing Experts</h5>
                        <p>Experienced in Mailchimp, Klaviyo, HubSpot, ActiveCampaign, Constant Contact, and more.</p>
                    </div>
                    <div className="agency-box">
                        <Image src={section5img03}/>
                        <h5>Custom <br/>Strategies</h5>
                        <p>No generic solutions—tailored email campaigns for your business.</p>
                    </div>
                    <div className="agency-box">
                        <Image src={section5img04}/>
                        <h5>Advanced <br/>Personalization & <br/>AI Automation</h5>
                        <p>Maximize engagement with hyper-targeted campaigns.</p>
                    </div>
                    <div className="agency-box">
                        <Image src={section5img05}/>
                        <h5>Data-Driven <br/>Approach</h5>
                        <p>Optimized email performance through continuous testing.</p>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}