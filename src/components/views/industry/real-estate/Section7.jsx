import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import CaseStudy1 from '/public/industry/real-estate/re-sec07-01.webp';
import CaseStudy2 from '/public/industry/real-estate/re-sec07-02.webp';
import CaseStudy3 from '/public/industry/real-estate/re-sec07-03.webp';
import RightArrow from '/public/right-arrow.webp'



export default function Section7() {
    return (
        <section className="real-sec-7">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div
                            className="case-text-brand"
                        >
                            <h2>Case studies</h2>
                        </div>
                    </div>
                </div>

                <div className="row justify-content-center">
                    <div className="col-lg-4 col-md-6 col-sm-12">
                        <Link href="/case-study/clairmont-case-study/">
                            <div className="case-img-box">
                                <Image
                                    src={CaseStudy1}
                                    alt="clairmont"
                                />
                                <h5>Clairmont</h5>
                            </div>
                        </Link>
                    </div>

                    <div className="col-lg-4 col-md-6 col-sm-12">
                        <Link href="/case-study/boardline-case-study/">
                            <div className="case-img-box">
                                <Image
                                    src={CaseStudy2}
                                    alt="boardline"
                                />
                                <h5>Boardline</h5>
                            </div>
                        </Link>
                    </div>

                    <div className="col-lg-4 col-md-6 col-sm-12">
                        <Link href="/case-study/lres-case-study/">
                            <div className="case-img-box">
                                <Image
                                    src={CaseStudy3}
                                    alt="lres"
                                />
                                <h5>LRES</h5>
                            </div>
                        </Link>
                    </div>
                </div>

                <div className="col-md-12">
                    <div className="web-btn">
                        <Link
                            href="/case-study/"
                            className="t-btn t-btn-arrow real-bg"
                            tabIndex="0"
                        >
                            View More
                            <Image
                                src={RightArrow}
                                alt="right arrow"
                            />
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
