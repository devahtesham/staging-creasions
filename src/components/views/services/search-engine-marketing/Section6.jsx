import React from 'react'
import Image from 'next/image'
import GreenTick from '/public/services/email-marketing/GreenTick.png'

export default function Section6({ aboutUsData, achievementsData }) {
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

  // Check if this is achievements section or about us section
  if (achievementsData) {
    const sectionHeading = achievementsData?.section_headign || "Why Choose Creasions for SEM & PPC Services in Dallas?";
    const sectionSubtitle = achievementsData?.content?.replace(/<[^>]*>/g, '').replace(/&amp;/g, '&') || "#1 SEM & PPC Company in Dallas - Generate More Leads & Sales";
    const features = achievementsData?.features || [];

    const defaultFeatures = [
      {
        title: "Top-rated SEM agency in Dallas",
        content: "with Google-certified PPC experts",
        icon_url: ""
      },
      {
        title: "Custom SEM strategies",
        content: "tailored to your business goals",
        icon_url: ""
      }
    ];

    const displayFeatures = features.length > 0 ? features : defaultFeatures;

    return (
      <section className="section-06">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="text text-center">
                  <h2 dangerouslySetInnerHTML={{ __html: sectionHeading.replace(/\n/g, '<br/>') }} />
                  <h6>{sectionSubtitle}</h6>
                  <div className="experienced-grid">
                      {displayFeatures.map((feature, index) => (
                          <div key={index} className="experience-box">
                              <Image src={GreenTick} alt="Green Tick" />
                              <h6>{decodeHtmlEntities(feature.title)}</h6>
                              <p>{decodeHtmlEntities(feature.content?.replace(/<[^>]*>/g, '') || '')}</p>
                          </div>
                      ))}
                  </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  // About Us section
  const sectionHeading = aboutUsData?.section_heading || "Get More Leads & Sales with the Best SEM Company in Dallas!";
  const sectionContent = aboutUsData?.content?.replace(/<[^>]*>/g, '').replace(/&amp;/g, '&') || "At Creasions, we create high-impact SEM & PPC campaigns that drive qualified traffic, reduce ad spend, & increase conversions. Book a Free Consultation to grow your business with expert SEM & PPC services in Dallas!";
  const buttonText = aboutUsData?.button_text || "Schedule a Free Strategy Call";
  const buttonUrl = aboutUsData?.button_url || "tel:+1 469-854-3814";
  const backgroundImage = aboutUsData?.section_background;

  return (
    <section 
      className="section-06" 
      style={backgroundImage ? { backgroundImage: `url(${backgroundImage})` } : {}}
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="text text-center">
                <h2 dangerouslySetInnerHTML={{ __html: sectionHeading.replace(/\n/g, '<br/>') }} />
                <p>{sectionContent}</p>
                <a href={buttonUrl} className='t-btn'>{buttonText}</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}