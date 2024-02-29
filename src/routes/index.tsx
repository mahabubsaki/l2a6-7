import { createBrowserRouter } from "react-router-dom";
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
import Statistics from "../screens/Statistics";
import Notfound from "../screens/404";

const routes = createBrowserRouter([{
    path: '/',
    element: <App />,
    errorElement: <Notfound />,
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
            element: <Statistics />

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