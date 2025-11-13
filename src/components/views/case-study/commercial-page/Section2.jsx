import React from 'react'
import Image from 'next/image'
import logo from '/public/commercial/logo.png'
import section02img from '/public/commercial/section02img.png'

export default function Section2() {
    return (
        <>
        <section className="commercial01">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="twoBox">
                            <div className="imgBox">
                                <Image src={logo} alt="Image"/>
                            </div>
                            <div className="text">
                                <h6>Car Wash, Gas Station, Retail</h6>
                                <h2>Leading Real Estate and Business Advisors</h2>
                                <p>Commercial Plus Group has over 40 years of experience representing entrepreneurs and growing companies. Today, Commercial Plus Group provides real estate and business advisory services throughout the country. We have industry professionals dedicated to pursuing client objectives through a culture of excellence, integrity, and hard work.</p>
                            </div>
                        </div>
                        <Image src={section02img} alt="image"/>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}
