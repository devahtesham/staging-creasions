"use client"
import React, { useEffect, useRef, useState } from 'react'

import Image from 'next/image'
import Link from 'next/link'

import Slider from 'react-slick';


import { syne } from '@/app/layout'

import Achievement from '/public/Achievement-img.png'
import Icon1 from '/public/Icon-1.png'
import Icon2 from '/public/Icon-2.png'
import Icon3 from '/public/Icon-3.png'

import Award1 from '/public/Awards-img-01.png'
import Award2 from '/public/Awards-img-02.png'
import Award3 from '/public/Awards-img-03.png'
import Award4 from '/public/Awards-img-04.png'
import Award5 from '/public/Awards-img-05.webp'
import Award6 from '/public/Awards-img-06.png'

import Partner1 from '/public/Partners-log-01.png'
import Partner2 from '/public/Partners-log-02.png'
import Partner3 from '/public/Partners-log-03.png'
import Partner4 from '/public/Partners-log-04.png'
import Partner5 from '/public/Partners-log-05.png'
import { TypeAnimation } from 'react-type-animation';
import CountUp from 'react-countup';
import { fetchAchievementSection, fetchAchievementSectionIconBox, fetchAchievementLogos } from '@/utils/helper';


export default function Section3() {
    const [startCounting, setStartCounting] = useState(false);
    const ref = useRef();
    const [awardsLogos, setAwardsLogos] = useState([]);
    const [partnersLogos, setPartnersLogos] = useState([]);
    const [iconBoxData, setIconBoxData] = useState([]);
    const [mainSectionData, setMainSectionData] = useState({});



    // effect for fetching hero section banners
    useEffect(() => {
        fetchSectionData()
            .then((data) => {
                console.log('[data]', data);
                setMainSectionData(data.mainSectionData[0]);
                setAwardsLogos(data.awards_logos.map((award)=>{
                    return {
                        image: award.image_path,
                        alt: award.img_alt,
                        link: award.link || "#"
                    }
                }));
                setPartnersLogos(data.partners_logos.map((partner)=>{
                    return {
                        image: partner.image_path,
                        alt: partner.img_alt,
                        link: partner.link || "#"
                    }
                }));
                setIconBoxData(data.iconBox);


            })
            .catch((error) => {
                console.log('[error]', error);
            });
    }, []);


    const fetchSectionData = async () => {
        const requests = {
            mainSectionData: fetchAchievementSection(),
            iconBox: fetchAchievementSectionIconBox(),
            awards_logos: fetchAchievementLogos('Award_logo'),
            partners_logos: fetchAchievementLogos('Partners_logo')
        };

        const results = await Promise.allSettled(Object.values(requests));
        const data = {
            mainSectionData: results[0].status === "fulfilled" ? results[0].value : null,
            iconBox: results[1].status === "fulfilled" ? results[1].value : null,
            awards_logos: results[2].status === "fulfilled" ? results[2].value : null,
            partners_logos: results[3].status === "fulfilled" ? results[3].value : null,
        };

        console.log("Final Data:", data);
        return data;
    }



    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setStartCounting(true);
                    observer.disconnect();
                }
            });
        });

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, []);
    var settings = {
        dots: false,
        arrows: false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear",
        responsive: [
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 4,
                }
            },
            {
                breakpoint: 575,
                settings: {
                    slidesToShow: 3,
                }
            },
        ]

    };

    const settings1 = {
        dots: false,
        infinite: true,
        speed: 2000,
        autoplay: true,
        arrows: false,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplaySpeed: 2000,
        cssEase: "linear"

    };

    const awardImages = [
        {
            image: Award1,
            alt: 'Clutch Badge',
            link: ' https://clutch.co/profile/creasions-digital#highlights',
        },
        {
            image: Award2,
            alt: 'AVA Badge',
            link: '#',
        },
        {
            image: Award3,
            alt: 'Trustpilot',
            link: 'https://www.trustpilot.com/review/creasions.com',
        },
        {
            image: Award4,
            alt: 'Clutch Badge',
            link: 'https://clutch.co/profile/creasions-digital#highlights',
        },
        {
            image: Award5,
            alt: 'BBB Badge',
            link: 'https://www.bbb.org/us/tx/plano/profile/web-design/creasions-0875-91343943',
        },
        {
            image: Award6,
            alt: 'DesignRush',
            link: 'https://www.designrush.com/',
        },
    ];

    const partnersImages = [
        {
            image: Partner1,
            alt: 'auto mattic partner',
            link: '#'
        },
        {
            image: Partner2,
            alt: 'intel partner',
            link: '#'
        },
        {
            image: Partner3,
            alt: 'Fiverr partner',
            link: '#'
        },
        {
            image: Partner4,
            alt: 'semrush partner',
            link: '#'
        },
        {
            image: Partner5,
            alt: 'upwork partner',
            link: 'https://www.upwork.com/agencies/1783925640403681280/'
        }
    ]

    return (
        <section
            className="home-sec-03"
        // style={{ backgroundImage: "url(/top-line-bg.png)" }}
        >
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-12">
                        <div className="text">
                            <h4 className={syne.className}>{mainSectionData.main_heading_1}</h4>
                            <div className="animate-div">

                                <h2 className={syne.className} id="text-animate">
                                    <TypeAnimation
                                        sequence={["Achievement", 2000, "Vision", 2000, "Partners", 2000]}
                                        repeat={Infinity}
                                    />
                                </h2>
                            </div>
                            <p>
                                {mainSectionData.content_para_1}
                            </p>
                        </div>

                    </div>
                    <div className="col-lg-6 col-md-12">
                        <div className="text">
                            <p>
                                {mainSectionData.content_para_2}
                            </p>
                        </div>
                        <div className="three-box-align" ref={ref}>
                            {
                                iconBoxData.map((box, index) => (
                                    <div className="img-box" key={index}>
                                        <Image loading='lazy' src={box?.image_path} alt={box.img_alt} width={56} height={56} />
                                        <h6>{startCounting && <CountUp start={0} end={Number(box?.card_title)} duration={4} />}+ </h6>
                                        <p>{box?.card_content}</p>
                                    </div>
                                ))
                            }

                            {/* <div className="img-box">
                                <Image loading='lazy' src={Icon1} alt="Projects DONE" />
                                <h6>{startCounting && <CountUp start={0} end={4600} duration={4} />}+ </h6>
                                <p>Projects DONE</p>
                            </div>
                            <div className="img-box">
                                <Image loading='lazy' src={Icon2} alt="Happy Clients" />
                                <h6>{startCounting && <CountUp start={0} end={1840} duration={3} />}+ </h6>
                                <p>Happy Clients</p>
                            </div>
                            <div className="img-box">
                                <Image loading='lazy' src={Icon3} alt="Locations" />
                                <h6>{startCounting && <CountUp start={0} end={10} duration={2} />}</h6>
                                <p>Locations</p>
                            </div> */}
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-5 col-md-6">
                        <div className="text logo-text">
                            <p>Awards</p>
                        </div>
                        <div className="main-logo-slider-box">
                            <Slider {...settings} className="logo-slider">
                                {awardsLogos.map((award, index) => (
                                    <div key={index} className="box">
                                        <Link href={award.link} target="_blank">
                                            <Image loading="lazy" src={award.image} alt={award.alt} width={100} height={100} />
                                        </Link>
                                    </div>
                                ))}
                            </Slider>

                        </div>
                    </div>
                    <div className="col-lg-7 col-md-6">
                        <div className="text logo-text">
                            <p>Partners</p>
                        </div>
                        <div className="main-logo-slider-box py-15">
                            <Slider {...settings1} className="logo-slider-02">
                                {partnersLogos.map((partner, index) => (
                                    <div key={index} className="box" >
                                        <Link href={partner.link} target="_blank">
                                            <Image loading="lazy" src={partner.image} alt={partner.alt} width={100} height={100} />
                                        </Link>
                                    </div>
                                ))}
                            </Slider>
                        </div>
                    </div>
                </div>
            </div>
        </section>


    )
}

