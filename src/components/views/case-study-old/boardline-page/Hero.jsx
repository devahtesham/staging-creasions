import React from 'react'

export default function Hero() {
    return (
        <section
            className="Hero-banner"
            style={{
                backgroundImage:
                    "url(/boardline/Hero-bg.webp)"
            }}
        >
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div
                            className="text"
                        >
                            <h5>Boardline Academy</h5>
                            <h1>
                                The Top Learning Hub <br />
                                for HOA Stakeholders.

                            </h1>


                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}
