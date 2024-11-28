import React from 'react';
import Header from "@/components/header";
import DatePiker from "@/app/(back_office)/dashboard/_components/DatePiker";
import {Button} from "@/components/ui/button";
import ChartCompanySales from "@/app/(back_office)/dashboard/_components/ChartCompanySales";
import ResentSales from "@/app/(back_office)/dashboard/_components/ResentSales";

const Page = () => {

    return (
        <div className="w-full h-full relative lg:h-screen overflow-hidden p-5 bg-secondarylith">
            <Header title='' total={0}/>
            <div className="flex justify-between w-full items-center p-3">
                <h1 className='font-bold text-2xl'>Dashboard</h1>
                <div className="flex gap-2">
                    <DatePiker/>
                    <Button className="bg-primary font-medium text-lg"
                            type="submit">
                        Download
                    </Button>
                </div>
            </div>

            <div className="flex max-w-[500px] w-full justify-between items-center px-2 py-2 bg-gray-300 rounded-md cursor-pointer">
                <h1 className="bg-white p-1 rounded-lg" >Overview</h1>
                <h1>Analytics</h1>
                <h1>Reports</h1>
                <h1>Notifications</h1>
            </div>
            <div className="flex justify-between w-full p-5 ">
                <div className='flex flex-col w-[17rem] bg-white p-5 gap-1  rounded-2xl'>
                    <div className="flex justify-between w-full items-center">
                        <h1 className="text-sm font-medium text-primary">Total Revenue</h1>
                        <h1 className="text-sm font-medium text-softwhite">$</h1>
                    </div>

                    <div className="text-2xl font-bold text-secondary ">$45,231.89</div>
                    <p className="text-xs text-softwhite">+20.1% pour le mois dernier</p>
                </div>
                 <div className='flex flex-col w-[17rem] bg-white p-5 gap-1  rounded-2xl'>
                    <div className="flex justify-between w-full items-center">
                        <h1 className="text-sm font-medium text-primary">Inscriptions</h1>
                        <h1 className="text-sm font-medium text-softwhite">$</h1>
                    </div>

                    <div className="text-2xl font-bold text-secondary ">+243</div>
                    <p className="text-xs text-softwhite">+24.1% pour le mois dernier</p>
                </div>
                 <div className='flex flex-col w-[17rem] bg-white p-5 gap-1  rounded-2xl'>
                    <div className="flex justify-between w-full items-center">
                        <h1 className="text-sm font-medium text-primary">Billet vendus</h1>
                        <h1 className="text-sm font-medium text-softwhite">$</h1>
                    </div>

                    <div className="text-2xl font-bold text-secondary ">+120</div>
                    <p className="text-xs text-softwhite">+19.1% pour le mois dernier</p>
                </div>

                {/*<div className='flex flex-col w-[17rem] bg-white p-5 gap-1  rounded-2xl'>*/}
                {/*    <div className="flex justify-between w-full items-center">*/}
                {/*        <h1 className="text-sm font-medium text-primary">Vente en cours.</h1>*/}
                {/*        <h1 className="text-sm font-medium text-softwhite">$</h1>*/}
                {/*    </div>*/}

                {/*    <div className="text-2xl font-bold text-secondary ">+120</div>*/}
                {/*    <p className="text-xs text-softwhite">+19.1% pour le mois dernier</p>*/}
                {/*</div>*/}

                 <div className='flex flex-col w-[17rem] bg-white p-5 gap-1  rounded-2xl'>
                    <div className="flex justify-between w-full items-center">
                        <h1 className="text-sm font-medium text-primary">Active maintenant</h1>
                        <h1 className="text-sm font-medium text-softwhite">$</h1>
                    </div>

                    <div className="text-2xl font-bold text-secondary ">+100</div>
                    <p className="text-xs text-softwhite">+50 il ya i heure</p>
                </div>
            </div>
            <div className=" flex justify-between items-center p-5 w-full">
                <div className=" p-2 w-1/2 b">
                    <ChartCompanySales/>
                </div>
                <div className="p-2 w-1/2">
                    <ResentSales/>
                </div>
            </div>
            {/*My Dashbord*/}
            {/*<h1 className="text-red-300 text-3xl">BYBUS</h1>*/}
        </div>
    );
};

export default Page;