import React from 'react'

import RightArrow from '/public/industry/cleaning-company/cc-sec05-right-arrow.webp'



export default function Section5() {
    return (
        <section className="real-sec-5 cleaning-sec-4">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="text-clening">
                            <h2>
                                Services We Offers
                                <br /> for Cleaning Companies
                            </h2>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-6 col-md-6 col-sm-6 mb-3">
                        <div className="case-box">
                            <div className="text">
                                <h3>Web Design &amp; Development</h3>
                                <p>
                                    If you want to attract new leads and book more cleaning jobs, your
                                    website needs to do the heavy lifting. We can either improve your
                                    current site or create a brand-new one that looks great, loads
                                    fast, and converts visitors into paying customers. Our design team
                                    knows how to build websites that work hard for your business.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-6 col-md-6 col-sm-6 mb-3">
                        <div className="case-box">
                            <div className="text">
                                <h3>Search Engine Optimization</h3>
                                <p>
                                    Getting found online is crucial. Our SEO services ensure your
                                    website ranks higher in search results so potential clients can
                                    easily find you. We&apos;ll optimize your site with the right keywords
                                    and strategies to help you stand out in a crowded market.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-6 col-md-6 col-sm-6 mb-3">
                        <div className="case-box">
                            <div className="text">
                                <h3>Pay-Per-Click (PPC)</h3>
                                <p>
                                    Want to get more eyes on your site right away? Our PPC campaigns
                                    are a smart way to bring in traffic and convert those clicks into
                                    real customers. It&apos;s an affordable marketing strategy that
                                    delivers fast results by targeting the people most likely to need
                                    your services.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-6 col-md-6 col-sm-6 mb-3">
                        <div className="case-box">
                            <div className="text">
                                <h3>Content Writing</h3>
                                <p>
                                    A great website needs great content. Our team of skilled writers
                                    creates engaging, high-quality content tailored to your audience.
                                    Whether it&apos;s blog posts, service pages, or landing pages, we&apos;ll
                                    ensure your site&apos;s message is clear and persuasive, helping you
                                    turn visitors into loyal clients.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xl-3 col-lg-6 col-md-6 col-sm-6 mb-3">
                        <div className="case-box">
                            <div className="text">
                                <h3>Social Media Marketing</h3>
                                <p>
                                    Keeping up with social media can be tough, especially when you&apos;re
                                    running a business. That&apos;s where we come in. We&apos;ll manage your
                                    social media accounts and create content that builds your brand,
                                    increases engagement, and drives more leads—so you can focus on
                                    what you do best.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-6 col-md-6 col-sm-6 mb-3">
                        <div className="case-box">
                            <div className="text">
                                <h3>Nextdoor Advertising</h3>
                                <p>
                                    If you want to target local customers in specific neighborhoods,
                                    Nextdoor ads are the way to go. We&apos;ll help you create highly
                                    targeted ads that reach the right people in the right places,
                                    driving more business directly to your door.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-6 col-md-6 col-sm-6 mb-3">
                        <div className="case-box">
                            <div className="text">
                                <h3>Online Reputation Management</h3>
                                <p>
                                    Your online reputation can make or break your business. We help
                                    you manage your brand by monitoring reviews, responding to
                                    feedback, and ensuring you build a strong, positive online
                                    presence. A good reputation is key to winning new clients, and
                                    we&apos;re here to help you maintain it.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-6 col-md-6 col-sm-6 mb-3">
                        <div className="case-box">
                            <div className="text">
                                <h3>Video Production</h3>
                                <p>
                                    Video content is a powerful tool to boost your cleaning business.
                                    Whether you want to showcase your services or share customer
                                    testimonials, our video production team can create high-quality
                                    videos that engage your audience and drive conversions.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <a href="#form-sec" className="t-btn t-btn-arrow" tabIndex={0}>
                        Let&apos;s Talk
                        <img
                            src={RightArrow.src}
                            alt="arrow-btn"
                        />
                    </a>
                </div>
            </div>
        </section>

    )
}
