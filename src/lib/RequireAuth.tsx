'use client'
import React,{useState, useEffect} from 'react';
import { useSelector } from "react-redux";
import {selectCurrentUser} from "@/redux/features/auth/authSlice";
import { usePathname, useRouter } from 'next/navigation'
// const authenticatedRoutes = [
//     '/dashboard',
// ]
const RequireAuth = ({children}: Readonly<{
    children: React.ReactNode;
}>) => {
    const [user, setUser] = useState({
        email: '',
    });

    const currentUser = useSelector(selectCurrentUser);
    // console.log(currentUser)
    const pathname = usePathname();
    const { push } = useRouter();
    useEffect(() => {
        // if(!currentUser && authenticatedRoutes.includes(pathname)) push('/login')
        if(!currentUser) push('/login');

        if(currentUser) setUser(currentUser)
    }, [currentUser, pathname, push])

    if(!user?.email) return (
        <div>Loading......</div>
    )
    return (
        <>
            {children}
        </>
    );
};

export default RequireAuth;