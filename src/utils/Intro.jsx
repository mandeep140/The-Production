import React, { useState, useEffect } from 'react';

const IntroVideo = () => {
    const [showVideo, setShowVideo] = useState(true);

    const handleVideoEnd = () => {
        setShowVideo(false);
    };

    return (
        <>
            {showVideo && (
                <div className="fixed inset-0 z-[1000] flex items-center justify-center bg-black">
                    <video
                        src="resources/TP_V.mp4"
                        autoPlay
                        muted
                        onEnded={handleVideoEnd}
                        className="w-full h-full object-cover"
                    />
                </div>
            )}
        </>
    );
};

export default IntroVideo;
