import React from 'react'
import SectionImg1 from '/public/boardline/section-1-left-1.webp'

export default function Section1() {
    return (
        <section className="Boardline-01">
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 col-md-3">
                        <div className="text">
                            <h3>
                                Strategy
                            </h3>
                            <h3>
                                Branding
                            </h3>
                            <h3>
                                UI/UX Design
                            </h3>
                            <h3>
                                Website
                            </h3>
                        </div>
                    </div>
                    <div className="col-lg-9 col-md-9">
                        <div
                            className="text"
                        >
                            <p>
                                Boardline Academy was born from the need to close the learning gap in the HOA management space. To help launch Boardline Academy as the world’s first HOA learning app and LMS, we developed a strategic approach that started with rebranding and creating a polished, professional identity. Our branding efforts focused on modernizing the look and feel of Boardline, while our UI/UX design prioritized an easy-to-use, engaging learning experience. Finally, we built a user-friendly website that showcases the platform’s value for both board members and management professionals, helping them navigate and access the platform with ease.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="row align-items-center">
                    <div className="col-lg-6 col-md-6">
                        <div className="Tool-text">
                            <img
                                src={SectionImg1.src}
                                alt="sec-01-img"
                            />
                            <a href="#" className="t-btn" >
                                TOOLS
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}
