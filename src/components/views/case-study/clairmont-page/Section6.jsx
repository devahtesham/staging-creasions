import React from 'react'
import Section6_1 from '/public/clairmont/section-6-01.webp'
import Section6_2 from '/public/clairmont/section-6-02.webp'

export default function Section6({ data }) {
    const title = data?.title || "Mobile Experience"
    const description = data?.description || "<p>Like most HOA Board Management Website, mobile dominates their customer base...</p>"
    const images = data?.images || [Section6_1.src, Section6_2.src]

    return (
        <section
            className="Clairmont-06"
            style={{
                backgroundImage: "url(/clairmont/section-6Bg.webp)"
            }}
        >
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-md-12">
                        <div className="text">
                            <h3>{title || "Mobile Experience"}</h3>
                        </div>
                    </div>
                    <div className="col-lg-8 col-md-12">
                        <div className="text">
                            <div dangerouslySetInnerHTML={{ __html: description }} />
                        </div>
                    </div>
                </div>
                <div className="row">
                    {images.slice(0, 2).map((image, index) => (
                        <div className="col-lg-4 col-md-4" key={index}>
                            <div className={index === 1 ? "img-box-1" : "img-box"}>
                                <img src={image} alt={`Mobile ${index + 1}`} />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
