import React from 'react'
import mobile01 from '/public/baituti/mobile01.png'
import mobile02 from '/public/baituti/mobile02.png'
import mobile03 from '/public/baituti/mobile03.png'
import mobile04 from '/public/baituti/mobile04.png'
import lastsecBg from '/public/baituti/lastsecBg.png'

export default function Section6({ problemSolution, mobileExperience }) {
    const items = problemSolution?.items || []
    
    const defaultItems = [
        {
            title: 'Problem:',
            text: '<p>Although Baituti Home was well established as a leader in luxury interiors...</p>'
        },
        {
            title: 'Solution:',
            text: '<p>We set out to design a digital presence that truly matched Baituti Home\'s identity...</p>'
        }
    ]

    const displayItems = items.length > 0 ? items : defaultItems

    const mobileTitle = mobileExperience?.title || 'Mobile Experience'
    const mobileDescription = mobileExperience?.description || '<p>Since many of their clients browse on the go...</p>'
    const buttonUrl = mobileExperience?.button_url || 'https://www.baitutihome.com/'
    const buttonText = mobileExperience?.button_text || 'Visit Website'
    
    const defaultImages = [mobile01.src, mobile02.src, mobile03.src, mobile04.src]
    const mobileImages = mobileExperience?.images?.length > 0 ? mobileExperience.images : defaultImages

    return (
        <>
        <section className="caseStudySec05" style={{backgroundImage: `url(${lastsecBg.src})`}}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="text">
                            <div className="twoBox">
                                {displayItems.map((item, index) => (
                                    <div key={index} className="contentBox">
                                        <h2>{item.title}</h2>
                                        <div dangerouslySetInnerHTML={{ __html: item.text }} />
                                    </div>
                                ))}
                            </div>
                            <div className="twoBox">
                                <h2>{mobileTitle}</h2>
                                <span className="divider"></span>
                                <div dangerouslySetInnerHTML={{ __html: mobileDescription }} />
                            </div>
                        </div>
                        <div className="imgGrid">
                            {mobileImages.slice(0, 4).map((image, index) => (
                                <img key={index} src={image} alt={`Mobile ${index + 1}`} />
                            ))}
                        </div>
                        <div className="btnBox">
                            <a href={buttonUrl} target='_blank' className="btn t-btn">{buttonText}</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}
