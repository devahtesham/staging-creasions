import React from 'react'
import Image from 'next/image'

import Logo from '/public/Creasions-Logo.webp'
import BGImage from '/public/services/new-virtual-employees/ve-banner-bg.png'

import BannerCircle from '/public/services/new-virtual-employees/ve-raffles.png'

export default function Section7() {
    return (
        <section className='sec-07'>
            <div className="bg">
                <Image src={BGImage} className="banner-bg" alt="banner-bg" />
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="content">
                            <div className="left">
                                <Image src={Logo} className="logo-img" alt="logo-img" />
                                <Image src={BannerCircle} className="raffle-anim" alt="section-animated-bg" />
                            </div>

                            <div className="right">
                                <h2>About Us</h2>
                                <p>Creasions a leading force in the IT industry and a Top USA Software Company. Founded in 2020, our journey began much earlier in 2011, working through top freelancing platforms such as Upwork, Fiverr, and more. Over the years, we have earned top-rated badges and established ourselves as a premier Design Agency, Marketing Agency, and top website development company.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}
