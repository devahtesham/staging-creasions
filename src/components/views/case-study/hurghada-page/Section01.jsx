import React from 'react'
import Image from 'next/image'
import logo from '/public/hurghada-image/logo.png'
import bannerImage from '/public/hurghada-image/banner-Image.png'
import bannerMobile from '/public/hurghada-image/banner-Mobile.png'
import bannerstartvector from '/public/hurghada-image/banner-start-vector.png'

export default function Section01() {
  return (
    <section className="heroBanner" style={{ backgroundImage:`url(${bannerImage.src})`}}>
        <Image src={bannerstartvector} alt="image" className='bannerstartvector'/>
        <div className="container">
            <div className="row">
                <div className="col-lg-6">
                    <div className="text">
                        <h6>Case Study</h6>
                        <h1>Welcome to Hurghada</h1>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="imgBox">
                        <Image src={logo} alt="image" className='bannerLogo' />
                        <Image src={bannerMobile} alt="image"/>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}
