import axios from 'axios';
import { useForm } from 'react-hook-form'
import { Link, useNavigate, useLocation } from 'react-router-dom';
import useAuth from '../hook/useAuth';






function FormLogin() {
  const { setAuth } = useAuth();
  const { register, handleSubmit, formState: { errors } } = useForm();

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const onSubmit = (data) => {
    console.log(data)
    apiLogin(data)
  }

  const apiLogin = async (data) => {
    const url = 'http://localhost:3003/users/login';
    const resp = await axios.post(url, data);
    
    setAuth(resp.data);
    setCookies(resp.data.token, true);

    navigate(from, "/student")

  }
  const setCookies = (token, isConnect) => {
    // Set the token as a cookie
    document.cookie = `token=${token}; path=/; expires=${new Date(Date.now() + 3600000).toUTCString()}`;
    document.cookie = `isConnect=${isConnect}; path=/; expires=${new Date(Date.now() + 3600000).toUTCString()}`;

  }

  return (
    <div className=' w-full mx-[170px]'>

      <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col  space-y-4 w-full '>
        <input {...register("email", { required: true, minLength: 2 })} type="text" placeholder="הזן שם משתמש" className='rounded-2xl p-2 text-right w-full' />
        <input {...register("password", { required: true, minLength: 2 })} type="text" placeholder="הזן סיסמה" className='rounded-2xl p-2 text-right w-full' />

        <button type='submit' className=' rounded-2xl p-2 bg-tailwind-green text-white '>התחבר</button>

      </form>
    </div>
  )
}

export default FormLogin