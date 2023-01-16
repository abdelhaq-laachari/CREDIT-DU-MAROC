import React from 'react'
import { Outlet, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { checkAuth, reset } from "../features/auth/authSlice";
import { useEffect } from "react";
import Spinner from '../components/Spinner/Spinner';
import Cookies from 'js-cookie';

const Protect = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { isLoading, isError, isSuccess } = useSelector(state => state.auth);
    const token = Cookies.get('token');
    useEffect(() => {
        dispatch(checkAuth());
        return () => {
            dispatch(reset())
        }
    }, [token]);

    if (isLoading) {
        return <Spinner />
    }

    if (isSuccess) {
        return <Outlet />
    }
    if (isError) {
        navigate('/signin');
    }
}

export default Protect