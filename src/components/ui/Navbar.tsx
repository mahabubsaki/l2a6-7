
import Container from '../reusable/Container';
import ContainerFluid from '../reusable/ContainerFluid';
import { FaFacebookF, FaTwitter, FaGooglePlus, FaLinkedinIn, FaDribbble } from "react-icons/fa";

const Navbar = () => {
    return (
        <ContainerFluid>
            <TopNav />
        </ContainerFluid>
    );
};


const TopNav = () => {
    return (
        <div className='border-b border-primary-border'>
            <Container>
                <div className='h-12 flex justify-between items-center'>
                    <p className='text-sm text-secondary'>Support Us : <span className='text-primary'>aidpulse@mail.com</span></p>
                    <ul className='flex text-icon h-full'>
                        <li className='px-4 hover:text-white duration-300 hover:bg-main hover:border-main cursor-pointer hover: border-r border-l-2 h-full flex items-center border-collapse border-primary-border'><FaFacebookF size={15} /></li>
                        <li className='px-4 hover:text-white duration-300 hover:bg-main hover:border-main cursor-pointer hover: border-x h-full flex items-center border-collapse border-primary-border'><FaTwitter size={15} /></li>
                        <li className='px-4 hover:text-white duration-300 hover:bg-main hover:border-main cursor-pointer hover: border-x h-full flex items-center border-collapse border-primary-border'><FaGooglePlus size={15} /></li>
                        <li className='px-4 hover:text-white duration-300 hover:bg-main hover:border-main cursor-pointer hover: border-x h-full flex items-center border-collapse border-primary-border'><FaLinkedinIn size={15} /></li>
                        <li className='px-4 hover:text-white duration-300 hover:bg-main hover:border-main cursor-pointer hover: border-l border-r-2 h-full flex items-center border-collapse border-primary-border'><FaDribbble size={15} /></li>
                    </ul>
                </div>
            </Container>
        </div>
    );
};

export default Navbar;