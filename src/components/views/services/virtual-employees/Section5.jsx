import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import Rect1 from '/public/services/virtual-employees/ve-sec05-rect01.png'
import Rect2 from '/public/services/virtual-employees/ve-sec05-rect02.png'
import Rect3 from '/public/services/virtual-employees/ve-sec05-rect03.png'



export default function Section5() {
    return (
        <section className="virtual-sec-4">
            <div className="container-fluid p-0">
                <div className="row">
                    <div className="col-lg-12 col-md-12">
                        <div className="text text-center pb-5">
                            <h2>Address Your Toughest Talent Acquisition Challenges:</h2>
                            <p>
                                At Creasions Digital, we excel in managing complex talent
                                acquisition programs. Through a seamless blend of cutting-edge
                                technology and proven human expertise, we provide our clients with a
                                competitive edge in the people business.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="row align-items-center">
                    <div className="col-lg-3 p-0">
                        <div className=" poly-first">
                            <div className="poly-btn first-img">
                                <img
                                    src={Rect1.src}
                                    alt=""
                                />
                                <Link href="#">
                                    Schedule
                                    <br /> Client Interview
                                </Link>
                            </div>
                            <div className="poly-btn second-img">
                                <img
                                    src={Rect1.src}
                                    alt=""
                                />
                                <Link href="#">
                                    Reference
                                    <br /> Checks
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 p-0">
                        <div className="poly-second">
                            <div className="poly-btn">
                                <img
                                    src={Rect2.src}
                                    alt=""
                                />
                                <Link href="#">RPO</Link>
                            </div>
                            <div className="poly-btn">
                                <img
                                    src={Rect2.src}
                                    alt=""
                                />
                                <Link href="#">Interview</Link>
                            </div>
                            <div className="poly-btn">
                                <img
                                    src={Rect2.src}
                                    alt=""
                                />
                                <Link href="#">
                                    Source <br />
                                    Candidates
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 p-0">
                        <div className="poly-third ">
                            <div className="poly-btn first-img">
                                <img
                                    src={Rect3.src}
                                    alt=""
                                />
                                <Link href="#">
                                    Job <br />
                                    equirements
                                </Link>
                            </div>
                            <div className="poly-btn second-img">
                                <img
                                    src={Rect3.src}
                                    alt=""
                                />
                                <Link href="#">
                                    offers and <br />
                                    Acceptance
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}
