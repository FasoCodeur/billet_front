'use client'
import React from 'react';
import {SearchIcon} from "@/lib/icons";
type Search ={
    placeholder:string,
    onChange: (e: React.ChangeEvent<HTMLInputElement>)=>void
}
const SearchInput:React.FC<Search> = ({ onChange, placeholder }) => {
    return (
        <div className="w-full 2xl:max-w-[400px] relative tracking-wider h-10 group pl-1">
            <label htmlFor={"search"} className="absolute top-3 left-3">
                <SearchIcon className="w-5 " />
            </label>
            <input
                type="text"
                name=""
                placeholder={placeholder}
                id={"search"}
                onChange={onChange}
                className="bg-white border-none outline-none focus:ring-1 rounded-lg focus:ring-primary focus:shadow-md w-full h-10 pl-10 py-3 pr-3 tracking-wider"
            />
        </div>
    );
};

export default SearchInput;