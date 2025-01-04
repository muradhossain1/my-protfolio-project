import { Outlet } from "react-router-dom";
import Navber from "../Pages/Shared/Navber";


const MainLayout = () => {
    return (
        <div>
            <Navber></Navber>
            <div className="md:px-16">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default MainLayout;