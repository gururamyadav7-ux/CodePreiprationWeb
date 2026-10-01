import { createBrowserRouter, Navigate } from "react-router-dom";
import App from "./App";
import Login from "./Login/LoginPage";
import Register from "./Register/RegisterPage";
import OTPVerify from "./OTPVerify/OTPVerify";
import ForgotPassword from "./ForgetPassword/ForgetPassword";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Login />,
    },
    {
        path: "/forgot-password",
        element: <ForgotPassword />,
    },
    {
        path: "/register",
        element: <Register />,
    },
    {
        path: "/OTPVerify",
        element: <OTPVerify />,
    },
    {
        path: "/landingpage",
        element: <App />,
    },

    {
        path: "*",
        element: <Navigate to="/" replace />,
    },


]);
