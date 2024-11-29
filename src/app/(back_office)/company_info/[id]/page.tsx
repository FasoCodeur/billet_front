'use client'
import React,{useState} from 'react';
import Header from '@/components/header';
import {useGetCompanyByIdQuery} from "@/redux/features/company/apiCompany";
import {useParams} from "next/navigation";
import {Button} from "@/components/ui/button";
import {navigation} from "@/utils/utils";
import bus  from "../../../../../src/app/fonts/bus.jpg"
import Image from 'next/image';
import AddCompany from "@/components/addCompany";

// type Props = {
//     // open: boolean;
//     // setOpen:Dispatch<SetStateAction<boolean>>,
//     id: string;
// };
const Page = () => {
    const { id } = useParams();
    const [label, setLabel] =useState('Bus');
    const [show, setShow] =useState(false);

    const { data, isLoading } = useGetCompanyByIdQuery({id: id});
    // console.log(data)
    return (
        <div className="w-full h-screen flex flex-col px-3 bg-secondarylith">
            <Header title="company info" total ={0} />
            <div className=" flex flex-col w-full justify-between px-2 py-2">
                <div className="flex items-center justify-center gap-36 px-2 py-1">
                    <Image
                        src={data?.logo ? data.logo : bus}
                        className="bg-primary rounded-lg shadow shadow-secondary"
                        width={200}
                        height={200}
                        alt="Company Logo"
                    />

                    <div className="flex justify-between">
                        <div className="flex flex-col">
                            <div className="flex gap-2 items-center">
                                <label className='font-medium text-md' htmlFor="">Ice:</label> <span className="text-md text-softwhite">{data?.ice}</span>
                            </div>

                            <div className="flex gap-2 items-center">
                                <label htmlFor="" className='font-medium text-md'>Name:</label> <span className=" text-md text-softwhite">{data?.name}</span>
                            </div>

                            <div className="flex gap-2 items-center">
                                <label className='font-medium text-md' htmlFor="">Email:</label> <span className="text-md text-softwhite">{data?.email}</span>
                            </div>

                            <div className="flex gap-2 items-center">
                                <label className='font-medium text-md' htmlFor="">Address:</label> <span className="text-md text-softwhite">{data?.address?.city}</span>
                            </div>

                            <div className="flex gap-2 items-center">
                                <label className='font-medium text-md' htmlFor="">Status:</label> <span className={data?.isActive?'text-primary font-medium':'text-red-600'}>{data?.isActive  ?'Activate ' : 'Desactivate '}</span>
                            </div>
                        </div>

                    </div>
                    <Button
                        onClick={() => setShow(true)}
                        className="bg-secondary text-white font-xs font-bold text-sm"
                             type="submit" disabled={isLoading}>
                        {isLoading ? 'Loading...' : 'Modifier'}
                    </Button>
                </div>
            </div>
            <div className="flex w-full justify-around items-center px-2 py-1 bg-titleGrayColor rounded-md ">
                {
                    navigation.map((data, index) => (
                        <div key={index}>
                            <h1
                                onClick={() => setLabel(data.label)}
                                className={`cursor-pointer px-2 py-1 font-bold text-xs ${label === data.label ? 'bg-white rounded-lg text-secondary' : ''}`} // Applique la classe si l'élément est sélectionné
                            >
                                {data?.label}
                            </h1>
                        </div>
                    ))
                }
            </div>

            <div className="overflow-y-auto">
                <h1>{label}</h1>
            </div>
            <AddCompany open={show} setOpen={setShow}/>

        </div>
    );
};

export default Page;