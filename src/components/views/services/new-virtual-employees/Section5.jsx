import Image from 'next/image'
import React from 'react'

import BannerCircle from '/public/services/new-virtual-employees/ve-banner-circle.png'
import Link from 'next/link'


export default function Section5() {
    return (
        <section className='sec-05'>
            <div className="container">
                <div className="bg">
                    <div className='blur-circle'></div>
                    <Image src={BannerCircle} className="banner-circle" alt="section-animated-bg" />
                </div>
                <div className="row">
                    <div className="col-lg-12">
                        <h4>CONNECT WITH US</h4>
                        <p>Elevate your business with elite virtual professionals. Our top-tier talent integrates seamlessly into your team, driving exceptional results and ensuring your success in a competitive market.</p>
                    </div>
                </div>
            </div>

            <div className="row">
                <Link
                    href="/creasions-profile.pdf"
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
