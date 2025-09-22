export default function Section2({ pageData }) {
    const defaultText = "Creasions provides top-tier application development Dallas services, helping businesses plan, design, develop, integrate, test, and manage high-performance software solutions. As a quality-focused application development Dallas company, we adhere to industry best practices to deliver scalable and innovative applications. We work with startups, software companies, and enterprises across 30+ industries, ensuring tailored solutions that drive business success.";
    
    return (
        <section className="app-designed pb-0">
            <div className="">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="text text-22">
                            {pageData?.services_tabs_section_text ? (
                                <div dangerouslySetInnerHTML={{
                                    __html: pageData.services_tabs_section_text
                                }} />
                            ) : (
                                <p>{defaultText}</p>
                            )}
                        </div>
                    </div>
                </div>
            </div>


        </section>


    )
}
