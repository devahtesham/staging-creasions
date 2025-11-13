import React from 'react';

const Section3 = () => {
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
                            <h2>Introduction and Problem</h2>
                            <p>
                                LRES is a property management company offering clients with services to rent their 
                                property as well as find properties that are available to rent. When the company 
                                came to us, their website was dull and lacked life. Furthermore, it was difficult 
                                to navigate and lacked structure. It lacked content or any point of interest and 
                                did not provide much for visitors viewing the website.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Section3;
