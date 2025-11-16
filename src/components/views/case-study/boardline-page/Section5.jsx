import React from 'react'

export default function Section5({ image }) {
    if (!image) return null
    
    const imageUrl = image

    return (
        <section className="Boardline-05">
            <div className="container-fluid p-0">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="img-text">
                            <img src={imageUrl} alt="Approach" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
