
import Cookies from 'universal-cookie';


const cookies = new Cookies();


const signOut = (navigate) => {
   
    // Clear the token from cookies
    cookies.remove('token');
    cookies.remove('isConnect');
    cookies.remove('currentLocation');

   

    navigate("/", "/");
}

export default signOut;
