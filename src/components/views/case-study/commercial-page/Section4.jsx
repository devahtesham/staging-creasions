import React from 'react'
import Image from 'next/image'
import websiteScreenShot from '/public/commercial/websiteScreenShot.png'

export default function Section4() {
    return (
        <>
        <section className="commercial03">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="text text-center">
                            <h2>Desktop Design</h2>
                        </div>
                    </div>
                </div>
            </div>
            <div className="img-Box">
                <Image src={websiteScreenShot} alt="image" />
            </div>
        </section>
        </>
    )
}
