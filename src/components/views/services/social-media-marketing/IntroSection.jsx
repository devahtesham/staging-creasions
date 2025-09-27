import React from 'react'
import VideoOptimizer from '@/components/ui/VideoOptimizer';
import HeroThumbnail from '/public/services/social-media-marketing/banner-overlay.png'

export default function IntroSection({ bannerData }) {
  const bannerTitle = bannerData?.banner_title_heading || "Social Media Marketing Dallas";
  const bannerSpan = bannerData?.banner_span || "Social Media Marketing Dallas - Elevate Your Brand with Creasions";
  const backgroundVideo = bannerData?.background_image_url;

  // Format title to add line break after "Social Media"
  const formatTitle = (title) => {
    if (title.includes("Social Media Marketing")) {
      return title.replace("Social Media Marketing", "Social Media <br/>Marketing");
    }
    return title;
  };

  return (
    <section className="hero-banner" >
        <div className="banner-video">
            <VideoOptimizer
                src={backgroundVideo && backgroundVideo.includes('.mp4') ? backgroundVideo : "/video/services-banner.mp4"}
                poster={HeroThumbnail}
            />
        </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="text">
              <h1 dangerouslySetInnerHTML={{ __html: formatTitle(bannerTitle) }} />
              <p>{bannerSpan}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}