import React from 'react'

import ArrowImg from '/public/services/virtual-employees/ve-sec07-arrow01.png'
import PersonImg from '/public/services/virtual-employees/ve-sec07-person01.png'

import Image from 'next/image'
import Link from 'next/link'

export default function Section7() {
    return (
        <section
            className="virtual-sec-9"
            style={{
                backgroundImage:
                    "url(/services/virtual-employees/ve-sec07-bg.png)"
            }}
        >
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 pl-5">
                        <div className="text">
                            <h2>
                                Access Top <br />
                                Virtual Employees <br />
                                to Work for You!
                            </h2>
                            <Link
                                href="/services/virtual-employees/creasions-profile.pdf"
                                className="vertul-t-btn"
                                rel="noopener noreferrer"
                                locale={false}
                                target="_blank"
                            >
                                Download Profile
                            </Link>
                            <div className="cont-box">
                                <p>
                                    <a href="#">Connect</a>
                                </p>
                                <img
                                    src={ArrowImg.src}
                                    alt=""
                                    className="img-fluid"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="img-box">
                            <Image
                                src={PersonImg}
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
