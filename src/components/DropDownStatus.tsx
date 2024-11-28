'use client'
import React from 'react';
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

type Status ={
    placeholder:string,
    onChange: (value: boolean | string) => void
}
const DropDownStatus:React.FC<Status>  = ({ placeholder, onChange }) => {
    const handleValueChange = (value: string) => {
        // Transformation de la valeur avant de la transmettre à onChange
        if (value === 'activate') {
            onChange(true); // Active
        } else if (value === 'desactivate') {
            onChange(false); // Desactive
        } else {
            onChange(''); // Toutes les valeurs (ou "all")
        }
    };
    return (
        <div className="w-full 2xl:max-w-[400px] relative tracking-wider h-10 group pl-1">
            <Select onValueChange={handleValueChange}>
                <SelectTrigger className="bg-white border-none outline-none focus:ring-1 rounded-lg focus:ring-primary focus:shadow-md w-full h-10 pl-10 py-3 pr-3 tracking-wider">
                    <SelectValue placeholder={`${placeholder}`} />
                </SelectTrigger>
                <SelectContent className="bg-white">
                    <SelectGroup>
                        <SelectLabel>Status</SelectLabel>
                        <SelectItem value="all">ALL</SelectItem>
                        <SelectItem value="activate">Activate</SelectItem>
                        <SelectItem value="desactivate">Desactivate</SelectItem>
                    </SelectGroup>
                </SelectContent>
            </Select>
        </div>
    );
};

export default DropDownStatus;