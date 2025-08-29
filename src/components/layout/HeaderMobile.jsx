"use client";
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'


import HeaderLogo from '/public/Creasions-Logo.webp'
import RightArrow from '/public/right-arrow.webp'


import FollowUs from '/public/follow-us-img.png'
import Facebook from '/public/facebook.png'
import Instagram from '/public/Instagram.png'
import Twitter from '/public/Twitter.png'
import Youtube from '/public/youtube.webp'


export default function HeaderMobile() {
    return (
        <div className="mobile-mega-menu">
            <nav>
                <div className="wrapper">
                    <Link href="/" >
                        <Image src={HeaderLogo} alt="Creasions Logo" layout="responsive" objectFit="contain" />
                    </Link>
                    <div className="flow-social-links-mobile">
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="main-links-social">
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
                    </div>

                    <input type="radio" name="slider" id="menu-btn" />
                    <input type="radio" name="slider" id="close-btn" />
                    <ul className="nav-links">
                        <label htmlFor="close-btn" className="btn close-btn">
                            <i className="fa fa-times" aria-hidden="true" />
                        </label>
                        <li>
                            <Link href="/" target="_parent"
                                onClick={() => document.getElementById('close-btn').click()}
                            >
                                <span>Home</span>
                            </Link>
                        </li>
                        <li>
                            <Link href="#">
                                <span>About us</span>
                            </Link>
                            <div className="mail-ul fir">
                                <ul className="mega-links">
                                    <li>
                                        <Link href="/about/our-company/"
                                            onClick={() => document.getElementById('close-btn').click()}
                                        >
                                            Our Company
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/about/our-partners/"
                                            onClick={() => document.getElementById('close-btn').click()}
                                        >Partners</Link>
                                    </li>
                                    <li>
                                        <Link href="/about/our-mission/"
                                            onClick={() => document.getElementById('close-btn').click()}
                                        >Mission</Link>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li>
                            <Link href="#">
                                <span>Services</span>
                            </Link>
                            <div className="mail-ul">
                                <ul className="mega-links">
                                    <li>
                                        <Link href="/services/website-development-dallas"
                                            onClick={() => document.getElementById('close-btn').click()}
                                        >
                                            Web Development
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/services/website-design-dallas"
                                            onClick={() => document.getElementById('close-btn').click()}
                                        >
                                            Web Design
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/services/digital-marketing-dallas"
                                            onClick={() => document.getElementById('close-btn').click()}
                                        >
                                            Digital Marketing
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/services/software-development-dallas"
                                            onClick={() => document.getElementById('close-btn').click()}
                                        >
                                            {" "}
                                            Software Development
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/services/branding-agency-dallas"
                                            onClick={() => document.getElementById('close-btn').click()}
                                        >
                                            Branding
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/services/graphic-designing-dallas"
                                            onClick={() => document.getElementById('close-btn').click()}
                                        >
                                            Graphic Design
                                        </Link>
                                    </li>
                                    {/* <li>
                                        <Link href="/services/local-listing-management-dallas"
                                            onClick={() => document.getElementById('close-btn').click()}
                                        >
                                            Local Listing Management
                                        </Link>
                                    </li> */}

                                                            <li>
                                        <Link href="/services/seo-services-dallas"  onClick={() => document.getElementById('close-btn').click()}>
                                        Search Engine Optimization
                                        </Link>
                                    </li>
                                                            <li>
                                        <Link href="/services/social-media-marketing-dallas"  onClick={() => document.getElementById('close-btn').click()}>
                                        Social Media Marketing 
                                        </Link>
                                    </li>
                                                            <li>
                                        <Link href="/services/ecommerce-marketing-dallas"  onClick={() => document.getElementById('close-btn').click()}>
                                        Ecommerce Marketing
                                        </Link>
                                    </li>
                                                            <li>
                                        <Link href="/services/ppc-services-dallas"  onClick={() => document.getElementById('close-btn').click()}>
                                        Search Engine Marketing
                                        </Link>
                                    </li>
                                                            <li>
                                        <Link href="/services/email-marketing-dallas"  onClick={() => document.getElementById('close-btn').click()}>
                                        Email Marketing
                                        </Link>
                                    </li>
                                                            <li>
                                        <Link href="/services/content-marketing-dallas"  onClick={() => document.getElementById('close-btn').click()}>
                                        Content Marketing
                                        </Link>
                                    </li>

                                    <li>
                                        <Link href="/services/listing-service-dallas"  onClick={() => document.getElementById('close-btn').click()}>
                                        Local Listing Management 
                                        </Link>
                                    </li>


                                    <li>
                                        <Link href="/services/internet-marketing-dallas"  onClick={() => document.getElementById('close-btn').click()}>
                                        Internet Marketing
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/services/reputation-management-dallas"  onClick={() => document.getElementById('close-btn').click()}>
                                        Reputation Management
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/services/application-development-dallas"
                                            onClick={() => document.getElementById('close-btn').click()}
                                        >
                                            Application Development{" "}
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/services/virtual-employees-services-dallas"
                                            onClick={() => document.getElementById('close-btn').click()}
                                        >
                                            Virtual Employee Service
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li>
                            <Link href="#">
                                <span>Industry</span>
                            </Link>
                            <div className="mail-ul fir">
                                <ul className="mega-links">
                                    <li>
                                        <Link href="/industry/real-estate-website-services-dallas"
                                            onClick={() => document.getElementById('close-btn').click()}
                                        >
                                            Real Estate
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/industry/cleaning-company-website-services-dallas"
                                            onClick={() => document.getElementById('close-btn').click()}
                                        >
                                            Cleaning Company
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/industry/beauty-salons-spa-website-services-dallas"
                                            onClick={() => document.getElementById('close-btn').click()}
                                        >
                                            Beauty Salon
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li>
                            <Link href="/case-study"
                                onClick={() => document.getElementById('close-btn').click()}
                            >
                                <span>Case Studies</span>
                            </Link>
                        </li>
                        {/* <li>
                            <Link href="/portfolio/"
                                onClick={() => document.getElementById('close-btn').click()}
                            >
                                <span>Portfolio</span>
                            </Link>
                        </li> */}
                        <div className="t-btn t-btn-arrow ">
                            <Link href="/contact-us/" target='_parent'
                                onClick={() => document.getElementById('close-btn').click()}
                            >
                                Contact Us <Image src={RightArrow} alt="Right-Arrow" />
                            </Link>
                        </div>
                    </ul>
                    <label htmlFor="menu-btn" className="btn menu-btn">
                        <i className="fa fa-bars" aria-hidden="true" />
                    </label>
                </div>
            </nav>
        </div>
    )
}
