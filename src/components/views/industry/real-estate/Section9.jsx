import React from 'react';

import Icon1 from '/public/industry/real-estate/re-sec09-01.webp';
import Icon2 from '/public/industry/real-estate/re-sec09-02.webp';
import Icon3 from '/public/industry/real-estate/re-sec09-03.webp';

import Laptop from '/public/industry/real-estate/re-sec09-laptop.webp';
import Image from 'next/image';

export default function Section9() {
    return (
        <section
            className="Benefits-sec"
        >
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="case-text-brand">
                            <h2>Benefits of Choosing Us</h2>
                        </div>
                    </div>
                </div>

                <div className="row justify-content-center row1">
                    <div className="col-md-3">
                        <a href="#">
                            <div className="Benefit-box first-brom">
                                <Image
                                    src={Icon1}
                                    alt="fixed cost"
                                />
                                <h5>
                                    Time &amp;
                                    <br />
                                    Material Model
                                </h5>
                            </div>
                        </a>
                    </div>
                </div>

                <div className="row align-items-center row2">
                    <div className="col-md-3 col1">
                        <a href="#">
                            <div className="Benefit-box last-brom">
                                <Image
                                    className="img-fluid"
                                    src={Icon2}
                                    alt="fixed cost-1"
                                />
                                <h5>
                                    Fixed
                                    <br />
                                    Cost Model
                                </h5>
                            </div>
                        </a>
                    </div>

                    <div className="col-md-6 col2">
                        <a href="#">
                            <div className="Benefit-img">
                                <Image
                                    className="img-fluid"
                                    src={Laptop}
                                    alt="laptop workspace"
                                />
                            </div>
                        </a>
                    </div>

                    <div className="col-md-3 col3">
                        <a href="#">
                            <div className="Benefit-box third-img">
                                <Image
                                    src={Icon3}
                                    alt="fixed cost-2"
                                />
                                <h5>
                                    Hourly
                                    <br />
                                    Based Model
                                </h5>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
