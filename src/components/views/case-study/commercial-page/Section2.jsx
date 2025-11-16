import React from 'react'
import logo from '/public/commercial/logo.png'
import section02img from '/public/commercial/section02img.png'

export default function Section2({ data }) {
    const logoImage = data?.logo || logo.src
    const badge = data?.badge || 'Car Wash, Gas Station, Retail'
    const heading = data?.heading || 'Leading Real Estate and Business Advisors'
    const text = data?.text || '<p>Commercial Plus Group has over 40 years of experience...</p>'
    const sectionImage = data?.section_image || section02img.src

    return (
        <>
        <section className="commercial01">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="twoBox">
                            <div className="imgBox">
                                <img src={logoImage} alt="Logo"/>
                            </div>
                            <div className="text">
                                <h6>{badge}</h6>
                                <h2>{heading}</h2>
                                <div dangerouslySetInnerHTML={{ __html: text }} />
                            </div>
                        </div>
                        <img src={sectionImage} alt="Section" />
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}
