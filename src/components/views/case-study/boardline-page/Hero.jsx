import React from 'react'


export default function Hero({ data }) {
    if (!data) return null
    
    const backgroundImage = data.background_image

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
                            <h5>{data.title}</h5>
                            <h1 dangerouslySetInnerHTML={{ __html: data.subtitle }} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
