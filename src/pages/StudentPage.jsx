import React from 'react'
import HeaderStyle from '../components/HeaderStyle'
import CircleDesign from '../components/CircleDesign'

function StudentPage() {
    return (
        <div>
            <HeaderStyle h={10} />
            <div className='container m-auto'>
                <div className='flex flex-col text-center m-auto w-96'>
                    <h1 className='text-green-700'>5,770</h1>
                    <button className='w-80 rounded-2xl p-2 bg-blue-500 text-white'>התחבר</button>
                </div>
            </div>
            <CircleDesign />
        </div>
    )
}

export default StudentPage