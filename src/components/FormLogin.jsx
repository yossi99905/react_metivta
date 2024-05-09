import { useForm } from 'react-hook-form'
import { Link, useNavigate, useLocation } from 'react-router-dom';
import useAuth from '../hook/useAuth';
import axios from '../../src/api/urls';
import { useState } from 'react';






function FormLogin() {
  const { setAuth } = useAuth();
  const { register, handleSubmit, formState: { errors } } = useForm();

  const [incorectErr, setIncorectErr] = useState(false)

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const onSubmit = (data) => {
    console.log(data)
    apiLogin(data)
  }

  const apiLogin = async (data) => {

    const resp = await axios.post('users/login', data);

    setAuth(resp.data);
    setCookies(resp.data.token, true);
    if (resp.data === "incorrect pass" || resp.data === "user not found" || status === 401){
      setIncorectErr(true)
      return
    }

    navigate(from, "/student")

  }
  const setCookies = (token, isConnect) => {
    // Set the token as a cookie
    document.cookie = `token=${token}; path=/; expires=${new Date(Date.now() + 3600000).toUTCString()}`;
    // document.cookie = `isConnect=${isConnect}; path=/; expires=${new Date(Date.now() + 3600000).toUTCString()}`;

  }

  return (
    <div className=' w-full px-[90px]'>

      <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col  space-y-4 w-full '>
        <input {...register("email", { required: true, minLength: 2})} type="text" placeholder="הזן שם משתמש" className=' rounded-2xl p-2 text-right w-full' />
        {errors.email && <span className='text-end text-xs text-red-600 mr-4 '>שדה חובה</span>}
        <input {...register("password", { required: true, minLength: 2 })} type="password" placeholder="הזן סיסמה" className=' rounded-2xl p-2 text-right w-full' />
        {errors.password && <span className='text-end text-xs text-red-600 mr-4 '>שדה חובה</span>}
        {incorectErr && <span className='text-end text-xs text-red-600 mr-4 '>שם משתמש או סיסמה לא נכונים</span>}
        

        <button type='submit' className=' rounded-2xl p-2 bg-tailwind-green text-white '>התחבר</button>

      </form>
    </div>
  )
}

export default FormLogin