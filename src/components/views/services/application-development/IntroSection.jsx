import Link from 'next/link'
import React from 'react'

export default function IntroSection({ pageData }) {
  const bannerData = pageData?.banner;
  
  return (
    <section
      className="inner-title"
      style={{
        backgroundImage: bannerData?.background_image_url 
          ? `url(${bannerData.background_image_url})`
          : "url(/services/web-design/web-design-bg.webp)"
      }}
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="heading">
              <h1>
                {bannerData?.banner_title_heading || "End-to-End Application Development Dallas Services"}
              </h1>
              <div dangerouslySetInnerHTML={{
                __html: bannerData?.content || `<p>Creasions is a top provider of <a href="/services/application-development-dallas">application development Dallas</a> services, specializing in custom mobile applications for both iOS and Android platforms. Our expertise in application development Dallas ensures the creation of user-friendly, high-performance apps that seamlessly integrate with your business goals. Whether it's iPhone app development leveraging the full potential of the iOS ecosystem or Android app development optimized for scalability, we deliver cutting-edge solutions tailored to your needs.</p>`
              }} />
            </div>
          </div>
        </div>
      </div>
    </section>

  )
}


