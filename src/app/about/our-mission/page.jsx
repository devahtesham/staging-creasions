import VideoOptimizer from '@/components/ui/VideoOptimizer'
import React from 'react'
import '@/app/css/NewOurMission.css';


import Thumbnail from '/public/our-mission/Banner-bg.png';
import Card1Bg from '/public/our-mission/our-mission-sec03-01.png';
import Card2Bg from '/public/our-mission/our-mission-sec03-02.png';
import Card3Bg from '/public/our-mission/our-mission-sec03-03.png';
import Card4Bg from '/public/our-mission/our-mission-sec03-04.png';
import Card5Bg from '/public/our-mission/our-mission-sec03-05.png';
import Card6Bg from '/public/our-mission/our-mission-sec03-06.png';

import Image from 'next/image';
import Faq from '@/components/layout/Faq';
import { faqData } from '@/components/mocks/homeFaq';


import { metadata as pageMetadata } from "@/components/mocks/metadata/our-mission/metadata";


export const metadata = pageMetadata; 




export default function Page() {
    return (
        <main className="our-mission">
            <section className="inner-title" style={{ backgroundColor: '#000' }}>
                <div className="banner-video">
                    <VideoOptimizer
                        src="/video/our-mission-bg.mp4"
                        poster={Thumbnail}
                    />
                </div>

                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="heading">
                                <h2>Our Mission</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className="glass-bg">
                <section className="sec-02">
                    <div className="container">
                        <h4>Our Mission</h4>
                        <p>
                            At Creasions, our primary goal is to drive success in every project, regardless of time constraints, budget limitations, or evolving requirements. We are committed to achieving the goals you set forth, ensuring that your project reaches its full potential.
                        </p>
                    </div>
                </section>


                <section className="sec-03">
                    <div className="container">
                        <h1>6 Things We Value</h1>

                        <div className="row">
                            <div className="col-lg-4 col-md-6">
                                <div className="img-box">
                                    <Image src={Card1Bg} alt="card1" className="card-bg"/>
                                    <div className="content">

                                        <h2>Excellence</h2>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6">
                                <div className="img-box">
                                    <Image src={Card2Bg} alt="card2" className="card-bg"/>
                                    <div className="content">
                                        <h2>Innovation</h2>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6">
                                <div className="img-box">
                                    <Image src={Card3Bg} alt="card3" className="card-bg"/>
                                    <div className="content">
                                        <h2>Integrity</h2>
                                    </div>
                                </div>
                            </div>


                            <div className="col-lg-4 col-md-6">
                                <div className="img-box">
                                    <Image src={Card4Bg} alt="card4" className="card-bg"/>
                                    <div className="content">
                                        <h2>Collaboration</h2>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="img-box">
                                    <Image src={Card5Bg} alt="card5" className="card-bg"/>
                                    <div className="content">
                                        <h2>Customer Value</h2>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="img-box">
                                    <Image src={Card6Bg} alt="card6" className="card-bg"/>
                                    <div className="content">
                                        <h2>Care & Share</h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="sec-04">
                    <div className="container">
                        <h4>Driving Success in every Project</h4>

                        <p>At Creasions, our primary goal is to drive success in every project, regardless of time constraints, budget limitations, or evolving requirements. We are committed to achieving the goals you set forth, ensuring that your project reaches its full potential.</p>
                        <p>At Creasions, our goal is simple: we want to help every business succeed online. As a web development and digital agency, we specialize in creating strong brands, great websites, and smart marketing plans. Our team loves taking ideas and making them real, so your business can thrive.</p>
                    </div>
                </section>
            </div>

            <Faq data={faqData} />
        </main>
    )
}
