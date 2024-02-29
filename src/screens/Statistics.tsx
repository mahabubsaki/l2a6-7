import React from 'react';
import { useGetALLQuery } from '../redux/features/goods/goodsAPI';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { ReliefInterFace } from './SingleReliefGood';



const Statistics = () => {
    const { data = [], isError, error, isLoading } = useGetALLQuery([]);
    const datas: { goal: number, collected: number, name: string; }[] = data?.map((item: ReliefInterFace) => ({
        name: item.title.length > 10 ? item.title.slice(0, 10) + '...' : item.title,
        needMore: item.goal - item.collected,
        collected: item.collected,
    }));

    if (isLoading) {
        return <div>Loading...</div>;
    }
    if (isError) {
        return <div>{(error as { data: { message: string; }; }).data?.message || 'Unknown Error'}</div>;
    }
    return (
        <div>
            <h1 className='text-center text-3xl mb-4'>Donation Statistics </h1>
            <div className='h-[500px]'>
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
                        barSize={15} data={datas}>
                        <XAxis dataKey="name" scale="point" padding={{ left: 10, right: 10 }} fontSize={'10px'} interval={0} />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <CartesianGrid strokeDasharray="3 3" />
                        <Bar dataKey="collected" stackId="a" fill="#82ca9d" />
                        <Bar dataKey="needMore" stackId="a" fill="#8884d8" />

                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};

export default Statistics;