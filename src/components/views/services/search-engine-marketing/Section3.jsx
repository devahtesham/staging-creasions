import React from 'react'
import Vector1 from '/public/services/search-engine-marketing/Vector1.png'
import Vector2 from '/public/services/search-engine-marketing/Vector2.png'
import Vector3 from '/public/services/search-engine-marketing/Vector3.png'
import Vector4 from '/public/services/search-engine-marketing/Vector4.png'
import Vector5 from '/public/services/search-engine-marketing/Vector5.png'
import Vector6 from '/public/services/search-engine-marketing/Vector6.png'
import bgimage from '/public/services/search-engine-marketing/section3-bg.png'
import Image from 'next/image'

export default function Section3({ servicesData }) {
  const sectionHeading = servicesData?.section_heading || "Comprehensive SEM & PPC Services in Dallas";
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
      title: "PPC Management - High-Impact Paid Advertising",
      content: "<p>Our PPC management services in Dallas ensure your ads reach the right audience with minimal ad spend. We handle:</p><p>Keyword research & bidding strategies</p><p>Google Ads & Bing Ads campaign setup</p><p>A/B testing & conversion tracking</p><p>Cost-per-click (CPC) optimization</p>",
      icon_url: Vector1
    },
    {
      title: "Google AdWords Management - Drive High-Quality Traffic",
      content: "<p>As a trusted AdWords company in Dallas, we optimize your Google Ads campaigns to generate maximum ROI through:</p><p>Search & display advertising</p><p>Google Shopping ads for eCommerce</p><p>Performance monitoring & bid adjustments</p><p>Ad extensions & audience targeting</p>",
      icon_url: Vector2
    }
  ];

  const defaultIcons = [Vector1, Vector2, Vector3, Vector4, Vector5, Vector6];
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
                  const { text, listItems } = parseContent(service.content);
                  return (
                    <div key={index} className="services-box">
                        {service.icon_url && typeof service.icon_url === 'string' ? (
                            <img src={service.icon_url} alt={service.title} />
                        ) : (
                            <Image src={defaultIcons[index] || Vector1} alt={service.title} />
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