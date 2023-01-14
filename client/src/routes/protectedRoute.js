import Cookies from 'js-cookie';
import { useEffect, useState } from 'react';
import { Outlet, Navigate } from "react-router-dom";
import checkAuth from './checkAuth';

const ProtectedRoute = () => {
    const [isAuthorized, setIsAuthorized] = useState(false);
    const token = Cookies.get('token');
    console.log('isAuthorized: ', isAuthorized);
    useEffect(() => {
        const check = async () => {
            try {
                const res = await checkAuth();
                if (res.status === 201) {
                    console.log('res: ', res.data.message);
                    setIsAuthorized(true);
                }
            } catch (error) {
                console.log(error);
                setIsAuthorized(false);
            }

        }
        check();
    }, [token]);

    if (isAuthorized) {
        return (
            <Outlet />
        );
    } else {
        return <Navigate to="/signin" />;
    }
};

export default ProtectedRoute;
