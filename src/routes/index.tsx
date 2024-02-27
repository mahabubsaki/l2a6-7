import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../screens/Home";
import Login from "../screens/Login";
import Register from "../screens/Register";
import AllReliefGoods from "../screens/AllReliefGoods";
import SingleReliefGood from "../screens/SingleReliefGood";

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
            element: <SingleReliefGood />
        }
    ]
}]);


export default routes;