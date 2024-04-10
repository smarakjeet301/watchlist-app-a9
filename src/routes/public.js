import * as React from "react";

const Login = React.lazy(() => import("../views/pages/login/Login"));
const routes = [
    {
        exact: true,
        path: "/login",
        name: "Login Page",
        component: Login,
    }
];

export default routes;