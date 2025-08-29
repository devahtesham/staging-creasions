"use client";
import React from 'react'
import { Link } from 'react-scroll'

import SecImgBg from '/public/industry/beauty-salons/bs-sec06-bg.webp'
import RightArrow from '/public/right-arrow.webp'


export default function Section6() {
    return (
        <section
            className="main-beauty-sec"
            style={{
                backgroundImage:
                    "url(/industry/beauty-salons/bs-sec06-bg.webp)"
            }}
        >
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div
                            className="beauty-text"
                        >
                            <h2>Ready to Elevate Your Salon or Spa Business Online?</h2>
                            <p>
                                Let&apos;s get started! Contact Creasions today to begin your website
                                design project. Whether you need a brand-new website or want to
                                revamp your existing one, we&apos;re here to make it happen. Don&apos;t forget
                                to take advantage of our free 30-minute consultation (a $1,000
                                value) to discuss how we can create a custom website that works for
                                your salon.
                            </p>
                            <div className="btn-container">
                                <Link href="#form-sec" to='form-sec' smooth={true} className="t-btn t-btn-arrow" tabIndex={0}>
                                    Grow your Salon &amp; Spa business today!
                                    <img
                                        src={RightArrow.src}
                                        alt="arrow-btn"
                                    />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
