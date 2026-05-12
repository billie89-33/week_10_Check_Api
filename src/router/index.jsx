
import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home";
import Owner from "../pages/Owner";
import ShowUser from "../pages/ShowUser";


const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout/>,
        children: [
        {
            path: "/",
            element: <Home/>,
        },
        {
            path: "/owner",
            element: <Owner/>,
        },
        {
            path: "/showuser",
            element: <ShowUser/>,
        },
    ],

    },
]);

    export default router;