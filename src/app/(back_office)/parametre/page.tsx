'use client'
import React, {useState} from 'react';
import { Button } from "@/components/ui/button"
import TokenService from "@/utils/TokenService";
import {useUserQuery} from "@/redux/features/user/apiUser";
import RegisterUser from "@/components/RegisterUser";

const Page = () => {
    const [show, setShow] =useState(false);
    const user =TokenService.getUser();
    const {data, isLoading, error} =useUserQuery({id:user?.sub});
    const initialData:{
        firstName: string;
        lastName: string;
        country: string;
        password: string;
        phone: string;
        email: string
    } = {
        firstName: data?.firstName,
        lastName: data?.lastName,
        phone: data?.phone,
        email: data?.email,
        country: data?.country,
        password: '',

    }

    return (
        <div className='p-5 m-auto w-full'>
            <div className="text-center">
                {
                    error ? (
                        <p>une erreur est survenue</p>
                    ):isLoading && (
                        <h1 className="text-center pt-10 text-lg">Loading ...</h1>
                    )
                }
            </div>
            <div className="overflow-hidden bg-white shadow sm:rounded-lg ">
            <div className="px-4 py-6 sm:px-6">
                <h3 className="text-base/7 font-semibold text-gray-900">Utilisateur connecter</h3>
                {/*<p className="mt-1 max-w-2xl text-sm/6 text-gray-500">Deta.</p>*/}
            </div>
            <div className="border-t border-gray-100">
                <dl className="divide-y divide-gray-100">
                    <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <dt className="text-sm font-medium text-gray-900">Nom complete</dt>
                        <dd className="mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0">{data?.lastName} {data?.firstName}</dd>
                    </div>
                    <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <dt className="text-sm font-medium text-gray-900">Rôle</dt>
                        <dd className="mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0">{data?.role}</dd>
                    </div>
                    <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <dt className="text-sm font-medium text-gray-900">Email addresse</dt>
                        <dd className="mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0">{data?.email}</dd>
                    </div>
                    <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <dt className="text-sm font-medium text-gray-900">Téléphone</dt>
                        <dd className="mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0">{data?.phone}</dd>
                    </div>
                    <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <dt className="text-sm font-medium text-gray-900">Pays</dt>
                        <dd className="mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0">{data?.country}</dd>
                    </div>
                    <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <dt className="text-sm/6 font-medium text-gray-900">Attachments</dt>
                        <dd className="mt-2 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                            <div className="ml-4 shrink-0 flex gap-2 ">
                                <Button className='text-white bg-secondary' onClick={() => setShow(true)}>Modifer</Button>
                                <Button className="text-white bg-red-500 hover:bg-red-600 " disabled={true}>Delete</Button>
                            </div>

                        </dd>
                    </div>
                </dl>
            </div>
         </div>
            <RegisterUser open={show} setOpen={setShow} mode='edit' initialData={initialData} id={user?.sub}/>
        </div>
    );
};

export default Page;