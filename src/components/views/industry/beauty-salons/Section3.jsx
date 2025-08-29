"use client"
import React from 'react'
import { Link } from 'react-scroll'


import SecImgBg from '/public/industry/beauty-salons/bs-sec03-bg.webp'
import SecImg1 from '/public/industry/beauty-salons/bs-sec03-01.webp'
import SecImg2 from '/public/industry/beauty-salons/bs-sec03-02.webp'
import SecImg3 from '/public/industry/beauty-salons/bs-sec03-03.webp'

import RightArrow from '/public/right-arrow.webp'


export default function Section3() {
    return (
        <>
            <section className="beauty-sec-3">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div
                                className="beauty-text"
                            >
                                <h2>
                                    At Creasions, we specialize in creating custom
                                    <br /> websites and online marketing solutions for salons,
                                    <br /> spas, and beauty professionals.
                                </h2>
                                <p>
                                    Whether you run a hair salon, nail salon, spa, or work as an
                                    independent stylist, we&apos;re here to help you build a strong online
                                    presence that attracts local clients. From designing SEO-friendly
                                    websites to managing your social media, we&apos;ve got everything you
                                    need to grow your business and get noticed by the right people.
                                </p>
                            </div>
                            <div></div>
                        </div>
                        <div className="col-md-6">
                            <div
                                className="beauty-text"
                            >
                                <p>Our full range of salon web design services includes:</p>
                                <ul className="beauty-list">
                                    <li>Custom Web Design for Hair Salons</li>
                                    <li>Web Design for Individual Stylists &amp; Hairdressers</li>
                                    <li>Web Design for Beauty Salons</li>
                                    <li>Web Design for Nail Salons</li>
                                    <li>Web Design for Spas</li>
                                </ul>
                                <p className="last-part">
                                    If you want to learn more about how our web design, SEO, and social
                                    media marketing services can help you boost your salon&apos;s online
                                    visibility, reach out to our team today for more details.
                                </p>
                            </div>
                            <div></div>
                        </div>
                        <div className="col-md-6">
                            <div
                                className="beauty-image"
                            >
                                <img
                                    src={SecImg1.src}
                                    alt="laptop"
                                />
                            </div>
                            <div></div>
                        </div>
                    </div>
                </div>
            </section>


            <div
                className="beauty-last"
                style={{
                    backgroundImage:
                        "url(/industry/beauty-salons/bs-sec03-bg.webp)"
                }}
            >
                <section className="beauty-sec-4">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-md-6">
                                <div
                                    className="beauty-image"
                                >
                                    <img
                                        src={SecImg2.src}
                                        alt="hair-cut"
                                    />
                                </div>
                                <div></div>
                            </div>
                            <div className="col-md-6">
                                <div
                                    className="beauty-text"
                                >
                                    <h2> Why Choose Creasions for Your Salon Website?</h2>
                                    <p>
                                        At Creasions, we know every salon and spa is unique. That&apos;s why we
                                        take the time to understand your specific needs and goals,
                                        crafting a website that reflects your brand and helps you achieve
                                        your business objectives. Whether you&apos;re looking to attract new
                                        clients, showcase your portfolio, or increase online bookings,
                                        we&apos;ll design a website that&apos;s built to perform.
                                    </p>
                                </div>
                                <div></div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="beauty-sec-5">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-md-6">
                                <div
                                    className="beauty-text"
                                >
                                    <h2>Your Website Is An Investment</h2>
                                    <p>
                                        We understand that creating a website is a significant investment,
                                        and we&apos;re here to make it easier for you. That&apos;s why we offer a
                                        price match guarantee and flexible financing options to ensure
                                        your project is completed professionally, no matter your budget.
                                    </p>
                                    <ul className="beauty-list">
                                        <li>50% upfront / 50% upon dev-link completion</li>
                                        <li>Project milestone payments</li>
                                        <li>Partnership and investment options</li>
                                        <li>3 months financing at 4.95%, 6 months at 6.95%</li>
                                        <li>12 months financing at 9.95%, 24 months at 12.95%</li>
                                        <li>
                                            Every website, app, and marketing campaign we build is fully
                                            custom, tailored to meet your unique needs.
                                        </li>
                                    </ul>
                                    <div className="btn-container">
                                        <Link href="#form-sec" to="form-sec" smooth={true} className="t-btn t-btn-arrow" tabIndex={0}>
                                            Request a Quote
                                            <img
                                                src={RightArrow.src}
                                                alt="arrow-btn"
                                            />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div
                                    className="beauty-image"
                                >
                                    <img
                                        src={SecImg3.src}
                                        alt="laptop"
                                    />
                                </div>
                                <div></div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

        </>
    )
}
