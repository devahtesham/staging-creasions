import React from 'react'
import HeroBanner from '/public/services/ecommerce-marketing-agency/BannerBg.png'
import HeroBannerOverlay from '/public/services/internet-marketing-agency/HeroBannerOverlay.png'
import Image from 'next/image'

export default function IntroSection({ bannerData }) {
  // Helper function to decode HTML entities
  const decodeHtmlEntities = (str) => {
    return str
      .replace(/&amp;/g, '&')
      .replace(/&lt;/g, '<')
      .replace(/&gt;/g, '>')
      .replace(/&quot;/g, '"')
      .replace(/&#39;/g, "'")
      .replace(/&nbsp;/g, ' ');
  };

  const bannerTitle = bannerData?.banner_title_heading || "Best Internet Marketing & Advertising Agency in Dallas";
  const bannerText = bannerData?.banner_text?.replace(/<[^>]*>/g, '') || "Best Internet Marketing & Advertising Agency in Dallas";
  const backgroundImageUrl = bannerData?.background_image_url;

  return (
    <section className="hero-banner" style={{ backgroundImage: backgroundImageUrl ? `url(${backgroundImageUrl})` : `url(${HeroBanner.src})` }}>
      <Image src={HeroBannerOverlay}/>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="text">
              <h1>
                {decodeHtmlEntities(bannerTitle).split(" ")[0]} {decodeHtmlEntities(bannerTitle).split(" ")[1]} {decodeHtmlEntities(bannerTitle).split(" ")[2]} &<br/> 
                {decodeHtmlEntities(bannerTitle).split(" ").slice(3).join(" ")}
              </h1>
              <p>{decodeHtmlEntities(bannerText)}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
