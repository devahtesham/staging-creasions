import React from 'react'
import Image from 'next/image'
import section5img from '/public/services/content-marketing/section05bg.png'
import sectiongimg1 from '/public/services/content-marketing/sectiongimg1.png'
import sectiongimg2 from '/public/services/content-marketing/sectiongimg2.png'
import sectiongimg3 from '/public/services/content-marketing/sectiongimg3.png'
import sectiongimg4 from '/public/services/content-marketing/sectiongimg4.png'

export default function Section5({ expertiesData }) {
  const sectionHeading = expertiesData?.section_heading || "Creasions + Content = Customers for Life";
  const sectionSpan = expertiesData?.section_span || "Expert Content Marketing Services in Dallas for Long-Term Business Growth";
  const sectionText = expertiesData?.section_text?.replace(/<[^>]*>/g, '') || "At Creasions, we specialize in content marketing in Dallas, creating high-quality, strategic content that attracts, engages, and retains customers. Our content marketing agency in Dallas ensures your brand stands out with compelling, SEO-optimized content that drives traffic, builds trust, and increases conversions. Each month, our content strategists and SEO experts conduct in-depth research to generate high-impact content topics tailored to your industry and audience. Whether you need blog posts, website content, social media content, or email marketing campaigns, we have you covered.";
  
  const processHeading = expertiesData?.sections_cards?.sections_heading || "Our Content Marketing Process - From Strategy to Execution";
  const processCards = expertiesData?.sections_cards?.sections_cards || [];

  // Helper function to decode HTML entities and parse content
  const decodeHtmlEntities = (str) => {
    return str
      .replace(/&amp;/g, '&')
      .replace(/&lt;/g, '<')
      .replace(/&gt;/g, '>')
      .replace(/&quot;/g, '"')
      .replace(/&#39;/g, "'")
      .replace(/&nbsp;/g, ' ');
  };

  const parseContent = (htmlContent) => {
    if (!htmlContent) return { text: '', listItems: [] };
    
    // Extract text content
    const paragraphs = htmlContent.match(/<p[^>]*>([^<]*)<\/p>/g) || [];
    const text = paragraphs.map(p => decodeHtmlEntities(p.replace(/<[^>]*>/g, ''))).join(' ');
    
    // Extract list items
    const listMatches = htmlContent.match(/<li[^>]*>([^<]*)<\/li>/g) || [];
    const listItems = listMatches.map(item => 
      decodeHtmlEntities(item.replace(/<[^>]*>/g, '').trim())
    );
    
    return { text, listItems };
  };

  const defaultCards = [
    {
      title: "Onboarding - Deep Research & Market Analysis",
      icon_url: sectiongimg1,
      description: "<p>We begin with a comprehensive content audit and competitor research to understand your business goals, target audience, and industry trends. During this phase, you'll complete a Content Discovery Form, which serves as the foundation for your content marketing strategy.</p><ul><li>Brand & industry research</li><li>Target audience profiling</li><li>Competitor content analysis</li><li>SEO keyword research</li></ul>"
    },
    {
      title: "Discovery - Crafting a Powerful Content Strategy",
      icon_url: sectiongimg3,
      description: "<p>In this phase, we align your business goals with a tailored content marketing plan. Our content marketing company in Dallas creates a structured strategy that includes:</p><ul><li>Content calendar development</li><li>Conceptualization of blog post topics</li><li>Selection of engaging & SEO-driven topics</li><li>Identifying the best content formats for your audience</li></ul>"
    },
    {
      title: "Content Creation & Approval - Bringing Your Strategy to Life",
      icon_url: sectiongimg2,
      description: "<p>Our team of expert writers, designers, and strategists craft high-quality, on-brand content that aligns with your company's messaging and objectives. This includes:</p><ul><li>SEO-optimized blog posts & articles</li><li>Website copy that converts</li><li>Engaging social media posts & campaigns</li><li>Email marketing content to nurture leads</li><li>Infographics, case studies, and visual storytelling</li></ul><p>All content is reviewed and approved by you before publishing to ensure consistency with your brand's voice.</p>"
    },
    {
      title: "Recurring Content Optimization & Performance Tracking",
      icon_url: sectiongimg4,
      description: "<p>We believe content marketing is an ongoing process. Each month, our content marketing agency in Dallas:</p><ul><li>Analyzes content performance using Google Analytics & SEO tracking tools</li><li>Optimizes existing content for higher engagement & ranking</li><li>Provides detailed reports on traffic, conversions & ROI</li><li>Adjusts strategy based on performance insights</li></ul><p>This ensures that your content continues to deliver results and drive business growth over time.</p>"
    }
  ];

  const displayCards = processCards.length > 0 ? processCards : defaultCards;
  const defaultImages = [sectiongimg1, sectiongimg3, sectiongimg2, sectiongimg4];
  return (
    <section className="section-05" style={{backgroundImage: `url(${section5img.src})`}}>
      <div className="container">
        <div className="row">
            <div className="col-lg-12">
              <div className="text">
                <h2>{sectionHeading}</h2>
                <h6>{sectionSpan}</h6>
                <p>{sectionText}</p>
              </div>
              <div className="social-media-grid">
                <div className="socialgaps">
                  <div className="text">
                    <h2 className='juniorh2' dangerouslySetInnerHTML={{ __html: processHeading.replace(/\n/g, '<br/>') }} />
                  </div>
                  {displayCards.slice(0, 2).map((card, index) => {
                    const { text, listItems } = parseContent(card.description);
                    const backgroundImage = card.icon_url && typeof card.icon_url === 'string' 
                      ? card.icon_url 
                      : defaultImages[index]?.src || sectiongimg1.src;
                    
                    return (
                      <div key={index} className="social-box" style={{backgroundImage: `url(${backgroundImage})`}}>
                        <h5 dangerouslySetInnerHTML={{ __html: card.title.replace(/\n/g, '<br/>') }} />
                        <p>{text}</p>
                        {listItems.length > 0 && (
                          <ul>
                            {listItems.map((item, itemIndex) => (
                              <li key={itemIndex}>{item}</li>
                            ))}
                          </ul>
                        )}
                      </div>
                    );
                  })}
                </div>
                <div className="socialgaps">
                  {displayCards.slice(2, 4).map((card, index) => {
                    const { text, listItems } = parseContent(card.description);
                    const backgroundImage = card.icon_url && typeof card.icon_url === 'string' 
                      ? card.icon_url 
                      : defaultImages[index + 2]?.src || sectiongimg3.src;
                    
                    return (
                      <div key={index + 2} className="social-box" style={{backgroundImage: `url(${backgroundImage})`}}>
                        <h5 dangerouslySetInnerHTML={{ __html: card.title.replace(/\n/g, '<br/>') }} />
                        <p>{text}</p>
                        {listItems.length > 0 && (
                          <ul>
                            {listItems.map((item, itemIndex) => (
                              <li key={itemIndex}>{item}</li>
                            ))}
                          </ul>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div> 
            </div>
        </div>
      </div>
    </section>
  )
}