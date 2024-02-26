
import Banner from '../components/ui/Banner';
import LowerBanner from '../components/ui/LowerBanner';
import ContainerFluid from '../components/reusable/ContainerFluid';
import TopRelief from '../components/ui/TopRelief';

const Home = () => {
    return (
        <ContainerFluid>
            <Banner />
            <LowerBanner />
            <div className='px-4 lg:px-0'>
                <TopRelief />
            </div>
        </ContainerFluid>
    );
};

export default Home;