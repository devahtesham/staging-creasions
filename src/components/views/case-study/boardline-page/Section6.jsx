import React from 'react'

export default function Section6({ data }) {
    if (!data) return null
    
    const backgroundImage = data.background_image

    return (
        <section className="Boardline-06" style={{ backgroundImage: `url(${backgroundImage})` }}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-md-12">
                        <div className="text">
                            <h3>{data.title}</h3>
                        </div>
                    </div>
                    <div className="col-lg-8 col-md-12">
                        <div className="text">
                            <div dangerouslySetInnerHTML={{ __html: data.description }} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
