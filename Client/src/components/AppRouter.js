import React, { useContext } from 'react';
import {Routes, Route, Navigate} from 'react-router-dom'
import { authRoutes, publicRoutes } from '../routes';
import { Context } from '../index.js';
import { observer } from 'mobx-react-lite';
import { BOOKING_ROUTE, LOGIN_ROUTE } from '../utils/consts';
const AppRouter = observer(() => {
    const {user} = useContext(Context);
    return (
        <Routes>
            {user.isAuth && authRoutes.map(({path, Component}) =>
                <Route key={path} path={path} Component={Component} exect/> 
            )}

            {!user.isAuth && publicRoutes.map(({path, Component}) =>
                <Route key={path} path={path} Component={Component} exect/>
            )}

            <Route
                path="*"
                element={<Navigate to={user.isAuth ? BOOKING_ROUTE : LOGIN_ROUTE}/>}
            />

        </Routes>
    );
});

export default AppRouter;