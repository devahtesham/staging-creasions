import React from 'react'
import Image from 'next/image'
import banner01img from '/public/empower-image/banner01img.png'
import banner02img from '/public/empower-image/banner02img.png'

export default function Section01() {
    return (
        <>
        <section className="heroBanner">
            <div className="container">
                <div className="row">
                    <div className="col-lg-7">
                        <div className="text">
                            <h1>Empower Care Insurance</h1>
                            <p>Empower Care Insurance is built on trust and reliability, helping families and individuals feel secure about their future. Their mission is to simplify insurance and empower people with the confidence to make informed decisions. Our role was to capture this vision digitally, designing a website that not only educates but also inspires trust and builds meaningful connections.</p>
                        </div>
                        <div className="img-box">
                            <Image src={banner01img} alt='image' />                
                        </div>
                    </div>
                    <div className="col-lg-5">
                        <div className="img-box">
                            <Image src={banner02img} alt='image' />                
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}
