import PhotoAlbum from "react-photo-album";

import Lightbox from "yet-another-react-lightbox";

import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Zoom from "yet-another-react-lightbox/plugins/zoom";

import photos from "../../utils/galleryPhotos";

import "yet-another-react-lightbox/plugins/thumbnails.css";
import "yet-another-react-lightbox/styles.css";
import { useState } from "react";

const Gallery = () => {
    const [index, setIndex] = useState(-1);
    return (
        <div className="py-20">
            <h1 className='text-center text-4xl font-semibold'>Our Gallery</h1>
            <p className='text-center text-lg text-gray-500 mt-4'>These are the images of our charity events and activities</p>
            <div className='flex justify-center mt-2 mb-16'>
                <span className='size-5 rounded-full deco relative border-2 flex justify-center items-center border-[#E6E6E6] '>
                    <span className='inline-block size-2 rounded-full bg-[#EAEAEA]' />
                </span>
            </div>
            <div className="px-5" >
                <PhotoAlbum photos={photos} layout="masonry" targetRowHeight={150} onClick={({ index }) => setIndex(index)} breakpoints={[300, 600, 1200]} />

                <Lightbox
                    slides={photos}
                    open={index >= 0}
                    index={index}
                    close={() => setIndex(-1)}
                    plugins={[Fullscreen, Slideshow, Thumbnails, Zoom]} />
            </div>
        </div>
    );
};

export default Gallery;