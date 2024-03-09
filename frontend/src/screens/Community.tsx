import MdTextEditor from "../components/ui/MdTextEditor";


const Community = () => {
    return (
        <div className="max-w-screen-xl mx-auto">
            <h1 className="text-3xl font-bold text-gray-800 mb-2">Community</h1>
            <p className="text-gray-600">Share your thoughts with the community</p>
            <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-2">Create a post</h2>

            <MdTextEditor />
        </div>
    );
};

export default Community;