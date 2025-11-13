import React from 'react'
import Image from 'next/image'
import section03img01 from '/public/commercial/section03img01.png'
import section03img02 from '/public/commercial/section03img02.png'
import section03img03 from '/public/commercial/section03img03.png'

export default function Section3() {
    return (
        <>
        <section className="commercial02">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="text">
                            <div className="twoBox">
                                <h2>Worldwide<br/> Design <br/>Framework</h2>
                                <p>Our design framework reflects professionalism, trust, and growth—values that define our brand. By combining modern aesthetics with timeless principles, we ensure a consistent identity across digital and print platforms. Every element, from typography to color selection, is crafted to communicate reliability, sophistication, and success in the real estate and financial sectors.</p>
                            </div>
                        </div>
                        <div className="img-Box">
                            <Image src={section03img01} alt="image" />
                            <Image src={section03img02} alt="image" />
                            <Image src={section03img03} alt="image" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}
