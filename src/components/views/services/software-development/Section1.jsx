import React from 'react'

import Title1 from "/public/services/software-development/title-1.webp"
import Image from 'next/image'

export default function Section1() {
    return (
        <>
            <section className="web-sec-1">
                <div className="container-fluid p-0">
                    <div className="row">
                        <div className="col-lg-12 p-0">
                            <div className="img-box">
                                <Image
                                    decoding="async"
                                    loading='lazy'
                                    src={Title1}
                                    alt=""
                                    className="img-fluid"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="web-sec-2 web-design-2 pb-0">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="text text-center text-22">
                                <p className="">
                                    Creasions, a trusted software development Dallas company, offers end-to-end software development services, including planning, design, development, integration, testing, and management of cutting-edge solutions. With a strong focus on quality and industry best practices, we cater to startups, enterprises, and businesses across 30+ industries, delivering custom software development Dallas solutions that drive innovation and efficiency.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}
