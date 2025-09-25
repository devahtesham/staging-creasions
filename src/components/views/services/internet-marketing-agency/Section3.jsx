import React from 'react'
import Image from 'next/image'
import section03img01 from '/public/services/internet-marketing-agency/section03img01.png'
import section03img02 from '/public/services/internet-marketing-agency/section03img02.png'
import section03img03 from '/public/services/internet-marketing-agency/section03img03.png'
import section03img04 from '/public/services/internet-marketing-agency/section03img04.png'
import section03img05 from '/public/services/internet-marketing-agency/section03img05.png'

export default function Section3({ informationCardData }) {
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

  const sectionHeading = informationCardData?.section_heading || "Our Dallas Internet Marketing & Advertising Services";
  const cards = informationCardData?.cards || [];
  
  const defaultCards = [
    {
      image_url: section03img01,
      text_heading: "Search Engine Optimization (SEO)",
      text_description: "As a leading internet marketing agency in Dallas, we implement advanced SEO strategies to improve search rankings and drive organic traffic. Our SEO services in Dallas include: <ul><li>Keyword Research & Strategy</li><li>On-Page & Off-Page SEO</li><li>Technical SEO & Local SEO Optimization</li><li>Link Building & Content Strategy</li></ul>"
    },
    {
      image_url: section03img02,
      text_heading: "Pay-Per-Click (PPC) Advertising",
      text_description: "Maximize your ROI with high-performing PPC campaigns. Our Dallas advertising agency specializes in: <ul><li>Google Ads & Bing Ads Management</li><li>Display & Retargeting Ads</li><li>YouTube & Video Advertising</li><li>eCommerce PPC & Amazon Ads</li></ul>"
    },
    {
      image_url: section03img03,
      text_heading: "Social Media Marketing & Advertising",
      text_description: "Boost engagement and conversions with targeted social media marketing campaigns. Our social media marketing services in Dallas include: <ul><li>Facebook & Instagram Ads</li><li>LinkedIn & Twitter Advertising</li><li>TikTok & YouTube Marketing</li><li>Influencer & Community Engagement</li></ul>"
    },
    {
      image_url: section03img04,
      text_heading: "Content Marketing and Brand Storytelling",
      text_description: "Position your brand as an authority with high-quality, SEO-optimized content marketing strategies. <ul><li>Blog Writing & Article Marketing</li><li>Website & Landing Page Content</li><li>Video & Visual Content Creation</li><li>Press Releases & Digital PR</li></ul>"
    },
    {
      image_url: section03img05,
      text_heading: "Email Marketing & Automation",
      text_description: "Leverage email marketing automation to nurture leads and increase customer retention. <ul><li>Email Campaign Strategy & Execution</li><li>Personalized Drip Sequences</li><li>Lead Nurturing & Segmentation</li><li>eCommerce & B2B Email Marketing</li></ul>"
    }
  ];
  
  const displayCards = cards.length > 0 ? cards : defaultCards;
  const defaultImages = [section03img01, section03img02, section03img03, section03img04, section03img05];

  // Parse HTML content to extract text and list items
  const parseContent = (htmlContent) => {
    if (!htmlContent) return { text: '', listItems: [] };
    
    const textMatch = htmlContent.match(/<p[^>]*>([^<]*)<\/p>/);
    const text = textMatch ? decodeHtmlEntities(textMatch[1]) : decodeHtmlEntities(htmlContent.replace(/<[^>]*>/g, '').split(':')[0]);
    
    const listMatches = htmlContent.match(/<li[^>]*>([^<]*)<\/li>/g) || [];
    const listItems = listMatches.map(item => decodeHtmlEntities(item.replace(/<[^>]*>/g, '')));
    
    return { text, listItems };
  };

  return (
    <section className="section-03" >
      <div className="container">
        <div className="row align-items-center">
            <div className="col-lg-12">
                <div className="text text-center">
                    <h2 dangerouslySetInnerHTML={{ __html: sectionHeading.replace(/\n/g, '<br/>') }} />
                </div>
            </div>
          {displayCards.map((card, index) => {
            const { text, listItems } = parseContent(card.text_description);
            const isEven = index % 2 === 0;
            
            return (
              <React.Fragment key={index}>
                {isEven ? (
                  <>
                    <div className="col-lg-6">
                      <div className="img-box">
                        {card.image_url && typeof card.image_url === 'string' ? (
                          <img src={card.image_url} alt={card.text_heading} />
                        ) : (
                          <Image src={defaultImages[index] || section03img01} alt={card.text_heading} />
                        )}
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="text textRight">
                        <h2 dangerouslySetInnerHTML={{ __html: card.text_heading.replace(/\sand\s/g, ' &<br/> ') }} />
                        <p>{text}</p>
                        {listItems.length > 0 && (
                          <ul>
                            {listItems.map((item, itemIndex) => (
                              <li key={itemIndex}>{item}</li>
                            ))}
                          </ul>
                        )}
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="col-lg-6">
                      <div className="text textLeft">
                        <h2 dangerouslySetInnerHTML={{ __html: card.text_heading.replace(/\sand\s/g, ' &<br/> ') }} />
                        <p>{text}</p>
                        {listItems.length > 0 && (
                          <ul>
                            {listItems.map((item, itemIndex) => (
                              <li key={itemIndex}>{item}</li>
                            ))}
                          </ul>
                        )}
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="img-box">
                        {card.image_url && typeof card.image_url === 'string' ? (
                          <img src={card.image_url} alt={card.text_heading} />
                        ) : (
                          <Image src={defaultImages[index] || section03img01} alt={card.text_heading} />
                        )}
                      </div>
                    </div>
                  </>
                )}
              </React.Fragment>
            );
          })}
        </div>
      </div>
    </section>
  )
}