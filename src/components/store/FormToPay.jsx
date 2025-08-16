import { useState } from 'react'
import { useForm } from "react-hook-form"
import SuccessMessage from '../SuccessMessage'
import ListSelectUsersPay from './ListSelectUsersPay';
import { paymentByCard } from '../../api/paymentApi';

function FormToPay({ showFormToPay = false, numPay, closeFormToPay, clearCart }) {
    const { register, handleSubmit, formState: { errors }, setValue } = useForm();
    const [showMessage, setShowMessage] = useState(false)
    const [msgName, setMsgName] = useState('')
    const [inputNameValue, setInputNameValue] = useState('')
    const [userEmail, setUserEmail] = useState('')
    const [showSelectUser, setShowSelectUser] = useState(false)

    const onSubmit = async (data) => {
        const resp = await paymentByCard(data);

        if (resp.data.msg === 'secret code not match') return alert('קוד סודי שגוי')
        if (resp.data.msg === 'not enough score') return alert(`אין לך מספיק ניקוד, יתרתך היא: ${resp.data.score.toFixed(2)}`)
        if (resp.data.msg === 'user not found') return alert('משתמש לא נמצא')
        if (resp.data.msg === 'Daily limit exceeded') return alert('חרגת מהמגבלה היומית')

        setShowMessage(true)
        setMsgName(`יתרתך הנוכחית ${resp.data.score.toFixed(2)}`)
    }

    const setEmail = (email) => {
        setUserEmail(email)
        setShowSelectUser(false)
        setValue('email', email)
    }

    const inputOnChange = (e) => {
        setInputNameValue(e.target.value)
        setShowSelectUser(true)
    }

    if (!showFormToPay) return null

    return (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-start z-50 pt-20">
            <div className="bg-tailwind-cream relative w-full max-w-[500px] rounded-lg shadow-md p-6">
                {/* Close button */}
                <button type="button" onClick={closeFormToPay} className="absolute top-3 left-3 text-xl font-bold">✕</button>

                <form className="space-y-3" onSubmit={handleSubmit(onSubmit)} >
                    {/* חיפוש משתמש */}
                    <input
                        type="text"
                        placeholder="חיפוש משתמש"
                        className="rounded-2xl p-2 text-right w-full"
                        onChange={inputOnChange}
                    />
                    <ListSelectUsersPay
                        name={inputNameValue}
                        onSelectUserEmail={setEmail}
                        showSelectUserEmail={showSelectUser}
                    />

                    {/* אימייל */}
                    <input
                        {...register("email", { required: true })}
                        value={userEmail}
                        onChange={e => setEmail(e.target.value)}
                        type="text"
                        placeholder="האימייל הנבחר"
                        className="rounded-2xl p-2 text-right w-full"
                    />

                    {/* קוד סודי */}
                    <input
                        {...register("secretCode", { required: true, minLength: 4, maxLength: 4 })}
                        type="password"
                        placeholder="הזן קוד"
                        className="rounded-2xl p-2 text-right w-full"
                    />
                    {errors.secretCode && <p className="text-red-500 text-sm">קוד חייב להיות באורך 4 ספרות</p>}

                    {/* סכום */}
                    <input
                        {...register("price", { required: true })}
                        type="number"
                        value={numPay}
                        readOnly
                        className="rounded-2xl p-2 text-right w-full bg-gray-100"
                    />

                    {/* כפתור */}
                    <button type="submit" className="rounded-2xl p-2 bg-tailwind-green text-white w-full text-center">
                        שלח
                    </button>
                </form>
            </div>

            {/* הודעת הצלחה */}
            <SuccessMessage
                show={showMessage}
                onClickBtn={() => { setShowMessage(false); closeFormToPay(); clearCart() }}
                name={msgName}
            />
        </div>
    )
}


export default FormToPay