import React, {useState} from 'react';
import Footer from './Footer/Footer';
import HeroSection from './HeroSection/HeroSection';
import Filter from './TopicList/Filter';
import TopicList from './TopicList/TopicList';


const Home = () => {

    return (
        <>
          <HeroSection/>  
          <Filter />
          <TopicList/>
        </>
    );
};

export default Home;