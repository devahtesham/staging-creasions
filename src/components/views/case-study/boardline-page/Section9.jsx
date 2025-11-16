import React from 'react'

export default function Section9({ data, category }) {
    if (!data || !Array.isArray(data)) return null

    return (
        <section
            className="Boardline-09"
            style={{
                backgroundImage: "url(/boardline/section-7bg.webp)"
            }}
        >
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="text">
                            <h2>Related Projects</h2>
                        </div>
                    </div>
                </div>
                <div className="row">
                    {data.map((project, index) => {
                        return (
                            <div className="col-lg-6 col-md-6" key={project.id}>
                                <div className={index === 0 ? "text-img-box img-box" : "text-img-box-2"}>
                                    <a href={`/case-study/${project.slug}`}>
                                        <img src={project.image} alt={project.title} />
                                    </a>
                                    <div className="two-text">
                                        <h6>{category?.Name || 'Category'}</h6>
                                        <span>____</span>
                                    </div>
                                    <h4>{project.title}</h4>
                                    {project.banner?.subtitle && (
                                        <div dangerouslySetInnerHTML={{ __html: project.banner.subtitle }} />
                                    )}
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}
