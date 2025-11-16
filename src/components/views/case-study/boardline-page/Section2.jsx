import React from 'react'

export default function Section2({ data, timeline }) {
    if (!data) return null
    
    const backgroundImage = data.background_image

    const sections = data.sections || {}
    
    const timelineImage = timeline?.images?.[0]

    return (
        <section
            className="Boardline-02"
            style={{
                backgroundImage: `url(${backgroundImage})`
            }}
        >
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="text">
                            <h2>{data.section_heading}</h2>
                        </div>
                    </div>
                </div>
                <div className="row">
                    {sections.objectives && (
                        <div className="col-lg-6 col-md-12">
                            <div className="list-text">
                                <h4>{sections.objectives.section_heading}</h4>
                                <ul>
                                    {sections.objectives.objectives?.map((item, index) => (
                                        <li key={index}>
                                            <i className="fa-solid fa-circle-check" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    )}
                    {sections.goals && (
                        <div className="col-lg-6 col-md-12">
                            <div className="list-text">
                                <h4>{sections.goals.section_heading}</h4>
                                <ul>
                                    {sections.goals.goals?.map((item, index) => (
                                        <li key={index}>
                                            <i className="fa-solid fa-circle-check" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    )}
                </div>
                <div className="row">
                    {sections.target_audience && (
                        <div className="col-lg-6 col-md-12">
                            <div className="text-bottom">
                                <h4>{sections.target_audience.section_heading}</h4>
                                <div dangerouslySetInnerHTML={{ __html: sections.target_audience.section_text }} />
                            </div>
                        </div>
                    )}
                    {sections.problem_statement && (
                        <div className="col-lg-6 col-md-12">
                            <div className="text-bottom">
                                <h4>{sections.problem_statement.section_heading}</h4>
                                <div dangerouslySetInnerHTML={{ __html: sections.problem_statement.section_text }} />
                            </div>
                        </div>
                    )}
                </div>
                {sections.duration && (
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-12">
                            <div className="text-down">
                                <h4>{sections.duration.section_heading}</h4>
                                <div dangerouslySetInnerHTML={{ __html: sections.duration.section_text }} />
                            </div>
                        </div>
                    </div>
                )}
                {timeline && (
                    <div className="row">
                        <div className="col-lg-12 col-md-12">
                            <div className="text-down text-center">
                                <h4>{timeline.title}</h4>
                            </div>
                        </div>
                        <div className="col-lg-12">
                            <div className="img-bottom">
                                <img className="wow fadeInUp" src={timelineImage} alt="timeline" />
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </section>
    )
}
