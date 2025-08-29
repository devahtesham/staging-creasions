import React from 'react';

const Section4 = () => {
    return (
        <section 
            className="sec-04 wow fadeIn" 
            style={{ visibility: 'visible', animationName: 'fadeIn' }}
        >
            <img 
                src="https://clients.muhammadprojects.com/new-muhammad/wp-content/uploads/2023/08/bg-2.png" 
                className="img-fluid bg-2" 
                alt="" 
            />
            <div className="container-fluid">
                <div className="row align-items-center">
                    <div 
                        className="col-md-6 pl-0 wow fadeInLeft" 
                        data-wow-duration="1s" 
                        style={{ visibility: 'visible', animationDuration: '1s', animationName: 'fadeInLeft' }}
                    >
                        <img 
                            src="https://clients.muhammadprojects.com/new-muhammad/wp-content/uploads/2023/08/tap-2-1.png" 
                            className="img-fluid tap-2" 
                            alt="" 
                        />
                    </div>
                    <div 
                        className="col-md-6 wow fadeInRight" 
                        data-wow-duration="1s" 
                        style={{ visibility: 'visible', animationDuration: '1s', animationName: 'fadeInRight' }}
                    >
                        <div className="text">
                            <h3>A leader in Central Florida’s</h3>
                            <h2>
                                Property Management<br /> Market
                            </h2>
                            <p>
                                dedicated to providing owners and tenants the most profitable opportunities and best customer service.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Section4;
