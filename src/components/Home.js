import { Grid } from "@material-ui/core";
import React, { useState } from "react";
import AnimationCard from "./AnimationCard/AnimationCard";
import Footer from "./Footer/Footer";
import HeroSection from "./HeroSection/HeroSection";
import SideBar from "./SideBar/SideBar";
import Filter from "./TopicList/Filter";
import TopicList from "./TopicList/TopicList";

const Home = () => {
    return (
        <>
            <HeroSection />
            <Filter />
            <AnimationCard />
            <Grid container>
                <SideBar />
            </Grid>
            <TopicList />
        </>
    );
};

export default Home;
