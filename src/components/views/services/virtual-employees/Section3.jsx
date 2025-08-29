import React from 'react'
import Image from 'next/image'

import SecIcon1 from "/public/services/virtual-employees/sec04-i01.webp"
import SecIcon2 from "/public/services/virtual-employees/sec04-i02.webp"
import SecMiddleImg from "/public/services/virtual-employees/sec04-break.webp"


export default function Section3() {
    return (
        <section className="virtual-sec-3">
            <div className="container">
                <div className="row">
                <div className="col-lg-6 col-md-12">
                    <div className="text">
                    <h5>Our Experiences</h5>
                    <h2>
                        VES is the Future
                        <br />
                        of Recruitment &amp;
                        <br />
                        Sales Outsourcing!
                    </h2>
                    <p>
                        Our specialized solutions deliver speed, scalability, &amp;
                        industry-leading technology to provide you with the competitive edge
                        you need to find top talent and leads
                    </p>
                    </div>
                </div>
                <div className="col-lg-6 col-md-12 pl-5">
                    <div className="virt-box">
                    <Image
                        src={SecIcon1}
                        alt=""
                    />
                    <div className="text">
                        <h5>
                        Creasions VES – The Future of Recruitment and Sales Outsourcing!
                        </h5>
                        <p>
                        Our specialized solutions deliver speed, scalability, and
                        industry-leading technology to provide you with the competitive
                        edge you need to find top talent and leads.
                        </p>
                    </div>
                    </div>
                    <Image
                    src={SecMiddleImg}
                    alt=""
                    className="virtual-img"
                    />
                    <div className="virt-box">
                    <Image
                        src={SecIcon2}
                        alt=""
                    />
                    <div className="text">
                        <h5>IT Staff Augmentation</h5>
                        <p>
                        We help you recruit, hire, and manage the best IT talent to meet
                        all your project needs and ensure timely delivery.
                        </p>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </section>
    )
}
