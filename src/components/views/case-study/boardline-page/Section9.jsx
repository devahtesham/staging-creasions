import React from 'react'
import Section7_1 from '/public/clairmont/section-7-01.webp'
import Section7_2 from '/public/case-study/Clairmont.jpg'

export default function Section9() {
    return (
        <section
            className="Boardline-09"
            style={{
                backgroundImage:
                    "url(/boardline/section-7bg.webp)"
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
                            <a href="/case-study/lres-case-study">
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
                            <a href="/case-study/clairmont-case-study">
                                <img
                                    src={Section7_2.src}
                                    alt=""
                                />
                            </a>
                            <div className="two-text">
                                <h6>Real Estate</h6>
                                <span>
                                    <font style={{ verticalAlign: "inherit" }}>
                                        <font style={{ verticalAlign: "inherit" }}>____</font>
                                    </font>
                                </span>
                            </div>
                            <h4>
                                <font style={{ verticalAlign: "inherit" }}>
                                    <font style={{ verticalAlign: "inherit" }}>Clairmont</font>
                                </font>
                            </h4>
                            <p>Clairmont Capital Group is a Los Angeles-based private equity firm focused.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}
