import React from 'react'
import Section7_1 from '/public/clairmont/section-7-01.webp'
import Section7_2 from '/public/clairmont/section-7-02.webp'

export default function Section7() {
    return (
        <section
            className="Clairmont-07"
            style={{
                backgroundImage:
                    "url(/clairmont/section-7bg.webp)"
            }}
        >
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="text">
                            <h2>
                                Related Projects
                            </h2>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-6 col-md-6">
                        <div
                            className="text-img-box img-box"
                        >
                            <a href="#">
                                <img
                                    src={Section7_1.src}
                                    alt=""
                                />
                            </a>
                            <div className="two-text">
                                <h6>Real Estate</h6>
                                <span>____</span>
                            </div>
                            <h4>LRES</h4>
                            <p>
                                Welcome to LRES Property Management, a firm brought to you by Luker
                                Properties Group, a multifaceted real estate and management.
                            </p>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                        <div
                            className="text-img-box-2"
                        >
                            <a href="#">
                                <img
                                    src={Section7_2.src}
                                    alt=""
                                />
                            </a>
                            <div className="two-text">
                                <h6>IT Consultancy</h6>
                                <span>
                                    <font style={{ verticalAlign: "inherit" }}>
                                        <font style={{ verticalAlign: "inherit" }}>____</font>
                                    </font>
                                </span>
                            </div>
                            <h4>
                                <font style={{ verticalAlign: "inherit" }}>
                                    <font style={{ verticalAlign: "inherit" }}>Jegnite</font>
                                </font>
                            </h4>
                            <p>We provide thoughtful IT and Engineering Management services.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}
