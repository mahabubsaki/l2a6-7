import { FaLocationDot } from 'react-icons/fa6';
import img from '../../assets/logo.png';
import { FaDribbble, FaFacebookF, FaGooglePlus, FaLinkedinIn, FaPhoneAlt, FaTwitter } from 'react-icons/fa';
import { MdOutlineMailOutline } from 'react-icons/md';
const Footer = () => {
    return (
        <div className='bg-[#262F36]'>
            <div className="py-24  px-4 ">
                <div className="max-w-screen-xl mx-auto grid xl:grid-cols-3 gap-5 grid-cols-1 md:grid-cols-2">
                    <div>
                        <div className='flex items-center gap-2 select-none mr-0 md:mr-4'>
                            <img src={img} alt="logo" />
                            <div className=' flex flex-col gap-1 items-center'>
                                <h1 className='text-3xl uppercase font-bold text-white'>Aid<span className='text-main'>Pulse</span></h1>
                                <p className='text-main text-xs'>Non Profit Charity</p>
                            </div>
                        </div>
                        <p className='text-[13px] text-[#c9c9c9] my-5 '>We work for the society and the needy person who actually deserve this</p>
                        <div className='flex flex-col gap-5  text-[#c9c9c9] text-[13px] mb-5'>
                            <div className='flex gap-4 items-center'>
                                <FaLocationDot size={20} />
                                <p>60 Grant Ave. Carteret NJ 0708</p>
                            </div>

                            <div className='flex gap-4 items-center'>
                                <FaPhoneAlt size={20} />
                                <p>(880) 1723801729</p>
                            </div>
                            <div className='flex gap-4 items-center'>
                                <MdOutlineMailOutline size={20} />
                                <p>aidpulse@gmail.com</p>
                            </div>

                        </div>
                        <div className='flex gap-2 text-[#c9c9c9]'>
                            <span className='size-[32px] rounded-full hover:border-main hover:bg-main bg-transparent duration-300 cursor-pointer flex justify-center items-center border border-[#c9c9c9]'>
                                <FaFacebookF size={15} />
                            </span>
                            <span className='size-[32px] rounded-full hover:border-main hover:bg-main bg-transparent duration-300 cursor-pointer flex justify-center items-center border border-[#c9c9c9]'>
                                <FaTwitter size={15} />
                            </span>
                            <span className='size-[32px] rounded-full hover:border-main hover:bg-main bg-transparent duration-300 cursor-pointer flex justify-center items-center border border-[#c9c9c9]'>
                                <FaGooglePlus size={15} />
                            </span>
                            <span className='size-[32px] rounded-full hover:border-main hover:bg-main bg-transparent duration-300 cursor-pointer flex justify-center items-center border border-[#c9c9c9]'>
                                <FaLinkedinIn size={15} />
                            </span>
                            <span className='size-[32px] rounded-full hover:border-main hover:bg-main bg-transparent duration-300 cursor-pointer flex justify-center items-center border border-[#c9c9c9]'>
                                <FaDribbble size={15} />
                            </span>
                        </div>
                    </div>
                    <div>
                        <h1 className='text-white text-xl font-semibold mb-7 text-left md:text-center'>Pages</h1>
                        <ul className='text-[#c9c9c9] text-[14px] flex flex-col gap-5 items-start md:items-center'>
                            <li className='cursor-pointer hover:text-main duration-300'>Home</li>
                            <li className='cursor-pointer hover:text-main duration-300'>About Us</li>
                            <li className='cursor-pointer hover:text-main duration-300'>Our Services</li>
                            <li className='cursor-pointer hover:text-main duration-300'>Testimonials</li>
                            <li className='cursor-pointer hover:text-main duration-300'>Contact Us</li>
                            <li className='cursor-pointer hover:text-main duration-300'>Faq</li>
                            <li className='cursor-pointer hover:text-main duration-300'>Archives</li>
                        </ul>
                    </div>
                    <div>
                        <h2 className='text-white text-xl font-semibold mb-7'>Contact Form</h2>
                        <form onSubmit={(e) => e.preventDefault()} className='flex flex-col gap-2.5'>
                            <input type="text" placeholder="Your Name" className='w-full bg-transparent  border-[#c9c9c9] text-[#c9c9c9] bg-[#2C353C] text-[14px] py-2 h-[50px] outline-none focus:outline-none duration-300 px-5' />
                            <input type="text" placeholder="Your Email" className='w-full bg-transparent  border-[#c9c9c9] outline-none focus:outline-none text-[#c9c9c9] bg-[#2C353C] text-[14px] py-2 h-[50px]  duration-300 px-5' />
                            <textarea name="" id="" placeholder='Your Message' className='w-full bg-transparent  border-[#c9c9c9] bg-[#2C353C] text-[#c9c9c9] text-[14px] py-2 px-5 outline-none h-[120px] resize-none focus:outline-none  duration-300'></textarea>
                            <input type="submit" value="Send Message" className='bg-main text-white py-2 px-4 cursor-pointer hover:bg-opacity-85 hover:text-black duration-300  border-none focus:outline-none' />
                        </form>
                    </div>
                </div>
            </div>
            <div className='border-t-2 border-[#2D373F] py-6 text-center'>
                <p className='text-white text-sm'>Website created by <a href="https://github.com/mahabubsaki" target='_blank' className='text-main font-semibold'>Mahabub Saki</a> with love & care</p>
            </div>
        </div>
    );
};

export default Footer;