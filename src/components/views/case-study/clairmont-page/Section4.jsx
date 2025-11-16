import React from 'react'

export default function Section4({ data }) {
    const title = data?.title || "Homepage"
    const description = data?.description || "<p>The homepage makes an immediate impact...</p>"

    return (
        <section className="Clairmont-04">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-md-12">
                        <div className="text">
                            <h3>{title}</h3>
                        </div>
                    </div>
                    <div className="col-lg-8 col-md-12">
                        <div className="text">
                            <div dangerouslySetInnerHTML={{ __html: description }} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
