import React from 'react'
import Image from 'next/image'
import GreenTick from '/public/services/email-marketing/GreenTick.png'

export default function Section3({ achievementsData }) {
  const sectionHeading = achievementsData?.section_headign || "Why Choose Creasions for Ecommerce Marketing in Dallas?";
  const features = achievementsData?.features || [];

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

  const defaultFeatures = [
    {
      title: "Top-rated",
      text: "Top-rated Ecommerce marketing agency in Dallas",
      icon_url: ""
    },
    {
      title: "Data-driven strategies",
      text: "Data-driven strategies tailored to your business",
      icon_url: ""
    },
    {
      title: "Proven success",
      text: "Proven success in growing Ecommerce brands",
      icon_url: ""
    },
    {
      title: "Full-service",
      text: "Full-service approach: SEO, PPC, social media & content marketing",
      icon_url: ""
    },
    {
      title: "Expert team",
      text: "Expert team dedicated to your online success",
      icon_url: ""
    }
  ];

  const displayFeatures = features.length > 0 ? features : defaultFeatures;
  return (
    <section className="section-06" >
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="text text-center">
                <h2 dangerouslySetInnerHTML={{ __html: sectionHeading.replace(/\n/g, '<br/>') }} />
                <div className="experienced-grid">
                    {displayFeatures.map((feature, index) => (
                        <div key={index} className="experience-box">
                            {feature.icon_url && typeof feature.icon_url === 'string' ? (
                                <img src={feature.icon_url} alt={feature.title} />
                            ) : (
                                <Image src={GreenTick} alt="Green Tick" />
                            )}
                            <h6>{decodeHtmlEntities(feature.title)}</h6>
                            <p>{decodeHtmlEntities(feature.text?.replace(/<[^>]*>/g, '') || '')}</p>
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