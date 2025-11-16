import React from 'react'
import Image from 'next/image'
import logo from '/public/hurghada-image/logo.png'
import bannerImage from '/public/hurghada-image/banner-Image.png'
import bannerMobile from '/public/hurghada-image/banner-Mobile.png'
import bannerstartvector from '/public/hurghada-image/banner-start-vector.png'

export default function Section01({ data }) {
    const backgroundImage = data?.hero_image || bannerImage.src
    const title = data?.title || 'Case Study'
    const subtitle = data?.subtitle || '<h1>Welcome to Hurghada</h1>'
    const logoImage = data?.logo || logo.src
    const mobileImage = data?.background_image || bannerMobile.src

    return (
        <section className="heroBanner" style={{ backgroundImage: `url(${backgroundImage})` }}>
            <Image src={bannerstartvector} alt="image" className='bannerstartvector' width={550} height={550} />
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="text">
                            <h6>{title}</h6>
                            <h1 dangerouslySetInnerHTML={{ __html: subtitle }} />
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="imgBox">
                            <Image src={logoImage} alt="image" className='bannerLogo' width={290} height={105} />
                            <Image src={mobileImage} alt="image" width={471} height={962} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
