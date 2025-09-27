import React from 'react'
import Image from 'next/image'
import GreenTick from '/public/services/email-marketing/GreenTick.png'

export default function Section6({ achievementsData }) {
  const sectionHeading = achievementsData?.section_headign || "Why Choose Creasions for Content Marketing in Dallas?";
  const sectionText = achievementsData?.section_text?.replace(/<[^>]*>/g, '') || "#1 Content Marketing Company Dallas - Build Your Brand with Powerful Content";
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
      title: "Top content marketing in Dallas",
      text: "with a team of expert strategists"
    },
    {
      title: "SEO-optimized content",
      text: "that ranks and drives organic traffic"
    },
    {
      title: "Custom content marketing strategies",
      text: "tailored to your business goals"
    },
    {
      title: "Multi-platform content solutions",
      text: "across websites, blogs, social media & more"
    },
    {
      title: "Proven track record",
      text: "of increasing engagement & conversions"
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
                <h6>{sectionText}</h6>
                <div className="experienced-grid">
                    {displayFeatures.map((feature, index) => (
                        <div key={index} className="experience-box">
                            <Image src={GreenTick} alt="Green Tick" />
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