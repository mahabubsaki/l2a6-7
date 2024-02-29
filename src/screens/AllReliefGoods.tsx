import { motion } from 'framer-motion';

import { useGetALLQuery } from '../redux/features/goods/goodsAPI';
import ReliefItem from '../components/reusable/ReliefItem';

const AllReliefGoods = () => {
    const { data, isLoading } = useGetALLQuery([]);
    console.log(data);
    return (
        <div>
            <motion.h1 initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1, type: 'tween', ease: 'easeOut' }} className='text-center text-4xl font-semibold'>All Relief Goods</motion.h1>
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
        </div>
    );
};

export default AllReliefGoods;