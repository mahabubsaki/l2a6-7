import { Link, Navigate } from "react-router-dom";
import { useLoginMutation } from "../redux/features/auth/authAPI";
import { useState } from "react";
import { toast } from 'sonner';
import { useAppDispatch, useAppSelector } from "../redux/store/hooks";
import { TUser, selectCurrentUser, setUser } from "../redux/features/auth/authSlice";
const Login = () => {
    const [credentials, setCredentials] = useState({ email: '', password: '' } as { email: string, password: string; });
    const [login] = useLoginMutation();
    const dispatch = useAppDispatch();

    const user = useAppSelector(selectCurrentUser);
    if (user) {
        return <Navigate to={'/'} />;
    }
    return (
        <div className="mt-5">
            <h1 className="text-main text-2xl font-bold text-center">Login</h1>
            <div className="max-w-md mx-auto mt-5">
                <form onSubmit={async (e) => {
                    e.preventDefault();
                    const id = toast.loading('Logging in...');
                    const data = await login({ ...credentials });

                    if ((data as { error: { data: { message: string; }; }; }).error) {
                        toast.error((data as { error: { data: { message: string; }; }; }).error.data.message, { id: id });
                        return;
                    }
                    dispatch(setUser({ user: (data as { data: { user: TUser; }; }).data.user as TUser, token: (data as { data: { token: string; }; }).data.token as string }));
                    toast.success('Login Success', { id: id });


                }} className="flex flex-col gap-5">
                    <div>
                        <label htmlFor="email" className="text-main ">Email</label>
                        <input autoComplete="off" required onChange={(e) => setCredentials(pre => ({ ...pre, email: e.target.value }))} type="email" id="email" placeholder="Your Email" className='w-full   border-[#c9c9c9] mt-2 text-[#c9c9c9] bg-[#2C353C] text-[14px] py-2 h-[50px] outline-none focus:outline-none duration-300 px-5' />
                    </div>
                    <div>
                        <label htmlFor="password" className="text-main ">Password</label>
                        <input autoComplete="off" required onChange={(e) => setCredentials(pre => ({ ...pre, password: e.target.value }))} type="password" id="password" placeholder="Your Password" className='w-full   border-[#c9c9c9] mt-2 text-[#c9c9c9] bg-[#2C353C] text-[14px] py-2 h-[50px] outline-none focus:outline-none duration-300 px-5' />
                    </div>
                    <div>
                        <button className="bg-main border-2 my-4 text-white py-2.5 hover:bg-transparent hover:text-main duration-300 px-5 rounded-md hover:border-main border-white">Login</button>
                    </div>
                </form>
                <p>Don't have an account? <span className="text-main font-semibold"><Link to={'/register'}>REGISTER</Link></span> now</p>

            </div>
        </div>
    );
};

export default Login;