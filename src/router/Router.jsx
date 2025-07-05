import { createBrowserRouter } from "react-router";
import App from "../App";
import HomeLayout from "../layout/HomeLayout";
import ErrorPage from "../pages/ErrorPage";
import Login from "../pages/Auth/Login";
import Register from "../pages/Auth/Register";
import RiderLayout from "../layout/RiderLayout";
import ServicesLayout from "../layout/ServicesLayout";
import AboutLayout from "../layout/AboutLayout";
import PricingLayout from "../layout/PricingLayout";

const router = createBrowserRouter([
    {
        path: "/",
        Component: App,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                index: true,
                Component: HomeLayout
            },
            {
                path: "/login",
                element: <Login />
            },
            {
                path: "/register",
                element: <Register />
            },
            {
                path: "/services",
                element: <ServicesLayout />
            },
            {
                path: "/about",
                element: <AboutLayout />
            },
            {
                path: "/pricing",
                element: <PricingLayout />
            },
            {
                path: "/be-a-rider",
                element: <RiderLayout />
            }
        ]
    }
])

export default router;