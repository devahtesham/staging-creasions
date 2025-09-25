import Image from 'next/image'
import React from 'react'

import BannerCircle from '/public/services/new-virtual-employees/ve-banner-circle.png'
import Link from 'next/link'


export default function Section5({ informationCardData }) {
    const sectionHeading = informationCardData?.section_heading || "CONNECT WITH US";
    const sectionButtonText = informationCardData?.section_button_text || "Elevate your business with elite virtual professionals. Our top-tier talent integrates seamlessly into your team, driving exceptional results and ensuring your success in a competitive market.";
    const sectionButtonLink = informationCardData?.section_button_link || "/creasions-profile.pdf";
    const sectionBackground = informationCardData?.section_background;

    return (
        <section className='sec-05'>
            <div className="container">
                <div className="bg">
                    <div className='blur-circle'></div>
                    {sectionBackground ? (
                        <img src={sectionBackground} className="banner-circle" alt="section-animated-bg" />
                    ) : (
                        <Image src={BannerCircle} className="banner-circle" alt="section-animated-bg" />
                    )}
                </div>
                <div className="row">
                    <div className="col-lg-12">
                        <h4>{sectionHeading}</h4>
                        <p>{sectionButtonText}</p>
                    </div>
                </div>
            </div>

            <div className="row">
                <Link
                    href={sectionButtonLink}
                    className="vertul-t-btn"
                    rel="noopener noreferrer"
                    locale={false}
                    target="_blank"
                >
                    Download Profile
                </Link>
            </div>
        </section>
    )
}
