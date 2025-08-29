"use client";
import React, { useEffect, useState } from 'react'

import Image from 'next/image'
import Link from 'next/link'

import { syne } from '@/app/layout'
import { fetchServicesWeProvideSection } from '@/utils/helper';

export default function Section4() {
    const tabs = ['Website Development', 'UI/UX Design', 'Digital Marketing', 'Branding', 'Application Development', 'Software Development'];

    const [activeTab, setActiveTab] = useState(0);

    const handleTabClick = (index) => {
        setActiveTab(index);
    };

    const handleClick = (event) => {
        event.preventDefault();
    };


    const [sectionData, setSectionData] = useState({});



    // effect for fetching hero section banners
    useEffect(() => {
        fetchServicesWeProvideSection()
            .then((data) => {
                // console.log('[servicesWeProvide]', data)
                setSectionData([...data])
            })
            .catch(error => {
                console.error('[error]', error)
            })
    }, []);

    // console.log('[sectionData]', sectionData)


    return (
        <section
            className="home-sec-service brading-sec-5 mobile-screen-slider"
            id="services_provide"
        >
            <div className="container">
                <div className="row p-0 border-0">
                    <div className="col-lg-12">
                        <div className="text text-22 text-center">
                            <h2>Services We Provide</h2>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12">
                        <ul className="nav nav-tabs" >
                            {sectionData.length ? sectionData.map((tabItem, index) => (
                                <li key={index} className="nav-item">
                                    <a
                                        className={`nav-link ${activeTab === index ? 'active' : ''}`}
                                        onClick={() => handleTabClick(index)}
                                        role="tab"
                                        aria-selected={activeTab === index}
                                    >
                                        {tabItem?.service_label}
                                    </a>
                                </li>
                            )) : <span>Loading...</span>}
                            {/* {tabs.map((tab, index) => (
                                <li key={index} className="nav-item">
                                    <a
                                        className={`nav-link ${activeTab === index ? 'active' : ''}`}
                                        onClick={() => handleTabClick(index)}
                                        role="tab"
                                        aria-selected={activeTab === index}
                                    >
                                        {tab}
                                    </a>
                                </li>
                            ))} */}
                        </ul>
                        {/* Tab panes */}
                        <div className="tab-content brand-mobile-slider">

                            {
                                sectionData.length ? sectionData.map((tabItem, index) => (
                                    <div key={index} className={`tab-pane ${index === activeTab ? "active show" : ""}`} role="tabpanel">
                                        <div className="row">
                                            {
                                                tabItem?.service_content.map((serviceItem, index) => (
                                                    <div className="col-lg-4 col-md-6">
                                                        <Link
                                                            className="t-btn t-btn-arrow-contact t-btn-arrow"
                                                            href="javascript:void(0)"
                                                            onClick={handleClick}
                                                            value={serviceItem}
                                                            aria-label={serviceItem}
                                                        >
                                                            {serviceItem}
                                                        </Link>
                                                    </div>
                                                ))
                                            }

                                        </div>

                                    </div>
                                ))
                                    : <span>Loading...</span>
                            }

                            {/* {activeTab === 0 && (
                                <div className="tab-pane active show" role="tabpanel">
                                    <div className="row">
                                        <div className="col-lg-4 col-md-6">
                                            <ul className="hom">
                                                <li>
                                                    <Link
                                                        className="t-btn t-btn-arrow-contact t-btn-arrow"
                                                        href="/services/website-development-dallas"
                                                        onClick={handleClick}
                                                        value="Website Development"
                                                        aria-label='Website Development'
                                                    >
                                                        Website Development
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link
                                                        className="t-btn t-btn-arrow-contact t-btn-arrow"
                                                        href="/services/website-development-dallas"
                                                        value="Web Application Development"
                                                        onClick={handleClick}
                                                        aria-label='Web Application Development'
                                                    >
                                                        Web Application Development
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link
                                                        className="t-btn t-btn-arrow-contact t-btn-arrow"
                                                        href="/services/website-development-dallas"
                                                        value="E-commerce Development"
                                                        onClick={handleClick}
                                                        aria-label='E-commerce Development'
                                                    >
                                                        E-commerce Development
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link
                                                        className="t-btn t-btn-arrow-contact t-btn-arrow"
                                                        href="/services/website-development-dallas"
                                                        value="Content Management Systems (CMS)"
                                                        onClick={handleClick}
                                                        aria-label='Content Management Systems (CMS)'
                                                    >
                                                        Content Management Systems (CMS)
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link
                                                        className="t-btn t-btn-arrow-contact t-btn-arrow"
                                                        href="/services/website-development-dallas"
                                                        value="Front-end Development"
                                                        onClick={handleClick}
                                                        aria-label='Front-end Development'
                                                    >
                                                        Front-end Development
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link
                                                        className="t-btn t-btn-arrow-contact t-btn-arrow"
                                                        href="/services/website-development-dallas"
                                                        value="Back-end Development"
                                                        onClick={handleClick}
                                                        aria-label='Back-end Development'
                                                    >
                                                        Back-end Development
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="col-lg-4 col-md-6">
                                            <ul className="hom">
                                                <li>
                                                    <Link
                                                        className="t-btn t-btn-arrow-contact t-btn-arrow"
                                                        href="/services/website-development-dallas"
                                                        value="Database Development"
                                                        onClick={handleClick}
                                                        aria-label='Database Development'
                                                    >
                                                        Database Development
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link
                                                        className="t-btn t-btn-arrow-contact t-btn-arrow"
                                                        href="/services/website-development-dallas"
                                                        value="Web Hosting and Deployment"
                                                    >
                                                        Web Hosting and Deployment
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link
                                                        className="t-btn t-btn-arrow-contact t-btn-arrow"
                                                        href="/services/website-development-dallas"
                                                        value="Mobile App Development"
                                                        aria-label='Mobile App Development'
                                                        onClick={handleClick}
                                                    >
                                                        Mobile App Development
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link
                                                        className="t-btn t-btn-arrow-contact t-btn-arrow"
                                                        href="/services/website-development-dallas"
                                                        value="E-commerce Solutions"
                                                        aria-label='E-commerce Solutions'
                                                        onClick={handleClick}
                                                    >
                                                        E-commerce Solutions
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link
                                                        className="t-btn t-btn-arrow-contact t-btn-arrow"
                                                        href="/services/website-development-dallas"
                                                        value="Web Security Services"
                                                        aria-label='Web Security Services'
                                                        onClick={handleClick}
                                                    >
                                                        Web Security Services
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link
                                                        className="t-btn t-btn-arrow-contact t-btn-arrow"
                                                        href="/services/website-development-dallas"
                                                        value="Performance Optimization"
                                                        aria-label='Performance Optimization'
                                                        onClick={handleClick}
                                                    >
                                                        Performance Optimization
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="col-lg-4 col-md-6">
                                            <ul className="hom">
                                                <li>
                                                    <Link
                                                        className="t-btn t-btn-arrow-contact t-btn-arrow"
                                                        href="/services/website-development-dallas"
                                                        value="Maintenance and Support"
                                                        aria-label='Maintenance and Support'
                                                        onClick={handleClick}
                                                    >
                                                        Maintenance and Support
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link
                                                        className="t-btn t-btn-arrow-contact t-btn-arrow"
                                                        href="/services/website-development-dallas"
                                                        value="API Development and Integration"
                                                        aria-label='API Development and Integration'
                                                        onClick={handleClick}
                                                    >
                                                        API Development and Integration
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link
                                                        className="t-btn t-btn-arrow-contact t-btn-arrow"
                                                        href="/services/website-development-dallas"
                                                        value="Web Analytics"
                                                        aria-label='Web Analytics'
                                                        onClick={handleClick}
                                                    >
                                                        Web Analytics
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link
                                                        className="t-btn t-btn-arrow-contact t-btn-arrow"
                                                        href="/services/website-development-dallas"
                                                        value="Quality Assurance and Testing"
                                                        aria-label='Quality Assurance and Testing'
                                                        onClick={handleClick}
                                                    >
                                                        Quality Assurance and Testing
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link
                                                        className="t-btn t-btn-arrow-contact t-btn-arrow"
                                                        href="/services/website-development-dallas"
                                                        value="Consulting and Strategy"
                                                        aria-label='Consulting and Strategy'
                                                        onClick={handleClick}
                                                    >
                                                        Consulting and Strategy
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            )}
                            {activeTab === 1 && (
                                <div className="tab-pane active show" role="tabpanel">
                                    <div className="row">
                                        <div className="col-lg-4 col-md-6">
                                            <ul className="hom">
                                                <li>
                                                    <Link
                                                        className="t-btn t-btn-arrow-contact t-btn-arrow"
                                                        href="/services/website-design-dallas"
                                                        value="User Research"
                                                        onClick={handleClick}
                                                        aria-label='User Research'
                                                    >
                                                        User Research
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link
                                                        className="t-btn t-btn-arrow-contact t-btn-arrow"
                                                        href="/services/website-design-dallas"
                                                        value="Information Architecture"
                                                        onClick={handleClick}
                                                        aria-label='Information Architecture'
                                                    >
                                                        Information Architecture
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link
                                                        className="t-btn t-btn-arrow-contact t-btn-arrow"
                                                        href="/services/website-design-dallas"
                                                        value="User Interface (UI) Design"
                                                        onClick={handleClick}
                                                        aria-label='User Interface (UI) Design'
                                                    >
                                                        User Interface (UI) Design
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link
                                                        className="t-btn t-btn-arrow-contact t-btn-arrow"
                                                        href="/services/website-design-dallas"
                                                        value="User Experience (UX) Design"
                                                        onClick={handleClick}
                                                        aria-label='User Experience (UX) Design'
                                                    >
                                                        User Experience (UX) Design
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link
                                                        className="t-btn t-btn-arrow-contact t-btn-arrow"
                                                        href="/services/website-design-dallas"
                                                        value="Responsive Design"
                                                        onClick={handleClick}
                                                        aria-label='Responsive Design'
                                                    >
                                                        Responsive Design
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link
                                                        className="t-btn t-btn-arrow-contact t-btn-arrow"
                                                        href="/services/website-design-dallas"
                                                        value="Gamification Design"
                                                        onClick={handleClick}
                                                        aria-label='Gamification Design'
                                                    >
                                                        Gamification Design
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link
                                                        className="t-btn t-btn-arrow-contact t-btn-arrow"
                                                        href="/services/website-design-dallas"
                                                        value="Rapid Prototyping"
                                                        onClick={handleClick}
                                                        aria-label="Gamification Design"
                                                    >
                                                        Rapid Prototyping
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="col-lg-4 col-md-6">
                                            <ul className="hom">
                                                <li>
                                                    <Link
                                                        className="t-btn t-btn-arrow-contact t-btn-arrow"
                                                        href="/services/website-design-dallas"
                                                        value="Usability Testing"
                                                        onClick={handleClick}
                                                        aria-label='Usability Testing'
                                                    >
                                                        Usability Testing
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link
                                                        className="t-btn t-btn-arrow-contact t-btn-arrow"
                                                        href="/services/website-design-dallas"
                                                        value="Accessibility Services"
                                                        onClick={handleClick}
                                                        aria-label='Accessibility Services'
                                                    >
                                                        Accessibility Services
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link
                                                        className="t-btn t-btn-arrow-contact t-btn-arrow"
                                                        href="/services/website-design-dallas"
                                                        value="User Persona Development"
                                                        onClick={handleClick}
                                                        aria-label='User Persona Development'
                                                    >
                                                        User Persona Development
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link
                                                        className="t-btn t-btn-arrow-contact t-btn-arrow"
                                                        href="/services/website-design-dallas"
                                                        value="User Testing and Feedback"
                                                        onClick={handleClick}
                                                        aria-label='User Testing and Feedback'
                                                    >
                                                        User Testing and Feedback
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link
                                                        className="t-btn t-btn-arrow-contact t-btn-arrow"
                                                        href="/services/website-design-dallas"
                                                        value="UI Animation"
                                                        onClick={handleClick}
                                                        aria-label='UI Animation'
                                                    >
                                                        UI Animation
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link
                                                        className="t-btn t-btn-arrow-contact t-btn-arrow"
                                                        href="/services/website-design-dallas"
                                                        value="User-Centered Design (UCD)"
                                                        onClick={handleClick}
                                                        aria-label='User-Centered Design (UCD)'
                                                    >
                                                        User-Centered Design (UCD)
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="col-lg-4 col-md-6">
                                            <ul className="hom">
                                                <li>
                                                    <Link
                                                        className="t-btn t-btn-arrow-contact t-btn-arrow"
                                                        href="/services/website-design-dallas"
                                                        value="Visual Design"
                                                        onClick={handleClick}
                                                        aria-label='Visual Design'
                                                    >
                                                        Visual Design
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link
                                                        className="t-btn t-btn-arrow-contact t-btn-arrow"
                                                        href="/services/website-design-dallas"
                                                        value="Design System Creation"
                                                        onClick={handleClick}
                                                        aria-label='Design System Creation'
                                                    >
                                                        Design System Creation
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link
                                                        className="t-btn t-btn-arrow-contact t-btn-arrow"
                                                        href="/services/website-design-dallas"
                                                        value="Wireframing and Prototyping"
                                                        onClick={handleClick}
                                                        aria-label='Wireframing and Prototyping'
                                                    >
                                                        Wireframing and Prototyping
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link
                                                        className="t-btn t-btn-arrow-contact t-btn-arrow"
                                                        href="/services/website-design-dallas"
                                                        value="UI/UX Consulting"
                                                        onClick={handleClick}
                                                        aria-label='UI/UX Consulting'
                                                    >
                                                        UI/UX Consulting
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link
                                                        className="t-btn t-btn-arrow-contact t-btn-arrow"
                                                        href="/services/website-design-dallas"
                                                        value="Conversion Rate Optimization (CRO)"
                                                        onClick={handleClick}
                                                        aria-label='Conversion Rate Optimization (CRO)'
                                                    >
                                                        Conversion Rate Optimization (CRO)
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            )}
                            {activeTab === 2 && (
                                <div className="tab-pane active show" role="tabpanel">
                                    <div className="row">
                                        <div className="col-lg-4 col-md-6">
                                            <ul className="hom">
                                                <li>
                                                    <Link
                                                        className="t-btn t-btn-arrow-contact t-btn-arrow"
                                                        href="/services/digital-marketing-dallas"
                                                        value="Search Engine Optimization (SEO)"
                                                        onClick={handleClick}
                                                        aria-label='Search Engine Optimization (SEO)'
                                                    >
                                                        Search Engine Optimization (SEO)
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link
                                                        className="t-btn t-btn-arrow-contact t-btn-arrow"
                                                        href="/services/digital-marketing-dallas"
                                                        value="Search Engine Marketing (SEM) / Pay-Per-Click (PPC)"
                                                        onClick={handleClick}
                                                        aria-label='Search Engine Marketing (SEM) / Pay-Per-Click (PPC)'
                                                    >
                                                        Search Engine Marketing (SEM) / PPC
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link
                                                        className="t-btn t-btn-arrow-contact t-btn-arrow"
                                                        href="/services/digital-marketing-dallas"
                                                        value="Social Media Marketing (SMM)"
                                                        onClick={handleClick}
                                                        aria-label='Social Media Marketing (SMM)'
                                                    >
                                                        Social Media Marketing (SMM)
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link
                                                        className="t-btn t-btn-arrow-contact t-btn-arrow"
                                                        href="/services/digital-marketing-dallas"
                                                        value="Content Marketing"
                                                        onClick={handleClick}
                                                        aria-label='Content Marketing'
                                                    >
                                                        Content Marketing
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link
                                                        className="t-btn t-btn-arrow-contact t-btn-arrow"
                                                        href="/services/digital-marketing-dallas"
                                                        value="Email Marketing"
                                                        onClick={handleClick}
                                                        aria-label='Email Marketing'
                                                    >
                                                        Email Marketing
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link
                                                        className="t-btn t-btn-arrow-contact t-btn-arrow"
                                                        href="/services/digital-marketing-dallas"
                                                        value="Reputation Management"
                                                        onClick={handleClick}
                                                        aria-label='Reputation Management'
                                                    >
                                                        Reputation Management
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="col-lg-4 col-md-6">
                                            <ul className="hom">
                                                <li>
                                                    <Link
                                                        className="t-btn t-btn-arrow-contact t-btn-arrow"
                                                        href="/services/digital-marketing-dallas"
                                                        value="Influencer Marketing"
                                                        onClick={handleClick}
                                                        aria-label='Influencer Marketing'
                                                    >
                                                        Influencer Marketing
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link
                                                        className="t-btn t-btn-arrow-contact t-btn-arrow"
                                                        href="/services/digital-marketing-dallas"
                                                        value="Affiliate Marketing"
                                                        onClick={handleClick}
                                                        aria-label='Affiliate Marketing'
                                                    >
                                                        Affiliate Marketing
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link
                                                        className="t-btn t-btn-arrow-contact t-btn-arrow"
                                                        href="/services/digital-marketing-dallas"
                                                        value="Online Public Relations (PR)"
                                                        onClick={handleClick}
                                                        aria-label='Online Public Relations (PR)'
                                                    >
                                                        Online Public Relations (PR)
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link
                                                        className="t-btn t-btn-arrow-contact t-btn-arrow"
                                                        href="/services/digital-marketing-dallas"
                                                        value="Video Marketing"
                                                        onClick={handleClick}
                                                        aria-label='Video Marketing'
                                                    >
                                                        Video Marketing
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link
                                                        className="t-btn t-btn-arrow-contact t-btn-arrow"
                                                        href="/services/digital-marketing-dallas"
                                                        value="Web Analytics and Data Analysis"
                                                        onClick={handleClick}
                                                        aria-label='Web Analytics and Data Analysis'
                                                    >
                                                        Web Analytics and Data Analysis
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link
                                                        className="t-btn t-btn-arrow-contact t-btn-arrow"
                                                        href="/services/digital-marketing-dallas"
                                                        value="Marketing Automation"
                                                        onClick={handleClick}
                                                        aria-label='Marketing Automation'
                                                    >
                                                        Marketing Automation
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link
                                                        className="t-btn t-btn-arrow-contact t-btn-arrow"
                                                        href="/services/digital-marketing-dallas"
                                                        value="Mobile Marketing"
                                                        onClick={handleClick}
                                                        aria-label='Mobile Marketing'
                                                    >
                                                        Mobile Marketing
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="col-lg-4 col-md-6">
                                            <ul className="hom">
                                                <li>
                                                    <Link
                                                        className="t-btn t-btn-arrow-contact t-btn-arrow"
                                                        href="/services/digital-marketing-dallas"
                                                        value="E-commerce Marketing"
                                                        onClick={handleClick}
                                                        aria-label='E-commerce Marketing'
                                                    >
                                                        E-commerce Marketing
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link
                                                        className="t-btn t-btn-arrow-contact t-btn-arrow"
                                                        href="/services/digital-marketing-dallas"
                                                        value="Local SEO and Marketing"
                                                        onClick={handleClick}
                                                        aria-label='Local SEO and Marketing'
                                                    >
                                                        Local SEO and Marketing
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link
                                                        className="t-btn t-btn-arrow-contact t-btn-arrow"
                                                        href="/services/digital-marketing-dallas"
                                                        value="Customer Relationship Management (CRM)"
                                                        onClick={handleClick}
                                                        aria-label='Customer Relationship Management (CRM)'
                                                    >
                                                        Customer Relationship Management (CRM)
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link
                                                        className="t-btn t-btn-arrow-contact t-btn-arrow"
                                                        href="/services/digital-marketing-dallas"
                                                        value="Chatbot Marketing"
                                                        onClick={handleClick}
                                                        aria-label='Chatbot Marketing'
                                                    >
                                                        Chatbot Marketing
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link
                                                        className="t-btn t-btn-arrow-contact t-btn-arrow"
                                                        href="/services/digital-marketing-dallas"
                                                        value="Remarketing and Retargeting"
                                                        onClick={handleClick}
                                                        aria-label='Remarketing and Retargeting'
                                                    >
                                                        Remarketing and Retargeting
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link
                                                        className="t-btn t-btn-arrow-contact t-btn-arrow"
                                                        href="/services/digital-marketing-dallas"
                                                        value="Social Listening"
                                                        onClick={handleClick}
                                                        aria-label='Social Listening'
                                                    >
                                                        Social Listening
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            )}
                            {activeTab === 3 && (
                                <div className="tab-pane active show" role="tabpanel">
                                    <div className="row">
                                        <div className="col-lg-4 col-md-6">
                                            <ul className="hom">
                                                <li>
                                                    <Link
                                                        className="t-btn t-btn-arrow-contact t-btn-arrow"
                                                        href="/services/branding-agency-dallas"
                                                        value="Logo Design"
                                                        onClick={handleClick}
                                                        aria-label='Logo Design'
                                                    >
                                                        Logo Design
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link
                                                        className="t-btn t-btn-arrow-contact t-btn-arrow"
                                                        href="/services/branding-agency-dallas"
                                                        value="Stationary Design"
                                                    >
                                                        Stationary Design
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link
                                                        className="t-btn t-btn-arrow-contact t-btn-arrow"
                                                        href="/services/branding-agency-dallas"
                                                        value="Brochure Design"
                                                        onClick={handleClick}
                                                        aria-label='Brochure Design'
                                                    >
                                                        Brochure Design
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link
                                                        className="t-btn t-btn-arrow-contact t-btn-arrow"
                                                        href="/services/branding-agency-dallas"
                                                        value="Flyer Design"
                                                        onClick={handleClick}
                                                        aria-label='Flyer Design'
                                                    >
                                                        Flyer Design
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link
                                                        className="t-btn t-btn-arrow-contact t-btn-arrow"
                                                        href="/services/branding-agency-dallas"
                                                        value="Flyer Design"
                                                        onClick={handleClick}
                                                        aria-label='Flyer Design'
                                                    >
                                                        Flyer Design
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link
                                                        className="t-btn t-btn-arrow-contact t-btn-arrow"
                                                        href="/services/branding-agency-dallas"
                                                        value="Brand Consultancy"
                                                        onClick={handleClick}
                                                        aria-label='Brand Consultancy'
                                                    >
                                                        Brand Consultancy
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link
                                                        className="t-btn t-btn-arrow-contact t-btn-arrow"
                                                        href="/services/branding-agency-dallas"
                                                        value="Corporate Branding"
                                                        onClick={handleClick}
                                                        aria-label='Corporate Branding'
                                                    >
                                                        Corporate Branding
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="col-lg-4 col-md-6">
                                            <ul className="hom">
                                                <li>
                                                    <Link
                                                        className="t-btn t-btn-arrow-contact t-btn-arrow"
                                                        href="/services/branding-agency-dallas"
                                                        value="Pitch Deck Design"
                                                        onClick={handleClick}
                                                        aria-label='Pitch Deck Design'
                                                    >
                                                        Pitch Deck Design
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link
                                                        className="t-btn t-btn-arrow-contact t-btn-arrow"
                                                        href="/services/branding-agency-dallas"
                                                        value="Social Media Banner Design"
                                                        onClick={handleClick}
                                                        aria-label='Social Media Banner Design'
                                                    >
                                                        Social Media Banner Design
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link
                                                        className="t-btn t-btn-arrow-contact t-btn-arrow"
                                                        href="/services/branding-agency-dallas"
                                                        value="Trade Booth Design"
                                                        onClick={handleClick}
                                                        aria-label='Trade Booth Design'
                                                    >
                                                        Trade Booth Design
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link
                                                        className="t-btn t-btn-arrow-contact t-btn-arrow"
                                                        href="/services/branding-agency-dallas"
                                                        value="Booklet Design"
                                                        onClick={handleClick}
                                                        aria-label='Booklet Design'
                                                    >
                                                        Booklet Design
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link
                                                        className="t-btn t-btn-arrow-contact t-btn-arrow"
                                                        href="/services/branding-agency-dallas"
                                                        value="One-Pager Design"
                                                        onClick={handleClick}
                                                        aria-label='One-Pager Design'
                                                    >
                                                        One-Pager Design
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link
                                                        className="t-btn t-btn-arrow-contact t-btn-arrow"
                                                        href="/services/branding-agency-dallas"
                                                        value="Brand Naming"
                                                        onClick={handleClick}
                                                        aria-label='Brand Naming'
                                                    >
                                                        Brand Naming
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link
                                                        className="t-btn t-btn-arrow-contact t-btn-arrow"
                                                        href="/services/branding-agency-dallas"
                                                        value="Brand Experience Design"
                                                        onClick={handleClick}
                                                        aria-label='Brand Experience Design'
                                                    >
                                                        Brand Experience Design
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="col-lg-4 col-md-6">
                                            <ul className="hom">
                                                <li>
                                                    <Link
                                                        className="t-btn t-btn-arrow-contact t-btn-arrow"
                                                        href="/services/branding-agency-dallas"
                                                        value="E-Book Design"
                                                        onClick={handleClick}
                                                        aria-label='E-Book Design'
                                                    >
                                                        E-Book Design
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link
                                                        className="t-btn t-btn-arrow-contact t-btn-arrow"
                                                        href="/services/branding-agency-dallas"
                                                        value="Print Materials"
                                                        onClick={handleClick}
                                                        aria-label='Print Materials'
                                                    >
                                                        Print Materials
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link
                                                        className="t-btn t-btn-arrow-contact t-btn-arrow"
                                                        href="/services/branding-agency-dallas"
                                                        value="Label and Packaging Design"
                                                        onClick={handleClick}
                                                        aria-label='Label and Packaging Design'
                                                    >
                                                        Label and Packaging Design
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link
                                                        className="t-btn t-btn-arrow-contact t-btn-arrow"
                                                        href="/services/branding-agency-dallas"
                                                        value="Brand Strategy"
                                                        onClick={handleClick}
                                                        aria-label='Brand Strategy'
                                                    >
                                                        Brand Strategy
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link
                                                        className="t-btn t-btn-arrow-contact t-btn-arrow"
                                                        href="/services/branding-agency-dallas"
                                                        value="Brand Identity Design"
                                                        onClick={handleClick}
                                                        aria-label='Brand Identity Design'
                                                    >
                                                        Brand Identity Design
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link
                                                        className="t-btn t-btn-arrow-contact t-btn-arrow"
                                                        href="/services/branding-agency-dallas"
                                                        value="Brand Messaging"
                                                        onClick={handleClick}
                                                        aria-label='Brand Messaging'
                                                    >
                                                        Brand Messaging
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link
                                                        className="t-btn t-btn-arrow-contact t-btn-arrow"
                                                        href="/services/branding-agency-dallas"
                                                        value="Visual Branding"
                                                        onClick={handleClick}
                                                        aria-label='Visual Branding'
                                                    >
                                                        Visual Branding
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            )}
                            {activeTab === 4 && (
                                <div className="tab-pane active show" role="tabpanel">
                                    <div className="row">
                                        <div className="col-lg-4 col-md-6">
                                            <ul className="hom">
                                                <li>
                                                    <Link
                                                        className="t-btn t-btn-arrow-contact t-btn-arrow"
                                                        href="/services/application-development-dallas"
                                                        value="Custom Application Development"
                                                        onClick={handleClick}
                                                        aria-label='Custom Application Development'
                                                    >
                                                        Custom Application Development
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link
                                                        className="t-btn t-btn-arrow-contact t-btn-arrow"
                                                        href="/services/application-development-dallas"
                                                        value="Mobile App Development"
                                                        onClick={handleClick}
                                                        aria-label='Mobile App Development'
                                                    >
                                                        Mobile App Development
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link
                                                        className="t-btn t-btn-arrow-contact t-btn-arrow"
                                                        href="/services/application-development-dallas"
                                                        value="Web Application Development"
                                                        onClick={handleClick}
                                                        aria-label='Web Application Development'
                                                    >
                                                        Web Application Development
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link
                                                        className="t-btn t-btn-arrow-contact t-btn-arrow"
                                                        href="/services/application-development-dallas"
                                                        value="Enterprise Application Development"
                                                        onClick={handleClick}
                                                        aria-label='Enterprise Application Development'
                                                    >
                                                        Enterprise Application Development
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link
                                                        className="t-btn t-btn-arrow-contact t-btn-arrow"
                                                        href="/services/application-development-dallas"
                                                        value="Cloud Application Development"
                                                        onClick={handleClick}
                                                        aria-label='Cloud Application Development'
                                                    >
                                                        Cloud Application Development
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link
                                                        className="t-btn t-btn-arrow-contact t-btn-arrow"
                                                        href="/services/application-development-dallas"
                                                        value="Desktop Application Development"
                                                        onClick={handleClick}
                                                        aria-label='Desktop Application Development'
                                                    >
                                                        Desktop Application Development
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link
                                                        className="t-btn t-btn-arrow-contact t-btn-arrow"
                                                        href="/services/application-development-dallas"
                                                        value="Cross-Platform Development"
                                                        onClick={handleClick}
                                                        aria-label='Cross-Platform Development'
                                                    >
                                                        Cross-Platform Development
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="col-lg-4 col-md-6">
                                            <ul className="hom">
                                                <li>
                                                    <Link
                                                        className="t-btn t-btn-arrow-contact t-btn-arrow"
                                                        href="/services/application-development-dallas"
                                                        value="Progressive Web App (PWA) Development"
                                                        onClick={handleClick}
                                                        aria-label='Progressive Web App (PWA) Development'
                                                    >
                                                        Progressive Web App (PWA) Development
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link
                                                        className="t-btn t-btn-arrow-contact t-btn-arrow"
                                                        href="/services/application-development-dallas"
                                                        value="Microservices Architecture"
                                                        onClick={handleClick}
                                                        aria-label='Microservices Architecture'
                                                    >
                                                        Microservices Architecture
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link
                                                        className="t-btn t-btn-arrow-contact t-btn-arrow"
                                                        href="/services/application-development-dallas"
                                                        value="API Development and Integration"
                                                        onClick={handleClick}
                                                        aria-label='API Development and Integration'
                                                    >
                                                        API Development and Integration
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link
                                                        className="t-btn t-btn-arrow-contact t-btn-arrow"
                                                        href="/services/application-development-dallas"
                                                        value="Database Design and Development"
                                                        onClick={handleClick}
                                                        aria-label='Database Design and Development'
                                                    >
                                                        Database Design and Development
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link
                                                        className="t-btn t-btn-arrow-contact t-btn-arrow"
                                                        href="/services/application-development-dallas"
                                                        value="UI/UX Design for Applications"
                                                        onClick={handleClick}
                                                        aria-label='UI/UX Design for Applications'
                                                    >
                                                        UI/UX Design for Applications
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link
                                                        className="t-btn t-btn-arrow-contact t-btn-arrow"
                                                        href="/services/application-development-dallas"
                                                        value="Quality Assurance and Testing"
                                                        onClick={handleClick}
                                                        aria-label='Quality Assurance and Testing'
                                                    >
                                                        Quality Assurance and Testing
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link
                                                        className="t-btn t-btn-arrow-contact t-btn-arrow"
                                                        href="/services/application-development-dallas"
                                                        value="Migration and Upgrade Services"
                                                        onClick={handleClick}
                                                        aria-label='Migration and Upgrade Services'
                                                    >
                                                        Migration and Upgrade Services
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="col-lg-4 col-md-6">
                                            <ul className="hom">
                                                <li>
                                                    <Link
                                                        className="t-btn t-btn-arrow-contact t-btn-arrow"
                                                        href="/services/application-development-dallas"
                                                        value="Application Maintenance and Support"
                                                        onClick={handleClick}
                                                        aria-label='Application Maintenance and Support'
                                                    >
                                                        Application Maintenance and Support
                                                    </Link>
                                                </li>

                                                <li>
                                                    <Link
                                                        className="t-btn t-btn-arrow-contact t-btn-arrow"
                                                        href="/services/application-development-dallas"
                                                        value="Augmented Reality (AR) Development"
                                                        onClick={handleClick}
                                                        aria-label='Augmented Reality (AR) Development'
                                                    >
                                                        Augmented Reality (AR) Development
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link
                                                        className="t-btn t-btn-arrow-contact t-btn-arrow"
                                                        href="/services/application-development-dallas"
                                                        value="Virtual Reality (VR) Development"
                                                        onClick={handleClick}
                                                        aria-label='Virtual Reality (VR) Development'
                                                    >
                                                        Virtual Reality (VR) Development
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link
                                                        className="t-btn t-btn-arrow-contact t-btn-arrow"
                                                        href="/services/application-development-dallas"
                                                        value="Artificial Intelligence (AI) Integration"
                                                        onClick={handleClick}
                                                        aria-label='Artificial Intelligence (AI) Integration'
                                                    >
                                                        Artificial Intelligence (AI) Integration
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link
                                                        className="t-btn t-btn-arrow-contact t-btn-arrow"
                                                        href="/services/application-development-dallas"
                                                        value="Machine Learning (ML) Integration"
                                                        onClick={handleClick}
                                                        aria-label='Machine Learning (ML) Integration'
                                                    >
                                                        Machine Learning (ML) Integration
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link
                                                        className="t-btn t-btn-arrow-contact t-btn-arrow"
                                                        href="/services/application-development-dallas"
                                                        value="Internet of Things (IoT) Application Development"
                                                        onClick={handleClick}
                                                        aria-label='Internet of Things (IoT) Application Development'
                                                    >
                                                        Internet of Things Application Development
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            )}
                            {activeTab === 5 && (
                                <div className="tab-pane active show" role="tabpanel">
                                    <div className="row">
                                        <div className="col-lg-4 col-md-6">
                                            <ul className="hom">
                                                <li>
                                                    <Link
                                                        className="t-btn t-btn-arrow-contact t-btn-arrow"
                                                        href="/services/software-development-dallas"
                                                        value="Custom Software Development"
                                                        onClick={handleClick}
                                                        aria-label='Custom Software Development'
                                                    >
                                                        Custom Software Development
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link
                                                        className="t-btn t-btn-arrow-contact t-btn-arrow"
                                                        href="/services/software-development-dallas"
                                                        value="Mobile App Development"
                                                        onClick={handleClick}
                                                        aria-label='Mobile App Development'
                                                    >
                                                        Mobile App Development
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link
                                                        className="t-btn t-btn-arrow-contact t-btn-arrow"
                                                        href="/services/software-development-dallas"
                                                        value="Web Application Development"
                                                        onClick={handleClick}
                                                        aria-label='Web Application Development'
                                                    >
                                                        Web Application Development
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link
                                                        className="t-btn t-btn-arrow-contact t-btn-arrow"
                                                        href="/services/software-development-dallas"
                                                        value="Enterprise Software Development"
                                                        onClick={handleClick}
                                                        aria-label='Enterprise Software Development'
                                                    >
                                                        Enterprise Software Development
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link
                                                        className="t-btn t-btn-arrow-contact t-btn-arrow"
                                                        href="/services/software-development-dallas"
                                                        value="Software Product Development"
                                                        onClick={handleClick}
                                                        aria-label='Software Product Development'
                                                    >
                                                        Software Product Development
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link
                                                        className="t-btn t-btn-arrow-contact t-btn-arrow"
                                                        href="/services/software-development-dallas"
                                                        value="Cloud Application Development"
                                                        onClick={handleClick}
                                                        aria-label='Cloud Application Development'
                                                    >
                                                        Cloud Application Development
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link
                                                        className="t-btn t-btn-arrow-contact t-btn-arrow"
                                                        href="/services/software-development-dallas"
                                                        value="DevOps Services"
                                                        onClick={handleClick}
                                                        aria-label='DevOps Services'
                                                    >
                                                        DevOps Services
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="col-lg-4 col-md-6">
                                            <ul className="hom">
                                                <li>
                                                    <Link
                                                        className="t-btn t-btn-arrow-contact t-btn-arrow"
                                                        href="/services/software-development-dallas"
                                                        value="Custom API Development"
                                                        onClick={handleClick}
                                                        aria-label='Custom API Development'
                                                    >
                                                        Custom API Development
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link
                                                        className="t-btn t-btn-arrow-contact t-btn-arrow"
                                                        href="/services/software-development-dallas"
                                                        value="Database Design and Development"
                                                        onClick={handleClick}
                                                        aria-label='Database Design and Development'
                                                    >
                                                        Database Design and Development
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link
                                                        className="t-btn t-btn-arrow-contact t-btn-arrow"
                                                        href="/services/software-development-dallas"
                                                        value="UI/UX Design for Software"
                                                        onClick={handleClick}
                                                        aria-label='UI/UX Design for Software'
                                                    >
                                                        UI/UX Design for Software
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link
                                                        className="t-btn t-btn-arrow-contact t-btn-arrow"
                                                        href="/services/software-development-dallas"
                                                        value="Quality Assurance and Testing"
                                                        onClick={handleClick}
                                                        aria-label='Quality Assurance and Testing'
                                                    >
                                                        Quality Assurance and Testing
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link
                                                        className="t-btn t-btn-arrow-contact t-btn-arrow"
                                                        href="/services/software-development-dallas"
                                                        value="Legacy System Modernization"
                                                        onClick={handleClick}
                                                        aria-label='Legacy System Modernization'
                                                    >
                                                        Legacy System Modernization
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link
                                                        className="t-btn t-btn-arrow-contact t-btn-arrow"
                                                        href="/services/software-development-dallas"
                                                        value="Software Maintenance and Support"
                                                        onClick={handleClick}
                                                        aria-label='Software Maintenance and Support'
                                                    >
                                                        Software Maintenance and Support
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="col-lg-4 col-md-6">
                                            <ul className="hom">
                                                <li>
                                                    <Link
                                                        className="t-btn t-btn-arrow-contact t-btn-arrow"
                                                        href="/services/software-development-dallas"
                                                        value="Custom API Development"
                                                        onClick={handleClick}
                                                        aria-label='Custom API Development'
                                                    >
                                                        Custom API Development
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link
                                                        className="t-btn t-btn-arrow-contact t-btn-arrow"
                                                        href="/services/software-development-dallas"
                                                        value="Database Design and Development"
                                                        onClick={handleClick}
                                                        aria-label='Database Design and Development'
                                                    >
                                                        Database Design and Development
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link
                                                        className="t-btn t-btn-arrow-contact t-btn-arrow"
                                                        href="/services/software-development-dallas"
                                                        value="UI/UX Design for Software"
                                                        onClick={handleClick}
                                                        aria-label='UI/UX Design for Software'
                                                    >
                                                        UI/UX Design for Software
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link
                                                        className="t-btn t-btn-arrow-contact t-btn-arrow"
                                                        href="/services/software-development-dallas"
                                                        value="Quality Assurance and Testing"
                                                        onClick={handleClick}
                                                        aria-label='Quality Assurance and Testing'
                                                    >
                                                        Quality Assurance and Testing
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link
                                                        className="t-btn t-btn-arrow-contact t-btn-arrow"
                                                        href="/services/software-development-dallas"
                                                        value="Legacy System Modernization"
                                                        onClick={handleClick}
                                                        aria-label='Legacy System Modernization'
                                                    >
                                                        Legacy System Modernization
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link
                                                        className="t-btn t-btn-arrow-contact t-btn-arrow"
                                                        href="/services/software-development-dallas"
                                                        value="Software Maintenance and Support"
                                                        onClick={handleClick}
                                                        aria-label='Software Maintenance and Support'
                                                    >
                                                        Software Maintenance and Support
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            )} */}
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}
