import {
    createBrowserRouter,
    RouterProvider,
    Navigate,
} from "react-router-dom";

import LoginPage from "./features/login/LoginPage";
import RegisterPage from "./features/register/RegisterPage";





const router = createBrowserRouter([
    {
        path: "/",
        element: <Navigate replace to="/login" />,
    },
    {
        path: "/login",
        element: <LoginPage />,

    },
    {
        path: "/register",
        element: <RegisterPage />,

    },
]);

function App() {
    return (
        <>
            <RouterProvider router={router} />
        </>
    );
}

export default App;
