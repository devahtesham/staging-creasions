import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import FollowUs from '/public/follow-us-img.png'
import Facebook from '/public/facebook.png'
import Instagram from '/public/Instagram.png'
import Twitter from '/public/Twitter.png'
import Youtube from '/public/youtube.webp'

export default function FixedSocial() {
    return (
        <section className="flow-social-links">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-12">
                        <div className="main-links-social">
                            <Image src={FollowUs} alt="" />
                            <ul>
                                <li>
                                    <Link href="https://www.facebook.com/creasionsdigital" target="_blank">
                                        <Image src={Facebook} alt="facebook" priority />
                                    </Link>
                                </li>
                                <li>
                                    <Link href="https://www.instagram.com/creasionsdigital/" target="_blank">
                                        <Image src={Instagram} alt="instagram" priority />
                                    </Link>
                                </li>
                                <li>
                                    <Link href="https://twitter.com/creasionsllc" target="_blank">
                                        <Image src={Twitter} alt="twitter" priority />
                                    </Link>
                                </li>
                                <li>
                                    <Link href="https://www.youtube.com/@Creasions" target="_blank">
                                        <Image src={Youtube} alt="youtube" priority />
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}
