import React from 'react';
import Banner from '../pages/Home/Banner';
import Works from '../pages/Home/Works';
import Services from '../pages/Home/Services';
import SalesTeams from '../pages/Home/SalesTeams';
import Support from '../pages/Home/Support';
import BannerTwo from '../pages/Home/BannerTwo';
import Testimonial from '../pages/Home/Testimonial';
import Faq from '../pages/Home/Faq';

const HomeLayout = () => {
    return (
        <>
            <Banner />
            <Works />
            <Services />
            <SalesTeams />
            <Support />
            <BannerTwo />
            <Testimonial />
            <Faq />
        </>
    );
};

export default HomeLayout;