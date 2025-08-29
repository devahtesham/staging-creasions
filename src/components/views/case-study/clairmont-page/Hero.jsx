import React from 'react'

export default function Hero() {
    return (
        <section
            className="Hero-banner"
            style={{
                backgroundImage:
                    "url(/clairmont/Hero-bg.webp)"
            }}
        >
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div
                            className="text"
                        >
                            <h5>Clairmont Capital Group</h5>
                            <h1>
                                is a Los Angeles-based private <br />
                                equity firm focused exclusively <br />
                                on alternative real assets and <br />
                                specializing in general partnership.
                            </h1>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}
