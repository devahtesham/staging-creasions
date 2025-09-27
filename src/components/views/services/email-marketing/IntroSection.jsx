import React from 'react'
import HeroBanner from '/public/services/email-marketing/hero-banner.png'

export default function IntroSection({ bannerData }) {
  const bannerTitle = bannerData?.banner_title_heading || "Email Marketing Dallas";
  const bannerText = bannerData?.banner_text?.replace(/<[^>]*>/g, '').replace(/&amp;/g, '&') || "Boost Engagement, Drive Conversions & Maximize ROI with Targeted Email Marketing";
  const backgroundImage = bannerData?.background_image_url || HeroBanner.src;

  // Format title to add line break after "Email"
  const formatTitle = (title) => {
    if (title.includes("Email Marketing")) {
      return title.replace("Email Marketing", "Email <br/>Marketing");
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
              <p dangerouslySetInnerHTML={{ __html: bannerText.replace(/\n/g, '<br/>') }} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}