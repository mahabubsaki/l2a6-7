import { animate, motion, stagger, useInView } from 'framer-motion';
import ReliefItem from '../reusable/ReliefItem';
import { useEffect, useRef } from 'react';


const reliefData = [
    {
        id: 1,
        src: "https://images.unsplash.com/photo-1600091474842-83bb9c05a723?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Zmlyc3QlMjBhaWQlMjBraXR8ZW58MHx8MHx8fDA%3D",
        title: 'First Aid Supplies',
        collected: 120,
        category: 'Medical',
        goal: 200,
        description: 'First Aid Supplies are not only crucial for those people who are in flooded or disaster areas, but they are also essential for everyday situations. They provide immediate assistance to individuals suffering from minor injuries or health issues. Having a well-stocked first aid kit in your home, workplace, or vehicle can make a significant difference in managing an emergency situation effectively until professional medical help arrives.',
        donaters: 30
    },
    {
        id: 2,
        src: "https://images.unsplash.com/photo-1560243563-062bfc001d68?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Q2xvdGhpbmd8ZW58MHx8MHx8fDA%3D",
        title: 'Dress & Blankets',
        category: 'Clothing',
        collected: 70,
        goal: 250,
        description: 'Dress & Blankets is one of the most basic needs of human beings. It is a way to protect ourselves from the environment, whether it is cold, hot, windy, or rainy. It also provides a barrier between our skin and the environment, protecting us from harmful elements. Clothing is also a way to express our personality and individuality. It is a way to show the world who we are and what we stand for. Clothing is also a way to show our creativity and sense of style. It is a way to make a statement and stand out from the crowd.',
        donaters: 15
    },
    {
        id: 3,
        src: "https://images.unsplash.com/photo-1580628646346-ed39273f51b9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bW9zcXVpdG8lMjBuZXR8ZW58MHx8MHx8fDA%3D",
        title: 'Mosquito Nets',
        category: 'Shelter',
        collected: 15,
        goal: 40,
        description: 'Mosquito nets are a simple and effective way to protect people from mosquito bites, which can cause malaria, dengue fever, and other life-threatening diseases. They are an essential tool in the fight against malaria, which kills hundreds of thousands of people every year, most of them children under the age of five. Mosquito nets are also an important part of efforts to control the spread of other mosquito-borne diseases, such as dengue fever, Zika virus, and chikungunya.',
        donaters: 5
    },
    {
        id: 4,
        src: "https://images.unsplash.com/photo-1523362628745-0c100150b504?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8d2F0ZXIlMjBib3R0bGV8ZW58MHx8MHx8fDA%3D",
        title: 'Water',
        collected: 150,
        category: 'Food',
        goal: 200,
        description: 'Water is essential for life. It is a basic human need, and access to clean and safe water is a fundamental human right. However, millions of people around the world still lack access to clean and safe water. This is a major public health issue, as it leads to a wide range of serious health problems, including waterborne diseases, malnutrition, and even death. Lack of access to clean and safe water also has a significant impact on education, economic',
        donaters: 40
    },
    {
        id: 5,
        src: "https://images.unsplash.com/photo-1430163393927-3dab9af7ea38?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Tm9uJTIwcGVyaXNoYWJsZSUyMEZvb2R8ZW58MHx8MHx8fDA%3D",
        title: 'Non-perishable food',
        category: 'Food',
        collected: 200,
        goal: 300,
        description: 'Non-perishable food items are those that have a long shelf life and do not require refrigeration. They are essential for emergency situations, such as natural disasters, power outages, and other situations where access to fresh food is limited. Non-perishable food items are also important for food banks and other charitable organizations that provide food to people in need. They are a convenient and cost-effective way to help ensure that everyone has access to the food they need to stay healthy and',
        donaters: 60
    },
    {
        id: 6,
        src: "https://plus.unsplash.com/premium_photo-1663957923326-f05b0b3912e8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8SHlnaWVuZSUyMFN1cHBsaWVzfGVufDB8fDB8fHww",
        title: 'Hygiene Supplies',
        category: 'Medical',
        collected: 100,
        goal: 150,
        description: 'Hygiene supplies are essential for maintaining good health and preventing the spread of disease. They include items such as soap, hand sanitizer, toothpaste, toothbrushes, and feminine hygiene products. These supplies are especially important in emergency situations, such as natural disasters, when access to clean water and sanitation facilities may be limited. They are also important for everyday use, as they help prevent the spread of germs and bacteria that can cause illness and infection.',
        donaters: 25
    },
];


const TopRelief = () => {


    const ref = useRef<HTMLDivElement | null>(null);
    const isInView = useInView(ref, {
        amount: 0.1
    });
    useEffect(() => {

        if (isInView) {
            (async function () {
                await animate("#top-relief img", { scale: [0, 1] }, { type: "spring", delay: stagger(0.4), });

            })();
        }
    }, [isInView]);
    return (
        <div id='top-relief' ref={ref} className='my-20'>
            <motion.h1 initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1, type: 'tween', ease: 'easeOut' }} className='text-center text-4xl font-semibold'>Top Relief Goods</motion.h1>
            <motion.p initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1, type: 'tween', ease: 'easeOut' }} className='text-center text-lg text-gray-500 mt-4'>We are providing these relief goods to the people who are in need</motion.p>
            <div className='flex justify-center mt-2 mb-16'>
                <span className='size-5 rounded-full deco relative border-2 flex justify-center items-center border-[#E6E6E6] '>
                    <span className='inline-block size-2 rounded-full bg-[#EAEAEA]' />
                </span>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 max-w-screen-xl mx-auto gap-7'>
                {reliefData.map((item, index) => (
                    <ReliefItem {...item} key={index} />
                ))}
            </div>
            <div>
                <button className='bg-main text-white font-semibold px-6 py-2.5 rounded-full hover:bg-transparent border-main border hover:text-main duration-300 mt-16 mx-auto block'>View All</button>
            </div>
        </div>
    );
};

export default TopRelief;