import React from 'react'
import Image from 'next/image'
import style01 from '/public/empower-image/style01.png'
import style02 from '/public/empower-image/style02.png'
import style03 from '/public/empower-image/style03.png'

export default function Section03() {
    return (
        <>
        <section className="secton02">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="twoBox text">
                            <h2>Worldwide Design Framework</h2>
                            <span className="divider"></span>
                            <p>We designed a scalable framework to keep Empower Care Insurance consistent across global markets. The typography is modern and approachable, ensuring clarity in every interaction. The color palette uses warm, inviting tones paired with professional contrasts to reinforce trust and reliability. The system is flexible enough to adapt across devices, yet strong enough to keep the brand identity intact everywhere.</p>
                        </div>
                        <div className="imgBox">
                            <Image src={style03} alt='image' />
                            <Image src={style02} alt='image' />
                            <Image src={style01} alt='image' />
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}
