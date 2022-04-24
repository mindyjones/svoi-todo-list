import { Navigate, useRoutes } from 'react-router-dom';
import DefaultLayout from '../layout/DefaultLayout';
//
import HomePage from '../pages/HomePage';

export default function Router() {
    return useRoutes([
        {
            path: '/',
            element: <DefaultLayout background='#F4F6F8' />,
            children: [
                { path: '/', element: <HomePage /> },
            ]
        },
        // {
        //     path: '/',
        //     element: <LogoOnlyLayout />,
        //     children: [
        //         { path: '/', element: <Navigate to="/dashboard/app" /> },
        //         { path: 'login', element: <Login /> },
        //         { path: 'register', element: <Register /> },
        //         { path: '404', element: <NotFound /> },
        //         { path: '*', element: <Navigate to="/404" /> }
        //     ]
        // },
        { path: '*', element: <Navigate to="/404" replace /> }
    ]);
}