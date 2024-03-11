import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useInsertOneMutation, useUpdateOneMutation } from '../../redux/features/goods/goodsAPI';
import { toast } from 'sonner';

const PostOrPutGoods = ({ method, defaultValus, id, onClose, refetch }: { method: 'PUT' | 'POST', defaultValus: { src: string, title: string, collected: string | number, category: string, goal: string | number, description: string, donaters: string | number; } | null; id?: string; onClose?: () => void; refetch?: () => void; }) => {
    const [data, setData] = useState(defaultValus ? defaultValus : { src: '', category: '', collected: '', description: '', donaters: '', goal: '', title: '' });
    const [insertOne] = useInsertOneMutation();
    const [updateOne] = useUpdateOneMutation();
    const navigate = useNavigate();
    return (
        <form className='flex flex-col gap-5' onSubmit={async (e) => {
            e.preventDefault();

            if (Object.values(data).some(e => !e)) {
                toast.error('Please do not use any kind of auto form filler extensention 🙄🙄🙄', {
                    duration: 5000
                });
                return;
            }
            data.collected = +data.collected;
            data.donaters = +data.donaters;
            data.goal = +data.goal;

            if (method === 'POST') {
                const tid = toast.loading('Creating relief post...');

                const result = await insertOne(data);
                if ((result as { error: { data: { message: string; }; }; }).error) {
                    toast.error('Unkown Error Occured', { id: tid });
                    return;
                }
                toast.success('Created Relief Post', { id: tid });
                navigate('/dashboard/supplies');
            } else {
                const tid = toast.loading('Updating relief post...');
                const result = await updateOne({ ...data, _id: id });
                if ((result as { error: { data: { message: string; }; }; }).error) {
                    toast.error('Unkown Error Occured', { id: tid });
                    return;
                }
                toast.success('Updated Relief Post', { id: tid });
                refetch && refetch();
                onClose && onClose();
            }
        }}>

            <div>
                <label htmlFor="title" className="text-main dark:text-dark-main ">Relief Title</label>
                <input autoComplete="off" value={data.title} required onChange={(e) => setData(pre => ({ ...pre, title: e.target.value }))} type="text" id="title" placeholder="Title" className='w-full   border-[#c9c9c9] mt-2 text-[#c9c9c9] bg-[#2C353C] text-[14px] py-2 h-[50px] outline-none focus:outline-none duration-300 px-5' />
            </div>
            <div>
                <label htmlFor="src" className="text-main dark:text-dark-main ">Relief Image Link</label>
                <input autoComplete="off" value={data.src} required onChange={(e) => setData(pre => ({ ...pre, src: e.target.value }))} type="text" id="src" placeholder="Image Link" className='w-full   border-[#c9c9c9] mt-2 text-[#c9c9c9] bg-[#2C353C] text-[14px] py-2 h-[50px] outline-none focus:outline-none duration-300 px-5' />
            </div>
            <div>
                <label htmlFor="category" className="text-main dark:text-dark-main ">Relief category</label>
                <input autoComplete="off" value={data.category} required onChange={(e) => setData(pre => ({ ...pre, category: e.target.value }))} type="text" id="category" placeholder="Category" className='w-full   border-[#c9c9c9] mt-2 text-[#c9c9c9] bg-[#2C353C] text-[14px] py-2 h-[50px] outline-none focus:outline-none duration-300 px-5' />
            </div>
            <div>
                <label htmlFor="collected" className="text-main dark:text-dark-main ">Relief Amount</label>
                <input autoComplete="off" value={data.collected} required onChange={(e) => setData(pre => ({ ...pre, collected: e.target.value }))} type="number" id="collected" placeholder="Amount" className='w-full   border-[#c9c9c9] mt-2 text-[#c9c9c9] bg-[#2C353C] text-[14px] py-2 h-[50px] outline-none focus:outline-none duration-300 px-5' />
            </div>
            <div>
                <label htmlFor="goal" className="text-main dark:text-dark-main ">Relief Amount Goal</label>
                <input autoComplete="off" value={data.goal} required onChange={(e) => setData(pre => ({ ...pre, goal: e.target.value }))} type="number" id="goal" placeholder="Goal" className='w-full   border-[#c9c9c9] mt-2 text-[#c9c9c9] bg-[#2C353C] text-[14px] py-2 h-[50px] outline-none focus:outline-none duration-300 px-5' />
            </div>
            <div>
                <label htmlFor="donaters" className="text-main dark:text-dark-main ">Relief Donaters</label>
                <input autoComplete="off" value={data.donaters} required onChange={(e) => setData(pre => ({ ...pre, donaters: e.target.value }))} type="number" id="donaters" placeholder="Donaters" className='w-full   border-[#c9c9c9] mt-2 text-[#c9c9c9] bg-[#2C353C] text-[14px] py-2 h-[50px] outline-none focus:outline-none duration-300 px-5' />
            </div>
            <div>
                <label htmlFor="description" className="text-main dark:text-dark-main ">Relief Descriptionm</label>
                <textarea autoComplete="off" value={data.description} required onChange={(e) => setData(pre => ({ ...pre, description: e.target.value }))} id="description" placeholder="Description" className='w-full   border-[#c9c9c9] mt-2 text-[#c9c9c9] bg-[#2C353C] text-[14px] py-2 h-[200px] outline-none focus:outline-none duration-300 px-5' />
            </div>
            <button type='submit' className='bg-main border-main border text-white px-6 py-2.5 rounded-full hover:bg-transparent font-semibold  hover:text-main dark:text-dark-main duration-300'>{method === 'POST' ? 'Create Supply' : 'Update Supply'}</button>
        </form>
    );
};

export default PostOrPutGoods;