import React from 'react'
import Image from 'next/image'
import section5img from '/public/services/content-marketing/section05bg.png'
import sectiongimg1 from '/public/services/content-marketing/sectiongimg1.png'
import sectiongimg2 from '/public/services/content-marketing/sectiongimg2.png'
import sectiongimg3 from '/public/services/content-marketing/sectiongimg3.png'
import sectiongimg4 from '/public/services/content-marketing/sectiongimg4.png'

export default function Section5() {
  return (
    <section className="section-05" style={{backgroundImage: `url(${section5img.src})`}}>
      <div className="container">
        <div className="row">
            <div className="col-lg-12">
              <div className="text">
                <h2>Creasions + Content = Customers for Life</h2>
                <h6>Expert Content Marketing Services in Dallas for Long-Term Business Growth</h6>
                <p>At Creasions, we specialize in content marketing in Dallas, creating high-quality, strategic content that attracts, engages, and retains customers. Our content marketing agency in Dallas ensures your brand stands out with compelling, SEO-optimized content that drives traffic, builds trust, and increases conversions.</p>
                <p>Each month, our content strategists and SEO experts conduct in-depth research to generate high-impact content topics tailored to your industry and audience. Whether you need blog posts, website content, social media content, or email marketing campaigns, we have you covered.</p>
              </div>
              <div className="social-media-grid">
                <div className="socialgaps">
                  <div className="text">
                  <h2 className='juniorh2'>Our Content Marketing<br/> Process - From Strategy<br/> to Execution</h2>
                  </div>
                              <div className="social-box" style={{backgroundImage:`url(${sectiongimg1.src})`}}>
              <h5>Onboarding - Deep Research & Market Analysis</h5>
              <p>We begin with a comprehensive content audit and competitor research to understand your business goals, target audience, and industry trends. During this phase, you&apos;ll complete a Content Discovery Form, which serves as the foundation for your content marketing strategy.</p>
              <ul>
                <li>Brand & industry research</li>
                <li>Target audience profiling</li>
                <li>Competitor content analysis</li>
                <li>SEO keyword research</li>
              </ul>
            </div>
                              <div className="social-box" style={{backgroundImage:`url(${sectiongimg2.src})`}}>
              <h5>Content Creation & Approval - Bringing Your<br/> Strategy to Life</h5>
              <p>Our team of expert writers, designers, and strategists craft high-quality, on-brand content that aligns with your company&apos;s messaging and objectives. This includes:</p>
              <ul>
                <li>SEO-optimized blog posts & articles</li>
                <li>Website copy that converts</li>
                <li>Engaging social media posts & campaigns</li>
                <li>Email marketing content to nurture leads</li>
                <li>Infographics, case studies, and visual storytelling</li>
              </ul>
              <p>All content is reviewed and approved by you before publishing to ensure consistency with your brand&apos;s voice.</p>
            </div>

                </div>
            <div className="socialgaps">
                          <div className="social-box" style={{backgroundImage:`url(${sectiongimg3.src})`}}>
              <h5>Discovery - Crafting a Powerful Content Strategy</h5>
              <p>In this phase, we align your business goals with a tailored content marketing plan. Our content marketing company in Dallas creates a structured strategy that includes:</p>
              <ul>
                <li>Content calendar development</li>
                <li>Conceptualization of blog post topics</li>
                <li>Selection of engaging & SEO-driven topics</li>
                <li>Identifying the best content formats for your audience</li>
              </ul>
            </div>
            <div className="social-box" style={{backgroundImage:`url(${sectiongimg4.src})`}}>
              <h5>Recurring Content Optimization &<br/> Performance Tracking</h5>
              <p>We believe content marketing is an ongoing process. Each month, our content marketing agency in Dallas:</p>
              <ul>
                <li>Analyzes content performance using Google Analytics & SEO tracking tools</li>
                <li>Optimizes existing content for higher engagement & ranking</li>
                <li>Provides detailed reports on traffic, conversions & ROI</li>
                <li>Adjusts strategy based on performance insights</li>
              </ul>
              <p>This ensures that your content continues to deliver results and drive business growth over time.</p>
            </div>
            </div>
          </div> 
            </div>
        </div>
      </div>
    </section>
  )
}