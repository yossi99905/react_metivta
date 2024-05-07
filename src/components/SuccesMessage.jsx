import React from 'react'

function SuccesMessage({name, onClickBtn, show}) {
  return (
    <div className={`${!show && "hidden"}`}>
        <div className='bg-tailwind-green rounded-3xl h-52 w-[500px] flex flex-col items-center space-y-4  pt-6 text-white  fixed top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
            <button className='top-4 left-5 fixed ' onClick={onClickBtn}>X</button>
            <span>!הפעולה הושלמה בהצלחה!</span>
            <h2 className='text-3xl'>{name}</h2>
        </div>
    </div>
  )
}

export default SuccesMessage