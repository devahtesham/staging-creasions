import React from 'react'

import title1 from "/public/services/application-development/title-2.webp"
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
                                src={title1}
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
