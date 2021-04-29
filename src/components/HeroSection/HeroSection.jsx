import React from 'react';
import './HeroSection.css';
// import { Slider } from 'slider-carousel-react';
import video1 from '../../assets/video1.mp4'

const HeroSection = () => {
    return (
        // <Slider/>
          <div className="section-container">
            <video
                className="video-v"
                autoPlay
                loop
                muted

            >
            <source 
                src={video1}
                type="video/mp4"
            />
            </video>
            
        </div>


        
        
    );
};

export default HeroSection;
    