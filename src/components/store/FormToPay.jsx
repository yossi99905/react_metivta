import React, { useState } from 'react'
import { useForm } from "react-hook-form"
import axios from "../../api/urls"
import SuccesMessage from '../SuccesMessage'
import ListSelectUsersPay from './ListSelectUsersPay';

function FormToPay({ showFormToPay = false, numPay, closeFormToPay }) {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
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

    const inputOnChange = (e) => {
        setInputNameValue(e.target.value)
        setShowSelectUser(perv => !perv)


    }

    return (
        <div className={`${showFormToPay ? "block" : "hidden"}  fixed top-0 left-0 z-0 w-full  h-full bg-black  bg-opacity-40`}>
            <div className='bg-tailwind-cream flex justify-center items-center max-w-[500px] m-auto rounded-lg shadow-md'>
                <div className='flex flex-col  space-y-8 my-10 mx-4 '>


                    <button onClick={closeFormToPay}>X</button>
                    <h2>לתשלום {numPay}</h2>
                    <input type="text" onChange={(e) => inputOnChange(e)} />

                    <form onSubmit={handleSubmit(onSubmit)} >
                        <ListSelectUsersPay name={inputNameValue} onSelectUserEmail={setEmail} showSelectUserEmail={showSelectUser} />
                        <input {...register("email", { required: true, minLength: 2 })} value={userEmail} type="text" placeholder="הזן איימל" className='rounded-2xl p-2 text-right w-full' />
                        {
                            <ul>
                                <li>email</li>
                            </ul>
                        }
                        <input {...register("secretCode", { required: true, minLength: 4, maxLength: 4 })} type="password" placeholder="הזן קוד" className='rounded-2xl p-2 text-right w-full' />
                        <input {...register("price", { required: true, minLength: 1 })} type="nunber" value={numPay} placeholder="הזן ניקוד" className='rounded-2xl p-2 text-right w-full' />
                        <button type='submit' className=' rounded-2xl p-2 bg-tailwind-green text-white '>שלח</button>
                    </form>
                </div>
            </div>
            <SuccesMessage show={showMessage} onClickBtn={() => { setShowMessage(false); closeFormToPay(); }} name={msgName} />
        </div>
    )
}

export default FormToPay