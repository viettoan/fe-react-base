import AuthLayout from "../../layouts/auth";
import ErrorPage from "../../layouts/error-page";
import Login from "./pages/login";
import ChangePassword from "./pages/changePassword";

export const authRoutes = {
    path: "/",
    element: <AuthLayout/>,
    errorElement: <ErrorPage/>,
    children: [
        {
            path: "/login",
            element: <Login/>,
        },
        {
            path: "/confirm-account",
            element: <ChangePassword/>,
        }
    ]
};
