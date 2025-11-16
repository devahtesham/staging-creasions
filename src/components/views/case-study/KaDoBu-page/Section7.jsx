import React from 'react'
import Section7_1 from '/public/kadobu/kadobu-sec07-01.png'
import Section7_2 from '/public/kadobu/kadobu-sec07-02.png'
import Section7_3 from '/public/kadobu/kadobu-sec07-03.png'
import Section7_4 from '/public/kadobu/kadobu-sec07-04.png'
import Link from 'next/link';


export default function Section7({ data }) {
    const title = data?.title || 'Mobile Responsive Designs'
    const description = data?.description || '<p>KaDoBu\'s mobile-responsive website ensures easy navigation...</p>'
    const buttonUrl = data?.button_url || 'https://kadobu.com/'
    const buttonText = data?.button_text || 'Visit Website'
    const backgroundImage = data?.background_image || '/kadobu/section-07-bg.png'
    
    const defaultImages = [Section7_1.src, Section7_2.src, Section7_3.src, Section7_4.src]
    const images = data?.images?.length > 0 ? data.images : defaultImages

    return (
        <section className="KaDoBu-07" style={{ backgroundImage: `url('${backgroundImage}')` , position: 'relative' }}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 col-md-12">
                         <div className="text">
                            <h3>{title}</h3>
                        </div>
                        <div className="text">
                            <div dangerouslySetInnerHTML={{ __html: description }} />
                        </div>
                    </div>
                </div>
                <div className="row">
                    {images.slice(0, 4).map((image, index) => (
                        <div key={index} className="col-lg-3 col-md-3">
                            <div className={index === 1 ? "img-box-1" : "img-box"}>
                                <img src={image} alt={`Mobile ${index + 1}`} />
                            </div>
                        </div>
                    ))}
                    <div className="text" style={{ marginTop: '60px'}}>
                        <Link
                            href={buttonUrl}
                            className="t-btn"
                            tabIndex="0" 
                            style={{ marginBottom: '0px' }}
                        >
                            {buttonText}
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}
