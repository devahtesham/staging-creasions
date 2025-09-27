import React from 'react'

export default function Section1({ bannerData }) {
  const sectionHeading = bannerData?.banner_footer_heading || "Maximize Engagement, Drive Sales & Build a Strong Online Presence";
  const sectionText = bannerData?.banner_footer_text?.replace(/<[^>]*>/g, '') || "At Creasions, we offer expert social media marketing in Dallas, helping businesses connect with their audience, increase brand awareness, and drive measurable growth. As a top SMM company in Dallas, we craft data-driven strategies that enhance your digital presence and boost conversions.";

  return (
    <section className="section-01">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="text">
              <h6>{sectionHeading}</h6>
              <p>{sectionText}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}