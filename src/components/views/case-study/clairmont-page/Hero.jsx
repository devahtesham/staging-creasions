import React from 'react'

export default function Hero({ data }) {
    const backgroundImage = data?.background_image || "url(/clairmont/Hero-bg.webp)"
    const title = data?.title || "Clairmont Capital Group"
    const subtitle = data?.subtitle || "is a Los Angeles-based private equity firm focused exclusively on alternative real assets and specializing in general partnership."

    return (
        <section
            className="Hero-banner"
            style={{
                backgroundImage: `url(${backgroundImage})`
            }}
        >
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="text">
                            <h5>{title}</h5>
                            <div dangerouslySetInnerHTML={{ __html: subtitle }} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
