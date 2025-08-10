import { useAuth } from "../atoms/authAtom";
import { useNavigate } from "react-router-dom";

const useAuthActions = () => {
    const { setAuth } = useAuth();
    const navigate = useNavigate();

    const logout = () => {
        localStorage.removeItem('accessToken');
        localStorage.removeItem('refreshToken');
        setAuth({});
        navigate('/');
    };

    const navigateTo = (path = '/') => {
        if (typeof path !== 'string') path = '/';
        navigate(path);
    };

    return { logout, navigateTo };
}

export default useAuthActions;
