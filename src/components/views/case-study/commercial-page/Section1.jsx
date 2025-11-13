import React from 'react'
import SectionImg1 from '/public/commercial/bannerImg.png'
import SectionBg from '/public/commercial/bannerBg.png'
import Image from 'next/image'

export default function Section1() {
    return (
        <>
        <section className="heroBanner" style={{backgroundImage:`url(${SectionBg.src})`}}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="text">
                            <h5>Commercial Plus Group</h5>
                            <h1>Achieve Your Customized<br/> Financial Goals With Our<br/> Team Of Experts.</h1>
                        </div>
                    </div>
                </div>
            </div>
            <Image src={SectionImg1} alt="Image" />
        </section>
        </>
    )
}
