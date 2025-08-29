import React from 'react'

import BGImage from '/public/services/graphic-designing/gd-banner-bg.png'
import Image from 'next/image'

export default function IntroSection() {
    return (
        <section className="inner-title">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="heading">
                            <div className="bg">
                                <Image src={BGImage} className="banner-bg" alt="banner-bg" />
                            </div>
                            <h1>Graphic Design Dallas</h1>
                            <h3>Elevate Your Brand with Creasions</h3>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
