import React from 'react';
import Banner from '../Banner/Banner';
import Trips from '../Trips/Trips';
import TourGuide from '../TourGuide/TourGuide'

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Trips></Trips>
            <TourGuide></TourGuide>
        </div>
    );
};

export default Home;