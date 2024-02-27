import React from 'react';
import { useParams } from 'react-router-dom';
import { useGetSingleQuery } from '../redux/features/goods/goodsAPI';

interface ReliefInterFace {
    goal: number, collected: number, title: string, donaters: number, description: string; src: string; category: string; _id: string;
}

const SingleReliefGood = () => {

    const { id } = useParams();
    const { data, isError, isLoading, error } = useGetSingleQuery(id);

    const data2 = data as ReliefInterFace;
    if (isLoading) {
        return <div className='min-h-screen flex justify-center items-center text-3xl font-bold'>Loading...</div>;
    }
    if (isError) {
        return <div className='min-h-screen flex justify-center items-center text-3xl font-bold'>{(error as { data: { message: string; }; }).data.message}</div>;
    }

    return (
        <div>
            <figure className='aspect-video max-w-screen-lg mx-auto'>
                <img src={data2.src} alt="" className='w-full h-full' />
            </figure>
            <div className='max-w-screen-md mx-auto'>
                <h1 className='text-4xl font-semibold text-center'>{data2.title}</h1>
                <h2 className='text-lg font-semibold text-center text-[#9c9c9c]'>{data2.category}</h2>
                <div className='flex justify-center gap-2.5  font-semibold'>
                    <p className='text-[#9c9c9c]'>Collected : {data2.goal}</p>
                    <p className='text-main'>Goal : {data2.collected}</p>
                </div>
                <p className='] text-[#9c9c9c] text-center'>{data2.description}</p>
                <div className='flex gap-6 flex-wrap justify-center my-4'>
                    <button className='bg-main w-fit text-[12px] border-main border text-white px-6 py-2.5 rounded-full hover:bg-transparent font-semibold  hover:text-main duration-300'>Donate</button>
                </div>
            </div>
        </div>
    );
};

export default SingleReliefGood;