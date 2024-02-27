import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../screens/Home";
import Login from "../screens/Login";
import Register from "../screens/Register";

const routes = createBrowserRouter([{
    path: '/',
    element: <App />,
    children: [
        {
            path: "/",
            element: <Home />
        },
        {
            path: '/auth/login',
            element: <Login />
        },
        {
            path: '/auth/register',
            element: <Register />
        }
    ]
}]);


export default routes;