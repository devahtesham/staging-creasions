import React from 'react'

import SecImgBg from '/public/industry/beauty-salons/bs-sec04-bg.webp'
import SecImg1 from '/public/industry/beauty-salons/bs-sec04-01.webp'


export default function Section4() {
    return (
        <section
            className="beauty-sec-6"
            style={{
                backgroundImage:
                    "url(/industry/beauty-salons/bs-sec04-bg.webp)"
            }}
        >
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-md-6">
                        <div
                            className="beauty-image"
                        >
                            <img
                                src={SecImg1.src}
                                alt="dollar-img"
                            />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div
                            className="beauty-text"
                        >
                            <h2>Here&apos;s what a website from Creasions can do for you:</h2>
                            <ul className="beauty-list">
                                <li>Bring in new clients from your local area</li>
                                <li>Showcase all your services and treatments</li>
                                <li>Share photos of your work in beautiful galleries</li>
                                <li>Highlight client testimonials to build trust</li>
                                <li>Promote special deals and offers</li>
                                <li>Allow clients to easily book appointments online</li>
                                <li>List salon products you have for sale</li>
                                <li>Post blogs about the latest beauty trends and techniques</li>
                                <li>Provide easy-to-use maps and directions to your salon</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
