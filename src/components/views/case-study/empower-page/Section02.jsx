import React from 'react'

export default function Section02({ data }) {
    const badge = data?.badge || 'The Challenge'
    const heading = data?.heading || '<h3>We did not just build a website for Empower Care Insurance...</h3>'
    const buttonUrl = data?.button_url || 'https://empowercareinsurance.com/'
    const buttonText = data?.button_text || 'Visit Website'

    return (
        <>
        <section className="secton01">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="text text-center">
                            <h6>{badge}</h6>
                            <div dangerouslySetInnerHTML={{ __html: heading }} />
                            <a href={buttonUrl} target='_blank' className="btn t-btn">{buttonText}</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}
