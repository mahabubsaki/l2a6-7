import { Link } from "react-router-dom";

const Login = () => {
    return (
        <div className="mt-5">
            <h1 className="text-main text-2xl font-bold text-center">Login</h1>
            <div className="max-w-md mx-auto mt-5">
                <form action="" className="flex flex-col gap-5">
                    <div>
                        <label htmlFor="email" className="text-main ">Email</label>
                        <input type="email" id="email" placeholder="Your Email" className='w-full   border-[#c9c9c9] mt-2 text-[#c9c9c9] bg-[#2C353C] text-[14px] py-2 h-[50px] outline-none focus:outline-none duration-300 px-5' />
                    </div>
                    <div>
                        <label htmlFor="password" className="text-main ">Password</label>
                        <input type="password" id="password" placeholder="Your Password" className='w-full   border-[#c9c9c9] mt-2 text-[#c9c9c9] bg-[#2C353C] text-[14px] py-2 h-[50px] outline-none focus:outline-none duration-300 px-5' />
                    </div>
                    <div>
                        <button className="bg-main border-2 my-4 text-white py-2.5 hover:bg-transparent hover:text-main duration-300 px-5 rounded-md hover:border-main border-white">Login</button>
                    </div>
                </form>
                <p>Don't have an account? <span className="text-main font-semibold"><Link to={'/auth/register'}>REGISTER</Link></span> now</p>

            </div>
        </div>
    );
};

export default Login;