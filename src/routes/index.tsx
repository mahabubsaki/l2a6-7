import { Navigate, createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../screens/Home";
import Login from "../screens/Login";
import Register from "../screens/Register";
import AllReliefGoods from "../screens/AllReliefGoods";
import SingleReliefGood from "../screens/SingleReliefGood";
import Dashboard from "../screens/Dashboard";
import RequireAuth from "../components/reusable/RequireAuth";
import Supplies from "../screens/Supplies";
import CreateSupply from "../screens/CreateSupply";

const routes = createBrowserRouter([{
    path: '/',
    element: <App />,
    children: [
        {
            path: "/",
            element: <Home />
        },
        {
            path: '/login',
            element: <Login />
        },
        {
            path: '/register',
            element: <Register />
        },
        {
            path: '/relief-goods',
            element: <AllReliefGoods />
        },
        {
            path: '/relief/:id',
            element: <SingleReliefGood />,

        },

    ]
},
{
    path: "/dashboard",
    element: <RequireAuth><Dashboard /></RequireAuth>,
    children: [
        {
            path: '/dashboard',
            element: <Navigate to={'/dashboard/supplies'} />

        },
        {
            path: '/dashboard/supplies',
            index: true,
            element: <Supplies />
        },
        {
            path: '/dashboard/create-supply',
            element: <CreateSupply />
        }
    ]
}
]);


export default routes;