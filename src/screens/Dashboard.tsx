import classNames from 'classnames';
import React from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';

const Dashboard = () => {
    const { pathname } = useLocation();
    return (
        <div className='grid grid-cols-12'>
            <div className='md:col-span-2 col-span-12 p-5 h-[100dvh] bg-slate-100'>
                <h1 className='text-center text-2xl'>Dashboard</h1>
                <ul>
                    <Link to={'/dashboard/supplies'}>
                        <li className={classNames('py-2.5 px-5 my-2.5 duration-300 border-2 border-white cursor-pointer rounded-full', {
                            'bg-main text-white': pathname === '/dashboard/supplies',
                            'bg-white text-main': pathname !== '/dashboard/supplies',
                        })}>Supplies</li></Link>
                    <Link to={'/dashboard/create-supply'}>
                        <li className={classNames('py-2.5 px-5 my-2.5 duration-300 border-2 border-white cursor-pointer  rounded-full', {
                            'bg-main text-white': pathname === '/dashboard/create-supply',
                            'bg-white text-main': pathname !== '/dashboard/create-supply',
                        })}>Create Supply</li></Link>

                </ul>
            </div >
            <div className='md:col-span-10 col-span-12'>
                <Outlet />
            </div>
        </div>
    );
};

export default Dashboard;