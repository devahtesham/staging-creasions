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
import Card10 from '/public/services/graphic-designing/gd-sec06-card10.png'

export default function Section6() {
    return (
        <section className='sec-06'>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <h4>See Our Work</h4>
                        <h2>Top Graphic Agencies in Dallas</h2>
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
                                        <h4>Construction Company Brochure Design</h4>
                                        <p>Professional, polished, and high-impact.</p>
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
                                        <h4>Technology<br />Logo Design</h4>
                                        <p>Modern branding for an eCommerce startup.</p>
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
                                        <h4>Retail<br /> T-Shirt Design</h4>
                                        <p>Creative and customer focused.</p>
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
                                        <h4>Bank<br /> Logo Design</h4>
                                        <p>Sophisticated and trustworthy visuals.</p>
                                    </div>
                                </div>

                                <div className="card-agency">
                                    <div className="card-img">
                                        <Image src={Card9} alt="card9" />
                                    </div>
                                </div>
                                <div className="card-agency">
                                    <Link href="/portfolio/graphic-design">
                                        <div className="card-overlay-text">
                                            VIEW FULL PORTFOLIO
                                        </div>
                                        <div className="card-img">
                                            <Image src={Card10} alt="card10" />
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section >
    )
}
