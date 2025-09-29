import React from 'react'

export default function Section2({ standOutData }) {
    return (
        <section className="web-sec-2 web-design-2">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="text">
                            <h2>
                                {standOutData?.section_heading || "Look Professional With An Award-Winning Full-Service Best Branding"}
                            </h2>
                            <div dangerouslySetInnerHTML={{ 
                              __html: standOutData?.section_text || 
                              "Welcome to Logo Mogicions a full-service agency where we shape the future of your brand. As a leading company in brand design, we craft visual elements, design ideas and solutions that enhance your brand identity globally. Our powerful and influential digital brand development approach is personalized to bring into line with your business goals, pushing your brand towards extraordinary success." 
                            }} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
