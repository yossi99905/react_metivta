import React from 'react'
import { useForm } from 'react-hook-form';
import axios from '../../api/urls';


function EditUser({ showEditForm = false, onClickCloseBtn, firstName,lastName,_id,role, email, classRoom, ID, dateOfBirth, score, onClickEdit}) {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();


    return (
        <div className={`${showEditForm ? "block" : "hidden"} fixed top-0 left-0 z-0 w-full  h-full bg-black  bg-opacity-40 `}>


            <div className='flex justify-center items-center max-w-[500px] m-auto rounded-lg mt-28  '>
                <form onSubmit={handleSubmit(onClickEdit)} className='bg-tailwind-cream px-7 flex flex-col  space-y-2 text-center  py-6 w-full rounded-lg'>
                    <button className=' text-start ml-10' onClick={onClickCloseBtn}>X</button>
                    <label htmlFor="">שם התלמיד</label>
                    <input defaultValue={firstName} {...register("firstName", { required: true, minLength: 2 })} type="text" placeholder="הזן שם פרטי" className='rounded-2xl p-2 text-right w-full' />
                    <label htmlFor="">שם התלמיד</label>
                    <input defaultValue={lastName} {...register("lastName", { required: true, minLength: 2 })} type="text" placeholder="הזן שם משפחה" className='rounded-2xl p-2 text-right w-full' />
                    <label htmlFor="">איימל</label>
                    <input defaultValue={email} {...register("email", { required: true, minLength: 4 })} type="text" placeholder="הזן איימל" className='rounded-2xl p-2 text-right w-full' />
                    <label htmlFor="">תפקיד</label>
                    <select {...register("role", { required: true })} defaultValue={role} className='rounded-2xl p-2 text-right w-full'>
                        <option value="1000">תלמיד</option>
                        <option value="2000">מורה</option>
                        <option value="3000">קיוסקאי</option>
                        <option value="4000">מנהל</option>
                    </select>
                    <label htmlFor="">כיתה</label>
                    <input defaultValue={classRoom} {...register("classRoom", { required: true, min: 1 })} type="text" placeholder="הזן כיתה" className='rounded-2xl p-2 text-right w-full' />
                    <label htmlFor="">ת.ז</label>
                    <input defaultValue={ID} {...register("ID", { required: true, minLength: 2 })} type="text" placeholder="הזן תעודת זהות" className='rounded-2xl p-2 text-right w-full' />
                    <label htmlFor="">ניקוד</label>
                    <input defaultValue={score} {...register("score")} type="number" placeholder="הזן מספר נקודות" className='rounded-2xl p-2 text-right w-full' />
                    <label htmlFor="">תאריך לידה</label>
                    <input defaultValue={dateOfBirth} {...register("dateOfBirth", { required: false, minLength: 2, })} type="text" placeholder="הזן יום הולדת" className='rounded-2xl p-2 text-right w-full' />



                    <button type='submit' className=' rounded-2xl p-2 bg-tailwind-green text-white '>שלח</button>

                </form>
            </div>
        </div>
    )
}

export default EditUser