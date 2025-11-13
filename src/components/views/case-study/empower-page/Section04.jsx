import React from 'react'
import Image from 'next/image'
import desktop02 from '/public/empower-image/desktop02.png'
import desktop01 from '/public/empower-image/desktop01.png'
import homeText from '/public/empower-image/homeText.png'

export default function Section04() {
    return (
        <>
        <section className="secton03">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="text">
                            <Image src={homeText} alt='image' />
                        </div>
                        <div className="imgBox">
                            <Image src={desktop02} alt='image' />
                            <Image src={desktop01} alt='image' />
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}
