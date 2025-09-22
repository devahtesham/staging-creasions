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
              <h1>{bannerData?.banner_title_heading || "Expert Software Development Dallas Solutions"}</h1>
              <div dangerouslySetInnerHTML={{
                __html: bannerData?.content || `<p>Creasions is a leading <a href="/services/software-development-dallas">software development Dallas</a> company, specializing in custom software solutions designed to meet the unique needs of businesses. With extensive expertise in software development consulting, our team ensures seamless execution from strategic planning to final deployment. Whether you need enterprise software, cloud-based applications, or scalable platforms, Creasions delivers innovative and reliable software development Dallas services to drive business success.</p>`
              }} />
            </div>
          </div>
        </div>
      </div>

      
    </section>

  )
}


