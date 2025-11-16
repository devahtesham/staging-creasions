import React from 'react';

const Section3 = ({ data }) => {
    const title = data?.title || 'Introduction and Problem'
    const text = data?.text || '<p>LRES is a property management company offering clients with services to rent their property...</p>'

    return (
        <section 
            className="sec-03 wow fadeIn" 
            style={{ visibility: 'visible', animationName: 'fadeIn' }}
        >
            <div className="container">
                <div className="row text-center">
                    <div 
                        className="col-md-12 wow fadeInUp" 
                        data-wow-duration="1s" 
                        style={{ visibility: 'visible', animationDuration: '1s', animationName: 'fadeInUp' }}
                    >
                        <div className="text">
                            <h2>{title}</h2>
                            <div dangerouslySetInnerHTML={{ __html: text }} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Section3;
