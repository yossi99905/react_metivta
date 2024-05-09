import React from 'react'
import { useNavigate } from 'react-router-dom'

function MissingPage() {
  const navigate = useNavigate()
  return (
    <div className='flex flex-col justify-center items-center mt-40 text-tailwind-green'>
      <span className='text-lg'>דף</span>
      <div className='text-[150px] font-bold text-tailwind-green h-48 mt-[-25px]'>404</div>
      <span>....אופססס</span>
      <button onClick={()=>navigate('/')} className='mt-12 h-20 text-xl border border-tailwind-green w-60 rounded-full'>המשך יום בנעימים</button>
    </div>
  )
}

export default MissingPage