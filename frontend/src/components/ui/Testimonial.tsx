import { ReactNode, useState } from 'react';
import parallex from '../../assets/parallex.jpg';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import classNames from 'classnames';





import Container from '../reusable/Container';
import { FaQuoteRight } from 'react-icons/fa';
import { motion } from 'framer-motion';

import { useGetAllTestimonialQuery } from '../../redux/features/testimonial/testimonialAPI';

const RESPONSIVE_SETTINGS = [

    { breakpoint: 768, settings: { slidesToShow: 1 } },
    { breakpoint: 1350, settings: { slidesToShow: 2 } },
    { breakpoint: 2400, settings: { slidesToShow: 3 } },

];





const Testimonial = () => {

    const { data: testimonials, isLoading, isError } = useGetAllTestimonialQuery([]);

    const [active, setActive] = useState(0);

    const settings = {
        appendDots: (dots: ReactNode) => (
            <div>
                <ul> {dots} </ul>
            </div>
        ),
        customPaging: (i: number) => (
            <div
                className={classNames('size-2.5 mt-10 border-2 border-main  rounded-full', {
                    'bg-main': active === i,
                    'bg-white': active !== i

                })}
            >

            </div>
        )
    };

    if (isLoading) return <div>Loading...</div>;
    if (isError) return <div>Error...</div>;
    return (
        <div style={{ backgroundImage: `url(${parallex})` }} className='min-h-[750px] relative parallex-section bg-no-repeat bg-cover bg-fixed py-20'>
            <div className='relative z-10 px-3 lg:px-0'>
                <motion.h1 initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1, type: 'tween', ease: 'easeOut' }} className='text-center text-4xl font-semibold'>Top Testimonials</motion.h1>
                <motion.p initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1, type: 'tween', ease: 'easeOut' }} className='text-center text-lg text-gray-500 mt-4'>These are feedbacks from our customer honest user experiance</motion.p>
                <div className='flex justify-center mt-2 mb-10'>
                    <span className='size-5 rounded-full deco-main relative border-2 flex justify-center items-center border-main '>
                        <span className='inline-block size-2 rounded-full bg-main' />
                    </span>
                </div>
            </div>
            <Container>
                <Slider {...settings} autoplay dots={true} infinite={true} slidesToShow={3} responsive={RESPONSIVE_SETTINGS} easing='easeOut' afterChange={(current) => setActive(current)} adaptiveHeight centerPadding='0' initialSlide={0} pauseOnHover arrows={false}  >
                    {testimonials.map((testimonial: Record<string, unknown>, index: number) => (
                        <div className='relative py-10 ' key={index}>
                            <div className='size-14 bg-white dark:bg-black shadow-xl left-1/2 right-1/2 -translate-x-1/2  rounded-full absolute top-3 text-main dark:text-dark-main text-3xl flex justify-center items-center'>
                                <FaQuoteRight />
                            </div>

                            <Item key={index} {...(testimonial as { img: string, name: string, position: string, review: string; })} />

                        </div>

                    ))}
                </Slider>
            </Container>
        </div>
    );
};


const Item = ({ img, name, position, review }: { img: string, name: string, position: string, review: string; }) => {
    return (
        <div className='flex flex-col gap-4 items-center min-h-[450px] bg-white dark:bg-gray-400 p-10 shadow-xl'>

            <img src={img} alt={name} className='w-[100px] h-[100px] rounded-full' />
            <h1 className='text-xl font-semibold'>{name}</h1>
            <h2 className='text-main dark:text-dark-main text-lg'>{position}</h2>
            <p className='text-center text-gray-500'>{review}</p>
        </div>
    );
};


export default Testimonial;