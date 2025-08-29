import React from 'react';

const Section6 = () => {
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
                            <h2>Website Layout</h2>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div 
                        className="col-lg-4 col-md-6 wow fadeInLeft" 
                        data-wow-duration="1s" 
                        style={{ visibility: 'visible', animationDuration: '1s', animationName: 'fadeInLeft' }}
                    >
                        <div className="text web web-1">
                            <img 
                                src="https://clients.muhammadprojects.com/new-muhammad/wp-content/uploads/2023/08/web-1-3.png" 
                                className="img-fluid" 
                                alt="" 
                            />
                        </div>
                    </div>

                    <div 
                        className="col-lg-4 col-md-6 wow fadeInUp" 
                        data-wow-duration="1s" 
                        style={{ visibility: 'visible', animationDuration: '1s', animationName: 'fadeInUp' }}
                    >
                        <div className="text web web-2">
                            <img 
                                src="https://clients.muhammadprojects.com/new-muhammad/wp-content/uploads/2023/08/web-2-3.png" 
                                className="img-fluid" 
                                alt="" 
                            />
                        </div>
                    </div>

                    <div 
                        className="col-lg-4 col-md-6 wow fadeInRight" 
                        data-wow-duration="1s" 
                        style={{ visibility: 'visible', animationDuration: '1s', animationName: 'fadeInRight' }}
                    >
                        <div className="text web web-3">
                            <img 
                                src="https://clients.muhammadprojects.com/new-muhammad/wp-content/uploads/2023/08/web-3-3.png" 
                                className="img-fluid" 
                                alt="" 
                            />
                        </div>
                    </div>
                </div>

                <div 
                    className="row text-center wow fadeInUp" 
                    data-wow-duration="2s" 
                    style={{ visibility: 'visible', animationDuration: '2s', animationName: 'fadeInUp' }}
                >
                    <a 
                        href="https://mylres.com/" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="t-btn t-btn-b"
                    >
                        Visit Live Site
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Section6;
