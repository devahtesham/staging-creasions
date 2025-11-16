import React from 'react'
import imagegallery01 from '/public/hurghada-image/image-gallery-01.png'
import imagegallery02 from '/public/hurghada-image/image-gallery-02.png'
import imagegallery03 from '/public/hurghada-image/image-gallery-03.png'
import imagegallery04 from '/public/hurghada-image/image-gallery-04.png'
import imagegallery05 from '/public/hurghada-image/image-gallery-05.png'

const Section05 = ({ data }) => {
    const defaultImages = [
        imagegallery01.src,
        imagegallery02.src,
        imagegallery03.src,
        imagegallery04.src,
        imagegallery05.src
    ]
    const images = data?.images?.length > 0 ? data.images : defaultImages

    return (
        <section className="section05">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="GalleryImageBox">
                            {images.slice(0, 5).map((image, index) => (
                                <img key={index} src={image} alt={`Gallery ${index + 1}`} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Section05;
