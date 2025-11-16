import React from 'react';

const Section6 = ({ data }) => {
    const title = data?.title || 'Website Layout'
    const images = data?.images || [
        'https://clients.muhammadprojects.com/new-muhammad/wp-content/uploads/2023/08/web-1-3.png',
        'https://clients.muhammadprojects.com/new-muhammad/wp-content/uploads/2023/08/web-2-3.png',
        'https://clients.muhammadprojects.com/new-muhammad/wp-content/uploads/2023/08/web-3-3.png'
    ]
    const buttonUrl = data?.button_url || 'https://mylres.com/'
    const buttonText = data?.button_text || 'Visit Live Site'

    const animationClasses = ['fadeInLeft', 'fadeInUp', 'fadeInRight']

    return (
        <section className="sec-06">
            <div className="container">
                <div className="row text-center">
                    <div 
                        className="col-md-12 wow fadeInUp" 
                        data-wow-duration="1s" 
                        style={{ visibility: 'visible', animationDuration: '1s', animationName: 'fadeInUp' }}
                    >
                        <div className="text">
                            <h2>{title}</h2>
                        </div>
                    </div>
                </div>

                <div className="row">
                    {images.slice(0, 3).map((image, index) => (
                        <div 
                            key={index}
                            className={`col-lg-4 col-md-6 wow ${animationClasses[index]}`} 
                            data-wow-duration="1s" 
                            style={{ visibility: 'visible', animationDuration: '1s', animationName: animationClasses[index] }}
                        >
                            <div className={`text web web-${index + 1}`}>
                                <img 
                                    src={image} 
                                    className="img-fluid" 
                                    alt={`Website Layout ${index + 1}`} 
                                />
                            </div>
                        </div>
                    ))}
                </div>

                <div 
                    className="row text-center wow fadeInUp" 
                    data-wow-duration="2s" 
                    style={{ visibility: 'visible', animationDuration: '2s', animationName: 'fadeInUp' }}
                >
                    <a 
                        href={buttonUrl} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="t-btn t-btn-b"
                    >
                        {buttonText}
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Section6;
