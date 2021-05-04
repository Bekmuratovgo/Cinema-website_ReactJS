import React, {useState} from 'react';
import AnimationCard from './AnimationCard/AnimationCard';
import Footer from './Footer/Footer';
import HeroSection from './HeroSection/HeroSection';
import Filter from './TopicList/Filter';
import TopicList from './TopicList/TopicList';


const Home = () => {

    return (
        <>
          <HeroSection/>  
          <Filter />
          <AnimationCard/>
          <TopicList/>
        </>
    );
};

export default Home;