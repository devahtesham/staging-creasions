import React from 'react'

export default function Section4({ data }) {
    if (!data) return null

    return (
        <section className="Boardline-04">
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
