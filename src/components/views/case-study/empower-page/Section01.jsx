import React from 'react'
import banner01img from '/public/empower-image/banner01img.png'
import banner02img from '/public/empower-image/banner02img.png'

export default function Section01({ data }) {
    const title = data?.title || 'Empower Care Insurance'
    const subtitle = data?.subtitle || '<p>Empower Care Insurance is built on trust and reliability...</p>'
    const heroImage = data?.hero_image || banner01img.src
    const backgroundImage = data?.background_image || banner02img.src

    return (
        <>
        <section className="heroBanner">
            <div className="container">
                <div className="row">
                    <div className="col-lg-7">
                        <div className="text">
                            <h1>{title}</h1>
                            <div dangerouslySetInnerHTML={{ __html: subtitle }} />
                        </div>
                        <div className="img-box">
                            <img src={heroImage} alt='Hero' />                
                        </div>
                    </div>
                    <div className="col-lg-5">
                        <div className="img-box">
                            <img src={backgroundImage} alt='Background' />                
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}
