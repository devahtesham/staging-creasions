import React from 'react'
import CampaignVector from '/public/services/email-marketing/CampaignVector.png'
import EmailVector from '/public/services/email-marketing/EmailVector.png'
import NewsletterVector from '/public/services/email-marketing/NewsletterVector.png'
import eCommerceVector from '/public/services/email-marketing/eCommerceVector.png'
import SegmentationVector from '/public/services/email-marketing/SegmentationVector.png'
import PerformanceVector from '/public/services/email-marketing/PerformanceVector.png'
import bgimage from '/public/services/email-marketing/section3-bg.png'
import Image from 'next/image'

export default function Section4({ servicesData }) {
  const sectionHeading = servicesData?.section_heading || "Our Ecommerce Marketing Services in Dallas";
  const servicesCards = servicesData?.services_cards || [];
  const backgroundImage = servicesData?.section_background || bgimage.src;

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
    
    // Split by <p> tags and extract paragraphs
    const paragraphs = htmlContent.split(/<\/p>/).map(p => p.replace(/<p[^>]*>/, '').trim()).filter(p => p);
    
    // First paragraph is usually the main text
    const mainText = paragraphs.length > 0 ? decodeHtmlEntities(paragraphs[0]) : '';
    
    // Extract remaining paragraphs as list items (excluding <br> tags)
    const listItems = paragraphs.slice(1)
      .filter(item => item && item !== '<br>')
      .map(item => decodeHtmlEntities(item.replace(/<[^>]*>/g, '').trim()))
      .filter(item => item);
    
    return { text: mainText, listItems };
  };

  const defaultServices = [
    {
      title: "Ecommerce SEO - Rank Higher & Drive Organic Traffic",
      description: "<p>Get found by high-intent customers with our Ecommerce SEO services in Dallas. We optimize your store for maximum search engine visibility through:</p><p>Keyword research & on-page optimization</p><p>Product page SEO & structured data implementation</p><p>Link building & off-page SEO strategies</p><p>Site speed optimization & mobile-friendly enhancements</p>",
      icon_url: CampaignVector
    },
    {
      title: "Email & SMS Marketing - Retain & Nurture Customers",
      description: "<p>Boost customer lifetime value (CLV) with targeted email & SMS marketing campaigns, including:</p><p>Automated abandoned cart recovery emails</p><p>Personalized product recommendations</p><p>Loyalty & rewards program promotions</p><p>Seasonal sales & limited-time offers</p>",
      icon_url: EmailVector
    }
  ];

  const defaultIcons = [CampaignVector, EmailVector, NewsletterVector, eCommerceVector, SegmentationVector, PerformanceVector];
  const displayServices = servicesCards.length > 0 ? servicesCards : defaultServices;
  return (
    <section className="section-03" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="text text-center">
                <h2 dangerouslySetInnerHTML={{ __html: sectionHeading.replace(/\n/g, '<br/>') }} />
            </div>
            <div className="services-grid">
                {displayServices.map((service, index) => {
                  const { text, listItems } = parseContent(service.description);
                  return (
                    <div key={index} className="services-box">
                        {service.icon_url && typeof service.icon_url === 'string' ? (
                            <img src={service.icon_url} alt={service.title} />
                        ) : (
                            <Image src={defaultIcons[index] || CampaignVector} alt={service.title} />
                        )}
                        <h5>{service.title}</h5>
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