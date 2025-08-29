import React from 'react'
import RightArrow from '/public/industry/cleaning-company/cc-sec05-right-arrow.webp'

export default function Section7() {
    return (
        <section className="clean-sec-7">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 col-sm-12">
                        <div className="case-bread">
                            <h2>
                                Get Started With <br /> <span className="dual">$1,000</span> Worth
                                Of Free Advice
                            </h2>
                            <p className="clean-para-7">
                                For a limited time, we&apos;re offering a 30-minute cleaning business
                                strategy session, plus a bonus $1,000 marketing analysis —
                                <span>Absolutely FREE.</span>
                            </p>
                            <a
                                href="#"
                                className="t-btn t-btn-arrow real-bg"
                            >
                                Grow your cleaning business today!
                                <img
                                    src={RightArrow.src}
                                    alt="right Arrow"
                                />
                            </a>
                            <div></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
