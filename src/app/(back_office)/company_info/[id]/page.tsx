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
import Bus from "@/components/Bus";
import Trajects from "@/components/Trajects";
import Reservations from "@/components/Reservations";
import Payments from "@/components/Payments";
const Page = () => {
    const { id } = useParams();
    const [label, setLabel] =useState('Bus');
    const [show, setShow] =useState(false);

    const { data, isLoading } = useGetCompanyByIdQuery({id: id});
    const initialData = {
        ice: data?.ice,
        name: data?.name,
        email:data?.email,
        phone:data?.phone,
        city:data?.address?.city,
        logo:data?.logo

    }
    return (
        <div className="w-full h-screen overflow-hidden px-5 pt-0 relative flex flex-col bg-secondarylith">
            <Header title="company info" total ={0} />
            <div className=" flex flex-col w-full justify-between px-2 py-2">
                <div className="flex items-center justify-between px-2 py-1">
                    <Image
                        src={data?.logo ? data.logo : bus}
                        className="bg-primary rounded-lg shadow shadow-secondary"
                        width={400}
                        height={400}
                        alt="Company Logo"
                    />
                     <div className="flex w-full justify-around ">
                           <div className="flex flex-col gap-4">
                               <div className="flex gap-2 items-center">
                                   <label className='font-medium text-md lg:text-2xl ' htmlFor="">Ice:</label> <span className="text-softwhite text-md lg:text-2xl ">{data?.ice}</span>
                               </div>

                               <div className="flex gap-2 items-center">
                                   <label htmlFor="" className='font-medium text-2xl'>Name:</label> <span className=" text-2xl text-softwhite">{data?.name}</span>
                               </div>

                               <div className="flex gap-2 items-center">
                                   <label className='font-medium text-2xl' htmlFor="">Email:</label> <span className="text-2xl text-softwhite">{data?.email}</span>
                               </div>
                           </div>

                           <div className="flex flex-col gap-4">
                               <div className="flex gap-2 items-center">
                                   <label className='font-medium text-2xl' htmlFor="">Phone:</label> <span className="text-2xl text-softwhite">{data?.phone}</span>
                               </div>

                               <div className="flex gap-2 items-center">
                                   <label className='font-medium text-2xl' htmlFor="">Address:</label> <span className="text-2xl text-softwhite">{data?.address?.city}</span>
                               </div>

                               <div className="flex gap-2 items-center">
                                   <label className='font-medium text-2xl' htmlFor="">Status:</label> <span className={data?.isActive?'text-primary font-medium text-2xl':'text-red-600'}>{data?.isActive  ?'Activate ' : 'Desactivate '}</span>
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
            <div className="flex w-full justify-around items-center px-2 py-4 bg-titleGrayColor rounded-md ">
                {
                    navigation.map((data, index) => (
                        <div key={index}>
                            <h1
                                onClick={() => setLabel(data.label)}
                                className={`cursor-pointer p-5 font-bold text-md hover:text-primary ${label === data.label ? 'bg-white rounded-lg text-secondary' : ''}`} // Applique la classe si l'élément est sélectionné
                            >
                                {data?.label}
                            </h1>
                        </div>
                    ))
                }
            </div>
            <div className="overflow-y-auto">
            {/*<div className="">*/}
                {
                   ( () => {
                        switch (label) {
                            case 'Bus':
                                return (<Bus/>)

                            case 'Trajects':
                                return (<Trajects/>)
                            case 'Reservations':
                                return (<Reservations/>)
                            case 'Payements':
                                return( <Payments/>)
                            default:
                                return <p>Contenu par défaut</p>;

                        }
                    })()
                }
            </div>
            <AddCompany open={show} setOpen={setShow} id={id} mode='edit' initialData={initialData}/>
        </div>
    );
};

export default Page;