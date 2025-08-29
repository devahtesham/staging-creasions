"use client";
import { Link } from "react-scroll";

export default function Section3() {
    const services = [
        [
            "Custom Sofware Development", "Mobile App Development", "Web Application Development", 
            "UI/UX Design for Software", "Quality Assurane and Testing", "Legacy Software Modernization","IoT (Internet of Things) Development"
        ],
        [
            "Enterprise Software Development", "Software Product Development", "Cloud Application Development", 
            "Software Maintenance and Support", "Blockchain Development", "Artificial Intelligence (AI) Development", "Machine Learning Development"
        ],
        [
            "DevOps Services", "Custom API Development", "Database Design and Development", 
            "Brand Naming", "Augmented Reality (AR) Development", "Virtual Reality (VR) Development", "Cybersecurity Services"
        ]
    ];

    return (
        <section
            className="home-sec-service brading-sec-4 mobile-screen-slider"
            id="services_provide"
        >
            <div className="container">
                <div className="row p-0 border-0">
                    <div className="col-lg-12">
                        <div className="text text-22 text-center">
                            <h2>All Software Development Services </h2>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12">
                        {/* Tab panes */}
                        <div className="tab-content brand-mobile-slider">
                            <div className="tab-pane active show" role="tabpanel">
                                <div className="row">
                                    {services.map((column, colIndex) => (
                                        <div key={colIndex} className="col-lg-4 col-md-6 col-sm-12">
                                            <ul className="hom">
                                                {column.map((service, index) => (
                                                    <li key={index}>
                                                        <h2>
                                                            <Link
                                                                to="form-sec"
                                                                smooth={true}
                                                                className="t-btn t-btn-arrow-contact t-btn-arrow"
                                                                href="#form-sec"
                                                                value={service}
                                                                >
                                                                {service}
                                                            </Link>
                                                        </h2>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
