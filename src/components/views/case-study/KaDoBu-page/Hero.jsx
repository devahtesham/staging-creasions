import React from 'react'

import BGImage from '/public/kadobu/Hero-bg.png'
import Image from 'next/image'

export default function Hero() {
    return (
        <section className="inner-title" style={{ background: 'linear-gradient(0deg, #000 0%, #130A2C 100%)' }}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="heading">
                            {/* <div className="bg">
                                <Image src={BGImage} className="banner-bg" alt="banner-bg" />

                            </div> */}
                            <h2>KaDoBu <br/>& Company</h2>
                            <h5>Strategic Visionaries Growth Pioneers Driving Success</h5>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
