import React from 'react'
import SectionImg1 from '/public/commercial/bannerImg.png'
import SectionBg from '/public/commercial/bannerBg.png'

export default function Section1({ data }) {
    const title = data?.title || 'Commercial Plus Group'
    const subtitle = data?.subtitle || 'Achieve Your Customized Financial Goals With Our Team Of Experts.'
    const heroImage = data?.hero_image || SectionImg1.src
    const backgroundImage = data?.background_image || SectionBg.src

    return (
        <>
        <section className="heroBanner commercial-plus-group-banner" style={{backgroundImage:`url(${backgroundImage})`}}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="text">
                            <h5>{title}</h5>
                            <h1>{subtitle}</h1>
                        </div>
                    </div>
                </div>
            </div>
            {heroImage && <img src={heroImage} alt="Hero" />}
        </section>
        </>
    )
}
