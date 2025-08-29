"use client";
import React from 'react'
import Image from 'next/image'


import HeaderLogo from '/public/Creasions-Logo.webp'
import RightArrow from '/public/right-arrow.webp'
import Link from 'next/link';

export default function HeaderMobile() {
    return (
        <div className="mobile-mega-menu">
            <nav>
                <div className="wrapper">
                    <Link target="_parent" href="/" >
                        <Image src={HeaderLogo} alt="Creasions Logo" layout="responsive" objectFit="contain" />
                    </Link>
                    <input type="radio" name="slider" id="menu-btn" />
                    <input type="radio" name="slider" id="close-btn" />
                    <ul className="nav-links">
                        <label htmlFor="close-btn" className="btn close-btn">
                            <i className="fa fa-times" aria-hidden="true" />
                        </label>
                        <li>
                            <Link target="_parent" href="/"
                                onClick={() => document.getElementById('close-btn').click()}
                            >
                                <span>Home</span>
                            </Link>
                        </li>
                        <li>
                            <Link target="_parent" href="#">
                                <span>About us</span>
                            </Link>
                            <div className="mail-ul fir">
                                <ul className="mega-links">
                                    <li>
                                        <Link target="_parent" href="/about/our-company/"
                                            onClick={() => document.getElementById('close-btn').click()}
                                        >
                                            Our Company
                                        </Link>
                                    </li>
                                    <li>
                                        <Link target="_parent" href="/about/our-partners/"
                                            onClick={() => document.getElementById('close-btn').click()}
                                        >Partners</Link>
                                    </li>
                                    <li>
                                        <Link target="_parent" href="/about/our-mission/"
                                            onClick={() => document.getElementById('close-btn').click()}
                                        >Mission</Link>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li>
                            <Link target="_parent" href="#">
                                <span>Services</span>
                            </Link>
                            <div className="mail-ul">
                                <ul className="mega-links">
                                    <li>
                                        <Link target="_parent" href="/services/website-development-dallas"
                                            onClick={() => document.getElementById('close-btn').click()}
                                        >
                                            Web Development
                                        </Link>
                                    </li>
                                    <li>
                                        <Link target="_parent" href="/services/website-design-dallas"
                                            onClick={() => document.getElementById('close-btn').click()}
                                        >
                                            Web Design
                                        </Link>
                                    </li>
                                    <li>
                                        <Link target="_parent" href="/services/digital-marketing-dallas"
                                            onClick={() => document.getElementById('close-btn').click()}
                                        >
                                            Digital Marketing
                                        </Link>
                                    </li>
                                    <li>
                                        <Link target="_parent" href="/services/software-development-dallas"
                                            onClick={() => document.getElementById('close-btn').click()}
                                        >
                                            {" "}
                                            Software Development
                                        </Link>
                                    </li>
                                    <li>
                                        <Link target="_parent" href="/services/branding-agency-dallas"
                                            onClick={() => document.getElementById('close-btn').click()}
                                        >
                                            Branding
                                        </Link>
                                    </li>
                                    <li>
                                        <Link target="_parent" href="/services/graphic-designing-dallas"
                                            onClick={() => document.getElementById('close-btn').click()}
                                        >
                                            Graphic Design
                                        </Link>
                                    </li>
                                    <li>
                                        <Link target="_parent" href="/services/local-listing-management-dallas"
                                            onClick={() => document.getElementById('close-btn').click()}
                                        >
                                            Local Listing Management
                                        </Link>
                                    </li>
                                    <li>
                                        <Link target="_parent" href="/services/application-development-dallas"
                                            onClick={() => document.getElementById('close-btn').click()}
                                        >
                                            Application Development{" "}
                                        </Link>
                                    </li>
                                    <li>
                                        <Link target="_parent" href="/services/virtual-employees-services-dallas"
                                            onClick={() => document.getElementById('close-btn').click()}
                                        >
                                            Virtual Employees{" "}
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li>
                            <Link target="_parent" href="#">
                                <span>Industry</span>
                            </Link>
                            <div className="mail-ul fir">
                                <ul className="mega-links">
                                    <li>
                                        <Link target="_parent" href="/industry/real-estate-website-services-dallas"
                                            onClick={() => document.getElementById('close-btn').click()}
                                        >
                                            Real Estate
                                        </Link>
                                    </li>
                                    <li>
                                        <Link target="_parent" href="/industry/cleaning-company-website-services-dallas"
                                            onClick={() => document.getElementById('close-btn').click()}
                                        >
                                            Cleaning Company
                                        </Link>
                                    </li>
                                    <li>
                                        <Link target="_parent" href="/industry/beauty-salons-spa-website-services-dallas"
                                            onClick={() => document.getElementById('close-btn').click()}
                                        >
                                            Beauty Salon
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li>
                            <Link target="_parent" href="/case-study"
                                onClick={() => document.getElementById('close-btn').click()}
                            >
                                <span>Case Studies</span>
                            </Link>
                        </li>
                        <li>
                            {/* <Link target="_parent" href="/portfolio/"
                                onClick={() => document.getElementById('close-btn').click()}
                            >
                                <span>Portfolio</span>
                            </Link> */}
                        </li>
                        <div className="t-btn t-btn-arrow ">
                            <Link target="_parent" href="/contact-us/"
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
