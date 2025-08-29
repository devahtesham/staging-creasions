"use client";
import { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fancyapps/ui/dist/fancybox/fancybox.css';
import { Fancybox } from '@fancyapps/ui';

// Basic Image Posts
import BasicImagePost1 from '/public/ipmarket/basic-image-01.webp';
import BasicImagePost2 from '/public/ipmarket/basic-image-02.webp';
import BasicImagePost3 from '/public/ipmarket/basic-image-03.webp';
import BasicImagePost4 from '/public/ipmarket/basic-image-04.webp';
import BasicImagePost5 from '/public/ipmarket/basic-image-05.webp';
import BasicImagePost6 from '/public/ipmarket/basic-image-06.webp';

// Custom Image Posts
import CustomImagePost1 from '/public/ipmarket/custom-post-01.webp';
import CustomImagePost2 from '/public/ipmarket/custom-post-02.webp';
import CustomImagePost3 from '/public/ipmarket/custom-post-03.webp';
import CustomImagePost4 from '/public/ipmarket/custom-post-04.webp';
import CustomImagePost5 from '/public/ipmarket/custom-post-05.webp';
import CustomImagePost6 from '/public/ipmarket/custom-post-06.webp';

// Paid Social Media
import PaidSocialPost1 from '/public/ipmarket/paid-social-01.webp';
import PaidSocialPost2 from '/public/ipmarket/paid-social-02.webp';
import PaidSocialPost3 from '/public/ipmarket/paid-social-03.webp';
import PaidSocialPost4 from '/public/ipmarket/paid-social-04.webp';
import PaidSocialPost5 from '/public/ipmarket/paid-social-05.webp';
import PaidSocialPost6 from '/public/ipmarket/paid-social-06.webp';

// Infographics
import Infographic1 from '/public/ipmarket/infographics-01.webp';
import Infographic2 from '/public/ipmarket/infographics-02.webp';
import Infographic3 from '/public/ipmarket/infographics-03.webp';
import Infographic4 from '/public/ipmarket/infographics-04.webp';
import Infographic5 from '/public/ipmarket/infographics-05.webp';
import Infographic6 from '/public/ipmarket/infographics-06.webp';

// Reels
import Reel1 from '/public/ipmarket/reels-01.webp';
import Reel2 from '/public/ipmarket/reels-02.webp';
import Reel3 from '/public/ipmarket/reels-03.webp';

// Videos
import Video1 from '/public/ipmarket/videos-01.webp';
import Video2 from '/public/ipmarket/videos-02.webp';
import Video3 from '/public/ipmarket/videos-03.webp';
import Image from 'next/image';

const Portfolio = () => {
    const [activeTab, setActiveTab] = useState('basicimage');
    const [currentIndex, setCurrentIndex] = useState(0);

    // Arrays for each type of content
    const basicImages = [BasicImagePost1, BasicImagePost2, BasicImagePost3, BasicImagePost4, BasicImagePost5, BasicImagePost6];
    const customPosts = [CustomImagePost1, CustomImagePost2, CustomImagePost3, CustomImagePost4, CustomImagePost5, CustomImagePost6];
    const paidSocialPosts = [PaidSocialPost1, PaidSocialPost2, PaidSocialPost3, PaidSocialPost4, PaidSocialPost5, PaidSocialPost6];
    const infographics = [Infographic1, Infographic2, Infographic3, Infographic4, Infographic5, Infographic6];
    const reels = [Reel1, Reel2, Reel3,];
    const videos = [Video1, Video2, Video3];

    useEffect(() => {
        Fancybox.bind('[data-fancybox="gallery"]');
    }, []);

    // Handle Next/Previous
    const handlePrev = () => {
        if (currentIndex > 0) setCurrentIndex(currentIndex - 3);
    };

    const handleNext = () => {
        if (currentIndex < basicImages.length - 3) setCurrentIndex(currentIndex + 3);
    };

    return (
        <section className="home-sec-040 porfolio-sec-01 portfolio-sec">
            <div className="container">
                <div className="text text-center wow fadeInUp" data-wow-duration="3s">
                    <h2>Portfolio</h2>
                </div>

                {/* Tab Links */}
                <ul className="nav nav-tabs" role="tablist">
                    <li className="nav-item" role="presentation">
                        <a
                            className={`nav-link ${activeTab === 'basicimage' ? 'active' : ''}`}
                            onClick={() => setActiveTab('basicimage')}
                            role="tab"
                        >
                            Basic Image Posts
                        </a>
                    </li>
                    <li className="nav-item" role="presentation">
                        <a
                            className={`nav-link ${activeTab === 'custompost' ? 'active' : ''}`}
                            onClick={() => setActiveTab('custompost')}
                            role="tab"
                        >
                            Custom Image Posts
                        </a>
                    </li>
                    <li className="nav-item" role="presentation">
                        <a
                            className={`nav-link ${activeTab === 'paidsocial' ? 'active' : ''}`}
                            onClick={() => setActiveTab('paidsocial')}
                            role="tab"
                        >
                            Paid Social Posts
                        </a>
                    </li>
                    <li className="nav-item" role="presentation">
                        <a
                            className={`nav-link ${activeTab === 'infographics' ? 'active' : ''}`}
                            onClick={() => setActiveTab('infographics')}
                            role="tab"
                        >
                            Infographics
                        </a>
                    </li>
                    <li className="nav-item" role="presentation">
                        <a
                            className={`nav-link ${activeTab === 'reels' ? 'active' : ''}`}
                            onClick={() => setActiveTab('reels')}
                            role="tab"
                        >
                            Reels
                        </a>
                    </li>
                    <li className="nav-item" role="presentation">
                        <a
                            className={`nav-link ${activeTab === 'videos' ? 'active' : ''}`}
                            onClick={() => setActiveTab('videos')}
                            role="tab"
                        >
                            Videos
                        </a>
                    </li>
                </ul>

                {/* Tab Content */}
                <div className="tab-content">
                    {/* Basic Image Posts */}
                    {activeTab === 'basicimage' && (
                        <div className="tab-pane fade show active" role="tabpanel">
                            <div className="row image-gallery">
                                {basicImages.slice(currentIndex, currentIndex + 3).map((image, index) => (
                                    <div key={index} className="col-md-4" style={{ display: 'block' }}>
                                        <a data-fancybox="gallery" href={image.src} tabIndex="0">
                                            <Image src={image} className="img-fluid" alt="basicimage" />
                                        </a>
                                    </div>
                                ))}
                            </div>
                            {/* Navigation Buttons */}
                            {basicImages.length > 3 && (
                                <div className="portfolio-nav">
                                    <a
                                        className="btn prev-btn"
                                        onClick={handlePrev}
                                        style={{ display: currentIndex >= 0 ? '' : 'none' }}
                                    >
                                        <i className="fa-solid fa-arrow-left"></i>
                                    </a>
                                    <a
                                        className="btn next-btn"
                                        onClick={handleNext}
                                        style={{ display: currentIndex + 3 <= basicImages.length ? '' : 'none' }}
                                    >
                                        <i className="fa-solid fa-arrow-right"></i>
                                    </a>
                                </div>
                            )}
                        </div>
                    )}

                    {/* Custom Image Posts */}
                    {activeTab === 'custompost' && (
                        <div className="tab-pane fade show active" role="tabpanel">
                            <div className="row image-gallery">
                                {customPosts.slice(currentIndex, currentIndex + 3).map((image, index) => (
                                    <div key={index} className="col-md-4" style={{ display: 'block' }}>
                                        <a data-fancybox="gallery" href={image.src} tabIndex="0">
                                            <Image src={image} className="img-fluid" alt="custompost" />
                                        </a>
                                    </div>
                                ))}
                            </div>
                            {/* Navigation Buttons */}
                            {customPosts.length > 3 && (
                                <div className="portfolio-nav">
                                    <a
                                        className="btn prev-btn"
                                        onClick={handlePrev}
                                        style={{ display: currentIndex >= 0 ? '' : 'none' }}
                                    >
                                        <i className="fa-solid fa-arrow-left"></i>
                                    </a>
                                    <a
                                        className="btn next-btn"
                                        onClick={handleNext}
                                        style={{ display: currentIndex + 3 <= customPosts.length ? '' : 'none' }}
                                    >
                                        <i className="fa-solid fa-arrow-right"></i>
                                    </a>
                                </div>
                            )}
                        </div>
                    )}

                    {/* Paid Social Posts */}
                    {activeTab === 'paidsocial' && (
                        <div className="tab-pane fade show active" role="tabpanel">
                            <div className="row image-gallery">
                                {paidSocialPosts.slice(currentIndex, currentIndex + 3).map((image, index) => (
                                    <div key={index} className="col-md-4" style={{ display: 'block' }}>
                                        <a data-fancybox="gallery" href={image.src} tabIndex="0">
                                            <Image src={image} className="img-fluid" alt="paidsocial" />
                                        </a>
                                    </div>
                                ))}
                            </div>

                            {/* Navigation Buttons */}
                            {paidSocialPosts.length > 3 && (
                                <div className="portfolio-nav">
                                    <a
                                        className="btn prev-btn"
                                        onClick={handlePrev}
                                        style={{ display: currentIndex >= 0 ? '' : 'none' }}
                                    >
                                        <i className="fa-solid fa-arrow-left"></i>
                                    </a>
                                    <a
                                        className="btn next-btn"
                                        onClick={handleNext}
                                        style={{ display: currentIndex + 3 <= paidSocialPosts.length ? '' : 'none' }}
                                    >
                                        <i className="fa-solid fa-arrow-right"></i>
                                    </a>
                                </div>
                            )}
                        </div>
                    )}

                    {/* Infographics */}
                    {activeTab === 'infographics' && (
                        <div className="tab-pane fade show active" role="tabpanel">
                            <div className="row image-gallery">
                                {infographics.slice(currentIndex, currentIndex + 3).map((image, index) => (

                                    <div key={index} className="col-md-4" style={{ display: 'block' }}>
                                        <a data-fancybox="gallery" href={image.src} tabIndex="0">
                                            <Image src={image} className="img-fluid" alt="infographics" />
                                        </a>
                                    </div>
                                ))}
                            </div>

                            {/* Navigation Buttons */}
                            {infographics.length > 3 && (
                                <div className="portfolio-nav">
                                    <a
                                        className="btn prev-btn"
                                        onClick={handlePrev}
                                        style={{ display: currentIndex >= 0 ? '' : 'none' }}
                                    >
                                        <i className="fa-solid fa-arrow-left"></i>
                                    </a>
                                    <a
                                        className="btn next-btn"
                                        onClick={handleNext}
                                        style={{ display: currentIndex + 3 <= paidSocialPosts.length ? '' : 'none' }}
                                    >
                                        <i className="fa-solid fa-arrow-right"></i>
                                    </a>
                                </div>
                            )}
                        </div>
                    )}

                    {/* Reels */}
                    {activeTab === 'reels' && (
                        <div className="tab-pane fade show active" role="tabpanel">
                            <div className="row image-gallery">
                                {reels.map((image, index) => (
                                    <div key={index} className="col-md-4" style={{ display: 'block' }}>
                                        <a
                                            data-fancybox=""
                                            data-type="iframe"
                                            href={`https://www.youtube.com/embed/${['TykmYAVMIvw', 'tuYmplfJjuQ', 'am1EyLIUekE'][index]}`}
                                            tabIndex="0"
                                        >
                                            <Image src={image} className="img-fluid" alt="reels" />
                                        </a>
                                    </div>
                                ))}
                            </div>

                        </div>
                    )}

                    {/* Videos */}
                    {activeTab === 'videos' && (
                        <div className="tab-pane fade show active" role="tabpanel">
                            <div className="row image-gallery">
                                {videos.map((image, index) => (
                                    <div key={index} className="col-md-4" style={{ display: 'block' }}>
                                        <a data-fancybox="" data-type="iframe" href={`https://www.youtube.com/embed/${['3jvmBq9SyK0', '67wdB2JjAKM', 'FtCvwIa7XkM'][index]}`} tabIndex="0">
                                            <Image src={image} className="img-fluid" alt="videos" />
                                        </a>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default Portfolio;
