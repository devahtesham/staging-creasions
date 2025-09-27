import React from 'react'
import VideoOptimizer from '@/components/ui/VideoOptimizer';
import HeroThumbnail from '/public/services/content-marketing/banner-overlay.png'

export default function IntroSection({ bannerData }) {
  const bannerTitle = bannerData?.banner_title_heading || "Content Marketing Dallas";
  const bannerText = bannerData?.banner_text?.replace(/<[^>]*>/g, '').replace(/&amp;/g, '&') || "Drive Engagement, Leads & Business Growth";
  const backgroundVideoUrl = bannerData?.background_image_url;

  // Format title to add line break after "Content"
  const formatTitle = (title) => {
    if (title.includes("Content Marketing")) {
      return title.replace("Content Marketing", "Content <br/>Marketing");
    }
    return title;
  };

  return (
    <section className="hero-banner" >
        <div className="banner-video">
            {backgroundVideoUrl && backgroundVideoUrl.includes('.mp4') ? (
                <VideoOptimizer
                    src={backgroundVideoUrl}
                    poster={HeroThumbnail}
                />
            ) : (
                <VideoOptimizer
                    src="/video/services-banner.mp4"
                    poster={HeroThumbnail}
                />
            )}
        </div>
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