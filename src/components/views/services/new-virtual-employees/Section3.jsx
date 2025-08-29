import Image from 'next/image'
import React from 'react'

import SecIcon1 from '/public/services/new-virtual-employees/ve-sec03-i01.webp';
import SecIcon2 from '/public/services/new-virtual-employees/ve-sec03-i02.webp';

export default function Section3() {
    return (
        <section className="sec-03">
            <div className="container">
                <div className="row">
                    <div className="col-lg-5">
                        <h4>OUR EXPERIENCES</h4>
                        <h2>VES is the Future of Recruitment & Sales Outsourcing</h2>
                        <p>Our specialized solutions deliver speed, scalability, & industry-leading technology to provide you with the competitive edge you need to find top talent and leads</p>
                    </div>

                    <div className="col-lg-7">
                        <div className="card-row">
                            <div className="card card-blur-bg-1">
                                <Image src={SecIcon1} className="img-fluid" alt="Icon 1" />
                                <h3>Full-Cycle Recruitment</h3>
                                <p>We help your company recruit the perfect candidates by sourcing, screening, scheduling and recruiting the best-fit talent.</p>
                            </div>
                            <div className="card card-blur-bg-1">
                                <Image src={SecIcon2} className="img-fluid" alt="Icon 2" />
                                <h3>IT Staff Augmentation</h3>
                                <p>We help you recruit, hire, and manage the best IT talent that meets all of your project needs and help you deliver on time.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
