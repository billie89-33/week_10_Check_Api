
import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";


const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout/>,
        Children: [
        {
            path: "/",
          
        },
    ],

    },
]);

    export default router;