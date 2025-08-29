import Image from 'next/image'
import React from 'react'

import Circle from '/public/services/new-virtual-employees/ve-sec01-circle.png';

export default function Section1() {
    return (
        <section className="sec-01">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8">
                        <h4>Build a Stronger Company with Better Teams</h4>
                        <p>At Creasions Digital – Virtual Employee Services, we believe that a successful company is built by its team, and effective recruitment is the foundation of great teams. That&apos;s why we offer talent acquisition services to find motivated & exceptional individuals who are dedicated to advancing their careers while delivering essential value to your company.</p>
                    </div>

                    <div className="col-lg-4">
                        <Image src={Circle} className="circle-1" alt="circle-1" />
                    </div>
                </div>
            </div>
        </section>
    )
}
