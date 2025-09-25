import React from 'react'

import BGImage from '/public/services/graphic-designing/gd-banner-bg.png'
import Image from 'next/image'

export default function IntroSection({ bannerData }) {
    // Fallback to default values if bannerData is not available
    const bannerTitle = bannerData?.banner_title_heading || "Graphic Design Dallas";
    const bannerContent = bannerData?.content?.replace(/<[^>]*>/g, '') || "Elevate Your Brand with Creasions";
    const backgroundImageUrl = bannerData?.background_image_url;

    return (
        <section className="inner-title">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="heading">
                            <div className="bg">
                                {backgroundImageUrl ? (
                                    <img src={backgroundImageUrl} className="banner-bg" alt="banner-bg" />
                                ) : (
                                    <Image src={BGImage} className="banner-bg" alt="banner-bg" />
                                )}
                            </div>
                            <h1>{bannerTitle}</h1>
                            <h3>{bannerContent}</h3>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
