import React, { ReactNode, useState } from 'react';
import parallex from '../../assets/parallex.jpg';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import classNames from 'classnames';




import testimonial1 from '../../assets/testimonial1.jpg';
import testimonial2 from '../../assets/testimonial2.jpg';
import testimonial3 from '../../assets/testimonial3.jpg';
import testimonial4 from '../../assets/testimonial4.jpg';
import testimonial5 from '../../assets/testimonial5.jpg';
import Container from '../reusable/Container';
import { FaQuoteRight } from 'react-icons/fa';

const RESPONSIVE_SETTINGS = [

    { breakpoint: 768, settings: { slidesToShow: 1 } },
    { breakpoint: 1350, settings: { slidesToShow: 2 } },
    { breakpoint: 2400, settings: { slidesToShow: 3 } },

];


const testimonials = [
    {
        name: 'Amelia Joseph',
        position: 'Chief Manager',
        review: "I've had a wonderful experience with Hope for All Foundation. Their dedication to their cause is truly inspiring. The impact they make in the community is tangible and heartwarming. Keep up the.",
        img: testimonial1
    },
    {
        name: 'Jacob Joshua',
        position: 'CEO',
        review: "I can't say enough good things about Hope for All Foundation. Their tireless efforts to support the less fortunate are commendable. The difference they've made in people's lives is undeniable. ",
        img: testimonial2
    },
    {
        name: 'Henry Cavil',
        position: 'CTO',
        review: "Hope for All Foundation embodies compassion and dedication. Their work not only transforms lives but also uplifts spirits. It's rare to find an organization so genuinely devoted to its cause. Kudos to the entire team!",
        img: testimonial3
    }
    ,
    {
        name: 'Ruth Wilson',
        position: 'Manager',
        review: "Hope for All Foundation is a true force for good. Their unwavering commitment to making the world a better place is both inspiring and impactful. I'm honored to support such a worthy of this cause.",
        img: testimonial4
    }
    ,
    {
        name: 'Bob Smith',
        position: 'Accountant',
        review: "I've been touched by the kindness and generosity of Hope for All Foundation. Their efforts to improve the lives of others are truly commendable. Every donation, every act of service, makes a significant difference.",
        img: testimonial5
    }
];


const Testimonial = () => {
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
    return (
        <div style={{ backgroundImage: `url(${parallex})` }} className='min-h-[750px] relative parallex-section bg-no-repeat bg-cover bg-fixed py-20'>
            <div className='relative z-10 px-3 lg:px-0'>
                <h1 className='text-center text-4xl font-semibold'>Testimonials</h1>
                <p className='text-center text-lg text-gray-500 mt-4'>These are feedbacks from our customer honest user experiance</p>
                <div className='flex justify-center mt-2 mb-10'>
                    <span className='size-5 rounded-full deco-main relative border-2 flex justify-center items-center border-main '>
                        <span className='inline-block size-2 rounded-full bg-main' />
                    </span>
                </div>
            </div>
            <Container>
                <Slider {...settings} dots={true} infinite={true} slidesToShow={3} responsive={RESPONSIVE_SETTINGS} easing='easeOut' afterChange={(current) => setActive(current)} adaptiveHeight centerPadding='0' initialSlide={0} pauseOnHover arrows={false}  >
                    {testimonials.map((testimonial, index) => (
                        <div className='relative py-10'>
                            <div className='size-14 bg-white shadow-xl left-1/2 right-1/2 -translate-x-1/2  rounded-full absolute top-3 text-main text-3xl flex justify-center items-center'>
                                <FaQuoteRight />
                            </div>
                            <Item key={index} {...testimonial} />
                        </div>

                    ))}
                </Slider>
            </Container>
        </div>
    );
};


const Item = ({ img, name, position, review }: { img: string, name: string, position: string, review: string; }) => {
    return (
        <div className='flex flex-col gap-4 items-center bg-white p-10 shadow-xl'>

            <img src={img} alt={name} className='w-[100px] h-[100px] rounded-full' />
            <h1 className='text-xl font-semibold'>{name}</h1>
            <h2 className='text-main text-lg'>{position}</h2>
            <p className='text-center text-gray-500'>{review}</p>
        </div>
    );
};


export default Testimonial;