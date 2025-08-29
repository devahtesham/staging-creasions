import React from 'react'
import Review1 from '/public/industry/cleaning-company/cc-review-01.webp'
import Review2 from '/public/industry/cleaning-company/cc-review-02.webp'
import Review3 from '/public/industry/cleaning-company/cc-review-03.webp'
import Ratings from '/public/industry/cleaning-company/cc-ratings.webp'



export default function Section3() {
    return (
        <section className="cleaning-sec-3 py-3">
            <div className="container">
                <div className="row">
                    <div className="col-md-4 col-sm-4">
                        <div
                            className="cleaning-brand-box"
                        >
                            <a href="#">
                                <img
                                    className="img-fluid"
                                    src={Review1.src}
                                    alt="google"
                                />
                            </a>
                            <img
                                className="img-fluid"
                                src={Ratings.src}
                                alt="rating star"
                            />
                            <p>150+ Reviews</p>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-4">
                        <div
                            className="cleaning-brand-box">
                            <a href="#">
                                <img
                                    className="img-fluid"
                                    src={Review2.src}
                                    alt="clutch"
                                />
                            </a>
                            <img
                                className="img-fluid"
                                src={Ratings.src}
                                alt="rating star"
                            />
                            <p>50+ Reviews</p>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-4">
                        <div
                            className="cleaning-brand-box"
                        >
                            <a href="#">
                                <img
                                    className="img-fluid"
                                    src={Review3.src}
                                    alt="upcity"
                                />
                            </a>
                            <img
                                className="img-fluid"
                                src={Ratings.src}
                                alt="rating star"
                            />
                            <p>50+ Reviews</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
