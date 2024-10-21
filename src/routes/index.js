import { createBrowserRouter, Navigate } from 'react-router-dom';
import App from '../App';
import Home from '../pages/Home';
import Login from '../pages/Login';
import ForgotPassowrd from '../pages/ForgotPassowrd'
import SignUp from '../pages/SignUp';
import AdminPanel from '../pages/AdminPanel';
import AllUsers from '../pages/AllUsers';
import AllProducts from '../pages/AllProducts';
import CategoryProduct from '../pages/CategoryProduct';
import ProductDetails from '../pages/ProductDetails';
import Slider from "../pages/Slider";
import Service from "../pages/Service"
import Cart from '../pages/Cart';
import SearchProduct from '../pages/SearchProduct';
import ServiceOne  from '../pages/Service1'
import ServiceTwo from '../pages/Service2';

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "",
                element: <Home />
            },
            {
                path: "login",
                element: <Login />
            },
            {
                path: "forgot-password",
                element: <ForgotPassowrd />
            },
            {
                path: "sign-up",
                element: <SignUp />
            },
            {
                path: "product-category",
                element: <CategoryProduct />
            },
            {
                path: "product/:id",
                element: <ProductDetails />
            },
            {
                path: 'cart',
                element: <Cart />
            },
            {
                path: 'service',
                element: <Service />
            },
            {
                path: 'service-1',
                element: <ServiceOne />
            },
            {
                path: 'service-2',
                element: <ServiceTwo />
            },
            {
                path: "search",
                element: <SearchProduct />
            },
            {
                path: "admin-panel",
                element: <AdminPanel />,
                children: [
                    {
                        path: "all-users",
                        element: <AllUsers />
                    },
                    {
                        path: "all-products",
                        element: <AllProducts />
                    },
                    {
                        path: "slider",
                        element: <Slider />
                    },
                    {
                        path: "slider",
                        element: <Slider />
                    },
                ]
            },
            // Catch-all route to redirect to Home
            {
                path: "*",
                element: <Navigate to="/" />
            }
        ]
    }
]);

export default router;
