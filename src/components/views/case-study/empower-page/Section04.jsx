import React from 'react'
import Image from 'next/image'
import desktop02 from '/public/empower-image/desktop02.png'
import desktop01 from '/public/empower-image/desktop01.png'
import homeText from '/public/empower-image/homeText.png'

export default function Section04({ data }) {
    const mainImg = data?.screenshot[0] || homeText.src
    const defaultScreenshots = data?.screenshot?.slice(1) || [desktop02.src, desktop01.src]
    return (
        <>
        <section className="secton03">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="text">
                            <Image src={mainImg} alt='image' width={1372} height={92} />
                        </div>
                        <div className="imgBox">
                            {defaultScreenshots.map((screenshot, index) => (
                                <Image key={index} src={screenshot} alt='image' width={683} height={1010} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}
