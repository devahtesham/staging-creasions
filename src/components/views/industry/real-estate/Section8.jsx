import Link from 'next/link';
import React from 'react';

export default function Section8() {
    return (
        <section
            className="sec-8 nitro-onscreen"
            style={{
                backgroundImage: "url(/industry/real-estate/re-sec08-bg.webp)"
            }}
        >
            <div className="container">
                <div
                    className="row align-items-center info-box"
                >
                    <div className="col-md-12">
                        <div className="text">
                            <h2>
                                Contact Us Now To Get<br />
                                The Best Services And The Best Prices.
                            </h2>
                        </div>
                    </div>

                    <div className="order-t-btn">
                        <Link
                            href="/contact-us/"
                            className="t-btn t-btn-gradient"
                        >
                            Get a quote
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
