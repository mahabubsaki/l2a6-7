
import Banner from '../components/ui/Banner';
import LowerBanner from '../components/ui/LowerBanner';
import ContainerFluid from '../components/reusable/ContainerFluid';
import TopRelief from '../components/ui/TopRelief';
import Testimonial from '../components/ui/Testimonial';
import Gallery from '../components/ui/Gallery';
import Missions from '../components/ui/Missions';
import Footer from '../components/ui/Footer';
import Counter from '../components/ui/Counter';
import FAQ from '../components/ui/FAQ';
//@ts-expect-error - its a third party library
import { ReactLenis } from '@studio-freight/react-lenis';
import { useEffect } from 'react';
import { animate, stagger } from 'framer-motion';

const Home = () => {
    useEffect(() => {

        (async function () {
            await animate("#shuffle div", { scale: [0, 1] }, { type: "spring", delay: stagger(0.4) });

        })();
    }, []);

    return (
        <ReactLenis root>
            <ContainerFluid>
                <Banner />
                <LowerBanner />
                <div className='px-4 lg:px-0'>
                    <TopRelief />
                </div>
                <Testimonial />
                <Gallery />
                <Missions />
                <Counter />
                <FAQ />
                <Footer />
            </ContainerFluid>
        </ReactLenis>
    );
};

export default Home;