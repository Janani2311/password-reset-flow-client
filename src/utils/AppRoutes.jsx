import Auth from "../components/Auth";
import Dashboard from "../components/Dashboard";
import ForgotPassword from "../components/ForgotPassword";
import ProtectedRoute from "../components/ProtectedRoute";
import Signin from "../components/Signin";
import Signup from "../components/Signup";
import { Navigate } from "react-router-dom";

export default [
    {
        path:'/',
        element:<Auth/>
    },
    {
        path:'/signin',
        element:<Signin/>
    },
    {
        path:'/signup',
        element:<Signup/>
    },
    {
        path:'/dashboard/:id',
        element:<ProtectedRoute><Dashboard/></ProtectedRoute>
    },
    {
        path:'/forgotpassword',
        element:<ForgotPassword/>
    },
    {
        path:'*',
        element:<Navigate to='/'></Navigate>
    }
]