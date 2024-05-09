import { useLocation, Navigate, Outlet,  } from 'react-router-dom'
import useAuth from '../hook/useAuth'





const RequireAuth = ({ allowedRoles }) => {
    const { auth } = useAuth();
    const location = useLocation();

    document.cookie = `currentLocation=${location.pathname}`;
    
    return (


        auth?.role?.find(role => allowedRoles.includes(role))
            ? <Outlet />
            : auth?.role
                ? <Navigate to='/' state={{ from: location }} replace />
                : <Navigate to='/login' state={{ from: location }} replace />

        // auth?.role?.includes("1000") ? <Navigate to='/student' state={{ from: location }} replace /> :
        //     auth?.role?.includes("2000") ? <Navigate to='/teacher' state={{ from: location }} replace /> :
        //         auth?.role?.includes("3000") ? <Navigate to='/admin' state={{ from: location }} replace /> :
        //             auth?.user ? <Navigate to='/' state={{ from: location }} replace /> :
        //                 <Navigate to='/login' state={{ from: location }} replace />

      
        

    )
}

export default RequireAuth