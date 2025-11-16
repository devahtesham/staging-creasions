import React from 'react';

const Section5 = ({ data }) => {
    const title = data?.title || 'Solution'
    const text = data?.text || '<p>In order to enhance the company\'s website, we created a robust landing page...</p>'
    const image = data?.image || 'https://clients.muhammadprojects.com/new-muhammad/wp-content/uploads/2023/08/img-1-1.png'

    return (
        <section className="sec-05">
            <div className="container">
                <div className="row align-items-center">
                    <div 
                        className="col-lg-6 col-md-12 wow fadeInLeft" 
                        data-wow-duration="1s" 
                        style={{ visibility: 'visible', animationDuration: '1s', animationName: 'fadeInLeft' }}
                    >
                        <div className="text">
                            <h2>{title}</h2>
                            <div dangerouslySetInnerHTML={{ __html: text }} />
                        </div>
                    </div>
                    <div 
                        className="col-lg-6 col-md-12 wow fadeInRight" 
                        data-wow-duration="1s" 
                        style={{ visibility: 'visible', animationDuration: '1s', animationName: 'fadeInRight' }}
                    >
                        <div className="text img-1">
                            <img 
                                src={image} 
                                className="img-fluid" 
                                alt="Solution" 
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Section5;
