import React from 'react'
import SecImgBg from '/public/industry/beauty-salons/bs-sec07-bg.webp'

export default function Section7() {
    return (
        <section
            className="sec-8 nitro-onscreen"
            // style={{
            //     backgroundImage:
            //         "url(/industry/beauty-salons/bs-sec07-bg.webp)"
            // }}
        >
            <div className="container">
                <div className="row align-items-center info-box">
                    <div className="col-md-12">
                        <div className="text">
                            <h2>
                                Contact Us Now To Get
                                <br />
                                The Best Services And The Best Prices.
                            </h2>
                        </div>
                    </div>
                </div>
                <div className="order-t-btn">
                    <a
                        href="/contact-us"
                        className="t-btn t-btn-gradient"
                    >
                        Get a quote
                    </a>
                </div>
            </div>
        </section>

    )
}
