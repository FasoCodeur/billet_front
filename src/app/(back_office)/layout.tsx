'use client'
import SideMenu from "../../components/SideMenu";
import RequireAuth from "../../lib/RequireAuth";

const BackOfficeLayout = ({children}) => {
    return (
        <RequireAuth>
            <div className="w-full h-full">
            <div className="h-full w-full lg:h-screen flex flex-col lg:flex-row">
            <SideMenu />
            <main className="w-full flex-grow flex flex-col">{children}</main>
        </div>
        </div>
        </RequireAuth>

    );
};

export default BackOfficeLayout;