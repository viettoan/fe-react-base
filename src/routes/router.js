import {createBrowserRouter} from "react-router-dom";
import Layout from "../pages/layout";
import ErrorPage from "../pages/error-page";
import UserIndex from "../pages/users";
import UserCreate from "../pages/users/create";
import UserEdit from "../pages/users/edit";
import Login from "../pages/auth/login";
import Index from "../pages";
import React from "react";
import AuthLayout from "../pages/auth/authLayout";
import ChangePassword from "../pages/auth/changePassword";
import ProfileIndex from "../pages/profile";
import Payment from "../pages/payments/payment";
import PaymentSuccess from "../pages/payments/paymentSuccess";
import Chat from "../pages/chat/chat";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        errorElement: <ErrorPage />,
        children: [
            {
                index: true,
                element: <Index />,
            },
            {
                path: "users",
                children: [
                    {
                        index: true,
                        element: <UserIndex />,
                    },
                    {
                        path: "create",
                        element: <UserCreate />,
                    },
                    {
                        path: ":userId/edit",
                        element: <UserEdit />,
                    },
                ]
            },
            {
                path: 'payments',
                children: [
                    {
                        index: true,
                        element: <Payment />,
                    },
                    {
                        path: "success",
                        element: <PaymentSuccess />,
                    }
                ],
            },
            {
                path: "profile",
                children: [
                    {
                        index: true,
                        element: <ProfileIndex />
                    }
                ]
            },
            {
                path: 'chat',
                children: [
                    {
                        index: true,
                        element: <Chat />,
                    },
                ],
            }
        ]
    },
    {
        path: "/",
        element: <AuthLayout />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/login",
                element: <Login />,
            },
            {
                path: "/confirm-account",
                element: <ChangePassword />,
            }
        ]
    }
]);
export default router;