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

export default function Section3({ servicesData, expertiesData }) {
  const sectionHeading = servicesData?.section_heading || "Social Media Marketing Dallas - Engage, Convert & Grow with Creasions";
  const sectionText = servicesData?.content?.replace(/<[^>]*>/g, '') || "At Creasions, we offer top-tier social media marketing in Dallas, helping businesses enhance their digital presence, increase brand awareness, and drive customer engagement. Our SMM agency in Dallas creates data-driven campaigns that maximize ROI and ensure long-term success.";
  const servicesSubHeading = servicesData?.services_cards?.section_headign || "Social Media Marketing Services in Dallas";
  const servicesCards = servicesData?.services_cards?.section_cards || [];
  
  const platformHeading = expertiesData?.section_heading || "Platform-Specific Social Media Marketing Services in Dallas";
  const platformCards = expertiesData?.sections_cards?.sections_cards || [];

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
    
    // Extract text content before list items
    const textMatch = htmlContent.match(/<p[^>]*>([^<]*)<\/p>/);
    const text = textMatch ? decodeHtmlEntities(textMatch[1]) : '';
    
    // Extract list items
    const listMatches = htmlContent.match(/<li[^>]*>([^<]*)<\/li>/g) || [];
    const listItems = listMatches.map(item => 
      decodeHtmlEntities(item.replace(/<[^>]*>/g, '').trim())
    );
    
    return { text, listItems };
  };

  const defaultServices = [
    {
      title: "Social Media Management - Build a Strong & Engaging Presence",
      content: "Our Dallas social media management services cover everything from account setup and profile optimization to content planning & audience engagement. As a leading SMM company in Dallas, we manage multi-platform campaigns, ensuring consistent branding and meaningful interactions with your audience.",
      icon_url: CampaignVector
    },
    {
      title: "Social Media Marketing - Reach & Engage Your Target Audience",
      content: "Effective social media marketing requires a strategic approach. Our SMM services in Dallas analyze your brand, audience, and competition to develop customized social media strategies that drive traffic, boost engagement, and increase conversions.",
      icon_url: EmailVector
    }
  ];

  const defaultPlatforms = [
    {
      title: "Facebook Marketing - Leverage the Power of the Largest Social Network",
      content: "<p>Facebook remains one of the most effective marketing platforms. Our Dallas social media marketing services include:</p><ul><li>Facebook account optimization</li><li>Content strategy & creation</li><li>Performance tracking & insights</li><li>Targeted Facebook ad campaigns</li></ul>",
      icon_url: section3fb
    },
    {
      title: "Instagram Marketing - Boost Your Visual Branding and Engagement",
      content: "<p>Instagram is essential for brand storytelling. Our SMM company in Dallas offers:</p><ul><li>Instagram profile setup & optimization</li><li>Engaging content creation (posts, reels, stories)</li><li>Audience growth & engagement strategies</li><li>Instagram ad campaigns for lead generation</li></ul>",
      icon_url: section3insta
    }
  ];

  const defaultIcons = [CampaignVector, EmailVector, NewsletterVector, eCommerceVector];
  const defaultPlatformImages = [section3fb, section3insta, section3twitter, section3linkdhin];
  
  const displayServices = servicesCards.length > 0 ? servicesCards : defaultServices;
  const displayPlatforms = platformCards.length > 0 ? platformCards : defaultPlatforms;
  return (
    <section className="section-03" style={{ backgroundImage: `url(${bgimage.src})` }}>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="text text-center">
                <h2 dangerouslySetInnerHTML={{ __html: sectionHeading.replace(/\n/g, '<br/>') }} />
                <p>{sectionText}</p>
                <h2 className='juniorh2'>{servicesSubHeading}</h2>
            </div>
            <div className="services-grid">
                {displayServices.map((service, index) => {
                  const { text } = parseContent(service.content);
                  return (
                    <div key={index} className="services-box">
                        {service.icon_url && typeof service.icon_url === 'string' ? (
                            <img src={service.icon_url} alt={service.title} />
                        ) : (
                            <Image src={defaultIcons[index] || CampaignVector} alt={service.title} />
                        )}
                        <h5>{service.title}</h5>
                        <p>{text || service.content}</p>
                    </div>
                  );
                })}
            </div>
            <div className="text text-center">
              <h2 className='juniorh2' dangerouslySetInnerHTML={{ __html: platformHeading.replace(/\n/g, '<br/>') }} />
            </div>
            <div className="social-media-grid">
              {displayPlatforms.map((platform, index) => {
                const { text, listItems } = parseContent(platform.content);
                const backgroundImage = platform.icon_url && typeof platform.icon_url === 'string' 
                  ? platform.icon_url 
                  : defaultPlatformImages[index]?.src || section3fb.src;
                
                return (
                  <div key={index} className="social-box" style={{backgroundImage:`url(${backgroundImage})`}}>
                    <h5 dangerouslySetInnerHTML={{ __html: platform.title.replace(/\n/g, '<br/>') }} />
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
    </section>
  )
}