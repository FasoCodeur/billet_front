'use client'
import React, { useState} from 'react';
import {sideMenu} from "@/utils/utils";
import Link from "next/link";
import {usePathname, useRouter} from "next/navigation";
import {ExitIcon} from "@/app/fonts/icons";
import {useDispatch} from "react-redux";
import {logOut} from "@/redux/features/auth/authSlice";


const SideMenu = () => {
    // const dispatch = useDispatch();
    // const router = useRouter();
    const router = useRouter();

    const dispatch = useDispatch()
    const path = usePathname();
    const [open, setOpen] = useState(false);
    const handleLogout = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        dispatch(logOut());
        router.push('/login')
    }
    return (

        <div className="mb-48 lg:mb-0 z-50 overflow-hidden shrink-0">
            {/* for destop */}
            <div className="h-screen hidden lg:flex flex-col overflow-hidden w-[300px] lg:w-[300px]">
                {/* logo */}
                <Link
                    href={"/dashboard"}
                    className="pb-7 mt-5 flex justify-center items-center"
                    title="Logo"
                >
                    <h1 className="text-secondary text-3xl font-bold">BYBUS</h1>
                </Link>
                {/* links */}
                <div className="h-full flex-1  pb-2 flex flex-col gap-8 overflow-y-auto">
                    {/* link items */}
                    <ul
                    >
                        {sideMenu.map((item, index) => (
                            <div key={index}>
                                <Link
                                    href={item.path}
                                    className={`flex items-center gap-5 px-3 lg:pl-5 border-y hover:bg-bgColor duration-400 font-semibold  border-[#b3b2b2]/60 rounded-b-md py-4  ${
                                        path.startsWith(item.path)
                                            ? "bg-bgColor text-secondary tracking-widest"
                                            : ""
                                    }`}
                                >

                                    <item.icon
                                        className={`text-2xl ${
                                            path.startsWith(item.path)
                                                ? "text-secondary"
                                                : "text-primary"
                                        } `}
                                    />
                                    <span className="hidden lg:block">{item.name}</span>
                                </Link>
                            </div>
                        ))}
                    </ul>
                    {/* logout btn */}
                    <button
                        onClick={handleLogout}
                        // disabled={isLoading}
                        className="py-4 shrink-0 flex font-semibold items-center gap-5 px-3  lg:pl-5 group disabled:cursor-not-allowed"
                    >
                        <ExitIcon className="text-2xl text-primary group-hover:text-secondary"/>{" "}
                        <span className="hidden lg:flex group-hover:text-secondary">
              Déconnexion
            </span>
                    </button>
                </div>
            </div>

            {/* for mobile */}
            <div className="w-full fixed top-0 z-50 lg:hidden">
                {/* logo */}
                <div className="w-full bg-white flex justify-center items-center p-5">
                    {/*<LogoIcon className="text-lg"/>*/}
                </div>
                {/* bottom links */}
                <div className="flex items-center gap-5 py-2 p-5 bg-bgColor">
                    <button
                        className="bg-white rounded-lg active:scale-95 w-10 h-10 flex items-center justify-center"
                        // onClick={() => setOpen((prev) => !prev)}
                    >
                        {/*<HambergerMenu className="text-primary text-4xl"/>*/}
                    </button>
                    <div className="">
                        {/*<Avatar/>*/}
                    </div>
                </div>
                {/* side menu Links */}
                <div
                    className={`pr-2 ${
                        open
                            ? "flex flex-col z-50 backdrop-blur-sm  overflow-y-auto w-fit h-[calc(100vh-215px)] pl-5 pb-5 duration-500"
                            : "hidden duration-500"
                    } duration-500 transition-all`}
                >
                    {/* link items */}
                    <ul
                        className="text-sm"
                    >
                        {sideMenu.map((item, index) => (
                            <div
                                key={index}
                                onClick={() => setOpen((prev) => !prev)}
                                className="mb-[1px]"
                            >
                                <Link
                                    href={item.path}
                                    className={`flex items-center gap-3 px-3 bg-bgColor duration-400 font-semibold rounded-tr-xl rounded-br-xl mobile__menu__shadow__links  py-4  ${
                                        path.startsWith(item.path)
                                            ? "bg-bgColor text-secondary tracking-widest"
                                            : ""
                                    }`}
                                >
                                    <item.icon
                                        className={`text-2xl ${
                                            path.startsWith(item.path)
                                                ? "text-secondary"
                                                : "text-primary"
                                        } `}
                                    />
                                    <span>{item.name}</span>
                                </Link>
                            </div>
                        ))}
                    </ul>
                    {/* logout btn */}
                    <button
                        onClick={handleLogout}
                        // disabled={isLoading}
                        className="py-4 shrink-0 flex bg-bgColor font-semibold items-center gap-5 px-3 rounded-tr-xl rounded-br-xl mobile__menu__shadow__links "
                    >
                        <ExitIcon className="text-2xl text-primary"/>{" "}
                        <span className="">Déconnexion</span>
                    </button>
                </div>
            </div>
        </div>

    );
};

export default SideMenu;