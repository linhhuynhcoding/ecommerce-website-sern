import { Navigate, Outlet } from "react-router-dom";
import { Helmet } from 'react-helmet';
import { useEffect, useState } from "react";
import { handleAuth } from '../service/UserService';

import clsx from "clsx";
import Loading from './Loading';

function PrivateRoute() {
    const [auth, setAuth] = useState(false);
    
    handleAuth().then((res) => {
        console.log(res);
        if (res?.status === 200) {            
            localStorage.setItem("username", res?.data['user'])
            setAuth(true);
        }
        else {
            window.location.href = '/login';
        }
    })


    // return auth ? <Outlet /> : <Navigate to="/login" replace />;
    return <>
        {auth ? <Outlet /> : <Loading></Loading>}
    </>
}
export default PrivateRoute;