import React from 'react'

export default function Section05({ data }) {
    const items = data?.items || []
    
    const defaultItems = [
        {
            title: 'Problem:',
            text: '<p>Insurance websites often overwhelm users with complex jargon and cluttered layouts...</p>'
        },
        {
            title: 'Solution:',
            text: '<p>We streamlined the experience, creating an intuitive flow where information is accessible...</p>'
        }
    ]

    const displayItems = items.length > 0 ? items : defaultItems

    return (
        <>
            <section className="secton04">
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
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
