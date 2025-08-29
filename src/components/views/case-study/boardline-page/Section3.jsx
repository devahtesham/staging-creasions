import React from 'react'

import Section4_1 from '/public/boardline/section-4-01.webp'
import Section4_2 from '/public/boardline/section-4-02.webp'


export default function Section3() {
    return (
        <section className="Boardline-03">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-12">
                        <div className="text">
                            <h3>
                                Before
                            </h3>
                            <img
                                src={Section4_1.src}
                                alt=""
                            />
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12">
                        <div className="text">
                            <h3>
                                After
                            </h3>
                            <img
                                src={Section4_2.src}
                                alt=""
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
