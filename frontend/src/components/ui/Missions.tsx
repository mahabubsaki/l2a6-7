import { motion } from 'framer-motion';
import { FaHandsHelping } from 'react-icons/fa';
import { GiEternalLove } from 'react-icons/gi';
import { GoGraph } from 'react-icons/go';
import { HiUserGroup } from 'react-icons/hi';
import { MdOutlineAddHomeWork, MdOutlineCastForEducation } from 'react-icons/md';
import { RiCommunityFill } from 'react-icons/ri';
import { TbNetwork } from 'react-icons/tb';


const missionData = [
    { icon: <MdOutlineCastForEducation size={40} />, title: 'Charity For Education', description: 'Through various initiatives, including scholarships, school supplies drives, and educational programs' },
    { icon: <FaHandsHelping size={40} />, title: 'Feed For Hungry Child', description: 'Our mission is to provide nutritious meals to children in need.' },
    { icon: <MdOutlineAddHomeWork size={40} />, title: 'Home For Homeless', description: 'We strive to provide safe, secure, and comfortable housing for those who are homeless.' },
    { title: "Empowering Communities", description: "Through various initiatives, we empower communities to thrive and succeed.", icon: <RiCommunityFill size={40} /> },
    { title: "Together We Can Make a Difference", description: "Join us in our mission to create positive change and make a lasting impact.", icon: <HiUserGroup size={40} /> },
    { title: "Building Hope, Changing Lives", description: "We strive to build hope and transform lives through our charitable programs.", icon: <GoGraph size={40} /> },
    { title: "Uniting Hearts, Changing Futures", description: "By uniting hearts and minds, we're changing the future for the better.", icon: <TbNetwork size={40} /> },
    { title: "Transforming Lives Through Kindness", description: "Discover the transformative power of kindness in our efforts to change lives.", icon: <GiEternalLove size={40} /> },


];

const Missions = () => {
    return (
        <div className='py-20'>
            <motion.h1 initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1, type: 'tween', ease: 'easeOut' }} className='text-center text-4xl font-semibold'> About Us</motion.h1>
            <motion.p initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1, type: 'tween', ease: 'easeOut' }} className='text-center text-lg text-gray-500 mt-4'>We are a non-profit charity organization that aims to help the needy and the poor</motion.p>
            <div className='flex justify-center mt-2 mb-16'>
                <span className='size-5 rounded-full deco relative border-2 flex justify-center items-center border-[#E6E6E6] '>
                    <span className='inline-block size-2 rounded-full bg-[#EAEAEA]' />
                </span>
            </div>
            <motion.div viewport={{ once: true }} variants={{
                notInView: {
                    opacity: 0, y: 50
                },
                inView: {
                    opacity: 1, y: 0,
                    transition: {
                        staggerChildren: 0.3
                    }
                }
            }} initial='notInView' whileInView='inView' className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 max-w-screen-xl mx-auto gap-7'>
                {missionData.map((item, index) => (
                    <Item {...item} key={index} />
                ))}

            </motion.div>
        </div>
    );

};


const Item = ({ icon, title, description }: { icon: JSX.Element, title: string, description: string; }) => {
    return (
        <motion.div viewport={{ once: true }} variants={{
            notInView: {
                opacity: 0, y: 50
            },
            inView: {
                opacity: 1, y: 0,
            }
        }} className='flex  gap-7 max-w-[370px] mx-auto  bg-white p-8 shadow-xl group'>
            <div>
                <div className='bg-main p-5 relative z-10 border-2 group-hover:bg-white duration-300  border-main'>
                    <div className='group-hover:text-main text-white'>
                        {icon}
                    </div>
                    <div className='absolute bg-white rotate-[45deg] -bottom-[19px] -right-[19px] z-20 size-8' />
                </div>
            </div>
            <div className='flex flex-col gap-5'>
                <h1 className='text-xl font-semibold'>{title}</h1>
                <p className=' text-[#9c9c9c] text-sm'>{description}</p>
            </div>
        </motion.div>
    );
};


export default Missions;