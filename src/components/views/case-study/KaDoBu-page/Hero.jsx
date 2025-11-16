import React from 'react'

export default function Hero({ data }) {
    const title = data?.title || 'KaDoBu & Company'
    const subtitle = data?.subtitle || 'Strategic Visionaries Growth Pioneers Driving Success'
    
    return (
        <section className="inner-title" style={{ background: 'linear-gradient(0deg, #00000000 0%, #130A2C 100%)' }}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="heading">
                            <h2 dangerouslySetInnerHTML={{ __html: title }} />
                            <h5>{subtitle}</h5>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
