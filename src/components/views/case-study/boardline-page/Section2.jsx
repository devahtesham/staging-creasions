import React from 'react'

import section2_1_mobile from "/public/boardline/section-2-1.webp"
import section2_1 from "/public/boardline/section-2-1-mobile.webp"

export default function Section2() {
    return (
        <section
            className="Boardline-02"
            style={{
                backgroundImage:
                    "url(/boardline/section-2Bg.webp)"
            }}
        >
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="text">
                            <h2>
                                Project Overview
                            </h2>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-6 col-md-12">
                        <div className="list-text">
                            <h4>
                                Project Objectives
                            </h4>
                            <ul>
                                <li>
                                    <i className="fa-solid fa-circle-check" />
                                    Rebrand Boardline Academy with a modern, professional look.
                                </li>
                                <li>
                                    <i className="fa-solid fa-circle-check" />
                                    Develop a seamless user interface for the learning platform.
                                </li>
                                <li>
                                    <i className="fa-solid fa-circle-check" />
                                    Build a website that effectively communicates Boardline&apos;s offerings.
                                </li>
                                <li>
                                    <i className="fa-solid fa-circle-check" />
                                    Ensure the platform is easy to navigate for both board members and management professionals.
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12">
                        <div className="list-text">
                            <h4>
                                Project Goals
                            </h4>
                            <ul>
                                <li>
                                    <i className="fa-solid fa-circle-check" />
                                    Increase user satisfaction and engagement with the platform.
                                </li>
                                <li>
                                    <i className="fa-solid fa-circle-check" />
                                    Attract more board members and management professionals to use the HOA LMS.
                                </li>
                                <li>
                                    <i className="fa-solid fa-circle-check" />
                                    Establish Boardline Academy as the leading provider of HOA training solutions.
                                </li>
                                <li>
                                    <i className="fa-solid fa-circle-check" />
                                    Optimize the learning experience with user-friendly design and features.
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-6 col-md-12">
                        <div className="text-bottom">
                            <h4>
                                Target Audience
                            </h4>
                            <p>
                                The primary audience for Boardline Academy includes HOA board members and management professionals who are seeking easy, accessible training to improve their performance and governance skills. These individuals are looking for a platform that simplifies learning and offers valuable insights for HOA management.
                            </p>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12">
                        <div className="text-bottom">
                            <h4>
                                Problem Statement
                            </h4>
                            <p>
                                The original Boardline Institute didn&apos;t meet the training needs of staff or board members, as evidenced by low satisfaction rates. Customers repeatedly requested a more intuitive and accessible board training solution, leading to the creation of Boardline Academy as a comprehensive learning platform. The challenge was to develop a modern, user-friendly app that significantly improved the learning experience and satisfaction.

                            </p>
                        </div>
                    </div>
                </div>
                <div className="row align-items-center">
                    <div className="col-lg-6 col-md-12">
                        <div className="text-down">
                            <h4>
                                Project Duration
                            </h4>
                            <p>
                                The project, from rebranding to website development and platform launch, was completed within 16 weeks. This timeline allowed for in-depth feedback from board members and management professionals to ensure the platform met their needs.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div class="col-lg-12 col-md-12"><div class="text-down text-center"><h4>Project Timeline</h4></div></div>

                    <div className="col-lg-12">
                        <div className="img-bottom">
                            <img className="wow fadeInUp" src={section2_1.src}/>
                            <img className="mobile" data-wow-delay="0.5s" src={section2_1_mobile.src} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}
