import React from 'react'

import Section5Bg from '/public/clairmont/section-5Bg.webp'
import Section5Bg_mobile from '/public/clairmont/Section-5Bg-mobile.webp'

export default function Section5() {
    return (
        <section className="Clairmont-05">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-12 p-0">
                        <div className="box-img">
                            <img
                                src={Section5Bg.src}
                                alt=""
                            />
                            <img
                                src={Section5Bg_mobile.src}
                                className="mobile-img"
                                alt=""
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}
