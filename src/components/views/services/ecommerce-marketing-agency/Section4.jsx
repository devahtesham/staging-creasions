import React from 'react'
import CampaignVector from '/public/services/email-marketing/CampaignVector.png'
import EmailVector from '/public/services/email-marketing/EmailVector.png'
import NewsletterVector from '/public/services/email-marketing/NewsletterVector.png'
import eCommerceVector from '/public/services/email-marketing/eCommerceVector.png'
import SegmentationVector from '/public/services/email-marketing/SegmentationVector.png'
import PerformanceVector from '/public/services/email-marketing/PerformanceVector.png'
import bgimage from '/public/services/email-marketing/section3-bg.png'
import Image from 'next/image'

export default function Section4() {
  return (
    <section className="section-03" style={{ backgroundImage: `url(${bgimage.src})` }}>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="text text-center">
                <h2>Our Ecommerce<br/> Marketing Services in Dallas</h2>
            </div>
            <div className="services-grid">
                <div className="services-box">
                    <Image src={CampaignVector}/>
                    <h5>Ecommerce SEO - Rank Higher & Drive Organic Traffic</h5>
                    <p>Get found by high-intent customers with our Ecommerce SEO services in Dallas. We optimize your store for maximum search engine visibility through:</p>
                    <ul>
                        <li>Keyword research & on-page optimization</li>
                        <li>Product page SEO & structured data implementation</li>
                        <li>Link building & off-page SEO strategies</li>
                        <li>Site speed optimization & mobile-friendly enhancements</li>
                    </ul>
                </div>
                <div className="services-box">
                    <Image src={EmailVector}/>
                    <h5>Email & SMS Marketing - Retain & Nurture Customers</h5>
                    <p>Boost customer lifetime value (CLV) with targeted email & SMS marketing campaigns, including:</p>
                    <ul>
                      <li>Automated abandoned cart recovery emails</li>
                      <li>Personalized product recommendations</li>
                      <li>Loyalty & rewards program promotions</li>
                      <li>Seasonal sales & limited-time offers</li>
                    </ul>
                </div>
                <div className="services-box">
                    <Image src={NewsletterVector}/>
                    <h5>Social Media Marketing - Expand Your Online Reach</h5>
                    <p>Social media is a powerful tool for Ecommerce brands. Our Ecommerce marketing experts in Dallas specialize in:</p>
                    <ul>
                        <li>Facebook & Instagram ad campaigns</li>
                        <li>Pinterest & TikTok marketing for online stores</li>
                        <li>Social media content creation & management</li>
                        <li>Influencer & affiliate marketing partnerships</li>
                    </ul>
                </div>
                <div className="services-box">
                    <Image src={eCommerceVector}/>
                    <h5>Conversion Rate Optimization (CRO) - Maximize Every Click</h5>
                    <p>Optimize your Ecommerce website to convert more visitors into paying customers with:</p>
                    <ul>
                      <li>Landing page optimization & A/B testing</li>
                      <li>Cart abandonment recovery strategies</li>
                      <li>Heatmap analysis & user behavior tracking</li>
                      <li>Personalized shopping experiences & AI-driven recommendations</li>
                    </ul>
                </div>
                <div className="services-box">
                    <Image src={SegmentationVector}/>
                    <h5>Pay-Per-Click (PPC) Advertising - Get Instant Sales</h5>
                    <p>As a leading Ecommerce marketing company in Dallas, we create high-converting PPC campaigns that generate fast, measurable results using:</p>
                    <ul>
                        <li>Google Ads (Search, Display & Shopping Ads)</li>
                        <li>Bing Ads & Retargeting Campaigns</li>
                        <li>Facebook & Instagram Ecommerce Advertising</li>
                        <li>Amazon PPC & eCommerce marketplace advertising</li>
                    </ul>
                </div>
                <div className="services-box">
                    <Image src={PerformanceVector}/>
                    <h5>Marketplace Optimization - Sell More on Amazon & eBay</h5>
                    <p>Our Ecommerce marketing agency in Dallas helps you dominate online marketplaces with:</p>
                    <ul>
                        <li>Amazon & eBay store optimization</li>
                        <li>Product listing enhancements & keyword targeting</li>
                        <li>Competitor analysis & pricing strategies</li>
                        <li>Amazon FBA consulting & advertising management</li>
                    </ul>
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}