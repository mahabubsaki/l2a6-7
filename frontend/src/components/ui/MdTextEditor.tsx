import React, { useLayoutEffect, useRef, useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
const MdTextEditor = () => {
    const [value, setValue] = useState('');
    const ref = useRef(null);
    useLayoutEffect(() => {
        if (ref.current) {
            console.log(ref.current.value);
        }
    }, [ref, value]);
    return (
        <div>
            <ReactQuill ref={ref} theme="snow" value={value} onChange={setValue} />
        </div>
    );
};

export default MdTextEditor;