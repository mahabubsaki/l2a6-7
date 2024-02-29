
import { Link } from 'react-router-dom';

const Notfound = () => {
    return (
        <section className="flex items-center h-full p-16 ">
            <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
                <div className="max-w-md text-center">
                    <h2 className="mb-8 font-extrabold text-9xl ">
                        <span className="sr-only">Error</span>404
                    </h2>
                    <p className="text-2xl font-semibold md:text-3xl">Sorry, we couldn't find this page.</p>
                    <p className="mt-4 mb-8 ">But dont worry, you can find plenty of other things on our homepage.</p>

                    <Link to={'/'}>
                        <button className='bg-white text-main font-semibold px-6 py-2.5 rounded-full hover:bg-main border-main border hover:text-white duration-300 ml-2'>Back to homepage</button></Link>
                </div>
            </div>
        </section>
    );
};

export default Notfound;