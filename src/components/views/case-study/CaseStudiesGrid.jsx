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
        description: 'KaDoBu & Company is a strategic consulting firm that specializes in helping businesses achieve their goals through innovative solutions and expert guidance.',
        imageUrl: '/case-study/Kudobu.webp',
        link: '/case-study/KaDoBu-case-study',
    },
    {
        id: 5,
        title: 'Commercial Plus',
        category: 'Real Estate',
        description: 'Commercial Plus is a trusted leader in commercial real estate and financial advisory, helping businesses with expert guidance in sales and capital solutions.',
        imageUrl: '/case-study/commercial.webp',
        link: '/case-study/commercial-plus-group',
    },
    {
        id: 6,
        title: 'Baituti Home',
        category: 'Commercial',
        description: 'Baituti Home is a destination for luxurious living, offering carefully curated collections of contemporary furniture and timeless interiors.',
        imageUrl: '/case-study/Baitutiimg.png',
        link: '/case-study/baituti-case-study',
    },
    {
        id: 7,
        title: 'Empower Care Insurance',
        category: 'Insurance',
        description: 'Empower Care Insurance is built on trust and reliability, helping families and individuals feel secure about their future.',
        imageUrl: '/case-study/careimage.png',
        link: '/case-study/empower-care-insurance-case-study',
    },
    {
        id: 8,
        title: 'Hurghada',
        category: 'Travel',
        description: 'Hurghada.com is the official digital gateway to one of Egypt most popular Red Sea resort cities Hurghada.',
        imageUrl: '/case-study/hurghada.jpg',
        link: '/case-study/hurghada-case-study',
    },
];

export default function CaseStudiesGrid() {
    return (
        <div className="case-studies-container">
            <div className="case-grid">
                {caseStudies.map((study) => (
                    <div key={study.id} className="case-card">
                        
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
                                <Link href={study.link} target="_parent" className="case-link"><svg width="25" height="1" viewBox="0 0 25 1" fill="none" xmlns="http://www.w3.org/2000/svg">
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