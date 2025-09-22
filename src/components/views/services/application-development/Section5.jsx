import React from 'react'

export default function Section5({ pageData }) {
    const infoCardsData = pageData?.info_cards_section;
    
    // Default data as fallback
    const defaultCards = [
        {
            heading: "Java Development Solutions.",
            content: "As a leading Application Development Company, Creasions specializes in delivering robust Java Development Solutions tailored to meet the unique needs of our clients. Our team of expert Java developers leverages their extensive experience and proficiency in Java technologies to create scalable and efficient solutions. Whether you require enterprise-grade applications, web-based solutions, or custom software development, our Java Development Solutions ensure optimal performance and reliability for your business."
        },
        {
            heading: "Cross-Platform Development with Xamarin, React Native, and Flutter.",
            content: "At Creasions, we excel in Cross-Platform Development, leveraging technologies such as Xamarin, React Native, and Flutter to create high-quality applications that run seamlessly across multiple platforms. Our skilled developers specialize in harnessing the power of these frameworks to build cross-platform applications that deliver a consistent user experience on iOS, Android, and other platforms. Whether you need a mobile app, a web app, or a desktop application, our Cross-Platform Development services ensure maximum reach and efficiency for your business."
        },
        {
            heading: "Swift Development: Crafting iOS Applications.",
            content: "Crafting exceptional iOS applications is at the heart of what we do at Creasions. Our team of skilled Swift developers specializes in creating captivating iOS applications that engage users and deliver outstanding experiences. With our Swift Development services, we help businesses capitalize on the vast opportunities offered by the iOS platform. Whether you need a consumer-facing app, an enterprise solution, or a gaming application, trust Creasions to deliver custom iOS applications that set you apart from the competition."
        }
    ];

    const cards = infoCardsData?.cards || defaultCards;
    
    return (
        <section
            className="app-sec-4"
            style={{
                backgroundImage:
                    "url(/services/application-development/app-sec-05-bg.png)"
            }}
        >
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="text text-center">
                            <h4>{infoCardsData?.section_heading || "Comprehensive Application Development Dallas Services"}</h4>
                            <div dangerouslySetInnerHTML={{
                                __html: infoCardsData?.section_content || "<p>At Creasions, we provide expert application development Dallas services tailored to meet diverse business needs. Our expertise spans Java development solutions, ensuring robust, scalable, and high-performance applications. As a trusted application development Dallas company, we specialize in delivering cutting-edge applications that enhance business efficiency and digital transformation.</p>"
                            }} />
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12  col-md-6">
                        {cards.map((card, index) => (
                            <div key={index} className="box">
                                <ul>
                                    <li>
                                        <strong>{card.heading}</strong>{" "}
                                        <span style={{ fontWeight: 400 }} dangerouslySetInnerHTML={{
                                            __html: card.content
                                        }} />
                                    </li>
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>

    )
}
