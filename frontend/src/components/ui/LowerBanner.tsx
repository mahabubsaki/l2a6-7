
import img1 from '../../assets/left-box-bg.jpg';
import img2 from '../../assets/center-box-bg.jpg';
import img3 from '../../assets/right-box-bg.jpg';
import { CiDollar } from 'react-icons/ci';
import { FaPeopleGroup } from 'react-icons/fa6';
import { TbHeartHandshake } from 'react-icons/tb';


const LowerBanner = () => {
    return (
        <div className='grid xl:grid-cols-3 mb-20 grid-cols-1 md:grid-cols-2'>
            {[{ img: img1, icon: <CiDollar size={70} className='text-white' />, title: 'DONATION', action: 'DONATE NOW', subHeading: 'Donate different relief goods now to make impact on those peoples life who need it' }, { img: img2, icon: <FaPeopleGroup size={70} className='text-white' />, title: 'VOLUNTEER', action: 'JOIN NOW', subHeading: 'Join our volunteer team to get all the updates about our goods distribution' }, { img: img3, icon: <TbHeartHandshake size={70} className='text-white' />, title: 'FUNDRAISE', action: 'READ MORE', subHeading: 'Explore more if you want to raise a fund of any kind of relief goods for people' }].map((img, index) => (
                <EachBanner {...img} idx={index} key={index} />
            ))}
        </div>
    );
};


const EachBanner = ({ img, idx, title, action, subHeading, icon }: { img: string; idx: number; icon: JSX.Element, title: string, action: string, subHeading: string; }) => {
    return (
        <div className='min-h-[350px] relative bg-no-repeat bg-cover group' style={{ backgroundImage: `url(${img})` }}>
            {idx === 1 ? <div className='absolute z-10 inset-0 duration-300 bg-[rgba(250,119,61,.9)] group-hover:bg-[rgba(201,66,9,.9)]' /> : <div className='absolute inset-0 z-10 duration-300 bg-[rgba(235,83,16,.9)] group-hover:bg-[rgba(201,66,9,.9)]' />}
            <div className='z-20 relative flex gap-4 justify-center items-center h-full px-3'>
                <div>
                    {icon}
                </div>
                <div className='flex flex-col gap-4 text-white'>
                    <h2 className='text-2xl font-bold'>{title}</h2>
                    <p className='max-w-72'>{subHeading}</p>
                    <button className='bg-transparent w-fit border-white border-2 text-white px-6 py-2.5 rounded-full hover:bg-transparent font-semibold  hover:text-main duration-300 hover:bg-white'>{action}</button>
                </div>
            </div>
        </div>
    );
};


export default LowerBanner;