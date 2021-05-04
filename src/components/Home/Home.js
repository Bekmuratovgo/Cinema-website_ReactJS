import { Grid } from "@material-ui/core";
import React, { useState } from "react";
import Footer from "../Footer/Footer";
import HeroSection from "../HeroSection/HeroSection";
import SideBar from "../SideBar/SideBar";

// import Sidebar from "../SideBar/SideBar";
// import Filter from "./TopicList/Filter";
import TopicList from "../TopicList/TopicList";
// import Sidebar from "./SideBar";

const Home = (props) => {
    return (
        <>
            <Grid container>
                <SideBar />
                <HeroSection />
                {/* <Filter /> */}
                <TopicList />
            </Grid>
            {/* <Sidebar {...props} /> */}
        </>
    );
};

export default Home;
