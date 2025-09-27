import React from 'react'
import Section6Bg from '/public/services/ecommerce-marketing-agency/Section6Bg.png'
import Section6img from '/public/services/social-media-marketing/Section4img.png'
import Section5Bg from '/public/services/ecommerce-marketing-agency/Section5Bg.png'
import Image from 'next/image'

export default function Section4({ technologiesData }) {
  const sectionHeading = technologiesData?.section_heading || "Technologies and Platforms We use for Social Media Marketing";
  const mainImage = technologiesData?.image?.[0] || Section6img.src;
  const backgroundImage = technologiesData?.section_background || Section5Bg.src;

  return (
    <section className="section-04" style={{backgroundImage:`url(${backgroundImage})`}}>
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="text">
                <h2 dangerouslySetInnerHTML={{ __html: sectionHeading.replace(/\n/g, '<br/>') }} />
            </div>
          </div>
          <div className="col-lg-6" style={{backgroundImage:`url(${Section6Bg.src})`}}>
            <div className="img-box">
              {typeof mainImage === 'string' ? (
                <img src={mainImage} alt="Technologies" />
              ) : (
                <Image src={Section6img} alt="Technologies" />
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}