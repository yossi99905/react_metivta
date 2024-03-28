import {  useNavigate  } from 'react-router-dom'
import axios from '../api/urls';
import useAuth from '../hook/useAuth';


function useRefresh() {
    const navigate = useNavigate();
    const { setAuth,auth } = useAuth();
    const setCookies = (token, isConnect) => {
        // Set the token as a cookie
        document.cookie = `token=${token}; path=/; expires=${new Date(Date.now() + 3600000).toUTCString()}`;
        document.cookie = `isConnect=${isConnect}; path=/; expires=${new Date(Date.now() + 3600000).toUTCString()}`;
    };

    const refreshLogin = async () => {
        const token = document.cookie.split(';').find(cookie => cookie.trim().startsWith('token='));
        try {
            if (token) {
                console.log(token);
                const resp = await axios.get('users/refresh', {
                    headers: {
                        'x-api-key': token.split('=')[1]
                    }
                });
                console.log(resp.data);

                
                setAuth(resp.data);
                console.log(resp.data, "resp.data");
                setCookies(resp.data.token, true);
                navigate(auth.loction || '/');
                return;
            }
        } catch (err) {
            console.log(err);
        }
    };

    return {
        refreshLogin
    };
}

export default useRefresh;
