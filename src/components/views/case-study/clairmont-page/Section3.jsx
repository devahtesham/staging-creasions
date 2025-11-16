import React from 'react'

import Section4_1 from '/public/clairmont/section-4-01.webp'
import Section4_2 from '/public/clairmont/section-4-02.webp'


export default function Section3({ data }) {
    const approachImage = data?.image || Section4_2.src
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
                                {data?.heading || "The Approach"}
                            </h2>
                            {
                                data?.description ? <div dangerouslySetInnerHTML={{ __html: data?.description}} /> : <p>Our first step was to elevate Clairmonts branding, creating a modern and sophisticated visual identity that aligned with their investment focus. We then designed a clean, straightforward website that makes it easy for visitors to understand Clairmonts expertise in GP equity co-investments and market-inelastic sectors. The sites design and layout ensure that users can easily find the information they need, whether theyre looking for sector details, investment strategies, or partnership opportunities. We also made sure the site was optimized for mobile and desktop use to provide a seamless experience</p>
                            }

                            <div className="bottom-img">
                                <img
                                    src={approachImage}
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
