import { createBrowserRouter, Navigate } from "react-router-dom";
import App from "./App";
import Login from "./componant/login/Login";
import Register from "../src/componant/register/Register"
import ForgetP from "./componant/forgetpassword/ForgetP";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Login />,
    },
    {
        path: "/forgot-password",
        element: <ForgetP />,
    },
    {
        path: "/register",
        element: <Register />,
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
