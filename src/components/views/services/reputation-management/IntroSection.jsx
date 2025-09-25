import React from 'react'

import BGImage from '/public/services/local-listing-management/llm-banner-bg.png'
import BannerMountains from '/public/services/local-listing-management/llm-banner-mountains.png'
import Image from 'next/image'

export default function IntroSection({ bannerData }) {
    const bannerTitle = bannerData?.banner_title_heading || "Reputation Management";
    const bannerText = bannerData?.banner_text?.replace(/<[^>]*>/g, '') || "Best Reputation Management Services in Dallas";
    const backgroundImageUrl = bannerData?.background_image_url;

    return (
        <section className="inner-title" style={{ backgroundColor: '#000' }}>
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
                                <Image src={BannerMountains} className="banner-mountains" alt="banner-bg" />
                            </div>
                            <h1>
                                {bannerTitle.split(" ")[0]}<br />
                                {bannerTitle.split(" ").slice(1).join(" ")}

                            </h1>
                            <h3>{bannerText}</h3>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
