import React from 'react'
import Image from 'next/image'
import section5img from '/public/services/social-media-marketing/section05bg.png'
import mobileimage from '/public/services/social-media-marketing/mobile-image.png'
import section05arrow from '/public/services/seo-services/section05arrow.png'

export default function Section5({ profileData }) {
  const sectionHeading = profileData?.section_heading || "Unleash Hidden Opportunities with Our Social Media Audit!";
  const buttonText = profileData?.button_text || "Download Profile";
  const buttonUrl = profileData?.button_url || "/services/social-media-marketing/social-media-marketing-ebook.pdf";
  const buttonSpan = profileData?.button_span || "Connect";
  const mainImage = profileData?.image || mobileimage.src;
  const backgroundImage = profileData?.background_image_url || section5img.src;

  return (
    <section className="section-05" style={{backgroundImage: `url(${backgroundImage})`}}>
      <div className="container">
        <div className="row">
            <div className="col-lg-6">
              {typeof mainImage === 'string' ? (
                <img src={mainImage} className='mobile-image' alt="Social Media Audit" />
              ) : (
                <Image src={mobileimage} className='mobile-image' alt="Social Media Audit" />
              )}
            </div>
          <div className="col-lg-6">
            <div className="text">
                <h2>{sectionHeading}</h2>
                <div className="link-box">
                    <h6>{buttonSpan}</h6>
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