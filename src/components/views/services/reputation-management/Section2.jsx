import Image from 'next/image'
import React from 'react'

import SecIcon1 from '/public/services/local-listing-management/llm-sec02-i01.png';
import SecIcon2 from '/public/services/local-listing-management/llm-sec02-i02.png';
import SecIcon3 from '/public/services/local-listing-management/llm-sec02-i03.png';
import SecIcon4 from '/public/services/local-listing-management/llm-sec02-i04.png';
import SecIcon5 from '/public/services/local-listing-management/llm-sec02-i05.png';


export default function Section2() {
    return (
        <section className="sec-02">
            <div className="container">
                <div className="row text-center">
                    <h2>Why Choose Our Reputation<br/> Management Services in Dallas?</h2>
                    <p>Your business listings are more than just online directories; they are essential for SEO, customer trust, and<br/> brand visibility. Our Local Listing Management Company in Dallas helps you:</p>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="card-container">
                            <div className="card-row">
                                <div className="card card-blur-bg-1">
                                    <Image src={SecIcon1} className="img-fluid" alt="Icon 1" />
                                    <h3>Proven ORM Strategies</h3>
                                    <p>We use AI-powered tools, SEO, and content marketing to suppress negative search results and highlight positive brand mentions.</p>
                                </div>
                                <div className="card card-blur-bg-1">
                                    <Image src={SecIcon2} className="img-fluid" alt="Icon 2" />
                                    <h3>Expert Crisis Management</h3>
                                    <p>Our team monitors your brand 24/7 and reacts quickly to potential reputation risks.</p>
                                </div>
                                <div className="card card-blur-bg-1">
                                    <Image src={SecIcon3} className="img-fluid" alt="Icon 3" />
                                    <h3>Comprehensive ORM Solutions</h3>
                                    <p>From Google search reputation cleanup to social media damage control, we cover all aspects of reputation management.</p>
                                </div>
                                <div className="card card-blur-bg-1">
                                    <Image src={SecIcon4} className="img-fluid" alt="Icon 4" />
                                    <h3>Customized Approach</h3>
                                    <p>We analyze your brand’s online presence and tailor ORM strategies that fit your business needs.</p>
                                </div>
                                <div className="card card-blur-bg-1">
                                    <Image src={SecIcon5} className="img-fluid" alt="Icon 5" />
                                    <h3>Fast & Guaranteed Results</h3>
                                    <p>We guarantee a 75% reduction in negative content visibility within 90 days or your money back!</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
