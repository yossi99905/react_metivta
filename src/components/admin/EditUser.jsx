import React from 'react'
import { useForm } from 'react-hook-form';
import axios from '../../api/urls';


function EditUser({ showEditForm = false, onClickCloseBtn, name,role, email, classRoom, ID, dateOfBirth, score, onClickEdit}) {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();


    return (
        <div className={`${showEditForm ? "block" : "hidden"} fixed top-0 w-full h-full`}>


            <div className='bg-tailwind-cream flex justify-center items-center size-[550px] mt-28 m-auto'>
                <form onSubmit={handleSubmit(onClickEdit)} className='flex flex-col  space-y-2 text-center mx-52  py-6 w-full'>
                    <button className='top-4 left-5  ' onClick={onClickCloseBtn}>X</button>
                    <label htmlFor="">name</label>
                    <input defaultValue={name} {...register("name", { required: true, minLength: 2 })} type="text" placeholder="הזן שם תלמיד" className='rounded-2xl p-2 text-right w-full' />
                    <label htmlFor="">email</label>
                    <input defaultValue={email} {...register("email", { required: true, minLength: 4 })} type="text" placeholder="הזן איימל" className='rounded-2xl p-2 text-right w-full' />
                    {/* <div className='text-center'>
                    <input defaultValue={name} {...register("password", { required: true, minLength: 3 })} type="password" placeholder="הזן סיסמה" className='rounded-2xl p-2 text-right w-full' />
                    {errors.password && <span className='text-center text-sm text-red-600 '>סיסמה חייבת להיות באורך של 3 תווים לפחות</span>}
                </div> */}
                    <label htmlFor="">role</label>
                    <select {...register("role", { required: true })} defaultValue={role} className='rounded-2xl p-2 text-right w-full'>
                        <option value="3000">Admin</option>
                        <option value="2000">Teacher</option>
                        <option value="1000">Student</option>
                    </select>
                    <label htmlFor="">classRoom</label>
                    <input defaultValue={classRoom} {...register("classRoom", { required: true, min: 1 })} type="text" placeholder="הזן כיתה" className='rounded-2xl p-2 text-right w-full' />
                    <label htmlFor="">ID</label>
                    <input defaultValue={ID} {...register("ID", { required: true, minLength: 2 })} type="text" placeholder="הזן תעודת זהות" className='rounded-2xl p-2 text-right w-full' />
                    <label htmlFor="">score</label>
                    <input defaultValue={score} {...register("score")} type="text" placeholder="הזן מספר נקודות" className='rounded-2xl p-2 text-right w-full' />
                    <label htmlFor="">date of birth</label>
                    <input defaultValue={dateOfBirth} {...register("dateOfBirth", { required: false, minLength: 2, })} type="text" placeholder="הזן יום הולדת" className='rounded-2xl p-2 text-right w-full' />



                    <button type='submit' className=' rounded-2xl p-2 bg-tailwind-green text-white '>שלח</button>

                </form>
            </div>
        </div>
    )
}

export default EditUser