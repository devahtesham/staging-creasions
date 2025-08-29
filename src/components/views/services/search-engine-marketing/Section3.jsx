import React from 'react'
import Vector1 from '/public/services/search-engine-marketing/Vector1.png'
import Vector2 from '/public/services/search-engine-marketing/Vector2.png'
import Vector3 from '/public/services/search-engine-marketing/Vector3.png'
import Vector4 from '/public/services/search-engine-marketing/Vector4.png'
import Vector5 from '/public/services/search-engine-marketing/Vector5.png'
import Vector6 from '/public/services/search-engine-marketing/Vector6.png'
import bgimage from '/public/services/search-engine-marketing/section3-bg.png'
import Image from 'next/image'

export default function Section3() {
  return (
    <section className="section-03" style={{ backgroundImage: `url(${bgimage.src})` }}>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="text text-center">
                <h2>Comprehensive SEM<br/> & PPC Services in Dallas</h2>
            </div>
            <div className="services-grid">
                <div className="services-box">
                    <Image src={Vector1}/>
                    <h5>PPC Management - High-Impact Paid Advertising</h5>
                    <p>Our PPC management services in Dallas ensure your ads reach the right audience with minimal ad spend. We handle:</p>
                    <ul>
                      <li>Keyword research & bidding strategies</li>
                      <li>Google Ads & Bing Ads campaign setup</li>
                      <li>A/B testing & conversion tracking</li>
                      <li>Cost-per-click (CPC) optimization</li>
                    </ul>
                </div>
                <div className="services-box">
                    <Image src={Vector2}/>
                    <h5>Google AdWords Management - Drive High-Quality Traffic</h5>
                    <p>As a trusted AdWords company in Dallas, we optimize your Google Ads campaigns to generate maximum ROI through:</p>
                    <ul>
                      <li>Search & display advertising</li>
                      <li>Google Shopping ads for eCommerce</li>
                      <li>Performance monitoring & bid adjustments</li>
                      <li>Ad extensions & audience targeting</li>
                    </ul>
                </div>
                <div className="services-box">
                    <Image src={Vector3}/>
                    <h5>Local SEM & Geo-Targeting - Reach Local Customers Effectively</h5>
                    <p>Maximize visibility with local SEM services in Dallas. We optimize location-based search ads to target high-intent users near your business.</p>
                    <ul>
                      <li>Google My Business (GMB) Ads</li>
                      <li>Local search & geo-targeting</li>
                      <li>Mobile-friendly PPC strategies</li>
                    </ul>
                </div>
                <div className="services-box">
                    <Image src={Vector4}/>
                    <h5>Remarketing & Retargeting - Reconnect with Potential Customers</h5>
                    <p>Increase brand recall and customer retention with remarketing ads in Dallas. Our services include:</p>
                    <ul>
                      <li>Retargeting ads for website visitors</li>
                      <li>Dynamic display ads for personalized engagement</li>
                      <li>Email remarketing campaigns</li>
                    </ul>
                </div>
                <div className="services-box">
                    <Image src={Vector5}/>
                    <h5>YouTube Advertising - Engage Users with Video Marketing</h5>
                    <p>Video ads are a powerful way to capture attention and drive conversions. Our YouTube advertising services in Dallas include:</p>
                    <ul>
                      <li>Skippable & non-skippable in-stream ads</li>
                      <li>YouTube bumper ads & TrueView campaigns</li>
                      <li>Mobile-optimized video ad strategies</li>
                    </ul>
                </div>
                <div className="services-box">
                    <Image src={Vector6}/>
                    <h5>Social Media Paid Advertising - Expand Your Reach</h5>
                    <p>Leverage social media PPC ads to reach highly targeted customer segments. We manage Facebook, Instagram, LinkedIn, and Twitter ads to maximize engagement.</p>
                    <ul>
                      <li>Custom audience targeting & segmentation</li>
                      <li>Lookalike audience & retargeting ads</li>
                      <li>Social media ad analytics & optimization</li>
                    </ul>
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}