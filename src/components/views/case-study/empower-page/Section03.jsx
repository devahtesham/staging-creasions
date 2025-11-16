import React from 'react'
import style01 from '/public/empower-image/style01.png'
import style02 from '/public/empower-image/style02.png'
import style03 from '/public/empower-image/style03.png'

export default function Section03({ data }) {
    const title = data?.title || 'Worldwide Design Framework'
    const description = data?.description || '<p>We designed a scalable framework to keep Empower Care Insurance consistent across global markets...</p>'
    const defaultImages = [style03.src, style02.src, style01.src]
    const images = data?.images?.length > 0 ? data.images : defaultImages

    return (
        <>
        <section className="secton02">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="twoBox text">
                            <h2>{title}</h2>
                            <span className="divider"></span>
                            <div dangerouslySetInnerHTML={{ __html: description }} />
                        </div>
                        <div className="imgBox">
                            {images.slice(0, 3).map((image, index) => (
                                <img key={index} src={image} alt={`Style ${index + 1}`} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}
