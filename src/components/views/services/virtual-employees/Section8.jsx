import React from 'react'
import SecImg1 from '/public/services/virtual-employees/ve-sec08-01.png'
import Image from 'next/image'


export default function Section8() {
    return (
        <section className="virtual-sec-6">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6">
                        <div className="img-box">
                            <Image
                                src={SecImg1}
                                alt=""
                                className="img-fluid"
                            />
                        </div>
                    </div>
                    <div className="col-lg-6 pl-5">
                        <div className="text">
                            <h2>About Us</h2>
                            <p>
                                Creasions a leading force in the IT industry and a Top USA Software
                                Company. Founded in 2020, our journey began much earlier in 2011,
                                working through top freelancing platforms such as Upwork, Fiverr,
                                and more. Over the years, we have earned top-rated badges and
                                established ourselves as a premier Design Agency, Marketing Agency,
                                and top website development company.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}
