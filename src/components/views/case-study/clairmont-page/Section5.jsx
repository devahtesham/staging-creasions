import React from 'react'

import Section5Bg from '/public/clairmont/section-5Bg.webp'
import Section5Bg_mobile from '/public/clairmont/Section-5Bg-mobile.webp'

export default function Section5({ data }) {
    const imageTop = data?.image_top || Section5Bg.src
    const imageBottom = data?.image_bottom || Section5Bg_mobile.src

    return (
        <section className="Clairmont-05">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-12 p-0">
                        <div className="box-img">
                            <img src={imageTop} alt="Homepage desktop" />
                            <img src={imageBottom} className="mobile-img" alt="Homepage mobile" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
