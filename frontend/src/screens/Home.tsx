
import Banner from '../components/ui/Banner';
import LowerBanner from '../components/ui/LowerBanner';
import ContainerFluid from '../components/reusable/ContainerFluid';
import TopRelief from '../components/ui/TopRelief';
import Testimonial from '../components/ui/Testimonial';
import Gallery from '../components/ui/Gallery';
import Missions from '../components/ui/Missions';
import Counter from '../components/ui/Counter';
import FAQ from '../components/ui/FAQ';
import { ReactLenis } from '@studio-freight/react-lenis';
import { useEffect } from 'react';
import { animate, stagger } from 'framer-motion';
import { useAppDispatch, useAppSelector } from '../redux/store/hooks';
import { TUser, selectCurrentUser, setUser } from '../redux/features/auth/authSlice';
import { useUserByIdQuery } from '../redux/features/auth/authAPI';


const Home = () => {
    const dispatch = useAppDispatch();
    const user = useAppSelector(selectCurrentUser);


    const { data, isSuccess } = useUserByIdQuery(user?._id, { skip: !user });
    useEffect(() => {

        (async function () {
            await animate("#shuffle div", { scale: [0, 1] }, { type: "spring", delay: stagger(0.4) });

        })();

    }, []);

    useEffect(() => {
        if (isSuccess) {
            dispatch(setUser({ user: data as TUser, token: user?.token as string }));
        }
    }, [isSuccess]);

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

            </ContainerFluid>
        </ReactLenis>
    );
};

export default Home;