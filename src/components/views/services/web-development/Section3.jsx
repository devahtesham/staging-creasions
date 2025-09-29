"use client";
import { useRef, useState } from "react";
import videoverlay from '/public/services/web-development/videopverlay.png';
import videoplaybtn from '/public/services/web-development/videoplaybtn.png';
import Image from "next/image";
import Link from "next/link";

export default function Section3({ whyChooseData }) {

      const videoRef = useRef(null);
  const [showOverlay, setShowOverlay] = useState(true);

  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      video.play();
      setShowOverlay(false);
    } else {
      video.pause();
      setShowOverlay(true);
    }
  };

    // Use API data if available, otherwise fallback
    const videoSrc = whyChooseData?.section_video || "/video/webDevelopnemntvideo.mp4";
    const posterSrc = whyChooseData?.section_img || videoverlay.src;
    
    // Handle video error
    const handleVideoError = (e) => {
        console.error('Video load error:', videoSrc);
        // Fallback to default video if external video fails
        if (videoSrc !== "/video/webDevelopnemntvideo.mp4") {
            e.target.src = "/video/webDevelopnemntvideo.mp4";
        }
    };

    return (
        <> 
            <section className="web-sec-3">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="video-box">
                                  <video
                                    ref={videoRef}
                                    src={videoSrc}
                                    poster={posterSrc}
                                    width="640"
                                    height="360"
                                    playsInline
                                    loop
                                    webkit-playsinline="true"
                                    preload="metadata"
                                    style={{ width: "100%", height: "auto", borderRadius: "12px", background: "#000" }}
                                    onClick={togglePlay}
                                    onError={handleVideoError}
                                />

                                {showOverlay && (
                                    <div
                                    onClick={togglePlay}
                                    style={{
                                        position: "absolute",
                                        inset: 0,
                                        display: "flex",
                                        justifyContent: "center",
                                        alignItems: "center",
                                        cursor: "pointer",
                                    }}
                                    >
                                        <Image src={videoplaybtn} alt="play button" />
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>

    )
}
