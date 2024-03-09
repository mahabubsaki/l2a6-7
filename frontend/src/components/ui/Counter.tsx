
import { LiaAwardSolid, LiaHandsHelpingSolid } from 'react-icons/lia';
import { MdOutlineGroups } from 'react-icons/md';
import CounterFM from '../reusable/CounterFM';


const Counter = () => {
    return (
        <div className='bg-[#eb5310] px-5  py-[55px] mt-5'>
            <div className=" flex text-center max-w-screen-xl mx-auto xl:text-left items-center flex-col xl:flex-row  gap-20">
                <div className="flex flex-col flex-1  text-white gap-5 ">
                    <h2 className="text-4xl italic">We are served since <span className='font-bold'>35 years </span>
                        to helpless people with trust and
                        we are happy</h2>
                    <div className='flex justify-center xl:justify-start'>
                        <button className='bg-white  w-fit text-[12px] border-white border text-main  px-6 py-2.5 rounded-full text-sm hover:bg-transparent font-semibold  hover:text-white duration-300'>BE A PART OF US</button>
                    </div>
                </div>
                <div className='flex-1 flex flex-wrap gap-16 justify-center text-white'>
                    <div className='flex flex-col items-center'>
                        <LiaAwardSolid size={120} className='mb-7' />
                        <p className='text-5xl mb-5 font-semibold'><CounterFM value={30} /></p>
                        <p className='text-xs font-semibold'>TOTAL AWARDS</p>
                    </div>
                    <div className='flex flex-col items-center'>

                        <MdOutlineGroups size={120} className='mb-7' />
                        <p className='text-5xl mb-5 font-semibold'><CounterFM value={200} /></p>
                        <p className='text-xs font-semibold'>TOTAL VOLUNTEERS</p>
                    </div>
                    <div className='flex flex-col items-center'>


                        <LiaHandsHelpingSolid size={120} className='mb-7' />

                        <p className='text-5xl mb-5 font-semibold'><CounterFM value={50} /></p>
                        <p className='text-xs font-semibold'>TOTAL PROJECTS</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Counter;