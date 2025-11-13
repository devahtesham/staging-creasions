import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import section03img01 from '/public/commercial/mobileView01.png'
import section03img02 from '/public/commercial/mobileView02.png'
import section03img03 from '/public/commercial/mobileView03.png'

export default function Section6() {
    return (
        <>
        <section className="commercial02">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="text">
                            <div className="twoBox">
                                <h2>Mobile<br/> Experience</h2>
                                <p>With insurance decisions often happening on the go, we optimized the entire website for mobile. From responsive layouts to touch-friendly interactions, we ensured clients can explore plans, access FAQs, and connect with representatives effortlessly. The mobile experience mirrors the desktop in clarity, while providing flexibility and ease at every step.</p>
                            </div>
                        </div>
                        <div className="img-Box">
                            <Image src={section03img01} alt="image" />
                            <Image src={section03img02} alt="image" />
                            <Image src={section03img03} alt="image" />
                        </div>
                        <div className="btnBox">
                            <Link href="https://commercialplus.com/" target='_blank' className='btn t-btn'>Visit Website</Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}
