'use client'
import SideMenu from "../../components/SideMenu";

const BackOfficeLayout = ({children}) => {
    return (
        // <Provider store={store}>
        <div className="w-full h-full">
            <div className="h-full w-full lg:h-screen flex flex-col lg:flex-row">
            <SideMenu />
            <main className="w-full flex-grow flex flex-col">{children}</main>
        </div>
        </div>
        // </Provider>
    );
};

export default BackOfficeLayout;