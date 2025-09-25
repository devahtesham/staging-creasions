import React from 'react'

import BGImage from '/public/services/new-virtual-employees/ve-banner-bg.png'
import BannerCircle from '/public/services/new-virtual-employees/ve-banner-circle.png'
import Image from 'next/image'

export default function IntroSection({ bannerData }) {
    const bannerTitle = bannerData?.banner_title_heading || "Virtual Employees";
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

                                <Image src={BannerCircle} className="banner-circle" alt="banner-bg" />

                            </div>
                            <h2>{bannerTitle}</h2>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
