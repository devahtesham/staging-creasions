'use client'

import React, { useEffect, useState } from 'react';
import VideoOptimizer from '@/components/ui/VideoOptimizer';

import VideoThumbnail from '/public/video-thumbnail.png'
import { fetchVideoSectionHome } from '@/utils/helper';

export default function VideoSection() {

    const [videoUrl, setVideoUrl] = useState("");



    // effect for fetching hero section banners
    useEffect(() => {
        fetchVideoSectionHome()
            .then((data) => {
                // console.log('[servicesWeProvide]', data)
                setVideoUrl(data[0]?.video_url)
            })
            .catch(error => {
                console.error('[error]', error)
            })
    }, []);

    console.log('[VideoUrl]', videoUrl)


    return (
        <div className="video-sticky-effect">
            <section className="video-sec">
                <div className="container-fluid p-0">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="image">
                                {
                                    !videoUrl ? <div>Loading...</div> : (
                                        <div className="video-box">
                                            <VideoOptimizer
                                                src={videoUrl || "/video/Creasion-Video-revamp-2.mp4"}
                                                poster={VideoThumbnail}
                                            />
                                        </div>
                                    )
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
