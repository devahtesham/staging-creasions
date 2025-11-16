import React from 'react'
import VideoOptimizer from '@/components/ui/VideoOptimizer';
import VideoThumbnail from '/public/baituti/videooverlay.png'

export default function Section2({ data }) {
    const videoUrl = data?.vedio_url || '/video/baitutiVideo.mp4'

    return (
        <>
        <section className="caseStudySec01">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="videoBox">
                            <VideoOptimizer
                                src={videoUrl}
                                poster={VideoThumbnail}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}
