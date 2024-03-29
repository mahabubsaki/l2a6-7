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
import Community from "../screens/Community";
import Leaderboard from "../screens/Leaderboard";
import CreateTestimonial from "../screens/CreateTestimonial";
import Volunteer from "../screens/Volunteer";
import AboutUs from "../screens/AboutUs";

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
            element: <RequireAuth><SingleReliefGood /></RequireAuth>,

        },
        {
            path: '/community',
            element: <RequireAuth><Community /></RequireAuth>
        },
        {
            path: '/leaderboard',
            element: <Leaderboard />
        },
        {
            path: '/volunteer',
            element: <RequireAuth> <Volunteer /></RequireAuth>
        }
        ,

        {
            path: '/about-us',
            element: <AboutUs />
        }
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
        },
        {
            path: '/dashboard/create-testimonial',
            element: <CreateTestimonial />
        }
    ]
}
]);


export default routes;