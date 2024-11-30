import React from 'react';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

type HeaderProps = {
    title: string;
    total: number;
};

const Header :React.FC<HeaderProps> = ({title, total}) => {
    return (
        <div className="hidden md:flex justify-between items-center z-50 ">
            <h1 className="font-bold">{`${title? title.toUpperCase():''}`} {`${total ? ' Total: ' + total : ''}`} </h1>
            <Select>
                <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Language" />
                </SelectTrigger>
                <SelectContent className="bg-bgColor">
                    <SelectItem className="hover:bg-secondarylith hover:text-black text-gray-500" value="light">French</SelectItem>
                    <SelectItem className="hover:bg-secondarylith hover:text-black text-gray-500" value="dark">Anglais</SelectItem>
                </SelectContent>
            </Select>
        </div>
    );
};

export default Header;