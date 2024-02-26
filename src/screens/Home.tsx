
import Banner from '../components/ui/Banner';
import LowerBanner from '../components/ui/LowerBanner';
import ContainerFluid from '../components/reusable/ContainerFluid';
import TopRelief from '../components/ui/TopRelief';
import Testimonial from '../components/ui/Testimonial';

const Home = () => {
    return (
        <ContainerFluid>
            <Banner />
            <LowerBanner />
            <div className='px-4 lg:px-0'>
                <TopRelief />
            </div>
            <Testimonial />
            <div className='h-[12000px]'>

            </div>
        </ContainerFluid>
    );
};

export default Home;