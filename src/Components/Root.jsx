import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";

const Root = () => {
    return (
        <div className="scroll-smooth">
            <NavBar></NavBar>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;