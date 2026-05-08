import { Outlet } from "react-router-dom";


const MainLayout = () => {
    return (
        <div className="">
            <header className="">

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