import React from 'react'
import Group1Img from '/public/industry/real-estate/re-group1.webp';
import Group2Img from '/public/industry/real-estate/re-group2.webp';
import Group3Img from '/public/industry/real-estate/re-group3.webp';
import Group4Img from '/public/industry/real-estate/re-group4.webp';
import Group5Img from '/public/industry/real-estate/re-group5.webp';
import Loud1 from '/public/industry/real-estate/re-loud-1.png';
import Link from 'next/link';

export default function Section2() {
    return (
        <>
            <section className="real-sec-2">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="case-text-brand">
                                <h2>Brilliant Real Estate Website<br /> Development from a Trustable Team</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        {[
                            {
                                image: Group1Img.src,
                                text: 'IDX and MLS Integration Easy for Real Estate',
                            },
                            {
                                image: Group2Img.src,
                                text: 'Custom Website and Plugin Development Tailored to You',
                            },
                            {
                                image: Group3Img.src,
                                text: 'Real Estate CRM and Digital Marketing Platform',
                            },
                            {
                                image: Group4Img.src,
                                text: 'Elegant Website Redesigns to Uplift Your Real Estate Brand',
                            },
                            {
                                image: Group5Img.src,
                                text: 'APIs Custom Design and Development for Real Estate Platforms',
                            },
                        ].map((item, index) => (
                            <div className="col-xl-2 col-lg-4 col-md-4 col-sm-6" key={index}>
                                <div className="case-text" style={{ backgroundImage: `url(${item.image})` }}>
                                    <h4>{item.text}</h4>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <section className="sec-7 nitro-offscreen">
                <div className="container">
                    <div className="row align-items-center info-box">
                        <div className="col">
                            <div className="text fade-in-left">
                                <h2>For more <br /> information <br />
                                speak with us</h2>
                            </div>
                        </div>
                        <div className="col">
                            <ul>
                                <li>
                                    <a href="tel:1469-854-3814" className="discount-call-btn">
                                        +1 469-854-3814
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="col img-box">
                            <img
                                alt="Loud Speaker"
                                src={Loud1.src}
                                className="lazyloaded"
                            />
                        </div>
                        <div className="col">
                            <div className="disc-price">
                                <h3>Flat 30% On</h3>
                            </div>
                        </div>
                        <div className="col">
                            <div className="order-btn">
                                <Link href="/contact-us" className="t-btn t-btn-gradient">
                                    Order Now
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
