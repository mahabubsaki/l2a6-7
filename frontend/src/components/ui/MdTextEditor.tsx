import { Button } from '@chakra-ui/react';
import { useRef } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
const MdTextEditor = () => {

    const ref = useRef<ReactQuill>(null);

    const handleBlog = () => {
        console.log(ref);
        const value = (ref.current as ReactQuill).value;
        console.log(value);
    };
    return (
        <div>
            <div className='h-[500px] mb-20'>
                <ReactQuill className='h-full' ref={ref} theme="snow" />

            </div>
            <Button onClick={handleBlog} colorScheme='blue'>Submit</Button>
        </div>
    );
};

export default MdTextEditor;