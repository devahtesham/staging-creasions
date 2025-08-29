import React from 'react'
import Image from 'next/image'


import Image1 from '/public/services/branding/branding-01.webp'
import Image2 from '/public/services/branding/branding-02.webp'

import Marquee from '/public/services/branding/marquee.png'

export default function Section3() {
    return (
        <div className='sec-03'>
            <div className="marquee">
                {[...Array(4)].map((_, index) => (
                    <div className="track" key={index}>
                        <noscript>
                            <img decoding="async" src={Marquee} alt="marquee image" />
                        </noscript>
                        <Image
                            loading="lazy"
                            decoding="async"
                            src={Marquee}
                            alt="marquee image"
                            data-ll-status="loaded"
                        />
                    </div>
                ))}
            </div>
            <section className='branding-sec-03'>
                <div className="container-fluid pl-0 sticky-sec">
                    <div className="row align-items-center pb-0">
                        <div className="col-lg-5 col-md-12">
                            <div className="img-box">
                                <Image
                                    decoding="async"
                                    src={Image1}
                                    alt="Website Design"
                                    className="lazy img-fluid w-100 entered loaded"
                                />
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12">
                            <div className="text box-2">
                                <h4>
                                    The Importance of Branding Services for Companies, Brands, Businesses, and E-commerce Stores

                                </h4>
                                <p>
                                    In the fast-paced world of modern commerce, where every pixel counts, branding services stand as the cornerstone for companies, brands, businesses, and e-commerce stores. Imagine your brand emerging from the digital noise, crafted by visionary designers whose expertise turns abstract ideas into compelling visual stories. These services don’t just create logos; they shape identities that resonate, inspire, and connect deeply with your audience. For e-commerce stores, a distinctive brand can be the difference between fleeting visits and loyal customers. In essence, effective branding is the secret weapon that transforms businesses, blending creativity with strategic precision to leave an indelible mark in the marketplace.


                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="row align-items-center pb-0 reverse-webdesign">
                        <div className="offset-lg-1 col-lg-6 col-md-12">
                            <div className="text box-2">
                                <h4>Why Choose Creasions - The Leading Branding Agency Dallas?
                                </h4>
                                <p>
                                    Choosing Creasions as your branding agency Dallas means partnering with a team dedicated to creativity, strategy, and precision. Our expert branding services blend innovation with minimalism, ensuring your brand stands out in the competitive market. From logo design and brand identity development to strategic messaging, we craft solutions that make an impact. At Creasions, a top branding agency in Dallas, we focus on delivering sleek, memorable designs that resonate with your audience and build long-term brand loyalty. Elevate your brand with Creasions—where creativity meets strategy for lasting success.
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-5 p-0 col-md-12">
                            <div className="img-box">

                                <Image
                                    decoding="async"
                                    src={Image2}
                                    alt="Mobile App Design"
                                    className="lazy img-fluid w-100 entered loaded"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>

    )
}
