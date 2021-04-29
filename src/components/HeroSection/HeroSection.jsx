import React from 'react';
import './HeroSection.css';
import { Slider } from 'slider-carousel-react';
import video1 from '../../assets/video1.mp4'
import video2 from '../../assets/video2.mp4'
import { Carousel } from 'react-responsive-carousel';

const HeroSection = () => {
    return (
        <Carousel>
                <div>
                <video className="video-v" autoPlay loop muted>
            <source src={video1} type="video/mp4"/></video>
                </div>
                <div>
                <video className="video-v" autoPlay loop muted>
            <source src={video2} type="video/mp4"/>
            </video>
                </div>
            </Carousel>
    );
};

export default HeroSection;
    