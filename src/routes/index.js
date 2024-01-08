import {createBrowserRouter} from "react-router-dom";
import React from "react";
import MainLayout from "../layouts/main";
import {chatRoutes} from "../modules/chat/routes";
import {profileRoutes} from "../modules/profile/routes";
import {paymentRoutes} from "../modules/payments/routes";
import {userRoutes} from "../modules/users/routes";
import {authRoutes} from "../modules/auth/routes";
import {dashboardRoutes} from "../modules/dashboard/routes";
import AppError from "../components/errors/app-error";
import { changePasswordRoutes } from "../modules/changePassword/routes";
import AuthLayout from "../layouts/auth";

export default createBrowserRouter([
  {
    path: "/",
    element: <MainLayout/>,
    errorElement: <AppError/>,
    children: [
      dashboardRoutes,
      userRoutes,
      paymentRoutes,
      profileRoutes,
      chatRoutes
    ]
  },
  {
    path: "/",
    element: <AuthLayout/>,
    errorElement: <AppError/>,
    children: [
        authRoutes,
        changePasswordRoutes,
    ]
  }
]);
