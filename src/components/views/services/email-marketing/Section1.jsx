import React from 'react'

export default function Section1({ standOutData }) {
  const sectionSpan = standOutData?.section_span || "#1 Email Marketing Company in Dallas";
  const sectionText = standOutData?.section_text?.replace(/<[^>]*>/g, '').replace(/&nbsp;/g, ' ') || "Looking for the best email marketing services in Dallas? We help businesses build, optimize, and scale their email marketing strategies to drive engagement, increase customer retention, and boost revenue. Whether you need email automation, personalized campaigns, or eCommerce email flows, we've got you covered.";

  return (
    <section className="section-01">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="text">
              <h6>{sectionSpan}</h6>
              <p>{sectionText}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}