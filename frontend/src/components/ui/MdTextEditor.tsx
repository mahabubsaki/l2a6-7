import { Button } from '@chakra-ui/react';
import { FC, Ref } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
const MdTextEditor: FC<{ handleBlog: () => void; editorRef: Ref<ReactQuill>; }> = ({ handleBlog, editorRef }) => {


    return (
        <div>
            <div className='h-[500px] mb-20'>
                <ReactQuill className='h-full' ref={editorRef} theme="snow" />

            </div>
            <Button onClick={handleBlog} colorScheme='blue'>Submit</Button>
        </div>
    );
};

export default MdTextEditor;