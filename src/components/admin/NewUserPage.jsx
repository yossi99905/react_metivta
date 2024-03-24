import React, { useState } from 'react'
import NavAdmin from './NavAdmin'
import SuccesMessage from '../SuccesMessage'
import FormNewUser from './FormNewUser'

function NewUserPage() {
    const [bollSucces, setbollSucces] = useState(false)
    return (
        <div className='grid grid-cols-4 h-lvh'>
            <div className="col-span-3 gap-4 my-32 w-full">
                <div className='w-full h-full'>
                    <SuccesMessage name={"השם נשמר בהצלחה"} onClickBtn={() => setbollSucces(!bollSucces)} show={bollSucces} />
                    <FormNewUser onClickSubmit={() => setbollSucces(!bollSucces)} />
                </div>

            </div>

            <div className='col-span-1'>

                <NavAdmin />
            </div>

        </div>
    )
}

export default NewUserPage