import React from 'react'

export default function Section3({ data }) {
    if (!data) return null
    
    const beforeImage = data.before
    
    const afterImage = data.after

    return (
        <section className="Boardline-03">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-12">
                        <div className="text">
                            <h3>Before</h3>
                            <img src={beforeImage} alt="Before" />
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12">
                        <div className="text">
                            <h3>After</h3>
                            <img src={afterImage} alt="After" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
