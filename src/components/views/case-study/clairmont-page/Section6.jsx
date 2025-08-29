import React from 'react'
import Section6_1 from '/public/clairmont/section-6-01.webp'
import Section6_2 from '/public/clairmont/section-6-02.webp'

export default function Section6() {
    return (
        <section
            className="Clairmont-06"
            style={{
                backgroundImage:
                    "url(/clairmont/section-6Bg.webp)"
            }}
        >
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-md-12">
                        <div className="text">
                            <h3>
                                Mobile
                                <br /> Experience
                            </h3>
                        </div>
                    </div>
                    <div className="col-lg-8 col-md-12">
                        <div className="text">
                            <p>
                                Like most HOA Board Management Website, mobile dominates their
                                customer base. We made mobile our first priority, ensuring that the
                                browsing &amp; shopping experience was effortless.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-4 col-md-4">
                        <div className="img-box">
                            <img
                                src={Section6_1.src}
                                alt=""
                            />
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-4">
                        <div className="img-box-1">
                            <img
                                src={Section6_2.src}
                                alt=""
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
