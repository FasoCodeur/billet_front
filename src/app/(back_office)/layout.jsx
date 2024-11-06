import SideMenu from "../../compoments/SideMenu";

const BackOfficeLayout = ({children}) => {
    return (
        <div className="w-full h-full">
            <div className="h-full w-full lg:h-screen flex flex-col lg:flex-row">
            <SideMenu />
            <main className="w-full flex flex-col">{children}</main>
        </div>
        </div>
    );
};

export default BackOfficeLayout;