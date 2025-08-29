import React from 'react'
import Vector1 from '/public/services/content-marketing/Vector1.png'
import Vector2 from '/public/services/content-marketing/Vector2.png'
import Vector3 from '/public/services/content-marketing/Vector3.png'
import Vector4 from '/public/services/content-marketing/Vector4.png'
import Vector5 from '/public/services/content-marketing/Vector5.png'
import Vector6 from '/public/services/content-marketing/Vector6.png'
import bgimage from '/public/services/content-marketing/section3-bg.png'
import Image from 'next/image'

export default function Section3() {
  return (
    <section className="section-03" style={{ backgroundImage: `url(${bgimage.src})` }}>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="text text-center">
                <h2>Comprehensive Content<br/> Marketing Services in Dallas</h2>
                <p>At Creasions, we offer expert content marketing in Dallas designed to enhance brand visibility, engage audiences, and drive measurable results. As a top content marketing company in Dallas, we create data-driven, high-quality content that strengthens your online presence and positions your brand as an industry leader.</p>
            </div>
            <div className="services-grid">
                <div className="services-box">
                    <Image src={Vector1}/>
                    <h5>Content Strategy - Data-Driven Approach for Maximum Impact</h5>
                    <p>We craft data-driven content strategies using research, analysis, and SEO, designed to meet your business goals.</p>
                    <ul>
                      <li>Market research & audience analysis</li>
                      <li>Content planning & editorial calendar</li>
                      <li>SEO keyword research & optimization</li>
                      <li>Performance tracking & content refinement</li>
                    </ul>
                </div>
                <div className="services-box">
                    <Image src={Vector2}/>
                    <h5>Blog Writing - Drive Organic Traffic & Establish Thought Leadership</h5>
                    <p>Boost rankings and engagement with SEO-optimized, industry-specific blog content, crafted to inform and convert.</p>
                    <ul>
                      <li>Well-researched, authoritative blog posts</li>
                      <li>Keyword-optimized content for higher rankings</li>
                      <li>Engaging storytelling to boost audience interaction</li>
                      <li>Consistent content publishing for long-term growth</li>
                    </ul>
                </div>
                <div className="services-box">
                    <Image src={Vector3}/>
                    <h5>Website Content - Persuasive Copy That Converts</h5>
                    <p>Your website is your digital first impression. We create SEO-friendly content that builds trust and drives conversions.</p>
                    <ul>
                      <li>Home, About, and Services page copywriting</li>
                      <li>Landing page optimization for lead generation</li>
                      <li>Clear, persuasive CTAs to drive action</li>
                      <li>Content refresh for outdated websites</li>
                    </ul>
                </div>
                <div className="services-box">
                    <Image src={Vector4}/>
                    <h5>Social Media Content - Expand Your Reach & Boost Engagement</h5>
                    <p>We create platform-specific social strategies that boost engagement and grow your brand on Facebook, Instagram, LinkedIn, and more.</p>
                    <ul>
                      <li>Daily & weekly content planning</li>
                      <li>Social media posts, captions, and visuals</li>
                      <li>Engagement-focused content to grow followers</li>
                      <li>Hashtag strategy & performance tracking</li>
                    </ul>
                </div>
                <div className="services-box">
                    <Image src={Vector5}/>
                    <h5>Email Marketing - Convert Leads & Build Lasting Relationships</h5>
                    <p>Turn inboxes into revenue. Our Dallas content team crafts personalized email campaigns that engage, convert, and build brand loyalty.</p>
                    <ul>
                      <li>Engaging newsletters & promotional emails</li>
                      <li>Drip campaigns for lead nurturing</li>
                      <li>Customer segmentation & automation</li>
                      <li>Performance tracking & A/B testing</li>
                    </ul>
                </div>
                <div className="services-box">
                    <Image src={Vector6}/>
                    <h5>Infographics & Visual Content - Simplify Complex Information</h5>
                    <p>Visuals boost engagement. Our Dallas team creates custom infographics that simplify complex data and drive sharing.</p>
                    <ul>
                      <li>Branded infographics & data visualization</li>
                      <li>Social media graphics for engagement</li>
                      <li>Custom illustrations for enhanced storytelling</li>
                      <li>High-quality image curation & design</li>
                    </ul>
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}