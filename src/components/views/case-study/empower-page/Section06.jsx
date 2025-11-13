import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import mobile01 from '/public/empower-image/mobile01.png'
import mobile02 from '/public/empower-image/mobile02.png'
import mobile03 from '/public/empower-image/mobile03.png'
import mobile04 from '/public/empower-image/mobile04.png'
import lastsecBg from '/public/baituti/lastsecBg.png'

export default function Section06() {
    return (
        <>
        <section className="secton05" style={{backgroundImage: `url(${lastsecBg.src})`}}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="text">
                            <div className="twoBox">
                                <h2>Mobile<br/> Experience</h2>
                                <span className="divider"></span>
                                <p>With insurance decisions often happening on the go, we optimized the entire website for mobile. From responsive layouts to touch-friendly interactions, we ensured clients can explore plans, access FAQs, and connect with representatives effortlessly. The mobile experience mirrors the desktop in clarity, while providing flexibility and ease at every step.</p>
                            </div>
                        </div>
                        <div className="img-Box">
                            <Image src={mobile01} alt="image" />
                            <Image src={mobile02} alt="image" />
                            <Image src={mobile03} alt="image" />
                            <Image src={mobile04} alt="image" />
                        </div>
                        <div className="btnBox">
                            <Link href="https://empowercareinsurance.com/" target='_blank' className='btn t-btn'>Visit Website</Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}
