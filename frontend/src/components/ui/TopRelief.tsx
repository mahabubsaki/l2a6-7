import { animate, motion, stagger, useInView } from 'framer-motion';
import ReliefItem from '../reusable/ReliefItem';
import { useEffect, useRef } from 'react';
import { useGetTopQuery } from '../../redux/features/goods/goodsAPI';
import { Link } from 'react-router-dom';



const TopRelief = () => {

    const { data, isLoading, isError } = useGetTopQuery([]);


    const ref = useRef<HTMLDivElement | null>(null);
    const isInView = useInView(ref, {
        amount: 0.1,
        once: true
    });
    useEffect(() => {

        if (isInView) {
            (async function () {
                await animate("#top-relief img", { scale: [0, 1] }, { type: "spring", delay: stagger(0.4), });

            })();
        }
    }, [isInView]);
    if (isError) {
        return <div className='text-center text-red-600 text-2xl my-5'>
            Can't load top relief posts
        </div>;
    }
    return (
        <div id='top-relief' ref={ref} className='my-20'>
            <motion.h1 initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1, type: 'tween', ease: 'easeOut' }} className='text-center text-4xl font-semibold text-black dark:text-white'>Top Relief Goods</motion.h1>
            <motion.p initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1, type: 'tween', ease: 'easeOut' }} className='text-center text-lg text-gray-500 mt-4'>We are providing these relief goods to the people who are in need</motion.p>
            <div className='flex justify-center mt-2 mb-16'>
                <span className='size-5 rounded-full deco relative border-2 flex justify-center items-center border-[#E6E6E6] '>
                    <span className='inline-block size-2 rounded-full bg-[#EAEAEA]' />
                </span>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 max-w-screen-xl mx-auto gap-7'>
                {!isLoading && data.map((item: { goal: number, collected: number, title: string, donaters: number, description: string; src: string; category: string; _id: string; }, index: number) => (
                    <ReliefItem {...item} key={index} />
                ))}
            </div>
            <div>
                <Link to={'/relief-goods'}>
                    <button className='bg-main text-white font-semibold px-6 py-2.5 rounded-full hover:bg-transparent border-main border hover:text-main dark:text-dark-main duration-300 mt-16 mx-auto block'>View All</button>
                </Link>
            </div>
        </div>
    );
};

export default TopRelief;