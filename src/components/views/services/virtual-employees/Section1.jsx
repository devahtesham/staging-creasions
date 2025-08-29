import React from 'react'

import Sec1 from "/public/services/virtual-employees/sec01-bg.webp"
import Image from 'next/image'

export default function Section1() {
    return (
        <section className="web-sec-1">
            <div className="container-fluid p-0">
                <div className="row">
                    <div className="col-lg-12 p-0">
                        <div className="img-box">
                            <Image
                                decoding="async"
                                loading='lazy'
                                src={Sec1}
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
