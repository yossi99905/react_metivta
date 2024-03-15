import axios from 'axios';
import React from 'react'
import { useForm } from 'react-hook-form'

function FormLogin() {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data)
    apiLogin(data)
  }

  const apiLogin = async (data) => {
    const url = 'http://localhost:3003/users/login';
    const resp = await axios.post(url, data);
    console.log(resp)
  }

  return (
    <div className='bg-tailwind-cream max-w-xs sm:max-w-sm md:max-w-lg min-h-96  lg:max-w-7xl  m-auto rounded-lg flex justify-center items-center shadow-md'>

      <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col rounded-lg p-4 space-y-4 w-full mx-72'>
        <input {...register("email", {required:true,minLength:2})} type="text" placeholder="הזן שם משתמש" className='w-1/ rounded-2xl p-2 text-right' />
        <input {...register("password", {required:true,minLength:2})} type="text" placeholder="הזן סיסמה" className=' rounded-2xl p-2  text-right' />
        <button className=' rounded-2xl p-2 bg-tailwind-green text-white '>התחבר</button>

      </form>
    </div>
  )
}

export default FormLogin