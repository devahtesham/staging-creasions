import React from 'react';

export default function Section3({ data }) {
    const kicker = data?.kicker || 'Wireframing'
    const title = data?.title || 'From Concept to Approval'
    const description = data?.description || '<p>Before bringing KaDoBu\'s website to life, we designed wireframes...</p>'
    const wireframeBackground = data?.wireframe_background?.[0] || '/kadobu/kadobu-sec03-wireframe.png'

    return (
        <section className="KaDoBu-03" style={{ background: '#080411', color: '#fff' }}>
            <div className="container" style={{ padding: '110px 0'}}>
                <div className="row mb-4 align-items-center">
                    <div className="col-md-6" >
                        <h6>{kicker}</h6>
                        <h3>{title}</h3>
                    </div>
                    <div className="col-md-6">
                        <div dangerouslySetInnerHTML={{ __html: description }} />
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-12">
                    <div 
                        className="wireframe-background" 
                        style={{ 
                            backgroundImage: wireframeBackground ? `url(${wireframeBackground})` : undefined 
                        }}
                    />
                </div>
            </div>
        </section>
    );
}
