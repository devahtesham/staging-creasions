"use client";
import Image from 'next/image'
import Link from 'next/link'
// import scroll Link as ScrollLink
import { Link as ScrollLink } from 'react-scroll'

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { syne } from '@/app/layout';



import BackgroundGIF from '/public/banner.gif';

import RightArrow from '/public/right-arrow.webp';

import HeroBannerTextImage from '/public/hero-banner-text.webp';
import HeroBannerTextImage2 from '/public/hero-banner-text-02.png';
import HeroBannerTextImage3 from '/public/hero-banner-text-03.png';

import ScrollDownCircle from '/public/Scrol-Down-Circle.png';
import ScrollDownMouse from '/public/Scrol-Down-Mouse.png';
import VideoOptimizer from '@/components/ui/VideoOptimizer';
import { use, useEffect, useRef, useState } from 'react';

import HeroThumbnail from '/public/hero-banner.webp'

import { useLenis } from '@/components/ui/LenisSmoothScroll';

import { fetchHomeBanners, transformButtonUrl } from '@/utils/helper';

export default function Hero({ banners }) {
    const lenis = useLenis();


    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element && lenis.current) {
            lenis.current.scrollTo(element, {
                duration: 3,
            });
        }
    };

    const [offsetValue, setOffsetValue] = useState(250);
    const [isOffsetClicked, setIsOffsetClicked] = useState(false);
    const [allBanners, setAllBanners] = useState([]);



    // effect for fetching hero section banners
    useEffect(() => {
        fetchHomeBanners()
            .then((banners) => {
                // console.log('[banners]',banners)
                setAllBanners(banners)
            })
            .catch(error => {
                console.error('[error]', error)
            })
    }, []);


   


    const handleClick = () => {
        setIsOffsetClicked(!isOffsetClicked);
        setOffsetValue(isOffsetClicked ? 250 : -100);
    };

    var heroSlider = {
        dots: true,
        infinite: true,
        speed: 500,
        autoplay: true,
        fade: true,
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
    };



    return (
        <section
            className="home-hero-banner"
        // style={{ backgroundImage: `url(/banner.gif)` }}
        >
            <div className="banner-video">
                <VideoOptimizer
                    src="/video/final-banner-1920-X-1080-1.mp4"
                    poster={HeroThumbnail}
                />
            </div>


            <div className="container">

                <div className="row hero-slider">
                    <Slider {...heroSlider}>
                        {
                            allBanners.length > 0 && allBanners.map((banner) => (
                                <div className="col-md-12" key={banner.id}>
                                    <div className="text text-center">
                                        <h1 className={syne.className}>
                                            {banner?.main_heading?.split(" ").slice(0, 3).join(" ")}
                                            <span style={{ paddingLeft: 10 }}>
                                                <Image width={205} height={60} src={banner?.banner_img} alt={banner?.img_alt} loading='lazy' />
                                            </span>
                                            <br />
                                            {banner?.main_heading?.split(" ").slice(3).join(" ")}
                                        </h1>
                                        <p>
                                            {banner?.content}
                                        </p>
                                        <Link href={transformButtonUrl(banner?.button_link)} className="t-btn t-btn-arrow">
                                            {banner?.button_text} <Image src={RightArrow} alt="right arrow" />
                                        </Link>
                                    </div>
                                </div>
                            ))
                        }

                        {/* <div className="col-md-12">

                            <div className="text text-center">
                                <h1 className={syne.className}>
                                    The Ultimate {""}
                                    <span>
                                        Website <Image src={HeroBannerTextImage} alt="creasions hero banner 1" loading='lazy' />
                                        Development Company In Dallas
                                    </span>
                                </h1>
                                <p>
                                    Welcome to Creasions, your trusted <Link href="/services/website-development-dallas/" tabIndex="0">website development dallas</Link> provider. Our experienced team specializes in creating custom websites, redesigning existing ones, and offering tailored website development packages to meet your specific needs. Whether you&apos;re looking for a fresh web design or advanced development solutions, we have the skills and expertise to deliver exceptional results for your business in Dallas.</p>
                                <Link href="/services/website-development-dallas" className="t-btn t-btn-arrow">
                                    Get Started <Image src={RightArrow} alt="right arrow" />
                                </Link>
                            </div>
                        </div>
                        <div className="col-md-12">

                            <div className="text text-center">

                                <h1 className={syne.className}>
                                    Creative {""}
                                    <span>
                                        Website <Image src={HeroBannerTextImage2} alt="creasions hero banner 2" loading='lazy' />
                                        <br />
                                        Design Company In Dallas
                                    </span>
                                </h1>
                                <p>At Creasions, we understand the importance of a website as a powerful tool for brand representation. As one of the best <Link href="/services/website-design-dallas/" tabIndex="0">web design dallas</Link> companies, we tailor our services to your unique preferences, delivering distinctive and visually appealing websites. Our comprehensive website design packages cover everything from the initial concept to seamless implementation, ensuring your site operates flawlessly.</p>

                                <Link href="/services/website-design-dallas" className="t-btn t-btn-arrow">
                                    Get Started <Image src={RightArrow} alt="right arrow" />
                                </Link>
                            </div>
                        </div> */}
                    </Slider>
                </div>
            </div>
            <div className="scroll-down-box">
                <div className="two-imges">

                    <Link href="#form-sec" to='form-sec' offset={offsetValue} onClick={() => scrollToSection('form-sec')} smooth={true} duration={3000}>
                        <span className="sr-only">Scroll down to learn more</span>

                        <Image
                            className="Scrol-Down-Circle rotating-img"
                            src={ScrollDownCircle}
                            alt="creasions-circle-scroll"
                        />


                        <Image
                            className="Scrol-Down-Mouse"
                            src={ScrollDownMouse}
                            alt="creasions-scroll-down"
                        />
                    </Link>
                </div>
            </div>
        </section>

    )
}
