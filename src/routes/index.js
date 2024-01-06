import {createBrowserRouter} from "react-router-dom";
import ErrorPage from "../layouts/error-page";
import React from "react";
import MainLayout from "../layouts/main";
import {chatRoutes} from "../modules/chat/routes";
import {profileRoutes} from "../modules/profile/routes";
import {paymentRoutes} from "../modules/payments/routes";
import {userRoutes} from "../modules/users/routes";
import {authRoutes} from "../modules/auth/routes";
import {dashboardRoutes} from "../modules/dashboard/routes";

export default createBrowserRouter([
  {
    path: "/",
    element: <MainLayout/>,
    errorElement: <ErrorPage/>,
    children: [
      dashboardRoutes,
      userRoutes,
      paymentRoutes,
      profileRoutes,
      chatRoutes
    ]
  },
  authRoutes
]);
