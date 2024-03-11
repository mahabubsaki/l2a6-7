import { useGetAllVolunteersQuery } from "../redux/features/volunteer/volunteerAPI";


const AboutUs = () => {
    const { data = [], isLoading, isError } = useGetAllVolunteersQuery([]);
    if (isLoading) {
        return <div>Loading...</div>;
    }
    if (isError) {
        return <div>Error</div>;
    }
    return (
        <div className="min-h-[100dvh]">
            <h1 className='text-center text-3xl mb-4'>About Us</h1>
            <div>
                <div>
                    <div className="grid grid-cols-1 max-w-screen-xl mx-auto md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {data.map((volunteer: { _id: string, name: string, img: string, email: string, phone: string, address: string; }) => (
                            <div key={volunteer._id} className="bg-white shadow-lg p-4">
                                <div className="flex justify-center">
                                    <img src={volunteer.img} alt={volunteer.name} className="w-20 h-20 rounded-full" />
                                </div>
                                <h1 className="text-center text-xl font-bold mt-4">{volunteer.name}</h1>
                                <p className="text-center text-gray-400">Address : {volunteer.email}</p>
                                <p className="text-center text-gray-400">Phone : {volunteer.phone}</p>
                                <p className="text-center text-gray-400">Address : {volunteer.address}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;