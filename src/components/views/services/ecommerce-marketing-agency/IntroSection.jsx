import React from 'react'
import HeroBanner from '/public/services/ecommerce-marketing-agency/BannerBg.png'
import HeroBannerOverlay from '/public/services/ecommerce-marketing-agency/HeroBannerOverlay.png'
import Image from 'next/image'

export default function IntroSection({ bannerData }) {
  const bannerTitle = bannerData?.banner_title_heading || "Ecommerce Marketing Services in Dallas";
  const bannerText = bannerData?.banner_text?.replace(/<[^>]*>/g, '').replace(/&amp;/g, '&') || "Drive More Sales, Increase Conversions & Scale Your Online Store";
  const backgroundImage = bannerData?.background_image_url || HeroBanner.src;

  // Format title to add line break after "Ecommerce Marketing"
  const formatTitle = (title) => {
    if (title.includes("Ecommerce Marketing")) {
      return title.replace("Ecommerce Marketing", "Ecommerce Marketing<br/>");
    }
    return title;
  };

  return (
    <section className="hero-banner" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <Image src={HeroBannerOverlay} alt="Hero Banner Overlay" />
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="text">
              <h1>{bannerTitle.split(" ").slice(0,2).join(" ")} <br />
                {bannerTitle.split(" ").slice(2).join(" ")}
                </h1>
              <p>{bannerText}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}