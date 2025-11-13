import React from 'react'

import Section4_1 from '/public/clairmont/section-4-01.webp'
import Section4_2 from '/public/clairmont/section-4-02.webp'


export default function Section3() {
    return (
        <section
            className="Clairmont-03"
            style={{
                backgroundImage:
                    "url(/clairmont/section-4bg.webp)"
            }}
        >
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="text">
                            <img
                                src={Section4_1.src}
                                alt=""
                            />
                            <h2>
                                The Approach
                            </h2>
                            <p>
                                Our first step was to elevate Clairmont&apos;s branding, creating a
                                modern and sophisticated visual identity that aligned with their
                                investment focus. We then designed a clean, straightforward website
                                that makes it easy for visitors to understand Clairmont&apos;s expertise
                                in GP equity co-investments and market-inelastic sectors. The site&apos;s
                                design and layout ensure that users can easily find the information
                                they need, whether they&apos;re looking for sector details, investment
                                strategies, or partnership opportunities. We also made sure the site
                                was optimized for mobile and desktop use to provide a seamless
                                experience.
                            </p>
                            <div className="bottom-img">
                                <img
                                    src={Section4_2.src}
                                    alt=""
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
