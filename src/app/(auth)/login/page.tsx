'use client'
import {ChangeEvent, useState} from "react";
import {useLoginMutation} from "@/redux/features/auth/authApiSlice";
import {useDispatch} from "react-redux";
import { useRouter } from 'next/navigation'

import {setCredentials} from "@/redux/features/auth/authSlice";
import toast from "react-hot-toast";

const Page = () => {
    const [user, setUser] = useState({
        email: '',
        password: '',
    });
    const router = useRouter();

    const dispatch = useDispatch()
    const [login, { isLoading, error, success, isError }] = useLoginMutation();

    const handleChance= (e:ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setUser((values) => ({ ...values, [name]: value }))
    }
    const handleSubmit = async (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        try {
            const response = await login({email:user.email, password:user.password}).unwrap();
            if(response?.access_token){
                dispatch(setCredentials({ response }))
                toast.success("Successfully logged in....")
                router.push('/dashboard');
            }
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <div className="p-5">
            <form action="" onSubmit={handleSubmit} className="flex flex-col justify-center items-center p-5 gap-3">
                <div className="flex gap-2 p-3">
                    <label htmlFor="email">Email</label>
                    <input id="email" type="text"
                           name='email'
                           placeholder="exemple@gmail.com" onChange={handleChance}
                    />
                </div>
                <div className="flex gap-2 p-3">
                    <label htmlFor="password">Password</label>
                    <input id='password' name='password' type="text" placeholder="password" onChange={handleChance}/>
                </div>


                {/*<button type='submit'>submit</button>*/}
                <button
                    type="submit"
                    disabled={isLoading}
                    className={`px-4 py-2 ${
                        isLoading ? 'bg-gray-400' : 'bg-blue-500 text-white'
                    }`}
                >
                    {isLoading ? 'Loading...' : 'Submit'}
                </button>
                {isError && (
                    <p className="text-red-500 mt-2">
                        {error?.data?.message || "An error occurred. Please try again."}
                    </p>
                )}
                {success && (
                    <p className="text-green-500 mt-2">Login successful!</p>
                )}
            </form>
        </div>
    );
};

export default Page;