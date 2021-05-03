import React, { useState } from "react";
import Footer from "../Footer/Footer";
import HeroSection from "../HeroSection/HeroSection";
// import Filter from "./TopicList/Filter";
import TopicList from "../TopicList/TopicList";
import SideBar from "./SideBar";

const Home = (props) => {
    return (
        <>
            <HeroSection />
            {/* <Filter /> */}
            <TopicList />
            <SideBar {...props} />
        </>
    );
};

export default Home;
