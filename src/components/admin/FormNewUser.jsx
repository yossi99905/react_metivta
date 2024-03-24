import { useForm } from 'react-hook-form'
import { Link, useNavigate, useLocation } from 'react-router-dom';
import axios from '../../api/urls';
import { useEffect } from 'react';

function FormNewUser({ onClickSubmit }) {

    const { register, handleSubmit, reset, formState: { errors } } = useForm();


    const newUsers = async (data) => {
        try {
            const token = document.cookie.split('; ').find(row => row.startsWith('token=')).split('=')[1]; 
            const resp = await axios.post("/users", data, {
                headers: {
                    'x-api-key': token
                }
            });
            console.log(resp.data)

        }
        catch (err) {
            console.log(err);
        }
    }




    const onSubmit = (data) => {
        console.log(data)
        newUsers(data)
        reset({ name: '', email: '',classRoom: '', password: '', ID: '', dateOfBirth: '' });
        onClickSubmit()

    }

    return (
        <div className='bg-tailwind-cream flex justify-center items-center  w-full'>

       

                <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col  space-y-8 mx-52  py-6 w-full'>
                    <input {...register("name", { required: true, minLength: 2 })} type="text" placeholder="הזן שם תלמיד" className='rounded-2xl p-2 text-right w-full' />
                    <input {...register("email", { required: true, minLength: 4 })} type="text" placeholder="הזן איימל" className='rounded-2xl p-2 text-right w-full' />
                    <div className='text-center'>
                        <input {...register("password", { required: true, minLength: 3 })} type="password" placeholder="הזן סיסמה" className='rounded-2xl p-2 text-right w-full' />
                        {errors.password && <span className='text-center text-sm text-red-600 '>סיסמה חייבת להיות באורך של 3 תווים לפחות</span>}
                    </div>
                    <input {...register("classRoom", { required: true ,min:1})} type="text" placeholder="הזן כיתה" className='rounded-2xl p-2 text-right w-full' />
                    <input {...register("ID", { required: true, minLength: 2 })} type="text" placeholder="הזן תעודת זהות" className='rounded-2xl p-2 text-right w-full' />
                    <input {...register("dateOfBirth", { required: false, minLength: 2, })} type="text" placeholder="הזן יום הולדת" className='rounded-2xl p-2 text-right w-full' />



                    <button type='submit' className=' rounded-2xl p-2 bg-tailwind-green text-white '>שלח</button>

                </form>
           
        </div>
    )
}

export default FormNewUser