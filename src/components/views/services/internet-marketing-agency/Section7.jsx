import React from 'react'
import Section6Bg from '/public/services/ecommerce-marketing-agency/Section6Bg.png'
import Section6img from '/public/services/ecommerce-marketing-agency/Section6img.png'
import Section5Bg from '/public/services/ecommerce-marketing-agency/Section5Bg.png'
import Image from 'next/image'

export default function Section7({ expertiesData }) {
  // Helper function to decode HTML entities
  const decodeHtmlEntities = (str) => {
    return str
      .replace(/&amp;/g, '&')
      .replace(/&lt;/g, '<')
      .replace(/&gt;/g, '>')
      .replace(/&quot;/g, '"')
      .replace(/&#39;/g, "'")
      .replace(/&nbsp;/g, ' ');
  };

  const sectionHeading = expertiesData?.section_heading || "Work With Certified Internet Marketing Experts in Dallas";
  const sectionText = expertiesData?.section_text?.replace(/<[^>]*>/g, '') || "As a top advertising agency in Dallas, we are certified in industry-leading marketing tools:";
  const expertiseImage = expertiesData?.image;
  const backgroundImageUrl = expertiesData?.background_image_url;
  
  // Extract list items from section_text
  const listMatches = expertiesData?.section_text?.match(/<li[^>]*>([^<]*)<\/li>/g) || [];
  const listItems = listMatches.length > 0 
    ? listMatches.map(item => decodeHtmlEntities(item.replace(/<[^>]*>/g, '')))
    : [
        "Google Ads & Google Analytics",
        "Facebook & Instagram Advertising",
        "HubSpot & Mailchimp Email Marketing",
        "SEMrush & Ahrefs for SEO Optimization",
        "Shopify & WooCommerce eCommerce Marketing"
      ];

  return (
    <section className="section-02" style={{backgroundImage: backgroundImageUrl ? `url(${backgroundImageUrl})` : `url(${Section5Bg.src})`}}>
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="text">
                <h2 dangerouslySetInnerHTML={{ __html: sectionHeading.replace(/\n/g, '<br/>') }} />
                <p>{decodeHtmlEntities(sectionText.split(':')[0] + (sectionText.includes(':') ? ':' : ''))}</p>
                <ul>
                    {listItems.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                </ul>
            </div>
          </div>
          <div className="col-lg-6" style={{backgroundImage:`url(${Section6Bg.src})`}}>
            <div className="img-box">
              {expertiseImage ? (
                <img src={expertiseImage} alt="Expertise" />
              ) : (
                <Image src={Section6img} alt="Expertise" />
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}