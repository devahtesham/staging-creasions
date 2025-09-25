import React from 'react'
import Image from 'next/image'
import GreenTick from '/public/services/email-marketing/GreenTick.png'

export default function Section6({ standOutData }) {
  const sectionSpan = standOutData?.section_span || "Why Choose Our Internet Marketing Services in Dallas?";
  const features = standOutData?.features || [];
  
  const defaultFeatures = [
    { title: "Proven Results", description: "We have helped hundreds of businesses scale online.", icon_url: GreenTick },
    { title: "Full-Service Advertising Agency", description: "SEO, PPC, Social Media, Content, and more.", icon_url: GreenTick },
    { title: "Data-Driven Approach", description: "We leverage analytics to optimize campaigns.", icon_url: GreenTick },
    { title: "Certified Experts", description: "Google Ads, Facebook Ads, HubSpot, and more.", icon_url: GreenTick },
    { title: "Tailored Marketing Strategies", description: "Custom solutions for businesses of all sizes.", icon_url: GreenTick }
  ];
  
  const displayFeatures = features.length > 0 ? features : defaultFeatures;

  return (
    <section className="section-06" >
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="text text-center">
                <h2 dangerouslySetInnerHTML={{ __html: sectionSpan.replace(/\n/g, '<br/>') }} />
                <div className="experienced-grid">
                    {displayFeatures.map((feature, index) => (
                      <div key={index} className="experience-box">
                          {feature.icon_url ? (
                            <img src={feature.icon_url} alt={feature.title} />
                          ) : (
                            <Image src={GreenTick} alt={feature.title} />
                          )}
                          <h6>{feature.title}</h6>
                          <p>{feature.description?.replace(/<[^>]*>/g, '') || ''}</p>
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