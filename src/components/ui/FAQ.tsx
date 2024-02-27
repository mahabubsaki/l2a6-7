import { Accordion, AccordionItem as Item } from "@szhsin/react-accordion";
import { motion } from "framer-motion";

import { MdKeyboardArrowDown } from "react-icons/md";

const faqs = [
    {
        question: "How can I donate to your charity?",
        answer: "You can donate online through our website by clicking on the 'Donate' button and following the instructions. We also accept donations via mail or phone."
    },
    {
        question: "What types of programs does your charity support?",
        answer: "Our charity supports a variety of programs aimed at addressing issues such as poverty, education, healthcare, environmental conservation, and disaster relief. You can find more information about our programs on the 'Our Work' page."
    },
    {
        question: "Is my donation tax-deductible?",
        answer: "Yes, we are a registered nonprofit organization, and donations are tax-deductible to the extent allowed by law. Upon making a donation, you will receive a receipt that can be used for tax purposes."
    },
    {
        question: "Can I volunteer with your charity?",
        answer: "Yes, we welcome volunteers! You can find information about volunteer opportunities and how to get involved on our 'Volunteer' page. We greatly appreciate your support."
    },
    {
        question: "How can I stay updated on your charity's activities?",
        answer: "You can stay updated on our charity's activities by subscribing to our newsletter, following us on social media, and checking our website regularly for updates and news."
    },
    {
        question: "How do I request assistance from your charity?",
        answer: "If you are in need of assistance, please visit the 'Contact Us' page on our website and fill out the assistance request form. Our team will review your request and get back to you as soon as possible."
    },
    {
        question: "Where does the money donated to your charity go?",
        answer: "We strive for transparency in our financial practices. The majority of the funds donated to our charity go directly to supporting our programs and initiatives. A small portion may be allocated to administrative costs to ensure the effective operation of our organization."
    },
    {
        question: "Can I make a donation in honor or memory of someone?",
        answer: "Yes, you can make a donation in honor or memory of someone special. During the donation process, you will have the option to dedicate your donation and provide the name of the honoree or the person you are remembering."
    },
    {
        question: "Do you accept in-kind donations?",
        answer: "Yes, we accept in-kind donations of goods and services that align with our mission and programs. Please visit the 'Donate' page on our website to learn more about the types of in-kind donations we accept and how to donate them."
    },
    {
        question: "How can I get involved in fundraising for your charity?",
        answer: "There are many ways to get involved in fundraising for our charity, including organizing events, participating in fundraising campaigns, or creating your own fundraising initiative. Visit the 'Get Involved' section of our website to explore fundraising opportunities and resources."
    },
    {
        question: "Is your charity registered with any regulatory bodies?",
        answer: "Yes, we are registered with relevant regulatory bodies and adhere to all applicable laws and regulations governing charitable organizations. You can find more information about our registration status on our website or by contacting us directly."
    }
];



const AccordionItem = ({ header, ...rest }: { header: string; }) => (
    <Item
        {...rest}
        header={({ state: { isEnter } }) => (
            <>
                {header}

                <MdKeyboardArrowDown size={30} className={`ml-auto transition-transform duration-200 ease-out ${isEnter && "rotate-180"
                    }`} />
            </>
        )}
        className="border-b"
        buttonProps={{
            className: ({ isEnter }) =>
                `flex w-full p-4 text-left hover:bg-slate-100 ${isEnter && "bg-slate-200"
                }`
        }}
        contentProps={{
            className: "transition-height duration-200 ease-out"
        }}
        panelProps={{ className: "p-4" }}
    />
);


export default function FAQ() {
    return (
        <div className="my-20 max-w-screen-xl mx-auto">


            <motion.h1 initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1, type: 'tween', ease: 'easeOut' }} className='text-center text-4xl font-semibold'> FAQS</motion.h1>
            <motion.p initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1, type: 'tween', ease: 'easeOut' }} className='text-center text-lg text-gray-500 mt-4'>These are one of the common question asked by our customers</motion.p>
            <div className='flex justify-center mt-2 mb-16'>
                <span className='size-5 rounded-full deco relative border-2 flex justify-center items-center border-[#E6E6E6] '>
                    <span className='inline-block size-2 rounded-full bg-[#EAEAEA]' />
                </span>
            </div>
            <motion.div initial={{ opacity: 0, scaleY: 0, }} whileInView={{ opacity: 1, scaleY: 1 }} viewport={{ once: true }} transition={{ duration: 1, type: 'tween', ease: 'easeOut' }} className="mx-2 origin-top my-4 border-t">

                <Accordion transition transitionTimeout={200}>
                    {faqs.map((item, index) => (
                        // @ts-expect-error - dont know why this is happening
                        <AccordionItem key={index} header={item.question} >
                            <p>{item.answer}</p>
                        </AccordionItem>
                    ))}
                </Accordion>
            </motion.div>
        </div>
    );
}