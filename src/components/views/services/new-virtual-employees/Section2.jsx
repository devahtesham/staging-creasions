import React from 'react'

export default function Section2({ achievementsData }) {
    const features = achievementsData?.features || [];

    if (!features || features.length === 0) {
        return null;
    }

    return (
        <section className="sec-02">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="first-row">
                            {features.map((feature, index) => (
                                <div key={index} className="first">
                                    <h3>{feature.title}</h3>
                                    <div dangerouslySetInnerHTML={{ __html: feature.text }} />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
