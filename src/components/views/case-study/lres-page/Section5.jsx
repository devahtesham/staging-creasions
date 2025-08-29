import React from 'react';

const Section5 = () => {
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
                            <h2>Solution</h2>
                            <p>
                                In order to enhance the company’s website, we created a robust landing page that 
                                would attract visitors with vibrant colors and appealing visuals. We made the website 
                                more interactive by including various features such as a rental analysis tool and a 
                                filter on the properties to rent page so users can narrow down their specifications. 
                                All these aspects came together to create a dynamic website in which users can gain 
                                the most benefit out of.
                            </p>
                        </div>
                    </div>
                    <div 
                        className="col-lg-6 col-md-12 wow fadeInRight" 
                        data-wow-duration="1s" 
                        style={{ visibility: 'visible', animationDuration: '1s', animationName: 'fadeInRight' }}
                    >
                        <div className="text img-1">
                            <img 
                                src="https://clients.muhammadprojects.com/new-muhammad/wp-content/uploads/2023/08/img-1-1.png" 
                                className="img-fluid" 
                                alt="" 
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Section5;
