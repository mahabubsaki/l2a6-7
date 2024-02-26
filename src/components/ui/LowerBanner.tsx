
import img1 from '../../assets/left-box-bg.jpg';
import img2 from '../../assets/center-box-bg.jpg';
import img3 from '../../assets/right-box-bg.jpg';
import { CiDollar } from 'react-icons/ci';
import { FaPeopleGroup } from 'react-icons/fa6';

const LowerBanner = () => {
    return (
        <div className='grid grid-cols-3 mb-20'>
            {[{ img: img1, icon: <CiDollar />, title: 'DONATION', action: 'DONATE NOW', subHeading: 'Donate different relief goods now to make impact' }, { img: img2, icon: <FaPeopleGroup />, title: 'VOLUNTEER', action: 'JOIN NOW', subHeading: 'Join our volunteer team to get all the updates about our goods distribution' }, { img: img1, icon: <CiDollar />, title: 'DONATION', action: 'DONATE NOW', subHeading: 'Donate different relief goods now to make impact' }].map((img, index) => (
                <EachBanner img={img} idx={index} key={index} />
            ))}
        </div>
    );
};


const EachBanner = ({ img, idx }: { img: string; idx: number; }) => {
    return (
        <div className='min-h-[350px] relative bg-no-repeat bg-cover' style={{ backgroundImage: `url(${img})` }}>
            {idx === 1 ? <div className='absolute inset-0 duration-300 bg-[rgba(250,119,61,.9)] hover:bg-[rgba(201,66,9,.9)]' /> : <div className='absolute inset-0 duration-300 bg-[rgba(235,83,16,.9)] hover:bg-[rgba(201,66,9,.9)]' />}

        </div>
    );
};


export default LowerBanner;