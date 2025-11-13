import React from 'react'
import Image from 'next/image'
import mobile01 from '/public/baituti/mobile01.png'
import mobile02 from '/public/baituti/mobile02.png'
import mobile03 from '/public/baituti/mobile03.png'
import mobile04 from '/public/baituti/mobile04.png'
import lastsecBg from '/public/baituti/lastsecBg.png'

export default function Section6() {
    return (
        <>
        <section className="caseStudySec05" style={{backgroundImage: `url(${lastsecBg.src})`}}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="text">
                            <div className="twoBox">
                                <div className="contentBox">
                                    <h2>Problem:</h2>
                                    <p>Although Baituti Home was well established as a leader in luxury interiors, their online presence didn&apos;t live up to the same standard. The old website felt outdated, was difficult to navigate, and didn&apos;t capture the elegance of their brand. This created a disconnect between their reputation in the physical world and how clients experienced them digitally.</p>
                                </div>
                                <div className="contentBox">
                                    <h2>Solution:</h2>
                                    <p>We set out to design a digital presence that truly matched Baituti Home&apos;s identity. By focusing on a clean and modern layout, a refined style guide, and carefully written content, we built a website that blends sophistication with functionality. The result is an engaging platform that showcases their brand beautifully while making it effortless for visitors to explore and connect.</p>
                                </div>
                            </div>
                            <div className="twoBox">
                                <h2>Mobile Experience</h2>
                                <span className="divider"></span>
                                <p>Since many of their clients browse on the go, we made sure the website was fully optimized for mobile. Every detail from quick load times to touch-friendly navigation was designed to deliver the same sense of elegance and clarity as the desktop version. Now, Baituti Home&apos;s audience can enjoy a seamless experience across all devices.</p>
                            </div>
                        </div>
                        <div className="imgGrid">
                            <Image src={mobile01} alt='Image'/>
                            <Image src={mobile02} alt='Image'/>
                            <Image src={mobile03} alt='Image'/>
                            <Image src={mobile04} alt='Image'/>
                        </div>
                        <div className="btnBox">
                            <a href="https://www.baitutihome.com/" target='_blank' className="btn t-btn">Visit Website</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}
