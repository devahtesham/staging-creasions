import React from 'react'
import Section7_1 from '/public/kadobu/kadobu-sec07-01.png'
import Section7_2 from '/public/kadobu/kadobu-sec07-02.png'
import Section7_3 from '/public/kadobu/kadobu-sec07-03.png'
import Section7_4 from '/public/kadobu/kadobu-sec07-04.png'
// import bgimg from '/public/kadobu/section-07-bg.png'
import Image from 'next/image'
import Link from 'next/link';


export default function Section7() {
    return (
        <section className="KaDoBu-07" style={{ backgroundImage: `url('/kadobu/section-07-bg.png')` , position: 'relative' }}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 col-md-12">
                         <div className="text">
                            <h3>
                                Mobile Responsive Designs
                            </h3>
                        </div>
                        <div className="text">
                            <p>
                                KaDoBu&apos;s mobile-responsive website ensures easy navigation and quick access to services on any device, providing a seamless browsing experience.
                            </p>

                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-3 col-md-3">
                        <div className="img-box">
                            <Image
                                src={Section7_1}
                                alt=""
                            />
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-3">
                        <div className="img-box-1">
                            <Image
                                src={Section7_2}
                                alt=""
                            />
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-3">
                        <div className="img-box">
                            <Image
                                src={Section7_3}
                                alt=""
                            />
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-3">
                        <div className="img-box">
                            <Image
                                src={Section7_4}
                                alt=""
                            />
                        </div>
                    </div>
                    <div className="text" style={{ marginTop: '60px'}}>
                                                    <Link
                                href="#"
                                className="t-btn"
                                tabIndex="0" style={{ marginBottom: '0px' }}
                            >
                                Visit Website
                            </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}
