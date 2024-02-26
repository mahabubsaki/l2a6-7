import React from 'react';
import Banner from '../components/ui/Banner';
import LowerBanner from '../components/ui/LowerBanner';
import ContainerFluid from '../components/reusable/ContainerFluid';

const Home = () => {
    return (
        <ContainerFluid>
            <Banner />
            <LowerBanner />
        </ContainerFluid>
    );
};

export default Home;