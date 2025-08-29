import Image from 'next/image'
import React from 'react'

import Circle from '/public/services/local-listing-management/llm-sec01-circle.png';
import CircleOutline from '/public/services/local-listing-management/llm-sec01-circle-outline.png';
import GradientBg from '/public//services/local-listing-management/llm-sec01-bg.png';


export default function Section1() {
    return (
        <section className="sec-01">
            <Image src={GradientBg} className="sec-01-bg" alt="circle-1" />
            <div className="container">
                <div className="row">
                    <div className="col-lg-8">
                        <h4>Boost Your Local Visibility with Expert Local Listing Management Services in Dallas</h4>
                        <p>Are outdated or inaccurate business listings hurting your online presence? Local listing management is the key to enhancing your local search rankings, increasing website traffic, and attracting more customers. At Creasions, we offer top-rated local listing management services in Dallas, ensuring that your business is accurately listed, optimized, and visible across all major directories, search engines, and maps.</p>
                    </div>

                    <div className="col-lg-4">
                        {/* <Image src={Circle} className="circle-1" alt="circle-1" /> */}

                        <div className="animation-component">
                            <Image src={Circle} alt="" className="main-image" />
                            <Image src={CircleOutline} alt="" className="outline-image-01" />
                            <Image src={CircleOutline} alt="" className="outline-image-02" />
                            <Image src={CircleOutline} alt="" className="outline-image-03" />
                            <Image src={CircleOutline} alt="" className="outline-image-04" />
                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}
