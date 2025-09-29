import React from 'react'
import HeroBanner from '/public/services/seo-services/starbg.png'
import bglayer from '/public/services/seo-services/bg-top-layer.png'
import Image from 'next/image'

export default function IntroSection({ bannerData }) {
  const bannerTitle = bannerData?.banner_title_heading || "SEO Services";
  const bannerContent = bannerData?.content?.replace(/<[^>]*>/g, '') || "#1 SEO Company Dallas - Proven Strategies for Maximum Growth";
  const backgroundImage = bannerData?.background_image_url || HeroBanner.src;

  // Format title to add line break after first word
  const formatTitle = (title) => {
    if (title.includes(" ")) {
      const words = title.split(" ");
      return words[0] + "<br/> " + words.slice(1).join(" ");
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
              <p>{bannerContent}</p>
            </div>
          </div>
        </div>
      </div>
      <Image src={bglayer} alt="Background Layer" />
    </section>
  )
}