import React from 'react'
import section03img01 from '/public/commercial/section03img01.png'
import section03img02 from '/public/commercial/section03img02.png'
import section03img03 from '/public/commercial/section03img03.png'

export default function Section3({ data }) {
    const title = data?.title || 'Worldwide Design Framework'
    const description = data?.description || '<p>Our design framework reflects professionalism, trust, and growth...</p>'
    const defaultImages = [section03img01.src, section03img02.src, section03img03.src]
    const images = data?.images?.length > 0 ? data.images : defaultImages

    return (
        <>
        <section className="commercial02">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="text">
                            <div className="twoBox">
                                <h2>{title}</h2>
                                <div dangerouslySetInnerHTML={{ __html: description }} />
                            </div>
                        </div>
                        <div className="img-Box">
                            {images.slice(0, 3).map((image, index) => (
                                <img key={index} src={image} alt={`Design ${index + 1}`} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}
