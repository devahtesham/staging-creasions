import React from 'react'
import Image from 'next/image'
import logo from '/public/hurghada-image/logo.png'
import bannerImage from '/public/hurghada-image/banner-Image.png'
import bannerMobile from '/public/hurghada-image/banner-Mobile.png'
import bannerstartvector from '/public/hurghada-image/banner-start-vector.png'

export default function Section01({ data }) {
    return (
        <section className="heroBanner" style={{ backgroundImage: `url(${data?.hero_image})` }}>
            <Image src={bannerstartvector} alt="image" className='bannerstartvector' />
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="text">
                            <h6> {data?.title}</h6>
                            <h1 dangerouslySetInnerHTML={{ __html: data?.subtitle }} />
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="imgBox">
                            <Image src={data?.logo || logo.src} alt="image" className='bannerLogo' width={290} height={105} />
                            <Image src={data?.background_image || bannerMobile.src} alt="image" width={471} height={962} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
