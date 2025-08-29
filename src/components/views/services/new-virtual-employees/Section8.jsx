import Image from 'next/image'
import React from 'react'

import client1 from '/public/services/new-virtual-employees/ve-sec08-Slider01.png'
import client2 from '/public/services/new-virtual-employees/ve-sec08-Slider02.png'
import client3 from '/public/services/new-virtual-employees/ve-sec08-Slider03.png'
import client4 from '/public/services/new-virtual-employees/ve-sec08-Slider04.png'
import client5 from '/public/services/new-virtual-employees/ve-sec08-Slider05.png'
import client6 from '/public/services/new-virtual-employees/ve-sec08-Slider06.png'


export default function Section8() {
    return (
        <section className="sec-08">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="heading">
                            <h4>TOP NOTCH CLIENTS</h4>
                            <h2>Get to know some of the clients our team has helped!</h2>

                            <div className="client-logos">
                                <div className="row d-flex justify-content-between align-items-center">
                                    <div className="col-lg-2 col-md-6">
                                        <div className='card-blur-bg-3'>
                                            <Image src={client1} alt="client-logo-1" />
                                        </div>
                                    </div>
                                    <div className="col-lg-2 col-md-6">
                                        <div className='card-blur-bg-3'>
                                            <Image src={client2} alt="client-logo-2" />
                                        </div>
                                    </div>

                                    <div className="col-lg-2 col-md-6">
                                        <div className='card-blur-bg-3'>
                                            <Image src={client3} alt="client-logo-3" />
                                        </div>
                                    </div>
                                    <div className="col-lg-2 col-md-6">
                                        <div className='card-blur-bg-3'>
                                            <Image src={client4} alt="client-logo-4" />
                                        </div>
                                    </div>
                                    <div className="col-lg-2 col-md-6">
                                        <div className='card-blur-bg-3'>
                                            <Image src={client5} alt="client-logo-5" />
                                        </div>
                                    </div>
                                    <div className="col-lg-2 col-md-6">
                                        <div className='card-blur-bg-3'>
                                            <Image src={client6} alt="client-logo-6" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
