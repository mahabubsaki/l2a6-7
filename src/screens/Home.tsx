import React from 'react';
import Banner from '../components/ui/Banner';
import LowerBanner from '../components/ui/LowerBanner';
import Container from '../components/reusable/Container';

const Home = () => {
    return (
        <Container>
            <Banner />
            <LowerBanner />
        </Container>
    );
};

export default Home;