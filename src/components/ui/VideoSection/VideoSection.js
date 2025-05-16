import React from 'react';
import './VideoSection.css';

const VideoSection = () => {
    return (
        <div id="video-section-container" class="video-section-container">
            <div id="video-section-container" className="video-section-content">
                <p className="about-shop-title">About The Shop</p>
                <p className="watch-our-story">Watch Our Story</p>
                <p className="about-shop-title">
                    There is no magic formula to write perfect ad copy. It is based on a number of factors, including ad placement,
                    <br /> demographic, even the consumer's mood.
                </p>
                <div className="video-button">
                    <img
                        src="https://cdn.prod.website-files.com/5badda2935e11303a89a461e/5bae5eec4b504f1c4031af32_play-icon-white.svg"
                        alt="Play video"
                    />
                </div>
            </div>
        </div>
        
    );
};

export default VideoSection;
