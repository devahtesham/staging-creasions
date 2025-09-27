import React from 'react'
import Image from 'next/image'
import GreenTick from '/public/services/email-marketing/GreenTick.png'

export default function Section6({ achievementsData }) {
  const sectionHeading = achievementsData?.section_headign || "Why Choose Creasions for Social Media Marketing in Dallas?";
  const sectionSubtitle = achievementsData?.content?.replace(/<[^>]*>/g, '') || "#1 SMM Company in Dallas – Drive Results with Strategic Social Media Marketing";
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
      title: "Top SMM company in Dallas",
      content: "with expert digital marketers",
      icon_url: ""
    },
    {
      title: "Customized social media strategies",
      content: "tailored to your business",
      icon_url: ""
    },
    {
      title: "Custom content marketing strategies",
      content: "to maximize engagement and ROI",
      icon_url: ""
    },
    {
      title: "Multi-platform content solutions",
      content: "on Facebook, Instagram, LinkedIn & more",
      icon_url: ""
    },
    {
      title: "Proven track record",
      content: "and real-time performance tracking",
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
                <h6>{sectionSubtitle}</h6>
                <div className="experienced-grid">
                    {displayFeatures.map((feature, index) => (
                        <div key={index} className="experience-box">
                            {feature.icon_url && typeof feature.icon_url === 'string' ? (
                                <img src={feature.icon_url} alt={feature.title} />
                            ) : (
                                <Image src={GreenTick} alt="Green Tick" />
                            )}
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
  )
}