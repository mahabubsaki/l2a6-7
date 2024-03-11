import PhotoAlbum from "react-photo-album";

import Lightbox from "yet-another-react-lightbox";

import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Zoom from "yet-another-react-lightbox/plugins/zoom";

import photos from "../../utils/galleryPhotos";

import "yet-another-react-lightbox/plugins/thumbnails.css";
import "yet-another-react-lightbox/styles.css";
import { useEffect, useRef, useState } from "react";
import { animate, motion, stagger, useInView } from "framer-motion";

const Gallery = () => {

    const [index, setIndex] = useState(-1);
    const ref = useRef<HTMLDivElement | null>(null);
    const isInView = useInView(ref, {
        amount: 0.1,
        once: true
    });
    useEffect(() => {

        if (isInView) {
            (async function () {
                await animate("#gallery img", { scale: [0, 1] }, { type: "spring", delay: stagger(0.2), });

            })();
        }
    }, [isInView]);
    return (
        <div className="py-20">
            <motion.h1 initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1, type: 'tween', ease: 'easeOut' }} className='text-center text-4xl font-semibold  text-black dark:text-white'>Our Gallery</motion.h1>
            <motion.p initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1, type: 'tween', ease: 'easeOut' }} className='text-center text-lg text-gray-500 mt-4'>These are the images of our charity events and activities</motion.p>
            <div className='flex justify-center mt-2 mb-16'>
                <span className='size-5 rounded-full deco relative border-2 flex justify-center items-center border-[#E6E6E6] '>
                    <span className='inline-block size-2 rounded-full bg-[#EAEAEA]' />
                </span>
            </div>
            <div className="px-5" id="gallery" ref={ref}>
                <PhotoAlbum photos={photos} layout="masonry" targetRowHeight={150} onClick={({ index }) => setIndex(index)} breakpoints={[300, 600, 1200]} />

                <Lightbox
                    slides={photos}
                    open={index >= 0}
                    index={index}
                    close={() => setIndex(-1)}
                    plugins={[Fullscreen, Slideshow, Thumbnails, Zoom]} />
            </div>
            <div className="bg-[#eb5310] px-5 text-center xl:text-left py-[55px] mt-5 flex items-center flex-col xl:flex-row justify-center gap-20">
                <div className="flex flex-col text-white gap-5 ">
                    <h2 className="text-3xl">Inspiring Moments of Generosity </h2>
                    <p className="text-xl opacity-80">Within our gallery, you'll find a collection of heartwarming moments showcasing the incredible impact of generosity.</p>
                </div>
                <div>
                    <button className='bg-white w-fit text-[12px] border-white border text-main dark:text-dark-main  px-6 py-2.5 rounded-full text-lg hover:bg-transparent font-semibold  hover:text-white duration-300 dark:bg-purple-500'>View Full Gallery</button>
                </div>
            </div>
        </div>
    );
};

export default Gallery;