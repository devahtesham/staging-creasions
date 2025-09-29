import React from 'react'
import Image from 'next/image'
import sectiononeimg from '/public/services/seo-services/section-1-img.png'

export default function Section1({ standOutData }) {
  const sectionSpan = standOutData?.section_span || "SEO Services Dallas - Boost Your Online Presence with Creasions";
  const sectionContent = standOutData?.content?.replace(/<[^>]*>/g, '') || "At Creasions, we specialize in high-impact search engine optimization in Dallas, helping businesses improve their search rankings, attract more leads, and grow their revenue. As a top SEO company in Dallas, we use data-driven strategies to maximize online visibility and drive long-term success.";
  const backgroundImage = standOutData?.background_file_url || sectiononeimg.src;

  return (
    <section className="section-01">
      <div className="container">
        <div className="row">
          <div className="col-lg-7">
            <div className="text">
              <h2 className='h6heading'>{sectionSpan}</h2>
              <p>{sectionContent}</p>
            </div>
          </div>
        </div>
      </div>
      {typeof backgroundImage === 'string' ? (
        <img src={backgroundImage} alt="SEO Services" />
      ) : (
        <Image src={sectiononeimg} alt="SEO Services" />
      )}
    </section>
  )
}