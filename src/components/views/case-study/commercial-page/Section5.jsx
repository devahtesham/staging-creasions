import React from 'react'

export default function Section5({ data }) {
    const items = data?.items || []
    
    // Default items if no data
    const defaultItems = [
        {
            title: 'Problem:',
            text: '<p>Many individuals and businesses struggle to navigate the complexities of real estate investment and financial planning...</p>'
        },
        {
            title: 'Solution:',
            text: '<p>Our team provides expert advisory services designed to simplify the process and maximize returns...</p>'
        }
    ]

    const displayItems = items.length > 0 ? items.map(item => {
        // Extract title from keys (0-7 or 0-8 contain letters)
        const titleChars = Object.keys(item).filter(key => !isNaN(key)).map(key => item[key])
        const title = titleChars.join('')
        return { title, text: item.text }
    }) : defaultItems

    return (
        <>
        <section className="commercial04">
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
