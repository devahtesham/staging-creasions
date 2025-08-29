import React from 'react'

import Img1 from '/public/industry/cleaning-company/cc-sec04-01.webp'

export default function Section4() {
    return (
        <section className="clean-sec-4" style={{backgroundImage: 'url(/industry/cleaning-company/cc-sec04-bg.webp)'}}>

            <div className="container">
                <div className="row">
                    <div
                        className="col-md-6"
                        >
                        <img
                            src={Img1.src}
                            className="img-fluid"
                        />
                    </div>
                    <div className="col-md-6">
                        <div className="case-bread">
                            <h2>
                                Cleaning Company Web Design Services. Boost Your Online Presence
                                with the Right Website Strategy
                            </h2>
                            <p className="clean-para">
                                Even in a crowded market, cleaning companies can thrive with a
                                steady, loyal customer base. But attracting and keeping those
                                clients can be a real challenge. Building a strong brand and
                                consistently bringing in new customers are key to running a
                                successful cleaning business.
                            </p>
                            <p>
                                The best way to make this happen is by investing in a web design
                                agency that understands your needs and goals. Your website should be
                                fast, easy to find on search engines, and designed to turn visitors
                                into customers. Creasions&apos; web design team specializes in exactly
                                that—creating high-performing websites that help cleaning companies
                                grow and succeed online.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
