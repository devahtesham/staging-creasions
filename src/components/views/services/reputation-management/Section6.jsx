import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import Card1 from '/public/services/graphic-designing/gd-sec06-card01.png'
import Card2 from '/public/services/graphic-designing/gd-sec06-card02.png'
import Card3 from '/public/services/graphic-designing/gd-sec06-card03.png'
import Card4 from '/public/services/graphic-designing/gd-sec06-card04.png'
import Card5 from '/public/services/graphic-designing/gd-sec06-card05.png'
import Card6 from '/public/services/graphic-designing/gd-sec06-card06.png'
import Card7 from '/public/services/graphic-designing/gd-sec06-card07.png'
import Card8 from '/public/services/graphic-designing/gd-sec06-card08.png'
import Card9 from '/public/services/graphic-designing/gd-sec06-card09.png'

export default function Section6() {
    return (
        <section className='sec-06'>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 text-center">
                        <h4>We protect your brand</h4>
                        <h2>Work With Certified Reputation Management Experts</h2>
                        <p>We utilize industry-leading ORM tools & platforms to protect your brand</p>
                        <div className="catelog-container">
                            <div className="catelog">
                                <div className="card-agency">
                                    <div className="card-img">
                                        <Image src={Card1} alt="card1" />
                                    </div>
                                </div>
                                <div className="card-agency">
                                    <div className="card-img">
                                        <Image src={Card2} alt="card2" />
                                    </div>
                                    <div className="card-content">
                                        <h4>Facebook<br/> and Instagram</h4>
                                        <p>Social media monitoring and engagement</p>
                                    </div>
                                </div>

                                <div className="card-agency">
                                    <div className="card-img">
                                        <Image src={Card3} alt="card3" />
                                    </div>
                                </div>
                                <div className="card-agency">
                                    <div className="card-img">
                                        <Image src={Card4} alt="card4" />
                                    </div>
                                    <div className="card-content">
                                        <h4>PR Newswire<br/> and Medium</h4>
                                        <p>Press release distribution for brand storytelling</p>
                                    </div>
                                </div>
                                <div className="card-agency">
                                    <div className="card-img">
                                        <Image src={Card5} alt="card5" />
                                    </div>
                                </div>
                            </div>
                            <div className="catelog">

                                <div className="card-agency">
                                    <div className="card-img">
                                        <Image src={Card6} alt="card6" />
                                    </div>
                                    <div className="card-content">
                                        <h4>Google My<br/> Business & Yelp</h4>
                                        <p>Review and listing management</p>
                                    </div>
                                </div>
                                <div className="card-agency">
                                    <div className="card-img">
                                        <Image src={Card7} alt="card7" />
                                    </div>
                                </div>
                                <div className="card-agency">
                                    <div className="card-img">
                                        <Image src={Card8} alt="card8" />
                                    </div>
                                    <div className="card-content">
                                        <h4>SEMrush & Ahrefs</h4>
                                        <p>Advanced SEO for reputation recovery</p>
                                    </div>
                                </div>

                                <div className="card-agency">
                                    <div className="card-img">
                                        <Image src={Card9} alt="card9" />
                                    </div>
                                </div>
                                <div className="card-agency">
                                    <div className="card-img">
                                        <Image src={Card8} alt="card8" />
                                    </div>
                                    <div className="card-content">
                                        <h4>Trustpilot<br/> and Glassdoor</h4>
                                        <p>Employee and customer review management</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section >
    )
}
