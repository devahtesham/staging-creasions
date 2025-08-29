import Image from 'next/image'
import React from 'react'

import Circle from '/public/services/reputation-management/fade_effect_slow.gif';
import GradientBg from '/public/services/reputation-management/llm-sec01-bg.png';


export default function Section1() {
    return (
        <section className="sec-01">
            <Image src={GradientBg} className="sec-01-bg" alt="circle-1" />
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-8">
                        <h4>Protect, Enhance, and Manage Your Brand&apos;s Online Presence</h4>
                        <p>In today&apos;s digital world, your online reputation is everything. Whether you&apos;re a business or an individual, negative reviews, misleading information, or damaging content can impact your credibility. As a leading reputation management company in Dallas, we specialize in removing harmful content, boosting positive brand mentions, and creating a solid digital presence that helps you regain trust and authority.</p>
                        <ul>
                            <li>Suppress Negative Search Results</li>
                            <li>Improve Online Reviews & Ratings</li>
                            <li>Enhance Brand Image & Credibility</li>
                            <li>Manage Social Media Reputation</li>
                            <li>Monitor & Respond to Customer Feedback</li>
                        </ul>
                    </div>

                    <div className="col-lg-4">

                        <div className="img-box">
                            <Image src={Circle} alt="" />
                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}
