import React from 'react'

export default function Section2({ achievementsData }) {
    // Fallback to default values if achievementsData is not available
    const features = achievementsData?.features || []

    return (
        <section className="sec-02">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="first-row">
                            {features.map((feature, index) => (
                                <div key={index} className="first">
                                    <h3>{feature.title}</h3>
                                    <div dangerouslySetInnerHTML={{ __html: feature.content }} />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
