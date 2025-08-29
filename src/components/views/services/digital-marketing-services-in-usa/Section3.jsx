export default function Section3() {
  const services = [
    [
      {
        title: "Search Engine Optimization",
        link: "/services/seo-services-dallas",
      },
      {
        title: "Search Engine Marketing",
        link: "/services/search-engine-marketing-dallas",
      },
      {
        title: "Pay-Per-Click (PPC)",
        link: "/services/ppc-services-dallas",
      },
      {
        title: "Email Marketing",
        link: "/services/email-marketing-dallas",
      },
    ],
    [
      {
        title: "Marketing Automation",
        link: "/services/marketing-automation-dallas",
      },
      {
        title: "Content Marketing",
        link: "/services/content-marketing-dallas",
      },
      {
        title: "Social Media Marketing (SMM)",
        link: "/services/social-media-marketing-dallas",
      },
      {
        title: "Affiliate Marketing",
        link: "/services/affiliate-marketing-dallas",
      },
    ],
    [
      {
        title: "Mobile Marketing",
        link: "/services/mobile-marketing-dallas",
      },
      {
        title: "Customer Relationship Management (CRM)",
        link: "/services/crm-dallas",
      },
      {
        title: "E-commerce Marketing",
        link: "/services/ecommerce-marketing-dallas",
      },
      {
        title: "Social Listening",
        link: "/services/social-listening-dallas",
      },
    ],
  ];

  return (
    <section
      className="home-sec-service brading-sec-4 digital-marketing-sec-4 mobile-screen-slider"
      id="services_provide"
    >
      <div className="container">
        <div className="row p-0 border-0">
          <div className="col-lg-12">
            <div className="text text-22 text-center">
              <h2>All Digital Marketing Services </h2>
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
                    <div
                      key={colIndex}
                      className="col-lg-4 col-md-6 col-sm-12"
                    >
                      <ul className="hom">
                        {column.map((service, index) => (
                          <li key={index}>
                            <h2>
                              <a
                                className="t-btn t-btn-arrow-contact t-btn-arrow"
                                href={service.link}
                                value={service.title}
                              >
                                {service.title}
                              </a>
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
