import React, { useEffect, useState } from 'react'
import { useForm } from "react-hook-form"
import axios from "../../api/urls"
import SuccesMessage from '../SuccesMessage'
import ListSelectUsersPay from './ListSelectUsersPay';

function FormToPay({ showFormToPay = false, numPay, closeFormToPay, clearCart }) {
    const { register, handleSubmit, reset, formState: { errors }, setValue } = useForm();
    const [showMessage, setShowMessage] = useState(false)
    const [msgName, setMsgName] = useState('')
    const [inputNameValue, setInputNameValue] = useState('')
    const [userEmail, setUserEmail] = useState('')
    const [showSelectUser, setShowSelectUser] = useState(false)



    const onSubmit = async (data) => {
        console.log(data)
        try {
            const token = document.cookie.split('; ').find(row => row.startsWith('token=')).split('=')[1];
            const resp = await axios.post('/payment', data, {
                headers: {
                    'x-api-key': token
                }
            });
            console.log(resp.data);
            if (resp.data.msg === 'secret code not match') {
                alert('קוד סודי שגוי')
                return
            } if (resp.data.msg === 'not enough score') {
                alert('אין לך מספיק ניקוד יתרתך היא: ' + resp.data.score.toFixed(2))
                return;
            }
            if (resp.data.msg === 'user not found') {
                alert('משתמש לא נמצא')
                return;
            }
            if (resp.data.msg === 'Daily limit exceeded') {
                alert('חרגת מהמגבלה היומית')
                return;
            }
            setShowMessage(true)
            setMsgName(resp.data.score.toFixed(2) + "יתרתך הנוכחית ")

            // closeFormToPay();

        } catch (err) {
            console.log(err);
        }
    }

    const setEmail = (email) => {
        setUserEmail(email)
    }

    useEffect(() => {
        setValue('email', userEmail);
    }, [userEmail, setValue]);

    const inputOnChange = (e) => {
        setInputNameValue(e.target.value)
        setShowSelectUser(perv => !perv)


    }

    return (
        <div className={`${showFormToPay ? "block" : "hidden"}  fixed top-0 left-0 z-0 w-full  h-full bg-black  bg-opacity-40`}>
            <div className='bg-tailwind-cream flex justify-center items-center max-w-[500px] m-auto rounded-lg shadow-md mt-20'>
                <div className='flex flex-col  space-y-8 my-10 mx-4 '>

                    <button className='w-full text-start' onClick={closeFormToPay}>X</button>


                    <form className='space-y-3' onSubmit={handleSubmit(onSubmit)} >
                        <input type="text" placeholder='חיפוש משתמש' className='rounded-2xl p-2 text-right w-full' onChange={(e) => inputOnChange(e)} />
                        <ListSelectUsersPay name={inputNameValue} onSelectUserEmail={setEmail} showSelectUserEmail={showSelectUser} />
                        <input {...register("email", { required: true, minLength: 2 })} value={userEmail} onChange={e => setEmail(e.target.value)} type="text" placeholder="האימל הנבחר" className='rounded-2xl p-2 text-right w-full' />
                        <input {...register("secretCode", { required: true, minLength: 4, maxLength: 4 })} type="password" placeholder="הזן קוד" className='rounded-2xl p-2 text-right w-full' />
                        <input {...register("price", { required: true, minLength: 1 })} type="nunber" value={numPay} placeholder="הזן ניקוד" className='rounded-2xl p-2 text-right w-full' />
                        <button type='submit' className=' rounded-2xl p-2 bg-tailwind-green text-white w-full text-center'>שלח</button>
                    </form>
                </div>
            </div>
            <SuccesMessage show={showMessage} onClickBtn={() => { setShowMessage(false); closeFormToPay(); clearCart() }} name={msgName} />
        </div>
    )
}

export default FormToPay