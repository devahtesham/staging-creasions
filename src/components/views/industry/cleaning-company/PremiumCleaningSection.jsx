import React from 'react'

import Laptop from '/public/industry/cleaning-company/cc-premium-laptop.webp'

export default function PremiumCleaningSection() {
    return (
        <div className="clean-last-bg">
            <section className="premium-cleaning-section">
                <div className="container">
                    <div className="row text-center mb-4">
                        <div className="col-12">
                            <div className="text-clening">
                                <h2>
                                    We create premium cleaning service
                                    <br />
                                    websites at half the cost, delivering double the results!
                                </h2>
                            </div>
                        </div>
                    </div>
                    <div className="row align-items-center">
                        <div className="col-lg-3 col-md-4 col-sm-12">
                            <div className="feature-point mb-3">
                                <p className="feature-1">Easy Site Navigation</p>
                            </div>
                            <div className="feature-point mb-3">
                                <p className="feature-2">Clear Message for Your Call to Action</p>
                            </div>
                            <div className="feature-point mb-3">
                                <p className="feature-3">Unique Sales Proposition</p>
                            </div>
                            <div className="feature-point mb-3">
                                <p className="feature-4">Security</p>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-4 text-center col-sm-12">
                            <img
                                src={Laptop.src}
                                alt="Premium Cleaning Service"
                                className="img-fluid laptop-image"
                            />
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-12">
                            <div className="feature-point mb-3">
                                <p className="feature-5">On Page SEO</p>
                            </div>
                            <div className="feature-point mb-3">
                                <p className="feature-6">Usability</p>
                            </div>
                            <div className="feature-point mb-3">
                                <p className="feature-7">Capturing Your Company&apos;s Personality</p>
                            </div>
                            <div className="feature-point mb-3">
                                <p className="feature-8">Schema Mark-up</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
