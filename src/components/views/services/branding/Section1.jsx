import React from 'react'

import title1 from "/public/services/branding/title.webp"
import Image from 'next/image'

export default function Section1({ whyUsImage }) {
    return (
        <section className="web-sec-1">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="img-box">
                            <Image
                                decoding="async"
                                loading='lazy'
                                src={whyUsImage || title1}
                                alt="why choose us"
                                className="img-fluid"
                                width={800}
                                height={400}
                                unoptimized={typeof whyUsImage === 'string' && whyUsImage.startsWith('http')}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}
