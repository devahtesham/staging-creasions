import React from 'react'

export default function Section7({ image }) {
    if (!image) return null
    
    const imageUrl = image

    return (
        <section className="Boardline-07">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-12 p-0">
                        <div className="box-img">
                            <img src={imageUrl} alt="Homepage" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
