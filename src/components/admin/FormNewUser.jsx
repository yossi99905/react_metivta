import { useForm } from 'react-hook-form'
import axios from '../../api/axiosInstance';


function FormNewUser({ onClickSubmit }) {

    const { register, handleSubmit, reset, formState: { errors } } = useForm();


    const newUsers = async (data) => {
        try {
            const accessToken = document.cookie.split('; ').find(row => row.startsWith('accessToken=')).split('=')[1];
            const resp = await axios.post("/users", data, {
                headers: {
                    'x-api-key': accessToken
                }
            });
            console.log(resp.data)

        }
        catch (err) {
            console.log(err);
        }
    }




    const onSubmit = (data) => {
        //check role to array
        data["role"] = [data["role"]];

        //remove dateOfBirth if empty
        if (data.dateOfBirth === "") {
            delete data.dateOfBirth;
        }

        console.log(data)
        newUsers(data)
        reset({ firstName: '', lastName: '', email: '', classRoom: '', password: '', ID: '', dateOfBirth: '', });

        onClickSubmit()

    }

    return (
        <div className='bg-tailwind-cream flex justify-center items-center max-w-[500px] m-auto rounded-lg shadow-md'>



            <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col  space-y-8 my-10 mx-4 '>
                <input {...register("firstName", { required: true, minLength: 2 })} type="text" placeholder="הזן שם פרטי" className='rounded-2xl p-2 text-right w-full' />
                <input {...register("lastName", { required: true, minLength: 2 })} type="text" placeholder="הזן שם משפחה" className='rounded-2xl p-2 text-right w-full' />
                <input {...register("email", { required: true, minLength: 4 })} type="text" placeholder="הזן איימל" className='rounded-2xl p-2 text-right w-full' />
                <div className='text-center'>
                    <input {...register("password", { required: true, minLength: 3 })} type="password" placeholder="הזן סיסמה" className='rounded-2xl p-2 text-right w-full' />
                    {errors.password && <span className='text-center text-sm text-red-600 '>סיסמה חייבת להיות באורך של 3 תווים לפחות</span>}
                </div>
                <select {...register("role", { required: true })} className='rounded-2xl p-2 text-right w-full'>
                    <option value={["1000"]}>תלמיד</option>
                    <option value={["2000"]}>מורה</option>
                </select>
                <input {...register("classRoom", { required: true, min: 0 })} type="text" placeholder="הזן כיתה" className='rounded-2xl p-2 text-right w-full' />
                <input {...register("ID", { required: true, minLength: 2 })} type="text" placeholder="הזן תעודת זהות" className='rounded-2xl p-2 text-right w-full' />
                <input {...register("dateOfBirth", { required: false, minLength: 2, })} type="text" placeholder="הזן יום הולדת" className='rounded-2xl p-2 text-right w-full' />



                <button type='submit' className=' rounded-2xl p-2 bg-tailwind-green text-white '>שלח</button>

            </form>

        </div>
    )
}

export default FormNewUser