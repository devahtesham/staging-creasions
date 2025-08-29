import React from 'react'
import PlaySVG from '/public/industry/cleaning-company/video-play.svg';
import PauseSVG from '/public/industry/cleaning-company/video-pause.svg';
import Loud1 from '/public/industry/cleaning-company/re-loud-1.png';
import Link from 'next/link';
import VideoOptimizer from '@/components/ui/VideoOptimizer';
import VideoThumbnail from '/public/industry/cleaning-company/cc-video-thumbnail.png';



export default function Section2() {
    return (

        <>
            <section className="cleaning-sec-2 padt-4">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div
                                className="cleaning-text-brand"
                            >
                                <h2>
                                    Boost Your Cleaning Company&apos;s Success with a High-Performing Website
                                    that Converts Clients
                                </h2>
                                <p>
                                    As household incomes rise, the demand for cleaning services in major
                                    cities continues to grow. Whether big or small, cleaning companies
                                    have incredible potential for profitability and long-term success.
                                    However, the challenge for any service-based business lies in
                                    consistently attracting and retaining clients. Today&apos;s consumers
                                    turn to the internet to find and compare services, including
                                    cleaning companies. If you want to reach more potential clients, you
                                    need a strong online presence—one that ensures your services are
                                    easily found where your audience is searching.
                                </p>
                            </div>
                            <div className="video-wrapper">
                                <VideoOptimizer
                                    src="/video/cleaning-service-page.mp4"
                                    poster={VideoThumbnail}
                                />
                            </div>
                        </div>
                        <div className="col-md-12 cleaning-text-brand">
                            <p>
                                Having a powerful digital presence is essential for your cleaning
                                company to stay competitive. While social media can be helpful, it&apos;s
                                not enough in a crowded marketplace. To truly stand out, you need an
                                attractive, user-friendly website that makes it easy for clients to
                                find and connect with your business. That&apos;s where Creasions comes in.
                            </p>
                            <br />
                            <p>
                                Your cleaning company&apos;s website should not only look great but also
                                work hard for your brand. It needs to rank well in search results and
                                provide a seamless experience for users. At Creasions, our team of web
                                design experts specializes in creating fast, high-performing websites
                                that are optimized for search engines and designed to convert visitors
                                into clients. We help your cleaning company stand out and thrive in
                                the digital space.
                            </p>
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
