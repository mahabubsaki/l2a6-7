
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { HiHeart } from 'react-icons/hi';
import { Link } from 'react-router-dom';

const ReliefItem = ({ goal, collected, title, donaters, description, src, category, _id }: { goal: number, collected: number, title: string, donaters: number, description: string; src: string; category: string; _id: string; }) => {
    return (
        <div className='border-4 border-[#eee]'>
            <figure className='aspect-video relative'>
                <img src={src} alt={title + 'img'} className='w-full h-full' />
                <div className='size-[60px] bg-main absolute rounded-full -bottom-[30px] left-1/2 right-1/2 -translate-x-1/2 font-bold'>
                    <CircularProgressbar text={`${((collected / goal) * 100).toFixed(0)}%`} value={+((collected / goal) * 100).toFixed(0)} styles={buildStyles({
                        pathColor: '#fa7744',
                        textColor: '#fff',
                        textSize: '24px',
                        trailColor: '#959595',
                        rotation: 0.7,
                        pathTransitionDuration: 2,
                        strokeLinecap: 'butt',
                        backgroundColor: '#fa7744'
                    })} />
                </div>
            </figure>
            <div className='pt-10 pb-8 px-5 flex flex-col gap-4'>
                <h1 className='text-lg uppercase font-semibold'>{title}</h1>
                <h2 className=' uppercase font-semibold'>Category : {category}</h2>
                <div className='flex gap-2.5 text-[12px] font-semibold'>
                    <p className='text-[#9c9c9c]'>Collected : {goal}</p>
                    <p className='text-main'>Goal : {collected}</p>
                </div>
                <p className='text-[12px] text-[#9c9c9c]'>{description}</p>
                <div className='flex gap-6 flex-wrap'>
                    <Link to={'/relief/' + _id}>
                        <button className='bg-main w-fit text-[12px] border-main border text-white px-6 py-2.5 rounded-full hover:bg-transparent font-semibold  hover:text-main duration-300'>Details</button></Link>
                    <button className='w-fit text-[12px] border-main border hover:text-white px-6 py-2.5 rounded-full flex items-center gap-1 hover:bg-main bg-white font-semibold  text-main duration-300'><HiHeart />{donaters} Donaters</button>
                </div>
            </div>

        </div>
    );
};

export default ReliefItem;