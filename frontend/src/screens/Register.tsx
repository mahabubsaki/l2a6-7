import { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { useRegisterMutation } from "../redux/features/auth/authAPI";
import { toast } from "sonner";
import { useAppDispatch, useAppSelector } from "../redux/store/hooks";
import { TUser, selectCurrentUser, setUser } from "../redux/features/auth/authSlice";


const Register = () => {
    const [credentials, setCredentials] = useState({ email: '', password: '', name: '' } as { email: string, password: string; name: string; });
    const [register] = useRegisterMutation();
    const dispatch = useAppDispatch();

    const user = useAppSelector(selectCurrentUser);
    if (user) {
        return <Navigate to={'/'} />;
    }
    return (
        <div className="mt-5">
            <h1 className="text-main text-2xl font-bold text-center">Register</h1>
            <div className="max-w-md mx-auto mt-5">
                <form onSubmit={async (e) => {
                    e.preventDefault();
                    const id = toast.loading('Registering in...');
                    const data = await register({ ...credentials });
                    if ((data as { error: { data: { message: string; }; }; }).error) {
                        toast.error((data as { error: { data: { message: string; }; }; }).error.data.message, { id: id });
                        return;
                    }
                    dispatch(setUser({ user: (data as { data: { user: TUser; }; }).data.user as TUser, token: (data as { data: { token: string; }; }).data.token as string }));
                    toast.success('Register Success', { id: id });


                }} className="flex flex-col gap-5">
                    <div>
                        <label htmlFor="name" className="text-main ">Name</label>
                        <input autoComplete="off" onChange={(e) => { setCredentials(pre => ({ ...pre, name: e.target.value })); }} type="text" id="name" placeholder="Your Name" className='w-full   border-[#c9c9c9] mt-2 text-[#c9c9c9] bg-[#2C353C] text-[14px] py-2 h-[50px] outline-none focus:outline-none duration-300 px-5' />
                    </div>
                    <div>
                        <label htmlFor="email" className="text-main ">Email</label>
                        <input autoComplete="off" onChange={(e) => { setCredentials(pre => ({ ...pre, email: e.target.value })); }} type="email" id="email" placeholder="Your Email" className='w-full   border-[#c9c9c9] mt-2 text-[#c9c9c9] bg-[#2C353C] text-[14px] py-2 h-[50px] outline-none focus:outline-none duration-300 px-5' />
                    </div>
                    <div>
                        <label htmlFor="password" className="text-main ">Password</label>
                        <input autoComplete="off" onChange={(e) => { setCredentials(pre => ({ ...pre, password: e.target.value })); }} type="password" id="password" placeholder="Your Password" className='w-full   border-[#c9c9c9] mt-2 text-[#c9c9c9] bg-[#2C353C] text-[14px] py-2 h-[50px] outline-none focus:outline-none duration-300 px-5' />
                    </div>
                    <div>
                        <button className="bg-main border-2 my-4 text-white py-2.5 hover:bg-transparent hover:text-main duration-300 px-5 rounded-md hover:border-main border-white">Register</button>
                    </div>
                </form>
                <p>Already have an account? <span className="text-main font-semibold"><Link to={'/login'}>LOGIN</Link></span> now</p>

            </div>
        </div>
    );
};

export default Register;