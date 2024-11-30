'use client'
import React, {useState} from 'react';
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { EllipsisVerticalIcon } from '@heroicons/react/20/solid'
import Pagination from "@/components/Pagination";
import {useGetBusByCompanyIdQuery} from "@/redux/features/apiBus";
import SearchInput from "@/components/SearchInput";
import {useParams} from "next/navigation";

const Bus = () => {
    const [currentPage, setCurrentPage] =useState(1);
    const [serial, setSerial] =useState('');
    const { id } = useParams();

    const {data, isLoading, isError} =useGetBusByCompanyIdQuery({
        page:currentPage,
        company_id:id,
        matricule:serial,
    })
    // console.log(data?.bus)
    const onPageChange = (page:number) => {
        setCurrentPage(page);
    };

    return (
        <div className="flex flex-col w-full gap-2 p-5">
            <div className="flex justify-end">
                <SearchInput placeholder='Vehicule matricule' onChange={(e)=>setSerial(e.target.value)}/>

            </div>
        <ul role="list" className="divide-y divide-gray-100">
            {data?.bus?.length !== 0 ? (
                data?.bus.map((bus) => (
                    <li key={bus.id} className="flex items-center justify-between gap-x-6 py-5">
                        <div className="min-w-0">
                            <div className="flex items-start gap-x-3">
                                <p className="text-sm/6 font-semibold text-gray-900">Matricule: {bus?.matriculation}</p>
                                <p
                                    className="text-green-700 bg-green-50 ring-green-600/20 mt-0.5 whitespace-nowrap rounded-md px-1.5 py-0.5 text-xs font-medium ring-1 ring-inse"
                                >
                                   Nombre de places: {bus.numberOfSeats}
                                </p>
                            </div>
                            <div className="mt-1 flex items-center gap-x-2 text-xs/5 text-gray-500">
                                <p className="whitespace-nowrap">Type: {bus?.typeOfBus}
                                </p>
                                <svg viewBox="0 0 2 2" className="size-0.5 fill-current">
                                    <circle r={1} cx={1} cy={1} />
                                </svg>
                                <p className="truncate">Created by {bus.createdBy}</p>
                            </div>
                        </div>
                        <div className="flex flex-none items-center gap-x-4">
                            <a
                                href={bus.href}
                                className="hidden rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-primary hover:text-white sm:block"
                            >
                                View Bus<span className="sr-only">, {bus.name}</span>
                            </a>
                            <Menu as="div" className="relative flex-none">
                                <MenuButton className="-m-2.5 block p-2.5 text-gray-500 hover:text-gray-900">
                                    <span className="sr-only">Open options</span>
                                    <EllipsisVerticalIcon aria-hidden="true" className="size-5" />
                                </MenuButton>
                                <MenuItems
                                    transition
                                    className="absolute right-0 z-10 mt-2 w-32 origin-top-right rounded-md bg-white py-2 shadow-lg ring-1 ring-gray-900/5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
                                >
                                    <MenuItem>
                                        <a
                                            href="#"
                                            className="block px-3 py-1 text-sm/6 text-gray-900 data-[focus]:bg-gray-50 data-[focus]:outline-none"
                                        >
                                            Edit<span className="sr-only">, {bus.name}</span>
                                        </a>
                                    </MenuItem>
                                    <MenuItem>
                                        <a
                                            href="#"
                                            className="block px-3 py-1 text-sm/6 text-gray-900 data-[focus]:bg-gray-50 data-[focus]:outline-none"
                                        >
                                            Move<span className="sr-only">, {bus.name}</span>
                                        </a>
                                    </MenuItem>
                                    <MenuItem>
                                        <a
                                            href="#"
                                            className="block px-3 py-1 text-sm/6 text-gray-900 data-[focus]:bg-gray-50 data-[focus]:outline-none"
                                        >
                                            Delete<span className="sr-only">, {bus.name}</span>
                                        </a>
                                    </MenuItem>
                                </MenuItems>
                            </Menu>
                        </div>
                    </li>
                ))
            ) : (
                <div>

                    <p className='text-center font-medium text-red-600'>Pas de bus disponible pour le moment.</p>
                </div>
            )}

        </ul>
            <Pagination currentPage={currentPage} totalPages={data?.total_pages} onPageChange={onPageChange}/>
        </div>
    );
};

export default Bus;