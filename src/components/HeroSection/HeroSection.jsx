import React from "react";
import "./HeroSection.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import video1 from "../../assets/video1.mp4";
import video2 from "../../assets/video2.mp4";
import { Carousel } from "react-responsive-carousel";
import ReactPlayer from "react-player";
import video3 from "../../assets/video3.mp4";

const HeroSection = () => {
    return (
<<<<<<< HEAD
        <div>
            <Carousel>
                <div className="section-container">
                    <ReactPlayer
                        autoPlay
                        url={video2}
                        volume="1"
                        muted
                        width="100%"
                        height="100%"
                        playing={true}
                    />
                </div>
                <div className="section-container">
                    <ReactPlayer
                        autoPlay
                        url={video1}
                        volume="1"
                        muted
                        width="100%"
                        height="100%"
                        playing={true}
                    />
                </div>
                <div className="section-container">
                    <ReactPlayer
                        autoPlay
                        url={video3}
                        volume="1"
                        muted
                        width="100%"
                        height="100%"
                        playing={true}
                    />
                </div>
            </Carousel>
=======
        <div >
          <Carousel>
            <div className="section-container">
              <ReactPlayer
                autoPlay
                url={video3}
                volume='1'
                muted
                width='100%'
                height='100%'
                playing={true}
              />
            </div>
            <div className="section-container">
            <ReactPlayer
                autoPlay
                url={video2}
                volume='1'
                muted
                width='100%'
                height='100%'
                playing={true}
              />
            </div>
            <div className="section-container">
            <ReactPlayer
                autoPlay
                url={video1}
                volume='1'
                muted
                width='100%'
                height='100%'
                playing={true}
              />
            </div>
          </Carousel>
>>>>>>> origin
        </div>
    );
};

export default HeroSection;
