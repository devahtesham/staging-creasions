import React from 'react'


export default function Section1({ data }) {
    if (!data) return null
    
    const toolImage = data.tool_image

    return (
        <section className="Boardline-01">
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 col-md-3">
                        <div className="text">
                            {data.items?.map((item, index) => (
                                <h3 key={index}>{item}</h3>
                            ))}
                        </div>
                    </div>
                    <div className="col-lg-9 col-md-9">
                        <div className="text">
                            <div dangerouslySetInnerHTML={{ __html: data.description }} />
                        </div>
                    </div>
                </div>
                <div className="row align-items-center">
                    <div className="col-lg-6 col-md-6">
                        <div className="Tool-text">
                            <img
                                src={toolImage}
                                alt="tools"
                            />
                            <a href={data.tools_link || '#'} className="t-btn">
                                {data.tools_text || 'TOOLS'}
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
