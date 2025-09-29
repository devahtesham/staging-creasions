import React from 'react'
import Image from 'next/image'
import section2img from '/public/services/seo-services/section2img.png'
import section2img2 from '/public/services/seo-services/section2img2.png'
import section2img3 from '/public/services/seo-services/section2img3.png'
import section2img4 from '/public/services/seo-services/section2img4.png'
import section2img5 from '/public/services/seo-services/section2img5.png'

export default function Section2({ servicesData }) {
  const sectionHeading = servicesData?.section_heading || "Why Choose Creasions for SEO Services in Dallas?";
  const servicesCards = servicesData?.services_cards || [];

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

  const defaultServices = [
    {
      title: "Top SEO company in Dallas",
      content: "Top SEO company in Dallas with expert digital marketers",
      icon_url: section2img
    },
    {
      title: "Data-driven SEO strategies",
      content: "Data-driven SEO strategies tailored to your business",
      icon_url: section2img2
    },
    {
      title: "Transparent reporting",
      content: "Transparent reporting and measurable results",
      icon_url: section2img3
    },
    {
      title: "Customized SEO solutions",
      content: "Customized SEO solutions for businesses of all sizes",
      icon_url: section2img4
    },
    {
      title: "100% proven results",
      content: "100% proven results in driving organic traffic and conversions",
      icon_url: section2img5
    }
  ];

  const defaultIcons = [section2img, section2img2, section2img3, section2img4, section2img5];
  const displayServices = servicesCards.length > 0 ? servicesCards : defaultServices;
  return (
    <section className="section-02">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="text text-center">
                <h2 dangerouslySetInnerHTML={{ __html: sectionHeading.includes('for SEO') ? sectionHeading.replace(' for SEO', '<br/> for SEO') : sectionHeading }} />
                <div className="seo-service-grid">
                    {displayServices.map((service, index) => (
                      <div key={index} className="seo-box">
                          {typeof service.icon_url === 'string' ? (
                            <img src={service.icon_url} alt={service.title} />
                          ) : (
                            <Image src={defaultIcons[index] || section2img} alt={service.title} />
                          )}
                          <h5>{decodeHtmlEntities(service.title)}</h5>
                          <p>{decodeHtmlEntities(service.content?.replace(/<[^>]*>/g, '') || '')}</p>
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