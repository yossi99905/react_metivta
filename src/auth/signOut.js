
import Cookies from 'universal-cookie';


const cookies = new Cookies();


const signOut = (navigate) => {

    // Clear the accessToken from cookies
    cookies.remove('accessToken');
    cookies.remove('isConnect');
    cookies.remove('currentLocation');



    navigate("/", "/");
}

export default signOut;
