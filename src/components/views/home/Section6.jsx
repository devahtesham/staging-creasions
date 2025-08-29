"use client";
import React, { useEffect, useState } from 'react'

import Image from 'next/image'
import Link from 'next/link'

import { syne } from '@/app/layout'

import RightArrow from '/public/right-arrow.webp'
import VideoOptimizer from '@/components/ui/VideoOptimizer'
import Slider from "react-slick";


import PortfolioThumbnail1 from '/public/our-portfolio-01.webp'
import PortfolioThumbnail2 from '/public/our-portfolio-02.webp'
import PortfolioThumbnail3 from '/public/our-portfolio-03.webp'
import PortfolioThumbnail4 from '/public/our-portfolio-04.webp'
import { fetchOurPortfolioSection } from '@/utils/helper';


export default function Section6() {

    const [sectionData, setSectionData] = useState([]);



    // effect for fetching hero section banners
    useEffect(() => {
        fetchOurPortfolioSection()
            .then((data) => {
                // console.log('[servicesWeProvide]', data)
                setSectionData([...data.reverse()])
            })
            .catch(error => {
                console.error('[error]', error)
            })
    }, []);




    const settings = {
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        // autoplay: true,
        autoplaySpeed: 2000,
    };

    // console.log('[sectionData]', sectionData)
    return (

        sectionData.length ? (
            <section className="homepage-sec-06">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="text text-center">
                                <h2 className={syne.className}>Our Portfolio</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-6 col-md-12">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="video-box video-box-01">
                                        <Link href={`${sectionData[0]?.item_link ? sectionData[0]?.item_link : 'javascript:void(0)'}`}>
                                            <VideoOptimizer
                                                src={'/video/our-portfolio-video-01.mp4'}
                                                poster={sectionData[0]?.media_url}
                                            />
                                            <div className="last-div"> <p>{sectionData[0]?.item_heading}</p> </div>
                                        </Link>
                                    </div>
                                </div>
                                <div className="col-lg-5 col-md-6">
                                    <div className="video-box video-box-02">
                                        <Link href={`${sectionData[1]?.item_link ? sectionData[1]?.item_link : 'javascript:void(0)'}`}>
                                            <VideoOptimizer
                                                src={'/video/our-portfolio-video-02.mp4'}
                                                poster={sectionData[1]?.media_url}
                                            />
                                            <div className="last-div"> <p>{sectionData[1]?.item_heading}</p> </div>
                                        </Link>
                                    </div>
                                </div>
                                <div className="col-lg-7 col-md-6">
                                    <div className="video-box video-box-03">
                                        <Link href={`${sectionData[2]?.item_link ? sectionData[2]?.item_link : 'javascript:void(0)'}`}>
                                            <VideoOptimizer
                                                src={'/video/our-portfolio-video-03.mp4'}
                                                poster={sectionData[2]?.media_url}
                                            />
                                            <div className="last-div"> <p>{sectionData[2]?.item_heading}</p> </div>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12">
                            <div className="video-box video-box-04">
                                <Link href={`${sectionData[3]?.item_link ? sectionData[3]?.item_link : 'javascript:void(0)'}`}>
                                    <VideoOptimizer
                                        src={'/video/our-portfolio-video-04.mp4'}
                                        poster={sectionData[3]?.media_url}
                                    />
                                    <div className="last-div"> <p>{sectionData[3]?.item_heading}</p> </div>
                                </Link>
                            </div>
                        </div>
                    </div>





                    <div className="mobile-portfolio">
                        <Slider {...settings}>
                            {
                                sectionData.map((item, index) => (
                                    <div key={index} className={`video-box video-box-${index + 1}`}>
                                        <Link href={`${item?.item_link ? item?.item_link : 'javascript:void(0)'}`}>
                                            <VideoOptimizer
                                                src={item?.video_url}
                                                poster={item?.media_url}
                                            />
                                            <div className="last-div"> <p>{item?.item_heading}</p> </div>
                                        </Link>
                                    </div>
                                ))
                            }
                            {/* <div className="video-box video-box-04">
                                <Link href="/portfolio/app-design/">
                                    <VideoOptimizer
                                        src="/video/our-portfolio-video-04.mp4"
                                        poster={PortfolioThumbnail4}
                                    />
                                    <div className="last-div"> <p>APP DESIGN</p> </div>
                                </Link>
                            </div>
                            <div className="video-box video-box-01">
                                <Link href="/portfolio/website-design/">
                                    <VideoOptimizer
                                        src="/video/our-portfolio-video-01.mp4"
                                        poster={PortfolioThumbnail1}
                                    />
                                    <div className="last-div"> <p>WEBSITE DESIGNS</p> </div>
                                </Link>
                            </div>
                            <div className="video-box video-box-02">
                                <Link href="/portfolio/logo-design/">
                                    <VideoOptimizer
                                        src="/video/our-portfolio-video-02.mp4"
                                        poster={PortfolioThumbnail2}
                                    />
                                    <div className="last-div"> <p>LOGOS</p> </div>
                                </Link>
                            </div>
                            <div className="video-box video-box-03">
                                <Link href="/portfolio/graphic-design/">
                                    <VideoOptimizer
                                        src="/video/our-portfolio-video-03.mp4"
                                        poster={PortfolioThumbnail3}
                                    />
                                    <div className="last-div"> <p>BRANDING</p> </div>
                                </Link>
                            </div> */}
                        </Slider>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="btn-box text-center mobile">
                                <Link
                                    href="/portfolio"
                                    className="t-btn t-btn-arrow t-btn-arrow-gra"
                                    tabIndex={0}
                                >
                                    View More <Image src={RightArrow} alt="right arrow" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        ) : <span>Loading...</span>



    )
}
