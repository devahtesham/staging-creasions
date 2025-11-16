import React from 'react'

export default function Section8({ data }) {
    if (!data) return null

    return (
        <section className="Boardline-08">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-md-12">
                        <div className="text">
                            <h3 dangerouslySetInnerHTML={{ __html: data.title }} />
                        </div>
                    </div>
                    <div className="col-lg-8 col-md-12">
                        <div className="text">
                            <div dangerouslySetInnerHTML={{ __html: data.description }} />
                        </div>
                    </div>
                </div>
                <div className="row">
                    {data.images?.map((image, index) => {  
                        return (
                            <div className="col-lg-4 col-md-4" key={index}>
                                <div className={index === 1 ? "img-box-1" : "img-box"}>
                                    <img src={image} alt={`Mobile ${index + 1}`} />
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}
