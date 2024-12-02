'use client'
import React, {ChangeEvent, useState} from "react";
import {useLoginMutation} from "@/redux/features/auth/authApiSlice";
import {useDispatch} from "react-redux";
import { useRouter } from 'next/navigation'
import {Input} from "@/components/ui/input";
import {setCredentials} from "@/redux/features/auth/authSlice";
import toast from "react-hot-toast";
import {Label} from "@/components/ui/label";
import Link from "next/link";

const Page = () => {
    const [user, setUser] = useState({
        email: '',
        password: '',
    });
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    const dispatch = useDispatch()
    const [login, { isLoading, error, success, isError }] = useLoginMutation();

    const handleChance= (e:ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setUser((values) => ({ ...values, [name]: value }))
    }
    const handleSubmit = async (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        setLoading(true);
        try {
            const response = await login({email:user.email, password:user.password}).unwrap();
            if(response?.access_token){
                dispatch(setCredentials({ response }))
                await router.push('/dashboard');
                toast.success("Successfully logged in....")
            }
        } catch (err) {
            console.log(err)
        }finally {
            setLoading(false);
        }
    }

    return (
            <form action="" onSubmit={handleSubmit} className=" h-full flex flex-col justify-center items-center p-5 gap-3 m-auto">
                <div className="grid gap-4 py-4">
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="email" className="text-right">
                            email
                        </Label>
                        <Input
                            id="email"
                            name='email'
                            placeholder='exemple@gmail.com'
                            className="col-span-3 bg-white"
                            onChange={handleChance}
                        />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="password" className="text-right">
                            Password
                        </Label>
                        <Input
                            id="password"
                            name='password'
                            placeholder='Enter your password'
                            className="col-span-3 bg-white"
                            onChange={handleChance}
                        />
                    </div>
                </div>

                <button
                    type="submit"
                    disabled={loading}
                    className={`px-4 py-2 ${
                        isLoading ? 'bg-gray-400' : 'bg-blue-500 text-white'
                    }`}
                >
                    {loading ? 'Redirecting...' : 'Submit'}
                </button>
                {isError && (
                    <p className="text-red-500 mt-2">
                        {error?.data?.message || "An error occurred. Please try again."}
                    </p>
                )}
                {success && (
                    <p className="text-green-500 mt-2">Login successful!</p>
                )}
                <p className="text-gray-400">
                    crée un compte:
                    <Link className='text-sky-500'  href={"/register"}>register</Link>
                </p>
            </form>
    );
};

export default Page;