import { Input } from "@chakra-ui/react";
import MdTextEditor from "../components/ui/MdTextEditor";
import { useRef } from "react";
import ReactQuill from "react-quill";
import { toast } from "sonner";
import { useCreateCommunityMutation } from "../redux/features/community/communityAPI";
import { useAppSelector } from "../redux/store/hooks";
import { selectCurrentUser } from "../redux/features/auth/authSlice";
import AllCommunityPosts from "../components/ui/AllCommunityPosts";


const Community = () => {
    const ref = useRef<ReactQuill>(null);
    const ref2 = useRef<HTMLInputElement>(null);
    const user = useAppSelector(selectCurrentUser);


    const [post] = useCreateCommunityMutation();

    const handleBlog = () => {
        const title = ref2.current?.value;
        const content = ref.current?.value;
        if (!title || !content) {
            return toast.error('Please fill all the fields');
        }
        toast.promise(post({ title, content, user: user?._id as string }).unwrap(), {
            loading: 'Posting...',
            success: () => {
                ref2.current!.value = "";
                ref.current?.editor?.setText('');
                ref.current!.value = "";
                return 'Posted';
            },
            error: (err) => {
                return err.status;
            }

        });
    };
    return (
        <div className="max-w-screen-xl mx-auto">
            <h1 className="text-3xl font-bold text-gray-800 mb-2">Community</h1>
            <div className="text-gray-600 opacity-75 flex flex-col gap-5">
                <p>Welcome to our Community Gratitude Wall, a virtual space dedicated to spreading positivity and appreciation! In times of hardship, it's crucial to acknowledge the support and kindness we receive from others. Here, you have the opportunity to express your gratitude openly and share the love.</p>

                <p>Our Gratitude Wall serves as a beacon of hope and encouragement, where individuals can post comments reflecting on the support they've received during challenging moments. Whether it's a friend's comforting words, a family member's unwavering support, or even a stranger's act of kindness, every expression of gratitude is welcome and celebrated.</p>

                <p>   We believe in the power of gratitude to uplift spirits, foster connections, and inspire others to pay it forward. By sharing your appreciation here, you contribute to creating a ripple effect of positivity throughout our community.</p>

                <p> Join us in spreading gratitude and kindness. Take a moment to reflect on the support you've received and share your heartfelt messages with us. Let's fill this wall with love, compassion, and gratitude that shines brightly for all to see. Together, we can make a difference, one thankful message at a time.</p>
            </div>
            <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-2">Create a post</h2>

            <div>
                <Input ref={ref2} type="text" placeholder="Write your title" />
                <h3 className="text-lg font-semibold text-gray-800 mt-4 mb-2">Write your message</h3>
                <MdTextEditor handleBlog={handleBlog} editorRef={ref} />
            </div>
            <div>
                <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-2">All Posts</h2>

                <AllCommunityPosts />
            </div>
        </div>
    );
};

export default Community;