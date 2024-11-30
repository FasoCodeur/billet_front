import React from 'react';
import Trajects from "@/components/Trajects";
import Header from "@/components/header";

const Page = () => {
    return (
        <div className="w-full h-full relative lg:h-screen overflow-hidden p-5 bg-secondarylith">
            <Header title="" total ={10} />
            <Trajects/>
        </div>
    );
};

export default Page;