import classNames from "classnames";
import { useGetDonationsQuery } from "../redux/features/goods/goodsAPI";


const Leaderboard = () => {
    const { data = [], isError, isLoading } = useGetDonationsQuery([]);

    console.log(data);
    if (isLoading) {
        return <div>Loading...</div>;
    }
    if (isError) {
        return <div>Error Occured</div>;
    }
    return (
        <div className="max-w-screen-md mx-auto">
            <h1 className="text-3xl text-center font-bold mb-8">Top donaters leaderboard</h1>
            <div className="flex flex-col gap-5 text-sm text-gray-400">
                <p>   The Donation Leaderboard is a dynamic feature that showcases the top donors in a community. It is a powerful tool that encourages a spirit of generosity and competition among users. The leaderboard is generated by aggregating the total amount of donations made by each user. It then sorts these users in descending order of their total donations, creating a ranking system.</p>

                <p>The top 10 donors are displayed on the leaderboard, providing recognition for their substantial contributions. Each entry on the leaderboard includes the user's name, email, and a link to their profile picture, offering a personalized touch.</p>

                <p>This feature is not just a list, but a testament to the collective effort of the community. It serves as a motivation for users to contribute more, fostering a culture of giving. The Donation Leaderboard is a testament to the power of community and the impact of collective giving. It's a celebration of generosity, a motivator for involvement, and a symbol of the difference every donation can make.</p>

                <p>In essence, the Donation Leaderboard is more than just a feature - it's a community builder, a motivator, and a testament to the power of collective action. It's a reminder that every donation counts and that together, we can make a difference.</p>
            </div>
            <div className='flex flex-col gap-5  mt-10 mb-20'>
                {data.map((item: { name: string; photoURL: string; totalAmount: number; }, index: number) => (
                    <div key={index} className='flex gap-3 items-center'>
                        <p className="text-3xl">{index + 1}.</p>
                        <div className={classNames('w-14 h-14 rounded-full border-4 overflow-hidden', {
                            'border-[#FFD700]': index === 0,
                            'border-[#C0C0C0]': index === 1,
                            'border-[#CD7F32]': index === 2,
                            'border-red-500': index > 2

                        })}>
                            <img src={item.photoURL} onError={(e) => e.currentTarget.src = 'https://cdn-icons-png.flaticon.com/128/4140/4140048.png'} alt="" className='w-full h-full' />
                        </div>
                        <div className='flex flex-col gap-1'>
                            <h1 className='text-xl font-semibold'>{item.name}</h1>
                            <p className='text-[#9c9c9c]'>Total Donation : {item.totalAmount} pieces</p>
                        </div>
                    </div>
                ))}

            </div>
        </div>
    );
};

export default Leaderboard;