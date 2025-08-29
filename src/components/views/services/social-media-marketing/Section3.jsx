import React from 'react'
import CampaignVector from '/public/services/email-marketing/CampaignVector.png'
import EmailVector from '/public/services/email-marketing/EmailVector.png'
import NewsletterVector from '/public/services/email-marketing/NewsletterVector.png'
import eCommerceVector from '/public/services/email-marketing/eCommerceVector.png'
import section3fb from '/public/services/social-media-marketing/section3fb.png'
import section3insta from '/public/services/social-media-marketing/section3insta.png'
import section3linkdhin from '/public/services/social-media-marketing/section3linkdhin.png'
import section3twitter from '/public/services/social-media-marketing/section3twitter.png'
import bgimage from '/public/services/social-media-marketing/section3-bg.png'
import Image from 'next/image'

export default function Section3() {
  return (
    <section className="section-03" style={{ backgroundImage: `url(${bgimage.src})` }}>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="text text-center">
                <h2>Social Media Marketing Dallas -<br/> Engage, Convert & Grow with Creasions</h2>
                <p>At Creasions, we offer top-tier social media marketing in Dallas, helping businesses enhance their digital presence, increase brand awareness, and drive customer engagement. Our SMM agency in Dallas creates data-driven campaigns that maximize ROI and ensure long-term success.</p>
                <h2 className='juniorh2'>Social Media Marketing Services in Dallas</h2>
            </div>
            <div className="services-grid">
                <div className="services-box">
                    <Image src={CampaignVector}/>
                    <h5>Social Media Management - Build a Strong & Engaging Presence</h5>
                    <p>Our Dallas social media management services cover everything from account setup and profile optimization to content planning & audience engagement. As a leading SMM company in Dallas, we manage multi-platform campaigns, ensuring consistent branding and meaningful interactions with your audience.</p>
                </div>
                <div className="services-box">
                    <Image src={EmailVector}/>
                    <h5>Social Media Marketing - Reach & Engage Your Target Audience</h5>
                    <p>Effective social media marketing requires a strategic approach. Our SMM services in Dallas analyze your brand, audience, and competition to develop customized social media strategies that drive traffic, boost engagement, and increase conversions.</p>
                </div>
                <div className="services-box">
                    <Image src={NewsletterVector}/>
                    <h5>Social Media Paid Advertising - Maximize Reach & Conversions</h5>
                    <p>Paid social media ads are a powerful way to expand your reach. Our SMM agency Dallas creates targeted, high-converting paid ad campaigns on Facebook, Instagram, LinkedIn, and Twitter. We optimize every ad based on customer behavior, interests, & demographics to ensure cost-effective results.</p>
                </div>
                <div className="services-box">
                    <Image src={eCommerceVector}/>
                    <h5>Social Media Brand Management - Strengthen Your Brand Identity</h5>
                    <p>A well-managed social media presence builds credibility and trust. Our SMM services in Dallas ensure brand consistency across all social media platforms, increasing customer loyalty and enhancing brand recognition.</p>
                </div>
            </div>
            <div className="text text-center">
              <h2 className='juniorh2'>Platform-Specific Social Media<br/> Marketing Services in Dallas</h2>
            </div>
            <div className="social-media-grid">
              <div className="social-box" style={{backgroundImage:`url(${section3fb.src})`}}>
                <h5>Facebook Marketing - Leverage the Power of the<br/> Largest Social Network</h5>
                <p>Facebook remains one of the most effective marketing platforms. Our Dallas social media marketing services include:</p>
                <ul>
                  <li>Facebook account optimization</li>
                  <li>Content strategy & creation</li>
                  <li>Performance tracking & insights</li>
                  <li>Targeted Facebook ad campaigns</li>
                </ul>
              </div>
              <div className="social-box" style={{backgroundImage:`url(${section3insta.src})`}}>
                <h5>Instagram Marketing - Boost Your Visual Branding<br/> and Engagement</h5>
                <p>Instagram is essential for brand storytelling. Our SMM company in Dallas offers:</p>
                <ul>
                  <li>Instagram profile setup & optimization</li>
                  <li>Engaging content creation (posts, reels, stories)</li>
                  <li>Audience growth & engagement strategies</li>
                  <li>Instagram ad campaigns for lead generation</li>
                </ul>
              </div>
              <div className="social-box" style={{backgroundImage:`url(${section3twitter.src})`}}>
                <h5>Twitter Marketing - Real-Time Engagement<br/> and Brand Growth</h5>
                <p>Twitter is a powerful tool for increasing brand visibility. Our SMM services in Dallas focus on:</p>
                <ul>
                  <li>Twitter content strategy & scheduling</li>
                  <li>Hashtag research & engagement tactics</li>
                  <li>Influencer collaborations & outreach</li>
                  <li>Twitter paid advertising & campaign management</li>
                </ul>
              </div>
              <div className="social-box" style={{backgroundImage:`url(${section3linkdhin.src})`}}>
                <h5>LinkedIn Marketing - Build Authority and<br/> B2B Relationships</h5>
                <p>For businesses targeting professionals, our LinkedIn marketing services in Dallas include:</p>
                <ul>
                  <li>LinkedIn profile & company page optimization</li>
                  <li>Thought leadership content creation</li>
                  <li>LinkedIn advertising & sponsored posts</li>
                  <li>Networking & lead generation strategies</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}