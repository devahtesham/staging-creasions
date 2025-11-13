import React from 'react'
import Section7_1 from '/public/case-study/Kudobu.webp'
import Section7_2 from '/public/case-study/Clairmont.jpg'

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
                            <a href="/case-study/KaDoBu-case-study">
                                <img
                                    src={Section7_1.src}
                                    alt=""
                                />
                            </a>
                            <div className="two-text">
                                <h6>Consulting</h6>
                                <span>____</span>
                            </div>
                            <h4>KaDoBu</h4>
                            <p>KaDoBu & Company is a strategic consulting firm that specializes in helping businesses</p>
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
