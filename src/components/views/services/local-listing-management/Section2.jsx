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
                <div className="row">
                    <h2>Why Your Business Needs<br />Local Listing Management in Dallas</h2>
                    <p>Your business listings are more than just online directories; they are essential for SEO, customer trust, and brand visibility. Our Local Listing Management Company in Dallas helps you:</p>
                </div>
            </div>
            <div className="card-container">
                <div className="card-row">
                    <div className="card card-blur-bg-1">
                        <Image src={SecIcon1} className="img-fluid" alt="Icon 1" />
                        <h3>Improve Online Rankings</h3>
                        <p>Get found in Google Local 3-Pack and search results</p>
                    </div>
                    <div className="card card-blur-bg-1">
                        <Image src={SecIcon2} className="img-fluid" alt="Icon 2" />
                        <h3>Ensure Consistency Across Listings</h3>
                        <p>Prevent errors and duplicate listings</p>
                    </div>
                    <div className="card card-blur-bg-1">
                        <Image src={SecIcon3} className="img-fluid" alt="Icon 3" />
                        <h3>Enhance Customer Experience</h3>
                        <p>Provide up-to-date and accurate information.</p>
                    </div>
                    <div className="card card-blur-bg-1">
                        <Image src={SecIcon4} className="img-fluid" alt="Icon 4" />
                        <h3>Increase Website Traffic</h3>
                        <p>More visibility means more potential customers</p>
                    </div>
                    <div className="card card-blur-bg-1">
                        <Image src={SecIcon5} className="img-fluid" alt="Icon 5" />
                        <h3>Leverage Google My Business (GMB)</h3>
                        <p>Optimize for Google Maps and local search</p>
                    </div>
                </div>
            </div>
        </section>
    )
}
