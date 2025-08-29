import React from 'react'

import SecImgBg from '/public/industry/beauty-salons/bs-sec05-bg.webp'

export default function Section5() {
    return (
        <section
            className="clean-sec-7 beauty-sec-7"
            style={{
                backgroundImage:
                    "url(/industry/beauty-salons/bs-sec05-bg.webp)"
            }}
        >
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div
                            className="case-bread"
                        >
                            <p>Why Creasions?</p>
                            <h4>
                                When you work with Creasions, you&apos;re not just getting a
                                website—you&apos;re getting a tool that drives results. Our team designs
                                sites that are not only visually stunning but also optimized to
                                bring in more traffic, generate leads, and grow your client base.
                                We&apos;re here to help your salon stand out and succeed.
                            </h4>
                            <br />
                            <h4>
                                {" "}
                                Plus, we offer professional SEO content writing as part of our
                                package. This means your website won&apos;t just look great; it&apos;ll help
                                you rank higher on search engines and turn visitors into loyal
                                customers.
                            </h4>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}
