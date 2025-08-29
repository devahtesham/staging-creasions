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
                        <h4>Why Choose</h4>
                        <h2>Why Choose Creasions for Local Listing Management in Dallas?</h2>
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
                                        <h4>100% Manual Optimization</h4>
                                        <p>100% Manual Optimization - No Automation</p>
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
                                        <h4>Monthly Reporting & Tracking</h4>
                                        <p>Comprehensive Monthly Reporting & Tracking.</p>
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
                                        <h4>Dallas Local Listing Experts</h4>
                                        <p>Experienced Local Listing Management Company Dallas</p>
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
                                        <h4>Manager</h4>
                                        <p>Dedicated Account Manager</p>
                                    </div>
                                </div>

                                <div className="card-agency">
                                    <div className="card-img">
                                        <Image src={Card9} alt="card9" />
                                    </div>
                                </div>
                                <div className="card-agency">
                                    <div className="card-img">
                                        <Image src={Card10} alt="card8" />
                                    </div>
                                    <div className="card-content">
                                        <h4>No Contracts,<br />Just Results!</h4>
                                        <p>No Long-Term Contracts - Proven Results!</p>
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
