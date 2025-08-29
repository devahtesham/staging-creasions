import React from 'react'

import Laptop1 from "/public/services/web-design/laptop-1.webp"
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
                                src={Laptop1}
                                alt="Web Design Laptop"
                                className="img-fluid"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}
