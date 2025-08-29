import React from 'react'

import BGImage from '/public/services/local-listing-management/llm-banner-bg.png'
import BannerMountains from '/public/services/local-listing-management/llm-banner-mountains.png'
import Image from 'next/image'

export default function IntroSection() {
    return (
        <section className="inner-title" style={{ backgroundColor: '#000' }}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="heading">
                            <div className="bg">
                                <Image src={BGImage} className="banner-bg" alt="banner-bg" />
                                <Image src={BannerMountains} className="banner-mountains" alt="banner-bg" />
                            </div>
                            <h1>Reputation<br />Management</h1>
                            <h3>Best Reputation Management Services in Dallas</h3>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
