import React from 'react'
import Image from 'next/image'

import WhyMarquee from '/public/services/web-development/why-choose-marquee.webp'
import WhyImage1 from '/public/services/web-development/why-1.webp'
import WhyImage2 from '/public/services/web-development/why-2.webp'
import WhyImage3 from '/public/services/web-development/why-3.webp'

export default function Section4() {
    return (
        <>
            <div className="marquee">
                <div className="track">
                    {[...Array(4)].map((_, index) => (
                        <Image
                            key={index}
                            className="lazy"
                            loading="lazy"
                            decoding="async"
                            src={WhyMarquee}
                            alt="why-choose-marquee"
                        />
                    ))}
                </div>
            </div>

            <div className="gradian-bg">
                <section
                    className="web-sec-4 two_bg lazy entered applied">
                    <div className="container-fluid">
                        <div className="col-lg-6">
                            <div className="text mobile">
                                <br />
                                <br />
                            </div>
                        </div>
                        <div className="row align-items-center">
                            <div className="col-lg-5">
                                <div className="img-box">
                                    <Image
                                        decoding="async"
                                        loading='lazy'
                                        src={WhyImage1}
                                        data-src=""
                                        className="lazy img-fluid w-100 entered loaded"
                                        alt=""
                                        data-ll-status="loaded"
                                    />
                                </div>
                            </div>
                            <div className="col-lg-7">
                                <div className="text text-22">
                                    <h4>
                                        Premier Web Development
                                        <br />
                                        Services in the USA
                                    </h4>
                                    <p>
                                        When it comes to selecting a premier web development company in
                                        the USA, Creasions stands out as an industry leader with a myriad
                                        of distinctive features that set us apart from the competition.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="row align-items-center">
                            <div className="col-lg-7">
                                <div className="text text-22">
                                    <h4>
                                        Mobile-First
                                        <br />
                                        Website Development
                                    </h4>
                                    <p>
                                        Our commitment to excellence in website development services is
                                        evident through our unwavering focus on mobile responsiveness. In
                                        an era where users access websites from various devices, our adept
                                        web developers ensure that your site seamlessly adapts to
                                        different screen sizes, providing an optimal viewing experience
                                        for all visitors.
                                    </p>
                                </div>
                            </div>
                            <div className="col-lg-5">
                                <div className="img-box">
                                    <Image
                                        decoding="async"
                                        loading='lazy'
                                        src={WhyImage2}
                                        data-src={WhyImage2}
                                        className="lazy img-fluid w-100 entered loaded"
                                        alt=""
                                        data-ll-status="loaded"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="row align-items-center">
                            <div className="col-lg-5">
                                <div className="img-box">
                                    <Image
                                        decoding="async"
                                        loading='lazy'
                                        src={WhyImage3}
                                        data-src={WhyImage3}
                                        className="lazy img-fluid w-100 entered loaded"
                                        alt=""
                                        data-ll-status="loaded"
                                    />
                                </div>
                            </div>
                            <div className="col-lg-7">
                                <div className="text text-22">
                                    <h4>Optimized Website Navigation</h4>
                                    <p>
                                        Our advanced mega menu system enhances website navigation,
                                        offering users a streamlined and efficient way to explore the
                                        diverse facets of your online platform. This feature not only
                                        enhances user experience but also contributes to the overall
                                        aesthetic appeal of your website.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}
