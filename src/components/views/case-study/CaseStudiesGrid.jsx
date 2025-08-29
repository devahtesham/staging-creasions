import Image from 'next/image';
import Link from 'next/link';

const caseStudies = [
    {
        id: 1,
        title: 'Boardline',
        category: 'Real Estate',
        description: 'Boardline Academy is the top provider of HOA education, helping over 5,000 board members and hundreds of management professionals through...',
        imageUrl: '/case-study/Boardline.jpg',
        link: '/case-study/boardline-case-study',
    },
    {
        id: 2,
        title: 'Clairmont',
        category: 'Real Estate',
        description: 'Clairmont Capital Group is a Los Angeles-based private equity firm focused exclusively on alternative real assets and specializing in general...',
        imageUrl: '/case-study/Clairmont.jpg',
        link: '/case-study/clairmont-case-study',
    },
    {
        id: 3,
        title: 'LRES',
        category: 'Real Estate',
        description: 'Welcome to LRES Property Management, a firm brought to you by Luker Properties Group, a multifaceted real estate and management...',
        imageUrl: '/case-study/LRES.jpg',
        link: '/case-study/lres-case-study',
    },
    {
        id: 4,
        title: 'KUDOBU',
        category: 'Consulting',
        description: 'KaDoBu & Company is a strategic consulting firm that specializes in helping businesses achieve their goals through innovative solutions and expert guidance. With a team of experienced professionals, KaDoBu offers a range of services including business strategy, operational efficiency, and market analysis.',
        imageUrl: '/case-study/Kudobu.webp',
        link: '/case-study/KaDoBu-case-study',
    },
];

export default function CaseStudiesGrid() {
    return (
        <div className="case-studies-container">
            <div className="case-grid">
                {caseStudies.map((study) => (
                    <div key={study.id} className="case-card">
                        <Link href={study.link} target="_parent" className="case-link">
                            <div className="case-image-wrapper">
                                <Image
                                    src={study.imageUrl}
                                    alt={study.title}
                                    width={600}
                                    height={400}
                                    className="case-image"
                                />
                            </div>
                            <div className="case-content">
                                <p className="case-category">{study.category}</p>
                                <h2 className="case-title">{study.title}</h2>
                                <p className="case-description">{study.description}</p>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
        </div >
    );
}