import React from 'react'

import title1 from "/public/services/application-development/title-2.webp"
import Image from 'next/image'

export default function Section1({ pageData }) {
    const imageUrl = pageData?.services_tabs_section_image;
    
    return (
        <section className="web-sec-1">
            <div className="container-fluid p-0">
                <div className="row">
                    <div className="col-lg-12 p-0">
                        <div className="img-box">
                            <Image
                                decoding="async"
                                loading='lazy'
                                src={imageUrl || title1}
                                alt=""
                                className="img-fluid"
                                width={1200}
                                height={600}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}
