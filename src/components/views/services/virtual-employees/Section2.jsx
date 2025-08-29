import React from 'react'

import Image from 'next/image'

import Sec3 from "/public/services/virtual-employees/sec03-bg.webp"


export default function Section2() {
    return (
        <section className="web-sec-2 virtual-sec-2">
            <div className="container">
                <div className="row">
                <div className="col-lg-12">
                    <div className="text text-center">
                    <h2>Build a Stronger Company with Better Teams</h2>
                    <p />
                    <p>
                        At Creasions Digital - Virtual Employee Services, we believe that a
                        successful company is built by its team, and effective recruitment
                        is the foundation of great teams.
                        <br />
                        That&apos;s why we offer talent acquisition services to find motivated
                        and exceptional individuals who are dedicated to advancing their
                        careers while delivering essential value to your company.
                    </p>
                    <p />
                    </div>
                </div>
                <div className="col-lg-12">
                    <div className="img-box">
                    <Image
                        src={Sec3}
                        loading='lazy'
                        alt=""
                        className="img-fluid"
                    />
                    </div>
                </div>
                </div>
            </div>
            </section>
    )
}
