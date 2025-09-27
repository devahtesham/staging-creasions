import React from 'react'

export default function Section1({ standOutData }) {
  const sectionSpan = standOutData?.section_span || "High-Impact Content Strategies for Maximum Online Visibility";
  const sectionText = standOutData?.section_text?.replace(/<[^>]*>/g, '') || "At Creasions, we specialize in content marketing in Dallas, delivering high-quality, data-driven content that boosts brand authority, increases website traffic, and converts leads into loyal customers. As a leading content marketing company in Dallas, we create compelling content tailored to your target audience, ensuring measurable success.";

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