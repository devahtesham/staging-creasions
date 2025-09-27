import React from 'react'
import Image from 'next/image'
import section5bg from '/public/services/email-marketing/section5bg.png'
import section5img01 from '/public/services/email-marketing/section5img01.png'
import section5img02 from '/public/services/email-marketing/section5img02.png'
import section5img03 from '/public/services/email-marketing/section5img03.png'
import section5img04 from '/public/services/email-marketing/section5img04.png'
import section5img05 from '/public/services/email-marketing/section5img05.png'

export default function Section5({ expertiesData }) {
  const sectionHeading = expertiesData?.section_heading || "Why Choose Us as Your Email Marketing Agency in Dallas?";
  const backgroundImage = expertiesData?.section_background || section5bg.src;
  const expertiseCards = expertiesData?.sections_cards?.sections_cards || [];

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

  const defaultCards = [
    {
      title: "Proven Track Record",
      description: "Hundreds of successful campaigns across industries.",
      icon_url: section5img01
    },
    {
      title: "Certified Email Marketing Experts",
      description: "Experienced in Mailchimp, Klaviyo, HubSpot, ActiveCampaign, Constant Contact, and more.",
      icon_url: section5img02
    },
    {
      title: "Custom Strategies",
      description: "No generic solutions—tailored email campaigns for your business.",
      icon_url: section5img03
    },
    {
      title: "Advanced Personalization & AI Automation",
      description: "Maximize engagement with hyper-targeted campaigns.",
      icon_url: section5img04
    },
    {
      title: "Data-Driven Approach",
      description: "Optimized email performance through continuous testing.",
      icon_url: section5img05
    }
  ];

  const defaultImages = [section5img01, section5img02, section5img03, section5img04, section5img05];
  const displayCards = expertiseCards.length > 0 ? expertiseCards : defaultCards;
  return (
    <section className="section-05" style={{backgroundImage:`url(${backgroundImage})` }}>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="text">
                <h2 dangerouslySetInnerHTML={{ __html: sectionHeading.replace(/\n/g, '<br/>') }} />
                <div className="email-agency-grid">
                    {displayCards.map((card, index) => (
                        <div key={index} className="agency-box">
                            {card.icon_url && typeof card.icon_url === 'string' ? (
                                <img src={card.icon_url} alt={card.title} />
                            ) : (
                                <Image src={defaultImages[index] || section5img01} alt={card.title} />
                            )}
                            <h5 dangerouslySetInnerHTML={{ __html: decodeHtmlEntities(card.title).replace(/\n/g, '<br/>') }} />
                            <p>{decodeHtmlEntities(card.description?.replace(/<[^>]*>/g, '') || '')}</p>
                        </div>
                    ))}
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}