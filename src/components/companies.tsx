'use client'
import React, {useState} from 'react';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { FaEye } from "react-icons/fa";
import DeleteAlert from './DeleteAlert';
import AddCompany from './addCompany';
import Link from 'next/link';
import Pagination from "@/components/Pagination";
import SearchInput from "@/components/SearchInput";
import DropDownStatus from "@/components/DropDownStatus";
import {useGetCompaniesQuery} from "@/redux/features/company/apiCompany";

const Companies = () => {
    const [show, setShow] =useState(false);
    const [add, setAdd] =useState(false);
    const [currentPage, setCurrentPage] =useState(1);
    const [companyId, setCompanyId] =useState<string>('');
    // const [limit, setLimit] = useState(10);
    const [status, setStatus] = useState<string | boolean | undefined>('');
    const [search, setSearch] =useState('');
    const { data, error, isLoading } = useGetCompaniesQuery({
        page:currentPage,
        name:search,
        status: status
    });
    const onPageChange = (page:number) => {
        setCurrentPage(page);
    };

    const handleSelect = (id: string) => {
        setShow(!show);
        setCompanyId(id);
    }

    return (
        <div className="px-4 sm:px-6 lg:px-8 lg:mt-8 w-full h-screen">
            <div className="sm:flex sm:items-center">
                <div className="sm:flex-auto">
                    <p className="mt-2 text-sm text-gray-700">
                        A list of all the company in your account including their cin, name, number, status.
                    </p>
                </div>
                <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
                    <button
                        type="button"
                        className="block rounded-md bg-secondary px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-secondarylith hover:text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        onClick={()=>setAdd(!add)}
                    >
                        Add company
                    </button>
                </div>
            </div>
            <div className="flex gap-6 py-5">
                <SearchInput placeholder='filtre by company name' onChange={(e)=>setSearch(e.target.value)}/>
                <DropDownStatus placeholder="filtre by status" onChange={(value) =>setStatus(value)}/>
            </div>
            <div>
                {
                    error ? (

                        <h1 className="text-center pt-10 text-lg">une erreur est survenue</h1>

                    ):isLoading ? (
                        <h1 className="text-center pt-10 text-lg">Loading ...</h1>

                    ):data?.companies?.length === 0 && (

                        <h1 className="text-center pt-10 text-lg">
                        Pas de compangnie pour le moment
                        </h1>
                    )
                }
            </div>
            <div className="mt-8 flow-root">
                <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="justify-between inline-block min-w-full py-1 align-middle sm:px-6 lg:px-8">
                    {/*<div className=" flex flex-col justify-around ">*/}
                        <table className="min-w-full divide-y divide-gray-300">
                            <thead>
                            <tr>
                                <th scope="col"
                                    className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0">
                                    Ice
                                </th>
                                <th scope="col"
                                    className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0">
                                    Name
                                </th>
                                <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                    Number
                                </th>
                                <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                    Email
                                </th>
                                <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                    status
                                </th>
                                <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                    <span className="sr-only">Action</span>
                                </th>
                            </tr>
                            </thead>
                            {
                              data?.companies?.length && (
                                        <tbody className="divide-y divide-gray-200">
                                        {data?.companies?.map((person: { id:string; ice: string; name: string; phone: string; email: string; isActive: boolean; }) => (
                                            <tr key={person.id}>
                                                <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0">
                                                    {person.ice}
                                                </td>
                                                <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{person.name}</td>
                                                <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{person.phone}</td>
                                                <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{person.email}</td>
                                                <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                                    {person.isActive ? (
                                                        <span
                                                            className="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">
                                                Active
                                            </span>
                                                    ) : (
                                                        <span
                                                            className="inline-flex items-center rounded-md bg-red-50 px-2 py-1 text-xs font-medium text-red-700 ring-1 ring-inset ring-red-600/20">
                                                Desactive
                                            </span>
                                                    )}
                                                </td>
                                                <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                                    <DropdownMenu>
                                                        <DropdownMenuTrigger className="hover:text-gray-900">
                                                            {/*<FaEye size={18}/>*/}
                                                            <h1 className="font-bold text-xl">...</h1>
                                                        </DropdownMenuTrigger>
                                                        <DropdownMenuContent className="bg-bgColor font-semibold " align="center">
                                                            <DropdownMenuItem
                                                                className="hover:bg-secondarylith hover:text-black text-gray-500">
                                                                <Link
                                                                    // href={`${person.id}/company_info`}
                                                                    href={`/company_info/${person.id}`}
                                                                      className="flex gap-1 items-center">
                                                                    <FaEye size={14}/>View</Link>
                                                            </DropdownMenuItem>
                                                            <DropdownMenuItem
                                                                className="hover:bg-secondarylith hover:text-black text-gray-500"
                                                                onClick={() => setAdd(!add)}>Edit</DropdownMenuItem>
                                                            {/*<DropdownMenuItem className="hover:bg-secondarylith text-green-500" onClick={()=>setShow(!show)}>Disabled</DropdownMenuItem>*/}
                                                            <DropdownMenuItem className="hover:bg-secondarylith text-red-500"
                                                                              onClick={() => handleSelect(person.id)}>Deleted</DropdownMenuItem>
                                                        </DropdownMenuContent>
                                                    </DropdownMenu>
                                                </td>
                                            </tr>
                                        ))}
                                        </tbody>
                                )

                            }

                        </table>
                        <div className="flex justify-start items-center px-2.5">
                            <Pagination currentPage={currentPage} totalPages={data?.total_pages} onPageChange={onPageChange}/>
                        </div>
                    </div>
                    <DeleteAlert open={show} setOpen={setShow} id={companyId}/>
                    <AddCompany open={add} setOpen={setAdd}/>
                </div>
            </div>
        </div>
    );
};

export default Companies;