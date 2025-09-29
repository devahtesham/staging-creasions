import React from 'react'
import Image from 'next/image'
import section5img from '/public/services/seo-services/section05bg.png'
import section05arrow from '/public/services/seo-services/section05arrow.png'

export default function Section5({ profileData }) {
  const sectionHeading = profileData?.section_heading || "Unleash Hidden Opportunities with Our SEO Audit!";
  const buttonText = profileData?.button_text || "Download Profile";
  const buttonUrl = profileData?.button_url || "/services/seo-services/search-engine-marketing-ebook.pdf";
  const backgroundImage = profileData?.section_background || section5img.src;

  return (
    <section className="section-05" style={{backgroundImage: `url(${backgroundImage})`}}>
      <div className="container">
        <div className="row">
            <div className="col-lg-6"></div>
          <div className="col-lg-6">
            <div className="text">
                <h2>{sectionHeading}</h2>
                <div className="link-box">
                    <h6>Connect</h6>
                    <Image src={section05arrow} alt="Arrow" />
                    <a href={buttonUrl} className='btn t-btn' target="_blank">{buttonText}</a>
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}