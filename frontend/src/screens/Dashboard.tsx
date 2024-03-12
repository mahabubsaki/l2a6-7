import { Input } from '@chakra-ui/react';
import classNames from 'classnames';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { Toaster } from 'sonner';

const Dashboard = () => {
    const { pathname } = useLocation();
    return (
        <div className='grid grid-cols-12'>
            <div className='md:col-span-2 col-span-12 p-5 min-h-[100dvh] bg-slate-100'>
                <h1 className='text-center text-2xl text-black'>Dashboard</h1>
                <ul>
                    <Link to={'/dashboard'}>
                        <li className={classNames('py-2.5 px-5 my-2.5 duration-300 border-2 border-white cursor-pointer rounded-full', {
                            'bg-main text-white': pathname === '/dashboard',
                            'bg-white text-main dark:text-black': pathname !== '/dashboard',
                        })}>Statistics</li></Link>
                    <Link to={'/dashboard/supplies'}>
                        <li className={classNames('py-2.5 px-5 my-2.5 duration-300 border-2 border-white cursor-pointer rounded-full', {
                            'bg-main text-white': pathname === '/dashboard/supplies',
                            'bg-white text-main dark:text-black': pathname !== '/dashboard/supplies',
                        })}>Supplies</li></Link>
                    <Link to={'/dashboard/create-supply'}>
                        <li className={classNames('py-2.5 px-5 my-2.5 duration-300 border-2 border-white cursor-pointer  rounded-full', {
                            'bg-main text-white': pathname === '/dashboard/create-supply',
                            'bg-white text-main dark:text-black': pathname !== '/dashboard/create-supply',
                        })}>Create Supply</li></Link>
                    <Link to={'/dashboard/create-testimonial'}>
                        <li className={classNames('py-2.5 px-5 my-2.5 duration-300 border-2 border-white cursor-pointer  rounded-full', {
                            'bg-main text-white': pathname === '/dashboard/create-testimonial',
                            'bg-white text-main dark:text-black': pathname !== '/dashboard/create-testimonial',
                        })}>Create Testimonial</li></Link>
                    <Link to={'/'}>
                        <li className={classNames('py-2.5 px-5 my-2.5 duration-300 border-2 border-white cursor-pointer  rounded-full', {
                            'bg-main text-white': pathname === '/',
                            'bg-white text-main dark:text-black': pathname !== '/',
                        })}>Home</li></Link>

                    <li>
                        <Input placeholder='Search...' />
                    </li>

                </ul>
            </div >
            <div className='md:col-span-10 col-span-12 mt-10 px-6 md:px-0'>
                <Outlet />
                <Toaster duration={1000} richColors position="top-center" visibleToasts={1} />
            </div>
        </div>
    );
};

export default Dashboard;