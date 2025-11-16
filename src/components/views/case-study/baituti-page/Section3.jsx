import React from 'react'
import laptopImage from '/public/baituti/laptopImage.png'

export default function Section3({ data }) {
    const badge = data?.badge || 'The Challenge'
    const text = data?.text || '<p>We did not just design a website for Baituti Home...</p>'
    const buttonUrl = data?.button_url || 'https://www.baitutihome.com/'
    const buttonText = data?.button_text || 'Visit Website'
    const sectionImage = data?.section_image || laptopImage.src

    return (
        <>
        <section className="caseStudySec02">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="text text-center">
                            <h6>{badge}</h6>
                            <div dangerouslySetInnerHTML={{ __html: text }} />
                            <a href={buttonUrl} target='_blank' className='btn t-btn'>{buttonText}</a>
                        </div>
                    </div>
                </div>
            </div>
            <img src={sectionImage} alt='Section' />
        </section>
        </>
    )
}
