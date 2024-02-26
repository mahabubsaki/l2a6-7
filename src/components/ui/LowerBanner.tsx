
import img1 from '../../assets/left-box-bg.jpg';
import img2 from '../../assets/center-box-bg.jpg';
import img3 from '../../assets/right-box-bg.jpg';

const LowerBanner = () => {
    return (
        <div className='grid grid-cols-3 mb-20'>
            {[img1, img2, img3].map((img, index) => (
                <EachBanner img={img} idx={index} key={index} />
            ))}
        </div>
    );
};


const EachBanner = ({ img, idx }: { img: string; idx: number; }) => {
    return (
        <div className='min-h-[250px] relative' style={{ backgroundImage: `url(${img})` }}>
            {idx === 1 ? <div className='absolute inset-0 bg-[rgba(250,119,61,.9)]' /> : <div className='absolute inset-0 bg-[rgba(235,83,16,.9)]' />}

        </div>
    );
};


export default LowerBanner;