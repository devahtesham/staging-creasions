import React from 'react'
import SectionImg1 from '/public/clairmont/section-1-left-1.webp'

export default function Section1({ data }) {
    const toolsImg = data?.tools_img || SectionImg1.src
    const toolsLink = data?.tools_link || "#"
    const toolsText = data?.tools_text || "TOOLS"
    const buttonUrl = data?.button_url || "https://www.clairmontcg.com/"
    const buttonText = data?.button_text || "Visit Website"
    const description = data?.description || "Clairmont Capital Group, a Los Angeles-based private equity firm..."

    return (
        <section className="Clairmont-01">
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 col-md-3">
                        <div className="text">
                            {data?.items?.map((item, index) => (
                                <h3 key={index}>{item}</h3>
                            )) || (
                                <>
                                    <h3>Strategy</h3>
                                    <h3>Branding</h3>
                                    <h3>UI/UX Design</h3>
                                    <h3>Website</h3>
                                </>
                            )}
                        </div>
                    </div>
                    <div className="col-lg-9 col-md-9">
                        <div className="text">
                            <div dangerouslySetInnerHTML={{ __html: description }} />
                        </div>
                    </div>
                </div>
                <div className="row align-items-center">
                    <div className="col-lg-6 col-md-6">
                        <div className="Tool-text">
                            <img src={toolsImg} alt="tools" />
                            <a href={toolsLink} className="t-btn">
                                {toolsText}
                            </a>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                        <div className="Visit-text">
                            <a href={buttonUrl} target="_blank" className="t-btn">
                                {buttonText}
                                <i className="fa fa-long-arrow-right" aria-hidden="true" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
