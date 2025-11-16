import React from 'react';

const Section4 = ({ data }) => {
    const bgImage = data?.bg_image || 'https://clients.muhammadprojects.com/new-muhammad/wp-content/uploads/2023/08/bg-2.png'
    const leftImage = data?.left_image || 'https://clients.muhammadprojects.com/new-muhammad/wp-content/uploads/2023/08/tap-2-1.png'
    const kicker = data?.kicker || "A leader in Central Florida's"
    const headline = data?.headline || 'Property Management Market'
    const text = data?.text || '<p>dedicated to providing owners and tenants the most profitable opportunities and best customer service.</p>'

    return (
        <section 
            className="sec-04 wow fadeIn" 
            style={{ visibility: 'visible', animationName: 'fadeIn' }}
        >
            <img 
                src={bgImage} 
                className="img-fluid bg-2" 
                alt="Background" 
            />
            <div className="container-fluid">
                <div className="row align-items-center">
                    <div 
                        className="col-md-6 pl-0 wow fadeInLeft" 
                        data-wow-duration="1s" 
                        style={{ visibility: 'visible', animationDuration: '1s', animationName: 'fadeInLeft' }}
                    >
                        <img 
                            src={leftImage} 
                            className="img-fluid tap-2" 
                            alt="Feature" 
                        />
                    </div>
                    <div 
                        className="col-md-6 wow fadeInRight" 
                        data-wow-duration="1s" 
                        style={{ visibility: 'visible', animationDuration: '1s', animationName: 'fadeInRight' }}
                    >
                        <div className="text">
                            <h3 style={{color: '#000'}}>{kicker}</h3>
                            <h2 dangerouslySetInnerHTML={{ __html: headline }} />
                            <div dangerouslySetInnerHTML={{ __html: text }} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Section4;
