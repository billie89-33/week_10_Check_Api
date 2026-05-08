import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";


const MainLayout = () => {
    return (
        <div className="">
            <header className="">
             <Navbar />
            </header>

            <main className="">
                <div className="">
                    <Outlet/>
                </div>
            </main>
        </div>

    )
};

export default MainLayout