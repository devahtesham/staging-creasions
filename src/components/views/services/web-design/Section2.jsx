import Image from 'next/image'
import React from 'react'

import Image1 from '/public/services/web-design/sec02-01.webp'
import Image2 from '/public/services/web-design/sec02-02.webp'
import Image3 from '/public/services/web-design/sec02-03.webp'


export default function Section2() {
    return (
        <section className="web-sec-2 web-design-2 pb-0">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="text">
                            <h4>
                                Web Design <br /> Services and Designers
                            </h4>
                            <p>
                                As the epitome of excellence, Creasions secures its position as the
                                best web design company in the industry. With a team of highly
                                skilled and innovative website designers, we commit to delivering
                                top-notch web design services with a visually compelling online
                                presence. Our thoughtfully crafted web design packages comprise of a
                                range of offerings with a meticulous approach to cater businesses of
                                all sizes.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-5">
                        <div className="text">
                            <h4>
                                Why Web <br /> Design is Important
                            </h4>
                        </div>
                    </div>
                    <div className="col-lg-7">
                        <div className="text">
                            <p>
                                Web design plays a pivotal role in shaping the online identity of a
                                business and elevates the significance of its digital landscape. In
                                the competitive online space, our website design services not only
                                attract visitors but also retains their attention, fostering a
                                positive impression and trust. A well-crafted website, led by a
                                skilled website designer, goes beyond aesthetic appeal, ensuring
                                optimal functionality, easy navigation, and a seamless user
                                experience.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid pl-0 sticky-sec">
                <div className="row align-items-center pb-0">
                    <div className="col-lg-5 col-md-12">
                        <div className="img-box">
                            <Image
                                decoding="async"
                                src={Image1}
                                alt="Website Design"
                                className="lazy img-fluid w-100 entered loaded"
                            />
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12">
                        <div className="text box-2">
                            <h4>
                                Demonstrates
                                <br />
                                Professionalism
                            </h4>
                            <p>
                                Investing in web design is a clear demonstration of professionalism
                                for several reasons. A professionally designed website conveys a
                                polished and well-thought-out image, reflecting the commitment of a
                                business or individual to their online presence
                            </p>
                        </div>
                    </div>
                </div>
                <div className="row align-items-center pb-0 reverse-webdesign">
                    <div className="offset-lg-1 col-lg-6 col-md-12">
                        <div className="text box-2">
                            <h4>Mobile Responsiveness</h4>
                            <p>
                                Creasions excels in delivering web designs that prioritize mobile
                                responsiveness, ensuring an optimal user experience across all
                                devices. As a leading provider of web design services, we recognize
                                the significance of catering to the growing trend of mobile
                                browsing.
                            </p>
                        </div>
                    </div>
                    <div className="col-lg-5 p-0 col-md-12">
                        <div className="img-box">

                            <Image
                                decoding="async"
                                src={Image2}
                                alt="Mobile App Design"
                                className="lazy img-fluid w-100 entered loaded"
                            />
                        </div>
                    </div>
                </div>
                <div className="row align-items-center pb-0">
                    <div className="col-lg-5 col-md-12">
                        <div className="img-box">

                            <Image
                                decoding="async"
                                src={Image3}
                                alt="Website Design"
                                className="lazy img-fluid w-100 entered loaded"
                            />
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12">
                        <div className="text box-2">
                            <h4>Boosts Sales and Enhances Customer Experience</h4>
                            <p>
                                The visual appeal of a website, including high-quality images,
                                appealing graphics, and a cohesive color scheme, can significantly
                                impact a visitor&apos;s perception of a brand and its products or
                                services. A professional and attractive website builds credibility
                                in potential customers.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>


    )
}
