import React from 'react'
import Link from 'next/link'
import mobile01 from '/public/empower-image/mobile01.png'
import mobile02 from '/public/empower-image/mobile02.png'
import mobile03 from '/public/empower-image/mobile03.png'
import mobile04 from '/public/empower-image/mobile04.png'
import lastsecBg from '/public/baituti/lastsecBg.png'

export default function Section06({ data }) {
    const title = data?.title || 'Mobile Experience'
    const description = data?.description || '<p>With insurance decisions often happening on the go...</p>'
    const buttonUrl = data?.button_url || 'https://empowercareinsurance.com/'
    const buttonText = data?.button_text || 'Visit Website'
    
    const defaultImages = [mobile01.src, mobile02.src, mobile03.src, mobile04.src]
    const images = data?.images?.length > 0 ? data.images : defaultImages

    return (
        <>
        <section className="secton05" style={{backgroundImage: `url(${lastsecBg.src})`}}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="text">
                            <div className="twoBox">
                                <h2 dangerouslySetInnerHTML={{ __html: title }} />
                                <span className="divider"></span>
                                <div dangerouslySetInnerHTML={{ __html: description }} />
                            </div>
                        </div>
                        <div className="img-Box">
                            {images.slice(0, 4).map((image, index) => (
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
