import { useForm } from 'react-hook-form'
import { Link, useNavigate, useLocation } from 'react-router-dom';
import axios from '../api/urls';
import { useEffect } from 'react';

function FormNewUser({ onClickSubmit }) {

    const { register, handleSubmit, reset, formState: { errors } } = useForm();


    const newUsers = async (data) => {
        try {
            const resp = await axios.post("/users", data);
            console.log(resp.data)

        }
        catch (err) {
            console.log(err);
        }
    }




    const onSubmit = (data) => {
        console.log(data)
        newUsers(data)
        reset({ name: '', email: '', password: '', ID: '', dateOfBirth: '' });
        onClickSubmit()

    }

    return (
        <div className='bg-tailwind-cream rounded-lg h-[650px] shadow-md flex justify-center items-center container m-auto max-w-[750px]'>

            <div className=' w-full mx-[170px]'>

                <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col  space-y-8 w-full py-6'>
                    <input {...register("name", { required: true, minLength: 2 })} type="text" placeholder="הזן שם תלמיד" className='rounded-2xl p-2 text-right w-full' />
                    <input {...register("email", { required: true, minLength: 4 })} type="text" placeholder="הזן איימל" className='rounded-2xl p-2 text-right w-full' />
                    <div className='text-center'>
                        <input {...register("password", { required: true, minLength: 3 })} type="password" placeholder="הזן סיסמה" className='rounded-2xl p-2 text-right w-full' />
                        {errors.password && <span className='text-center text-sm text-red-600 '>סיסמה חייבת להיות באורך של 3 תווים לפחות</span>}
                    </div>
                    <input {...register("ID", { required: true, minLength: 2 })} type="text" placeholder="הזן תעודת זהות" className='rounded-2xl p-2 text-right w-full' />
                    <input {...register("dateOfBirth", { required: false, minLength: 2, })} type="text" placeholder="הזן יום הולדת" className='rounded-2xl p-2 text-right w-full' />



                    <button type='submit' className=' rounded-2xl p-2 bg-tailwind-green text-white '>שלח</button>

                </form>
            </div>
        </div>
    )
}

export default FormNewUser