'use client'
import React, {useState} from 'react';
import {useGetCompaniesQuery} from "@/redux/features/company/apiCompany";
import Header from "@/components/header";
import SearchInput from "@/components/SearchInput";
import DropDownStatus from "@/components/DropDownStatus";
import {DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger} from "@/components/ui/dropdown-menu";
import Link from "next/link";
import {FaEye} from "react-icons/fa";
import Pagination from "@/components/Pagination";
import DeleteAlert from "@/components/DeleteAlert";
import AddCompany from "@/components/addCompany";
import {useGetAllTrajetsQuery} from "@/redux/features/trajects/apitrajects";

const Trajects = () => {
    const [add, setAdd] =useState(false);
    const [deleted, setDeleted] =useState(false);
    const [mode, setMode] = useState<'add' | 'edit'>('add');
    const [currentPage, setCurrentPage] =useState(1);
    const [companyId, setCompanyId] =useState<string>('');
    const [status, setStatus] = useState<string | boolean | undefined>('');
    const [search, setSearch] =useState('');
    const { data, error, isLoading } = useGetAllTrajetsQuery({
        page:currentPage,
        companyName:search,
        startingPoint:'',
        arrivalPoint:'',
        price:'',
        // status: status,

    });
    console.log(data);
    const onPageChange = (page:number) => {
        setCurrentPage(page);
    };

    const handleSelect = (id: string,  mode: 'add' | 'edit') => {
        setAdd(!add);
        setCompanyId(id);
        setMode(mode);
    }
    const handleDeleted = (id: string) => {
        setDeleted(!deleted);
        setCompanyId(id);
    }

    const getCompanyById = (id: string) => {
        const company = data?.companies?.find(company => company.id === id);
        return company ? {
            ice: company?.ice,
            name: company?.name,
            email:company?.email,
            phone:company?.phone,
            city:company?.address?.city,
            logo:company?.logo
        } : null;
    }

    return (
        <div className="flex flex-col px-2 sm:px-6 lg:px-8 lg:mt-8 w-full h-screen">
            <Header title="" total ={10} />
            <div className="sm:flex sm:items-center py-4">
                <div className="sm:flex-auto">
                    <p className="mt-2 text-sm text-gray-700">
                        A list of all company routes.
                    </p>
                </div>
                <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
                    <button
                        type="button"
                        className="block rounded-md bg-secondary px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-secondarylith hover:text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        onClick={()=> {
                            setAdd(!add);
                            setMode('add');
                        }}
                    >
                        Ajouter un traject
                    </button>
                </div>
            </div>
            <div className="flex gap-6 py-5">
                <SearchInput placeholder='Nom de la compagnie' onChange={(e)=>setSearch(e.target.value)}/>
                <SearchInput placeholder='Date de départ' onChange={(e)=>setSearch(e.target.value)}/>
                <SearchInput placeholder="Date d’arrivée" onChange={(e)=>setSearch(e.target.value)}/>
                <SearchInput placeholder='Prix' onChange={(e)=>setSearch(e.target.value)}/>
                <SearchInput placeholder='Places disponibles' onChange={(e)=>setSearch(e.target.value)}/>
                <DropDownStatus placeholder="filtre by status" onChange={(value) =>setStatus(value)}/>
            </div>
            <div>
                {
                    error ? (

                        <h1 className="text-center pt-10 text-lg">une erreur est survenue</h1>

                    ):isLoading ? (
                        <h1 className="text-center pt-10 text-lg">Loading ...</h1>

                    ):data?.routes?.length === 0 && (

                        <h1 className="text-center pt-10 text-lg">
                            Pas de compangnie pour le moment
                        </h1>
                    )
                }
            </div>
            <div className="mt-8 flow-root overflow-y-auto">
                <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="justify-between inline-block min-w-full py-1 align-middle sm:px-6 lg:px-8">
                        {/*<div className=" flex flex-col justify-around ">*/}
                        <table className="min-w-full divide-y divide-gray-300">
                            <thead>
                            <tr>
                                <th scope="col"
                                    className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0">
                                    Compagnie
                                </th>
                                <th scope="col"
                                    className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0">
                                    Départ
                                </th>
                                <th scope="col"
                                    className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0">
                                    Arrivée
                                </th>
                                <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                    Départ (date/heure)
                                </th>
                                <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                    Arrivée (date/heure)
                                </th>
                                <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                    Prix (€)
                                </th>
                                <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                    Places
                                </th>
                                <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                    Bus associé
                                </th>
                                <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                    Statut
                                </th>
                                <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                    <span className="sr-only">Action</span>
                                </th>
                            </tr>
                            </thead>
                            {
                                data?.routes?.length && (
                                    <tbody className="divide-y divide-gray-200">
                                    {data?.routes?.map((route: { id:string; price: string; numberofplacesonsale: string; departureDate: string; arrivalPoint: string; startingPoint: string; arrivalDate: string; isActive: boolean; }) => (
                                        <tr key={route.id}>
                                            <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0">
                                                {route?.bus?.company?.name}
                                            </td>
                                            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{route?.arrivalPoint}</td>
                                            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{route?.startingPoint}</td>
                                            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{route?.departureDate}</td>
                                            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{route?.arrivalDate}</td>
                                            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{route?.price}</td>
                                            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{route?.numberofplacesonsale}</td>
                                            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{route?.bus?.matriculation}</td>
                                            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                                {route.isActive ? (
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
                                                                // href={`${route.id}/company_info`}
                                                                href={`/company_info/${route.id}`}
                                                                className="flex gap-1 items-center">
                                                                <FaEye size={14}/>View</Link>
                                                        </DropdownMenuItem>
                                                        <DropdownMenuItem
                                                            className="hover:bg-secondarylith hover:text-black text-gray-500"
                                                            onClick={() => handleSelect(route.id, 'edit')}>Edit</DropdownMenuItem>
                                                        {/*<DropdownMenuItem className="hover:bg-secondarylith text-green-500" onClick={()=>setShow(!show)}>Disabled</DropdownMenuItem>*/}
                                                        <DropdownMenuItem className="hover:bg-secondarylith text-red-500"
                                                                          onClick={() => handleDeleted(route.id)}>Deleted</DropdownMenuItem>
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
                    <DeleteAlert open={deleted} setOpen={setDeleted} id={companyId}/>
                    <AddCompany open={add} setOpen={setAdd} mode={mode} initialData={mode==='edit'?getCompanyById(companyId):null} id={mode==='edit'? companyId:null}/>
                </div>
            </div>
        </div>
    );
};

export default Trajects;