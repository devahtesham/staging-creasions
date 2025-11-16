import Image from 'next/image';
import Link from 'next/link';


export default function CaseStudiesGrid({ caseStudiesList }) {
    const itemList = caseStudiesList?.data;
    return (
        <div className="case-studies-container">
            <div className="case-grid">
                {itemList.map((study,index) => (
                    <div key={index} className="case-card">
                        
                            <div className="case-image-wrapper">
                                <Image
                                    src={study?.case_study_listing_website?.case_study_featured_img}
                                    alt={study?.case_study_listing_website?.case_study_featured_name}
                                    width={600}
                                    height={400}
                                    className="case-image"
                                />
                            </div>
                            <div className="case-content">
                                <p className="case-category">{study?.case_study_listing_website?.category?.Name }</p>
                                <h2 className="case-title">{study?.case_study_listing_website?.case_study_featured_name}</h2>
                                <div className="case-description" dangerouslySetInnerHTML={{ __html: study?.case_study_listing_website?.case_study_featured_txt }} />
                                {/* <p className="case-description">{study?.case_study_listing_website?.case_study_featured_name}</p> */}
                                <Link href={`/case-study/${study.case_study_listing_website?.model_name}/${study.case_study_listing_website?.id}`} target="_parent" className="case-link"><svg width="25" height="1" viewBox="0 0 25 1" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0.5 0.5H24.5" stroke="white" strokeLinecap="round"/>
                                </svg>
                                View Casestudy</Link>
                            </div>
                    </div>
                ))}
            </div>
        </div >
    );
}