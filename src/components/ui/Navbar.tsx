
import Container from '../reusable/Container';
import ContainerFluid from '../reusable/ContainerFluid';
import { FaFacebookF, FaTwitter, FaGooglePlus, FaLinkedinIn, FaDribbble } from "react-icons/fa";
import img from '../../assets/logo.png';
import { MdOutlineAddLocationAlt, MdOutlineMailOutline, MdOutlinePhoneInTalk } from 'react-icons/md';

const Navbar = () => {
    return (
        <ContainerFluid>
            <TopNav />
            <MiddleNav />
        </ContainerFluid>
    );
};


const TopNav = () => {
    return (
        <div className='border-b border-primary-border'>
            <Container>
                <div className='h-auto sm:h-12 flex justify-between items-center gap-5 py-2 sm:py-0 flex-col-reverse sm:flex-row'>
                    <p className='text-xs text-secondary'>Support Us : <a className='text-primary' href='mailto:aidpulse@mail.com'>aidpulse@mail.com</a></p>
                    <ul className='flex text-icon h-full'>
                        <li className='px-4 h-12 sm:h-full border-b sm:border-b-0 hover:text-white duration-300 hover:bg-main hover:border-main cursor-pointer hover: border-r border-l-2  flex items-center border-collapse border-primary-border'><FaFacebookF size={15} /></li>
                        <li className='px-4 h-12 sm:h-full border-b sm:border-b-0 hover:text-white duration-300 hover:bg-main hover:border-main cursor-pointer hover: border-x  flex items-center border-collapse border-primary-border'><FaTwitter size={15} /></li>
                        <li className='px-4 h-12 sm:h-full border-b sm:border-b-0 hover:text-white duration-300 hover:bg-main hover:border-main cursor-pointer hover: border-x  flex items-center border-collapse border-primary-border'><FaGooglePlus size={15} /></li>
                        <li className='px-4 h-12 sm:h-full border-b sm:border-b-0 hover:text-white duration-300 hover:bg-main hover:border-main cursor-pointer hover: border-x  flex items-center border-collapse border-primary-border'><FaLinkedinIn size={15} /></li>
                        <li className='px-4 h-12 sm:h-full border-b sm:border-b-0 hover:text-white duration-300 hover:bg-main hover:border-main cursor-pointer hover: border-l border-r-2  flex items-center border-collapse border-primary-border'><FaDribbble size={15} /></li>
                    </ul>
                </div>
            </Container>
        </div>
    );
};



const MiddleNav = () => {
    return (
        <Container>
            <div className='py-[35px]'>
                <div className='flex justify-between items-center flex-col md:flex-row gap-8'>
                    <div className='flex items-center gap-2 select-none mr-0 md:mr-4'>
                        <img src={img} alt="logo" />
                        <div className=' flex flex-col gap-1 items-center'>
                            <h1 className='text-3xl uppercase font-bold'>Aid<span className='text-main'>Pulse</span></h1>
                            <p className='text-main text-xs'>Non Profit Charity</p>
                        </div>
                    </div>
                    <div className='flex gap-[35px] text-[13px] flex-1 flex-wrap'>
                        <div className='flex flex-1 gap-[15px] items-center'>
                            <button className='size-14 -rotate-45 rounded-full border border-primary-border flex justify-center items-center'>
                                <MdOutlineMailOutline className='text-main' size={30} />
                            </button>
                            <div className='flex flex-col gap-2 '>
                                <h2 className='font-semibold text-black'>EMAIL</h2>
                                <a className='text-primary' href='mailto:aidpulse@mail.com'>aidpulse@mail.com</a>
                            </div>
                        </div>
                        <div className='flex flex-1 gap-[15px] items-center'>
                            <button className='size-14 rounded-full border border-primary-border flex justify-center items-center'>

                                <MdOutlinePhoneInTalk className='text-main' size={30} />
                            </button>
                            <div className='flex flex-col gap-2 '>
                                <h2 className='font-semibold text-black'>PHONE</h2>
                                <span className='text-primary' >+8801723443234</span>
                            </div>
                        </div>
                        <div className='flex flex-1 gap-[15px] items-center'>
                            <button className='size-14 rounded-full border border-primary-border flex justify-center items-center'>

                                <MdOutlineAddLocationAlt className='text-main' size={30} />
                            </button>
                            <div className='flex flex-col gap-2 '>
                                <h2 className='font-semibold text-black'>ADDRESS</h2>
                                <span className='text-primary' >Tongi , Gazipur</span>
                            </div>
                        </div>
                        <div className='flex-1 flex justify-center items-center '>
                            <button className='bg-main border-main border text-white px-6 py-2.5 rounded-full hover:bg-transparent hover:text-main duration-300'>Donate Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default Navbar;