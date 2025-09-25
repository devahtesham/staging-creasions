import React from 'react'
import Image from 'next/image'

import Logo from '/public/Creasions-Logo.webp'
import BGImage from '/public/services/new-virtual-employees/ve-banner-bg.png'

import BannerCircle from '/public/services/new-virtual-employees/ve-raffles.png'

export default function Section7({ aboutUsData }) {
    const sectionHeading = aboutUsData?.section_heading || "About Us";
    const sectionDescription = aboutUsData?.section_description?.replace(/<[^>]*>/g, '') || "Creasions a leading force in the IT industry and a Top USA Software Company. Founded in 2020, our journey began much earlier in 2011, working through top freelancing platforms such as Upwork, Fiverr, and more. Over the years, we have earned top-rated badges and established ourselves as a premier Design Agency, Marketing Agency, and top website development company.";
    const leftHandFile = aboutUsData?.left_hand_file;
    const backgroundFileUrl = aboutUsData?.background_file_url;

    return (
        <section className='sec-07'>
            <div className="bg">
                {backgroundFileUrl ? (
                    <img src={backgroundFileUrl} className="banner-bg" alt="banner-bg" />
                ) : (
                    <Image src={BGImage} className="banner-bg" alt="banner-bg" />
                )}
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="content">
                            <div className="left">
                                {leftHandFile ? (
                                    <img src={leftHandFile} className="logo-img" alt="about-us-image" />
                                ) : (
                                    <Image src={Logo} className="logo-img" alt="logo-img" />
                                )}
                                <Image src={BannerCircle} className="raffle-anim" alt="section-animated-bg" />
                            </div>

                            <div className="right">
                                <h2>{sectionHeading}</h2>
                                <p>{sectionDescription}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}
