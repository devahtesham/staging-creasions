import React from 'react';

export default function Section8() {
    return (
        <section
            className="sec-8 nitro-onscreen"
            style={{
                backgroundImage: "url(/industry/cleaning-company/cc-cta-bg.webp)"
            }}
        >
            <div className="container">
                <div
                    className="row align-items-center info-box wow FadeOut"
                    data-wow-duration="3s"
                    style={{
                        visibility: "visible",
                        animationDuration: "3s",
                        animationName: "fadeOut"
                    }}
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
                        <a
                            href="/contact-us"
                            className="t-btn t-btn-gradient"
                        >
                            Get a quote
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
