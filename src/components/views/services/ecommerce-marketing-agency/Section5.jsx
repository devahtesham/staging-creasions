import React from 'react'
import Section6Bg from '/public/services/ecommerce-marketing-agency/Section6Bg.png'
import Section6img from '/public/services/ecommerce-marketing-agency/Section6img.png'
import Section5Bg from '/public/services/ecommerce-marketing-agency/Section5Bg.png'
import Image from 'next/image'

export default function Section5({ technologiesData }) {
  const sectionHeading = technologiesData?.section_heading || "Work With Certified Ecommerce Marketing Experts in Dallas";
  const sectionText = technologiesData?.section_text?.replace(/<[^>]*>/g, '').replace(/&amp;/g, '&') || "As a leading Ecommerce marketing company in Dallas, we specialize in SEO, PPC, social media, and conversion rate optimization to help online businesses scale rapidly. Our team is certified in industry-leading Ecommerce tools and platforms, ensuring you receive cutting-edge marketing strategies that drive revenue.";
  const mainImage = technologiesData?.image || Section6img.src;
  const backgroundImage = technologiesData?.section_background || Section5Bg.src;

  // Helper function to parse list items from HTML content
  const parseListItems = (htmlContent) => {
    if (!htmlContent) return [];
    
    const listMatches = htmlContent.match(/<li[^>]*>([^<]*)<\/li>/g) || [];
    return listMatches.map(item => 
      item.replace(/<[^>]*>/g, '').replace(/&amp;/g, '&').trim()
    );
  };

  const listItems = parseListItems(technologiesData?.section_text);
  
  const defaultListItems = [
    "Google Ads & Shopping Campaigns",
    "Facebook, Instagram & TikTok Ads",
    "Shopify & WooCommerce Store Optimization",
    "Amazon & eBay Marketplace Growth",
    "SEO & Content Marketing for Ecommerce",
    "Email & SMS Marketing for Retention"
  ];

  const displayListItems = listItems.length > 0 ? listItems : defaultListItems;

  return (
    <section className="section-02" style={{backgroundImage:`url(${backgroundImage})`}}>
      <div className="container">
        <div className="row">
          <div className="col-lg-7">
            <div className="text">
                <h2 dangerouslySetInnerHTML={{ __html: sectionHeading.replace(/\n/g, '<br/>') }} />
                <p>{sectionText}</p>
                <ul>
                    {displayListItems.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
            </div>
          </div>
          <div className="col-lg-5" style={{backgroundImage:`url(${Section6Bg.src})`}}>
            <div className="img-box">
              {typeof mainImage === 'string' ? (
                <img src={mainImage} alt="Ecommerce Marketing" />
              ) : (
                <Image src={Section6img} alt="Ecommerce Marketing" />
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}