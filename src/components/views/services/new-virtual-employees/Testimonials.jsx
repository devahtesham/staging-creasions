"use client";
import React from 'react';
import Slider from 'react-slick';


import Ratings from '/public/services/virtual-employees/ve-testimonial-ratings.png'


const getClientsData = (clientsData) => {
    if (clientsData?.clients) {
        return clientsData.clients.map(client => ({
            name: client.name,
            testimonial: client.description?.replace(/<[^>]*>/g, '') || '',
            position: client.position,
            imgSrc: client.image_url || Ratings.src
        }));
    }
    return [
        {
            name: 'Sarah Smith',
            testimonial:
                "Working with Creasions on virtual employee services has been a game-changer for our company. Their team goes above and beyond to understand our requirements and deliver exceptional candidates. The flexibility and scalability of their services have allowed us to meet our staffing needs efficiently. Thank you, Creasions, for your outstanding support!",
            position: 'HR Manager at Zoneix Enterprises',
            imgSrc: Ratings.src
        },
        {
            name: 'David Johnson',
            testimonial:
                "Working with Creasions on virtual employee services has been a game-changer for our company. Their team goes above and beyond to understand our requirements and deliver exceptional candidates. The flexibility and scalability of their services have allowed us to meet our staffing needs efficiently. Thank you, Creasions, for your outstanding support!",
            position: 'COO of Global Solutions Inc',
            imgSrc: Ratings.src
        },
        {
            name: 'John Doe',
            testimonial:
                "Creasions has truly revolutionized our hiring process. Their virtual employee services are top-notch, providing us with access to a pool of talented professionals tailored to our specific needs. With their assistance, we've been able to streamline our recruitment efforts and build a highly skilled workforce. Highly recommend!",
            position: 'CEO of ABC Tech Solution',
            imgSrc: Ratings.src
        },
        {
            name: 'David Johnson',
            testimonial:
                "I can't speak highly enough about Creasions' virtual employee services. They have exceeded our expectations in every way. From sourcing top talent to managing the hiring process, their professionalism and expertise shine through. Thanks to Creasions, we've been able to build a strong team that drives our company's success.",
            position: 'COO of Global Solutions Inc',
            imgSrc: Ratings.src
        },
    ];
};

const Testimonials = ({ clientsData }) => {
    const settings1 = {
        arrows: false,
        dots: true,
        infinite: true,
        autoplay: true,
        centerMode: true,
        speed: 1500,
        autoplaySpeed: 100,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    };

    return (
        <section className="virtual-sec-7">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-12">
                        <div className="text let text-center">
                            <h2>{clientsData?.section_heading || "Meet Our Top Clients"}</h2>
                            <p>{clientsData?.section_text?.replace(/<[^>]*>/g, '') || "Explore some of the clients we've assisted!"}</p>
                        </div>
                    </div>
                </div>

                <Slider {...settings1} className="virtual-slide">
                    {getClientsData(clientsData).map((client, index) => (
                        <div key={index} className="col-lg-4">
                            <div className="testim-box">
                                <div className="text">
                                    <h4>{client.name}</h4>
                                    <p>{client.testimonial}</p>
                                    <h6>{client.position}</h6>
                                    {typeof client.imgSrc === 'string' && client.imgSrc.startsWith('http') ? (
                                        <img
                                            src={client.imgSrc}
                                            alt={`${client.name} testimonial`}
                                            className="img-fluid"
                                        />
                                    ) : (
                                        <img
                                            src={Ratings.src}
                                            alt={`${client.name} testimonial`}
                                            className="img-fluid"
                                        />
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </section>
    );
};

export default Testimonials;
