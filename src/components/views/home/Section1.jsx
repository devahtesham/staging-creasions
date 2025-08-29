"use client"
import { syne } from '@/app/layout'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'

import TabbingImage1 from '/public/tabbing-img-01.png'
import TabbingImage2 from '/public/tabbing-img-02.png'
import TabbingImage3 from '/public/tabbing-img-03.png'
import TabbingImage4 from '/public/tabbing-img-04.png'
import TabbingImage5 from '/public/tabbing-img-05.png'
import TabbingImage6 from '/public/tabbing-img-06.png'

import ExploreBtn from '/public/explore-btn.png'
import Link from 'next/link'

import Slider from 'react-slick';
import { fetchHomeServices } from '@/utils/helper'
export default function Section1() {
    const [activeTab, setActiveTab] = useState('tabs-1');
    const [allServices, setAllServices] = useState([]);
    const [allServicesMobile, setAllServicesMobile] = useState([]);


    // effect for fetching hero section banners
    useEffect(() => {
        fetchHomeServices()
            .then((services) => {
                // console.log('[services]', services)
                setAllServices(services.map((service, index) => ({
                    id: `tabs-${index + 1}`,
                    tab: service.service_label,
                    title: service.content_heading,
                    link: service?.link || "/",
                    image: service.service_img,
                    content: service.service_content,
                    img_alt: service.img_alt,
                })))

                setAllServicesMobile(services.map((service, index) => ({
                    id: `tabs-${index + 1}`,
                    title: service.content_heading,
                    link: service?.link || "/",
                    image: service.service_img,
                    content: service.service_content,
                    img_alt: service.img_alt,
                })))
            })
            .catch(error => {
                console.error('[error]', error)
            })
    }, []);



    const tabs = [
        {
            id: 'tabs-1',
            tab: 'Website Development',
            title: 'Website Development Dallas',
            link: '/services/website-development-dallas',
            image: TabbingImage1,
            content: (
                <>
                    <p>
                        Creasions is a premier <Link href="/services/website-development-dallas/" tabIndex="0">web development dallas</Link> company in the USA, specializing in creating innovative solutions for businesses of all sizes. Our team of experts offers a wide range of services, including digital marketing, branding, software development, and application development.
                    </p>

                    <ul>
                        <li>E-commerce Development</li>
                        <li>Content Management Systems (CMS)</li>
                        <li>WordPress Website Development</li>
                        <li>Front-end Development</li>
                        <li>Back-end Development</li>
                    </ul>
                    <div className="main-design-box">
                        <Image src={TabbingImage1} loading="lazy" alt="Website Development" />
                    </div>
                </>
            )
        },
        {
            id: 'tabs-2', tab: 'Website Design', title: 'Website Design Dallas', link: '/services/website-design-dallas', image: TabbingImage2, content: (
                <>
                    <p>
                        As a leading provider of user interface <Link href="/services/website-design-dallas/">web design dallas </Link> services, Creasions excels in crafting visually appealing and user-friendly digital applications. Our team of highly-skilled professionals possesses intimate knowledge of the latest design trends and best practices, and specializes in developing interfaces that are intuitive, engaging, and easy to navigate.
                    </p>
                    <ul>
                        <li>User Interface (UI) Design</li>
                        <li>User Experience (UX) Design</li>
                        <li>Responsive Design</li>
                        <li>UI Animation</li>
                    </ul>
                    <div className="main-design-box">
                        <Image src={TabbingImage2} loading="lazy" alt="Website Design" />
                    </div>
                </>
            )
        },

        {
            id: 'tabs-3', tab: 'Branding', title: 'Branding Agency Dallas', link: '/services/branding-agency-dallas', image: TabbingImage4, content: (
                <>
                    <p>
                        Creasions is a creative <Link href="/services/branding-agency-dallas/">branding agency dallas</Link> that understands the importance of branding. A strong brand is essential in today&apos;s market, as it can set a company apart from its competitors and provide a cohesive identity for consumers to identify with. That&apos;s why we offer top-notch brand development services with tailored solutions to meet your company&apos;s desired needs.
                    </p>
                    <ul>
                        <li>Logo Design</li>
                        <li>Brand Guide</li>
                        <li>Stationary Design</li>
                        <li>Social Media Design</li>
                    </ul>
                    <div className="main-design-box">
                        <Image src={TabbingImage4} loading="lazy" alt="Branding" />
                    </div>
                </>
            )
        },
        {
            id: 'tabs-4', tab: 'Digital Marketing', title: 'Digital Marketing Dallas', link: '/services/digital-marketing-dallas', image: TabbingImage3, content: (
                <>
                    <p>
                        As the world becomes increasingly digital, a strong online presence is essential for any business to thrive. Creasions, an <Link href="/services/digital-marketing-dallas/">digital advertising dallas</Link>  agency, offers top-notch digital marketing strategies that will help your business stay ahead of the competition. Our digital marketing services are designed to increase your online visibility and help your website rank higher on search engines.
                    </p>
                    <ul>
                        <li>Search Engine Optimization (SEO)</li>
                        <li>Search Engine Marketing (SEM) / Pay-Per-Click (PPC)</li>
                        <li>Social Media Marketing (SMM)</li>
                        <li>E-commerce Marketing</li>
                    </ul>
                    <div className="main-design-box">
                        <Image src={TabbingImage3} loading="lazy" alt="Digital Marketing" />
                    </div>
                </>
            )
        },
        {
            id: 'tabs-5', tab: 'Software Development', title: 'Software Development Dallas', link: '/services/software-development-dallas', image: TabbingImage5, content: (
                <>
                    <p>
                        We are a leading custom <Link href="/services/software-development-dallas/">software development</Link> company that offers top-notch software development services to its clients across various industries. With years of experience in software development, we have developed our reputation as a premier software company in the USA.
                    </p>
                    <ul>
                        <li>Custom Software Development</li>
                        <li>Enterprise Software Development</li>
                        <li>UI/UX Design for Software</li>
                    </ul>
                    <div className="main-design-box">
                        <Image src={TabbingImage5} loading="lazy" alt="Software Development" />
                    </div>
                </>
            )
        },
        {
            id: 'tabs-6', tab: 'Application Development', title: 'Application Development Dallas', link: '/services/application-development-dallas', image: TabbingImage6, content: (
                <>
                    <p>
                        When it comes to mobile <Link href="/services/application-development-dallas/">application development dallas</Link>, Creasions is the go-to company for all your needs. With our expertise in application development, we help you bring your digital vision to life with unparalleled mobile app solutions. Whether you need an iPhone application development or an Android application development, wed&apos;ve got you covered.
                    </p>
                    <ul>
                        <li>Custom Application Development</li>
                        <li>Mobile Application Development</li>
                        <li>Web Application Development</li>
                    </ul>
                    <div className="main-design-box">
                        <Image src={TabbingImage6} loading="lazy" alt="Application Development" />
                    </div>
                </>
            )
        }
    ];

    const mobileTabs = [
        {
            id: 'tabs-1',
            title: 'Website Development Dallas',
            link: '/services/website-development-dallas',
            image: TabbingImage1,
            content: (
                <>
                    <p>
                        Creasions is a premier <Link href="/services/website-development-dallas/" tabIndex="0">web development dallas</Link> company in the USA, specializing in creating innovative solutions for businesses of all sizes. Our team of experts offers a wide range of services, including digital marketing, branding, software development, and application development.
                    </p>
                    <ul>
                        <li>E-commerce Development</li>
                        <li>Content Management Systems (CMS)</li>
                        <li>WordPress Website Development</li>
                        <li>Front-end Development</li>
                        <li>Back-end Development</li>
                    </ul>
                </>
            )
        },
        {
            id: 'tabs-2', title: 'Website Design Dallas', link: '/services/website-design-dallas', image: TabbingImage2, content: (
                <>
                    <p>
                        As a leading provider of user interface <Link href="/services/website-design-dallas/">web design dallas </Link> services, Creasions excels in crafting visually appealing and user-friendly digital applications. Our team of highly-skilled professionals possesses intimate knowledge of the latest design trends and best practices, and specializes in developing interfaces that are intuitive, engaging, and easy to navigate.
                    </p>
                    <ul>
                        <li>User Interface (UI) Design</li>
                        <li>User Experience (UX) Design</li>
                        <li>Responsive Design</li>
                        <li>UI Animation</li>
                    </ul>
                </>
            )
        },

        {
            id: 'tabs-3', title: 'Branding Agency Dallas', link: '/services/branding-agency-dallas', image: TabbingImage4, content: (
                <>
                    <p>
                        Creasions is a creative <Link href="/services/branding-agency-dallas/">branding agency dallas</Link> that understands the importance of branding. A strong brand is essential in today&apos;s market, as it can set a company apart from its competitors and provide a cohesive identity for consumers to identify with. That&apos;s why we offer top-notch brand development services with tailored solutions to meet your company&apos;s desired needs.
                    </p>
                    <ul>
                        <li>Logo Design</li>
                        <li>Brand Guide</li>
                        <li>Stationary Design</li>
                        <li>Social Media Design</li>
                    </ul>
                </>
            )
        },
        {
            id: 'tabs-4', title: 'Digital Marketing Dallas', link: '/services/digital-marketing-dallas', image: TabbingImage3, content: (
                <>
                    <p>
                        As the world becomes increasingly digital, a strong online presence is essential for any business to thrive. Creasions, an <Link href="/services/digital-marketing-dallas/">digital advertising dallas</Link>  agency, offers top-notch digital marketing strategies that will help your business stay ahead of the competition. Our digital marketing services are designed to increase your online visibility and help your website rank higher on search engines.
                    </p>
                    <ul>
                        <li>Search Engine Optimization (SEO)</li>
                        <li>Search Engine Marketing (SEM) / Pay-Per-Click (PPC)</li>
                        <li>Social Media Marketing (SMM)</li>
                        <li>E-commerce Marketing</li>
                    </ul>
                </>
            )
        },
        {
            id: 'tabs-5', title: 'Software Development Dallas', link: '/services/software-development-dallas', image: TabbingImage5, content: (
                <>
                    <p>
                        We are a leading custom <Link href="/services/software-development-dallas/">software development</Link> company that offers top-notch software development services to its clients across various industries. With years of experience in software development, we have developed our reputation as a premier software company in the USA.
                    </p>
                    <ul>
                        <li>Custom Software Development</li>
                        <li>Enterprise Software Development</li>
                        <li>UI/UX Design for Software</li>
                    </ul>
                </>
            )
        },
        {
            id: 'tabs-6', title: 'Application Development Dallas', link: '/services/application-development-dallas', image: TabbingImage6, content: (
                <>
                    <p>
                        When it comes to mobile <Link href="/services/application-development-dallas/">application development dallas</Link>, Creasions is the go-to company for all your needs. With our expertise in application development, we help you bring your digital vision to life with unparalleled mobile app solutions. Whether you need an iPhone application development or an Android application development, wed&apos;ve got you covered.
                    </p>
                    <ul>
                        <li>Custom Application Development</li>
                        <li>Mobile Application Development</li>
                        <li>Web Application Development</li>
                    </ul>
                </>
            )
        }
    ];

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                },
            },
        ],
    };




    return (
        <section
            className="home-sec-01"
        >
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="text text-center">
                            <h2 className={syne.className}>Our Services</h2>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-5 col-md-12">
                        <ul className="nav nav-tabs" >
                            {/* {tabs.map(tab => (
                                <li className="nav-item" key={tab.id}>
                                    <button
                                        className={`nav-link ${activeTab === tab.id ? 'active' : ''}`}
                                        onClick={() => setActiveTab(tab.id)}
                                        type="button"
                                        role="tab"
                                    >
                                        {tab.tab.toUpperCase()}
                                    </button>
                                </li>
                            ))} */}
                            {allServices.map(tab => (
                                <li className="nav-item" key={tab.id}>
                                    <button
                                        className={`nav-link ${activeTab === tab.id ? 'active' : ''}`}
                                        onClick={() => setActiveTab(tab.id)}
                                        type="button"
                                        role="tab"
                                    >
                                        {tab.tab.toUpperCase()}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="col-lg-7 col-md-12">
                        <div className="tab-content">
                            {allServices.map((tab) => {
                                // console.log('tab', tab)
                                return (
                                    <div
                                        key={tab.id}
                                        className={`tab-pane ${activeTab === tab.id ? 'active' : ''}`}
                                        id={tab.id}
                                        role="tabpanel"
                                    >
                                        <div className="text" test={tab.image}>
                                            <h2 className={syne.className}>{tab.title}</h2>
                                            <div
                                                dangerouslySetInnerHTML={{ __html: tab.content }}
                                            />
                                            <div className="main-design-box">
                                                <Image src={tab?.image} loading="lazy" alt={tab.img_alt} width={666} height={491} />
                                            </div>
                                            <div className="btn-box">
                                                <Link href={tab.link} className="beyond-btn">
                                                    <Image src={ExploreBtn} alt="Explore" />
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                )
                            }

                            )}
                        </div>
                    </div>
                </div>
                <div className="mobile-slick-slider">
                    <Slider {...settings}>
                        {/* Slide 1 */}
                        {allServicesMobile.map(tab => (
                            <div key={tab.id} className="slick-slide">
                                <div className="tab-pane">
                                    <div className="main-design-box">
                                        <Link href={tab.link} className="beyond-btn">
                                            <Image src={tab.image} alt={tab.title} width={416} height={232} className="img-fluid" loading='lazy' />
                                        </Link>
                                    </div>

                                    <div className="text">
                                        <h2>{tab.title}</h2>
                                        <div
                                                dangerouslySetInnerHTML={{ __html: tab.content }}
                                            />
                                    </div>
                                </div>
                            </div>
                        ))}
                        {/* {mobileTabs.map(tab => (
                            <div key={tab.id} className="slick-slide">
                                <div className="tab-pane">
                                    <div className="main-design-box">
                                        <Link href={tab.link} className="beyond-btn">
                                            <Image src={tab.image} alt={tab.title} width={416} height={232} className="img-fluid" loading='lazy' />
                                        </Link>
                                    </div>

                                    <div className="text">
                                        <h2>{tab.title}</h2>
                                        {tab.content}
                                    </div>
                                </div>
                            </div>
                        ))} */}
                    </Slider>
                </div>
            </div>
        </section>
    )
}
