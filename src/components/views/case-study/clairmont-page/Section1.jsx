import React from 'react'
import SectionImg1 from '/public/clairmont/section-1-left-1.webp'

export default function Section1() {
    return (
        <section className="Clairmont-01">
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 col-md-3">
                        <div className="text">
                            <h3>
                                Strategy
                            </h3>
                            <h3>
                                Branding
                            </h3>
                            <h3>
                                UI/UX Design
                            </h3>
                            <h3>
                                Website
                            </h3>
                        </div>
                    </div>
                    <div className="col-lg-9 col-md-9">
                        <div
                            className="text"
                        >
                            <p>
                                Clairmont Capital Group, a Los Angeles-based private equity firm,
                                needed a digital strategy that highlighted their expertise in
                                alternative real assets and GP equity co-investments. We worked on
                                creating a brand identity that conveyed professionalism and trust,
                                while the UI/UX design was focused on simplicity and ease of use.
                                The website was designed to clearly showcase Clairmont&apos;s investment
                                approach and niche focus on sectors like Student Housing, Senior
                                Housing, and Built-to-Rent Single Family, making it a go-to resource
                                for potential real estate partners and institutional investors.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="row align-items-center">
                    <div className="col-lg-6 col-md-6">
                        <div className="Tool-text">
                            <img
                                src={SectionImg1.src}
                                alt="sec-01-img"
                            />
                            <a href="#" className="t-btn" >
                                TOOLS
                            </a>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                        <div
                            className="Visit-text"
                        >
                            <a
                                href="https://www.clairmontcg.com/"
                                target="_blank"
                                className="t-btn"
                            >
                                Visit Website
                                <i className="fa fa-long-arrow-right" aria-hidden="true" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}
