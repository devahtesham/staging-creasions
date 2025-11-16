import React from 'react'
import websiteScreenShot from '/public/commercial/websiteScreenShot.png'

export default function Section4({ data }) {
    const title = data?.title || 'Desktop Design'
    const screenshot = data?.screenshot || websiteScreenShot.src

    return (
        <>
        <section className="commercial03">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="text text-center">
                            <h2>{title}</h2>
                        </div>
                    </div>
                </div>
            </div>
            <div className="img-Box">
                <img src={screenshot} alt="Desktop Design" />
            </div>
        </section>
        </>
    )
}
