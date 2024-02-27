
import Banner from '../components/ui/Banner';
import LowerBanner from '../components/ui/LowerBanner';
import ContainerFluid from '../components/reusable/ContainerFluid';
import TopRelief from '../components/ui/TopRelief';
import Testimonial from '../components/ui/Testimonial';
import Gallery from '../components/ui/Gallery';
import Missions from '../components/ui/Missions';
import Footer from '../components/ui/Footer';

const Home = () => {
    return (
        <ContainerFluid>
            <Banner />
            <LowerBanner />
            <div className='px-4 lg:px-0'>
                <TopRelief />
            </div>
            <Testimonial />
            <Gallery />
            <Missions />
            <Footer />
        </ContainerFluid>
    );
};

export default Home;