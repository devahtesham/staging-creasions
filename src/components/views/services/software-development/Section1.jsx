import React from 'react'

import Title1 from "/public/services/software-development/title-1.webp"
import Image from 'next/image'

export default function Section1({ pageData }) {
    const imageUrl = pageData?.services_tabs_section_image;
    
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
                                    src={imageUrl || Title1}
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
            <section className="web-sec-2 web-design-2 pb-0">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="text text-center text-22">
                                {pageData?.banner?.services_tabs_section_text_2 ? (
                                    <div dangerouslySetInnerHTML={{
                                        __html: pageData.banner.services_tabs_section_text_2
                                    }} />
                                ) : (
                                    <p className="">{pageData?.banner.services_tabs_section_text_2}</p>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}
