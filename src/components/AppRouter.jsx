import React, { useContext } from 'react'
import { Routes, Route } from 'react-router-dom'
import Error from '../pages/Error';
import { publicRoutes, privateRoutes } from '../router';
import Login from '../pages/Login';
import Posts from '../pages/Posts';
import { AuthContext } from '../context';
import Loader from './UI/Loader/Loader';

const AppRouter = () => {

    const {isAuth, isLoading} = useContext(AuthContext)
    
    if (isLoading) {

        return <Loader/>
    }
    return (
        isAuth
        ?
        <Routes>
            {privateRoutes.map(route =>
                <Route
                    exact={route.exact}
                    path={route.path}
                    element={route.element}
                    key={route.path}
                />
            )}
            <Route path="/*" element={<Posts />} />
        </Routes>
        :
        <Routes>
            {publicRoutes.map(route =>
                <Route
                    exact={route.exact}
                    path={route.path}
                    element={route.element}
                    key={route.path}
                />
            )}
            <Route path="/*" element={<Login />} />
        </Routes>
    )
}

export default AppRouter
