import React from 'react'
import Link from 'next/link'
import section03img01 from '/public/commercial/mobileView01.png'
import section03img02 from '/public/commercial/mobileView02.png'
import section03img03 from '/public/commercial/mobileView03.png'

export default function Section6({ data }) {
    const title = data?.title || 'Mobile Experience'
    const description = data?.description || '<p>With insurance decisions often happening on the go, we optimized the entire website for mobile...</p>'
    const buttonUrl = data?.button_url || 'https://commercialplus.com/'
    const buttonText = data?.button_text || 'Visit Website'
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
                                <img key={index} src={image} alt={`Mobile ${index + 1}`} />
                            ))}
                        </div>
                        <div className="btnBox">
                            <Link href={buttonUrl} target='_blank' className='btn t-btn'>{buttonText}</Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}
