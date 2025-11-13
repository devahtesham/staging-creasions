import React from 'react'
import laptopImage from '/public/baituti/laptopImage.png'
import Image from 'next/image'

export default function Section3() {
    return (
        <>
        <section className="caseStudySec02">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="text text-center">
                            <h6>The Challenge</h6>
                            <h3>We did not just design a website for Baituti Home, we elevated their entire digital presence.<br/> The UX is effortless, the visuals are luxuriously on-brand, and the content is purposefully curated.<br/> From concept to launch, we crafted a high-performing site that reflects their elegance and drives measurable results.</h3>
                            <a href="https://www.baitutihome.com/" target='_blank' className='btn t-btn'>Visit Website</a>
                        </div>
                    </div>
                </div>
            </div>
            <Image src={laptopImage} alt='image' />
        </section>
        </>
    )
}
