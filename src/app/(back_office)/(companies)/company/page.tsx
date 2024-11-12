"use client"
import React from 'react';

import Header from '../../../../components/header';
import Companies from '../../../../components/companies';


const Page = () => {
    return (
        <div className="w-full h-full relative lg:h-screen overflow-hidden px-5 bg-secondarylith">
            <Header title='Conpany' total={200}/>
            <Companies/>
        </div>
    );
};

export default Page;