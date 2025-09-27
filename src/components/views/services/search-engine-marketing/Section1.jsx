import React from 'react'

export default function Section1({ standOutData }) {
  const sectionSpan = standOutData?.section_span || "Maximize Visibility, Drive Targeted Traffic & Boost Conversions with Creasions";
  const sectionContent = standOutData?.content?.replace(/<[^>]*>/g, '') || "At Creasions, we provide data-driven Search Engine Marketing (SEM) services in Dallas, helping businesses dominate search results and generate high-quality leads. Our PPC services in Dallas are designed to maximize ROI with targeted, high-converting ad campaigns. Whether you're looking for Google Ads management, display advertising, remarketing, or YouTube ads, our AdWords company in Dallas ensures your brand gets found by the right audience at the right time.";

  return (
    <section className="section-01">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="text">
              <h6>{sectionSpan}</h6>
              <p>{sectionContent}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}