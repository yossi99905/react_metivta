import React, { useState } from 'react'
import NavAdmin from './NavAdmin'
import SuccesMessage from '../SuccesMessage'
import FormNewUser from './FormNewUser'
import AddMultyUsers from './AddMultyUsers'

function NewUserPage() {
    const [bollSucces, setbollSucces] = useState(false)
    return (
        <div className='flex h-lvh justify-end'>     <AddMultyUsers/>
            <div className="col-span-3 gap-4 my-32 w-lvw mx-9">
                <div className='w-full h-full'>
                    <SuccesMessage name={"השם נשמר בהצלחה"} onClickBtn={() => setbollSucces(!bollSucces)} show={bollSucces} />
                    <FormNewUser onClickSubmit={() => setbollSucces(!bollSucces)} />
                </div>
           

            </div>



            <NavAdmin />


        </div>
    )
}

export default NewUserPage