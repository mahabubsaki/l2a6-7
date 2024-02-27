import PostOrPutGoods from "../components/reusable/PostOrPutGoods";


const CreateSupply = () => {
    return (
        <div className="mb-10">
            <h1 className='text-center text-3xl mb-4'>Create Supply</h1>
            <div className="max-w-screen-sm mx-auto px-5">
                <PostOrPutGoods defaultValus={null} method="POST" />
            </div>
        </div>
    );
};

export default CreateSupply;