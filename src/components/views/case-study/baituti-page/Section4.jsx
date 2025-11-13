import React from 'react'
import Image from 'next/image'
import colorpallet01 from '/public/baituti/colorpallet01.png'
import colorpallet02 from '/public/baituti/colorpallet02.png'

export default function Section4() {
    return (
        <>
        <section className="caseStudySec03">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="twoBox text">
                            <h2>Style Guide</h2>
                            <span className="divider"></span>
                            <p>Baituti Home identity is rooted in elegance, minimalism, and sophistication. To ensure consistency across digital and print platforms, we developed a style guide featuring a modern palette inspired by rich interiors, refined typography, and clean layouts. This system allows the brand to communicate with clarity and maintain a premium look across every channel.</p>
                        </div>
                        <div className="text">
                            <h6>Color Pallete</h6>
                            <Image src={colorpallet01} alt='image'/>
                            <Image src={colorpallet02} alt='image'/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}
