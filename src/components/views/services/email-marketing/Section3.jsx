import React from 'react'
import CampaignVector from '/public/services/email-marketing/CampaignVector.png'
import EmailVector from '/public/services/email-marketing/EmailVector.png'
import NewsletterVector from '/public/services/email-marketing/NewsletterVector.png'
import eCommerceVector from '/public/services/email-marketing/eCommerceVector.png'
import SegmentationVector from '/public/services/email-marketing/SegmentationVector.png'
import PerformanceVector from '/public/services/email-marketing/PerformanceVector.png'
import bgimage from '/public/services/email-marketing/section3-bg.png'
import Image from 'next/image'

export default function Section3() {
  return (
    <section className="section-03" style={{ backgroundImage: `url(${bgimage.src})` }}>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="text text-center">
                <h2>Our Email Marketing Services in Dallas</h2>
            </div>
            <div className="services-grid">
                <div className="services-box">
                    <Image src={CampaignVector}/>
                    <h5>Email Campaign Strategy & Consulting</h5>
                    <p>We create custom email marketing strategies based on your business goals, audience, and industry trends. From list segmentation to content optimization, we help maximize your email open rates, click-throughs, and conversions.</p>
                </div>
                <div className="services-box">
                    <Image src={EmailVector}/>
                    <h5>Email Automation and Sequences</h5>
                    <p>Save time and improve engagement with automated email workflows:</p>
                    <ul>
                      <li>Welcome Series – Make a great first impression.</li>
                      <li>Cart Abandonment Emails – Recover lost sales effortlessly.</li>
                      <li>Follow-Up Sequences – Nurture leads and drive engagement.</li>
                      <li>Win-Back Campaigns – Re-engage inactive customers.</li>
                    </ul>
                </div>
                <div className="services-box">
                    <Image src={NewsletterVector}/>
                    <h5>Newsletter and Promotional Emails</h5>
                    <p>Keep your audience informed and engaged with weekly or monthly email newsletters featuring company updates, promotions, new product releases, and more.</p>
                </div>
                <div className="services-box">
                    <Image src={eCommerceVector}/>
                    <h5>eCommerce Email Marketing (Shopify, WooCommerce, Amazon, etc.)</h5>
                    <p>Maximize revenue for your eCommerce business with high-converting email flows:</p>
                    <ul>
                      <li> Product recommendations</li>
                      <li>Flash sales & seasonal campaigns</li>
                      <li>Post-purchase & upsell emails</li>
                      <li>Customer loyalty & referral programs</li>
                    </ul>
                </div>
                <div className="services-box">
                    <Image src={SegmentationVector}/>
                    <h5>Email List Growth & Segmentation</h5>
                    <p>We use lead generation strategies to grow your email list with high-quality subscribers. Through advanced segmentation, we tailor campaigns to different customer segments, ensuring higher engagement and conversion rates.</p>
                </div>
                <div className="services-box">
                    <Image src={PerformanceVector}/>
                    <h5>A/B Testing & Email Performance Optimization</h5>
                    <p>We continuously test subject lines, designs, CTAs, and send times to optimize performance and increase open rates, click-throughs, and revenue generation.</p>
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}