import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import PodsetnikPrijave from "../Components/PodsetnikPrijave/PodsetnikPrijave";
import Hero from './../Components/Hero/Hero';

const Home = () => {
    return (
        <>
            <Navbar />
            <Hero />
            <PodsetnikPrijave />
        </>
    );
};

export default Home;
