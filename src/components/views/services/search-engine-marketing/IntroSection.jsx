import React from 'react'
import HeroThumbnail from '/public/services/search-engine-marketing/banner-overlay.png'

export default function IntroSection({ bannerData }) {
  const bannerTitle = bannerData?.banner_title_heading || "Search Marketing Dallas";
  const bannerText = bannerData?.content?.replace(/<[^>]*>/g, '').replace(/&amp;/g, '&') || "Search Engine Marketing (SEM) & Pay-Per-Click (PPC) Services in Dallas";
  const backgroundImage = bannerData?.background_image_url || HeroThumbnail.src;

  // Format title to add line break after "Search"
  const formatTitle = (title) => {
    if (title.includes("Search Marketing")) {
      return title.replace("Search Marketing", "Search <br/>Marketing");
    }
    return title;
  };

  return (
    <section className="hero-banner" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="text">
              <h1 dangerouslySetInnerHTML={{ __html: formatTitle(bannerTitle) }} />
              <p>{bannerText}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}