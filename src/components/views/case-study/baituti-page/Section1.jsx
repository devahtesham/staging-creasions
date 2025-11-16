import React from 'react'

export default function Section1({ data }) {
    const title = data?.title || 'Baituti home'
    const subtitle = data?.subtitle || '<p>Baituti Home is a destination for luxurious living...</p>'

    return (
        <>
        <section className="heroBanner">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="text">
                            <h1>{title}</h1>
                            <div dangerouslySetInnerHTML={{ __html: subtitle }} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}
