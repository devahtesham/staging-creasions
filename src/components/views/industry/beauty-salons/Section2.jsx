import React from 'react'
import Loud1 from '/public/industry/beauty-salons/bs-loud-1.png';
import Link from 'next/link';

export default function Section2() {
    return (
        <>        <section className="beauty-sec-2">
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <div className="beauty-text">
                            <h2>
                                For salon owners who want a website that not only looks amazing but
                                brings in a flood of new clients.
                            </h2>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="beauty-img">
                            <img
                                src="/industry/beauty-salons/bs-sec02-towel.webp"
                                alt="towel"
                            />
                        </div>
                    </div>
                    <div className="col-md-4 wow slideInRight">
                        <div className="beauty-text">
                            <p>
                                Sure, anyone with a laptop can throw together a website these days.
                                But creating one that truly works for your salon—getting it found by
                                people in your area and turning visitors into bookings? That
                                requires real expertise, strategy, and design skills.
                            </p>
                            <br />
                            <p>
                                At Creasions, we&apos;ve built over 500 salon websites that do just that.
                                Take a look at some examples below and see how we can help your
                                business grow.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
            <section className="sec-7 nitro-offscreen">
                <div className="container">
                    <div className="row align-items-center info-box">
                        <div className="col">
                            <div className="text fade-in-left">
                                <h2>For more information speak with us</h2>
                            </div>
                        </div>
                        <div className="col">
                            <ul>
                                <li>
                                    <a href="tel:1469-854-3814" className="discount-call-btn">
                                        +1 469-854-3814
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="col img-box">
                            <img
                                alt="Loud Speaker"
                                src={Loud1.src}
                                className="lazyloaded"
                            />
                        </div>
                        <div className="col">
                            <div className="disc-price">
                                <h3>Flat 30% On</h3>
                            </div>
                        </div>
                        <div className="col">
                            <div className="order-btn">
                                <Link href="/contact-us" className="t-btn t-btn-gradient">
                                    Order Now
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
