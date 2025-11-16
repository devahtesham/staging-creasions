import React from 'react'
import colorpallet01 from '/public/baituti/colorpallet01.png'
import colorpallet02 from '/public/baituti/colorpallet02.png'

export default function Section4({ data }) {
    const title = data?.title || 'Style Guide'
    const description = data?.description || '<p>Baituti Home identity is rooted in elegance, minimalism, and sophistication...</p>'
    const cards = data?.cards || []
    
    const defaultImages = [colorpallet01.src, colorpallet02.src]

    return (
        <>
        <section className="caseStudySec03">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="twoBox text">
                            <h2>{title}</h2>
                            <span className="divider"></span>
                            <div dangerouslySetInnerHTML={{ __html: description }} />
                        </div>
                        {cards.length > 0 ? (
                            cards.map((card, index) => (
                                <div key={index} className="text">
                                    <h6>{card.section_heading}</h6>
                                    {card.images?.map((image, imgIndex) => (
                                        <img key={imgIndex} src={image} alt={`${card.section_heading} ${imgIndex + 1}`} />
                                    ))}
                                </div>
                            ))
                        ) : (
                            <div className="text">
                                <h6>Color Pallete</h6>
                                {defaultImages.map((image, index) => (
                                    <img key={index} src={image} alt={`Color Palette ${index + 1}`} />
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}
