import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAuth } from "../atoms/authAtom";

const RequireAuth = ({ allowedRoles }) => {
    const { auth } = useAuth();
    const location = useLocation();

    if (!auth?.role?.length) {
        localStorage.setItem("lastVisited", location.pathname);
        return <Navigate to="/login" state={{ from: location }} replace />;
    }

    const hasAccess = auth.role.some(role => allowedRoles.includes(role));

    if (hasAccess) {
        return <Outlet />;
    } else {
        return <Navigate to="/" state={{ from: location }} replace />;
    }
};

export default RequireAuth;