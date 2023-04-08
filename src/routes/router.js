import {createBrowserRouter} from "react-router-dom";
import Layout from "../pages/layout";
import ErrorPage from "../error-page";
import React from "react";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        errorElement: <ErrorPage />,
    },
]);
export default router;