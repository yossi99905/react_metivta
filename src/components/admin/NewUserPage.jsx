import { useState } from 'react'
import NavAdmin from './NavAdmin'
import SuccessMessage from '../SuccessMessage'
import FormNewUser from './FormNewUser'
import AddMultiUsers from './AddMultiUsers'

function NewUserPage() {
    const [bollSuccess, setbollSuccess] = useState(false)
    return (
        <div className='flex h-lvh justify-end'>
            <div className="col-span-3 gap-4 my-32 w-lvw mx-9">
                <div className='w-full h-full'>
                    <SuccessMessage name={"השם נשמר בהצלחה"} onClickBtn={() => setbollSuccess(!bollSuccess)} show={bollSuccess} />
                    <FormNewUser onClickSubmit={() => setbollSuccess(!bollSuccess)} />
                </div>
                <div className='m-auto max-w-[500px]'>
                    <AddMultiUsers />
                </div>
            </div>
            <NavAdmin />
        </div>
    )
}

export default NewUserPage